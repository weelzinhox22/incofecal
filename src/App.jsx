import { useState, useEffect, useCallback, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { gsap } from 'gsap'
import { Maximize, Minimize, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, List, X } from 'lucide-react'
import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'

import LandingPage from './LandingPage'
import LaserPointer from './LaserPointer'
import FloatingControls from './FloatingControls'

import SlideCover from './slides/SlideCover'
import SlideIntro from './slides/SlideIntro'
import SlideIncontinencia from './slides/SlideIncontinencia'
import SlideDissinergia from './slides/SlideDissinergia'
import SlideCriterios from './slides/SlideCriterios'
import SlideEvacuacao from './slides/SlideEvacuacao'
import SlideHipossensibilidade from './slides/SlideHipossensibilidade'
import SlideAssociacoes from './slides/SlideAssociacoes'
import SlideAvaliacao from './slides/SlideAvaliacao'
import SlideTratamento from './slides/SlideTratamento'
import SlideHabitos from './slides/SlideHabitos'
import SlideExerciciosFuncionais from './slides/SlideExerciciosFuncionais'
import SlideMultidisciplinar from './slides/SlideMultidisciplinar'
import SlideResumo from './slides/SlideResumo'
import SlideEncerramento from './slides/SlideEncerramento'

const slides = [
  { component: SlideCover, label: 'Capa' },
  { component: SlideIntro, label: 'Introdução' },
  { component: SlideIncontinencia, label: 'Incontinência' },
  { component: SlideDissinergia, label: 'Dissinergia' },
  { component: SlideCriterios, label: 'Critérios' },
  { component: SlideEvacuacao, label: 'Evacuação' },
  { component: SlideHipossensibilidade, label: 'Hipossensibilidade' },
  { component: SlideAssociacoes, label: 'Associações' },
  { component: SlideAvaliacao, label: 'Avaliação' },
  { component: SlideTratamento, label: 'Tratamento' },
  { component: SlideHabitos, label: 'Hábitos e Orientações' },
  { component: SlideExerciciosFuncionais, label: 'Exercícios Funcionais' },
  { component: SlideMultidisciplinar, label: 'Equipe Multidisciplinar' },
  { component: SlideResumo, label: 'Resumo' },
  { component: SlideEncerramento, label: 'Encerramento' },
]

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0.3,
    scale: 0.9,
    filter: 'blur(4px)',
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    zIndex: 10,
  },
  exit: (direction) => ({
    x: direction > 0 ? '-100%' : '100%',
    opacity: 0.3,
    scale: 0.9,
    filter: 'blur(4px)',
    zIndex: 0,
  }),
}

const slideTransition = {
  x: { type: 'spring', stiffness: 250, damping: 30 },
  opacity: { duration: 0.35 },
}

export default function App() {
  const [mode, setMode] = useState('landing') // 'landing' | 'presentation'
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(1)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [laserActive, setLaserActive] = useState(false)
  const [showFullscreenPrompt, setShowFullscreenPrompt] = useState(false)
  const [fontSizeScale, setFontSizeScale] = useState(100)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [showIndex, setShowIndex] = useState(false)
  const [isDownloading, setIsDownloading] = useState(false)
  const presentationRef = useRef(null)
  const pdfContainerRef = useRef(null)

  // PDF Export logic
  const handleDownloadPDF = async () => {
    if (isDownloading) return
    setIsDownloading(true)

    try {
      const doc = new jsPDF({
        orientation: 'landscape',
        unit: 'px',
        format: [1280, 800], // Increased height slightly to avoid clipping
        compress: true,
        hotfixes: ['px_scaling']
      })

      const slideElements = pdfContainerRef.current.children
      
      for (let i = 0; i < slideElements.length; i++) {
        const element = slideElements[i]
        
        // Wait for any images or animations to settle
        await new Promise(resolve => setTimeout(resolve, 200))
        
        const canvas = await html2canvas(element, {
          scale: 2,
          useCORS: true,
          allowTaint: true,
          logging: false,
          backgroundColor: isDarkMode ? '#0f172a' : '#ffffff',
          width: 1280,
          height: 800,
          windowWidth: 1280,
          windowHeight: 800,
          y: 0,
          scrollX: 0,
          scrollY: 0,
          imageTimeout: 0,
          onclone: (clonedDoc) => {
            // Ensure all images are loaded in the clone
            const images = clonedDoc.getElementsByTagName('img');
            for (let img of images) {
              img.style.display = 'block';
            }
            const el = clonedDoc.querySelector('.pdf-capture-mode')
            if (el) {
              el.style.display = 'flex'
              el.style.visibility = 'visible'
              el.style.position = 'static'
            }
          }
        })

        const imgData = canvas.toDataURL('image/jpeg', 0.95)
        
        if (i > 0) doc.addPage([1280, 800], 'landscape')
        
        doc.addImage(imgData, 'JPEG', 0, 0, 1280, 800, undefined, 'FAST')
      }

      doc.save('Apresentacao_Incontinencia_Fecal_Wesley_Sacramento.pdf')
    } catch (error) {
      console.error('Erro ao gerar PDF:', error)
      alert('Ocorreu um erro ao gerar o PDF. Por favor, tente novamente.')
    } finally {
      setIsDownloading(false)
    }
  }

  // Zoom & Theme helpers
  const increaseFontSize = useCallback(() => setFontSizeScale(prev => Math.min(prev + 10, 150)), [])
  const decreaseFontSize = useCallback(() => setFontSizeScale(prev => Math.max(prev - 10, 70)), [])
  const toggleDarkMode = useCallback(() => setIsDarkMode(prev => !prev), [])

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSizeScale}%`
  }, [fontSizeScale])

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  // Fullscreen helpers
  const enterFullscreen = useCallback(async () => {
    try {
      const el = document.documentElement
      if (el.requestFullscreen) {
        await el.requestFullscreen()
      } else if (el.webkitRequestFullscreen) {
        await el.webkitRequestFullscreen()
      }
      setIsFullscreen(true)
      setShowFullscreenPrompt(false)
    } catch {
      setShowFullscreenPrompt(true)
    }
  }, [])

  const exitFullscreen = useCallback(async () => {
    try {
      if (document.exitFullscreen) {
        await document.exitFullscreen()
      } else if (document.webkitExitFullscreen) {
        await document.webkitExitFullscreen()
      }
      setIsFullscreen(false)
    } catch {}
  }, [])

  const toggleFullscreen = useCallback(() => {
    if (document.fullscreenElement || document.webkitFullscreenElement) {
      exitFullscreen()
    } else {
      enterFullscreen()
    }
  }, [enterFullscreen, exitFullscreen])

  // Fullscreen change listener
  useEffect(() => {
    const handler = () => {
      const isFull = !!(document.fullscreenElement || document.webkitFullscreenElement)
      setIsFullscreen(isFull)
    }
    document.addEventListener('fullscreenchange', handler)
    document.addEventListener('webkitfullscreenchange', handler)
    return () => {
      document.removeEventListener('fullscreenchange', handler)
      document.removeEventListener('webkitfullscreenchange', handler)
    }
  }, [])

  // Start presentation
  const handleStart = useCallback(() => {
    setMode('presentation')
    setCurrentSlide(0)
    setTimeout(() => enterFullscreen(), 100)
  }, [enterFullscreen])

  // Exit presentation
  const handleExitPresentation = useCallback(() => {
    setMode('landing')
    setCurrentSlide(0)
    exitFullscreen()
    setLaserActive(false)
    setFontSizeScale(100)
  }, [exitFullscreen])

  // Slide navigation
  const goToSlide = useCallback((index) => {
    if (isAnimating || index === currentSlide) return
    if (index < 0 || index >= slides.length) return
    setIsAnimating(true)
    setDirection(index > currentSlide ? 1 : -1)
    setCurrentSlide(index)
    setTimeout(() => setIsAnimating(false), 500)
  }, [currentSlide, isAnimating])

  const nextSlide = useCallback(() => goToSlide(currentSlide + 1), [currentSlide, goToSlide])
  const prevSlide = useCallback(() => goToSlide(currentSlide - 1), [currentSlide, goToSlide])

  // Keyboard navigation
  useEffect(() => {
    if (mode !== 'presentation') return
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ':
          e.preventDefault()
          nextSlide()
          break
        case 'ArrowLeft':
        case 'ArrowUp':
          e.preventDefault()
          prevSlide()
          break
        case 'Home':
          e.preventDefault()
          goToSlide(0)
          break
        case 'End':
          e.preventDefault()
          goToSlide(slides.length - 1)
          break
        case 'f':
        case 'F':
          e.preventDefault()
          toggleFullscreen()
          break
        case 'l':
        case 'L':
          e.preventDefault()
          setLaserActive((v) => !v)
          break
        case 'm':
        case 'M':
          e.preventDefault()
          setShowIndex((v) => !v)
          break
        case 'Escape':
          e.preventDefault()
          handleExitPresentation()
          break
        case '+':
        case '=':
          e.preventDefault()
          increaseFontSize()
          break
        case '-':
        case '_':
          e.preventDefault()
          decreaseFontSize()
          break
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [mode, nextSlide, prevSlide, goToSlide, toggleFullscreen, handleExitPresentation, increaseFontSize, decreaseFontSize])

  // Mouse wheel navigation
  useEffect(() => {
    if (mode !== 'presentation') return
    let wheelTimeout = null
    const handleWheel = (e) => {
      e.preventDefault()
      if (wheelTimeout) return
      wheelTimeout = setTimeout(() => { wheelTimeout = null }, 800)
      if (e.deltaY > 0) nextSlide()
      else if (e.deltaY < 0) prevSlide()
    }
    window.addEventListener('wheel', handleWheel, { passive: false })
    return () => window.removeEventListener('wheel', handleWheel)
  }, [mode, nextSlide, prevSlide])

  // GSAP progress bar
  useEffect(() => {
    if (mode !== 'presentation') return
    const progress = (currentSlide / (slides.length - 1)) * 100
    gsap.to('.progress-bar', { width: `${progress}%`, duration: 0.5, ease: 'power2.out' })
  }, [currentSlide, mode])

  // =====================
  //  LANDING PAGE MODE
  // =====================
  if (mode === 'landing') {
    return (
      <>
        <LandingPage 
          onStart={handleStart} 
          onDownloadPDF={handleDownloadPDF}
          isDownloading={isDownloading}
        />
        
        {/* Hidden container for PDF generation */}
        <div 
          ref={pdfContainerRef} 
          style={{ 
            position: 'fixed', 
            top: 0, 
            left: '-5000px', // Far off screen
            width: '1280px',
            pointerEvents: 'none',
            zIndex: -1
          }}
        >
          {slides.map((Slide, index) => {
            const Component = Slide.component
            return (
              <div 
                key={index} 
                className="pdf-capture-mode"
                style={{ 
                  width: '1280px', 
                  height: '800px', 
                  overflow: 'hidden',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <Component slideNumber={index + 1} isPDF={true} />
              </div>
            )
          })}
        </div>
      </>
    )
  }

  // =====================
  //  PRESENTATION MODE
  // =====================
  const CurrentSlideComponent = slides[currentSlide].component

  return (
    <div className="presentation" ref={presentationRef}>
      {/* Progress container */}
      <div className="progress-container">
        <div className="progress-bar" style={{ width: '0%' }} />
        <div className="slide-progress-info">
          Slide {currentSlide + 1} de {slides.length}
        </div>
      </div>

      {/* Index Button */}
      <motion.button 
        className="index-btn" 
        onClick={() => setShowIndex(true)}
        title="Índice de slides (M)"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <List size={20} />
      </motion.button>

      {/* Slide Index Overlay */}
      <AnimatePresence>
        {showIndex && (
          <motion.div 
            className="index-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowIndex(false)}
          >
            <motion.button 
              className="index-close" 
              onClick={() => setShowIndex(false)}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={24} />
            </motion.button>
            <div className="index-grid" onClick={e => e.stopPropagation()}>
              {slides.map((slide, index) => (
                <motion.div
                  key={index}
                  className={`index-item ${index === currentSlide ? 'active' : ''}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    goToSlide(index)
                    setShowIndex(false)
                  }}
                >
                  <span className="index-item-number">Slide {index + 1}</span>
                  <span className="index-item-label">{slide.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Controls (Zoom & Theme) */}
      <FloatingControls
        fontSizeScale={fontSizeScale}
        increaseFontSize={increaseFontSize}
        decreaseFontSize={decreaseFontSize}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />

      {/* Laser pointer */}
      <LaserPointer active={laserActive} />

      {/* Fullscreen prompt (if auto-fullscreen failed) */}
      {showFullscreenPrompt && (
        <motion.div
          className="fullscreen-prompt"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
        >
          <button onClick={enterFullscreen} className="fullscreen-prompt-btn">
            <Maximize size={16} />
            Entrar em Tela Cheia
          </button>
        </motion.div>
      )}

      {/* Navigation dots */}
      <nav className="nav-dots" aria-label="Navegação dos slides">
        {slides.map((slide, index) => (
          <button
            key={index}
            className={`nav-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Ir para: ${slide.label}`}
            id={`nav-dot-${index}`}
          >
            <span className="tooltip">{slide.label}</span>
          </button>
        ))}
      </nav>

      {/* Slide content */}
      <AnimatePresence custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={slideTransition}
          style={{ position: 'absolute', width: '100%', height: '100%' }}
        >
          <CurrentSlideComponent slideNumber={currentSlide + 1} goToSlide={goToSlide} />
        </motion.div>
      </AnimatePresence>

      {/* Side navigation arrows */}
      {currentSlide > 0 && (
        <motion.button
          className="slide-nav-arrow slide-nav-prev"
          onClick={prevSlide}
          aria-label="Slide anterior"
          id="btn-prev-slide"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft size={24} />
        </motion.button>
      )}
      {currentSlide < slides.length - 1 && (
        <motion.button
          className="slide-nav-arrow slide-nav-next"
          onClick={nextSlide}
          aria-label="Próximo slide"
          id="btn-next-slide"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight size={24} />
        </motion.button>
      )}

      {/* Bottom bar: footer + controls */}
      <div className="presentation-bottom-bar">
        <div className="academic-footer">
          <span>Wesley Santos Sacramento · Profa. Leandra Oliva</span>
          <span className="footer-separator">|</span>
          <span>Unime Anhanguera — 8º Semestre — Matutino</span>
        </div>

        <div className="bottom-controls">
          <span className="slide-counter-inline">
            Slide {currentSlide + 1} / {slides.length}
          </span>

          <button
            className={`control-btn ${laserActive ? 'active' : ''}`}
            onClick={() => setLaserActive((v) => !v)}
            title="Ponteiro laser (L)"
            id="btn-toggle-laser"
          >
            <div className="laser-indicator" />
            L
          </button>

          <button
            className="control-btn"
            onClick={toggleFullscreen}
            title="Tela cheia (F)"
            id="btn-toggle-fullscreen"
          >
            {isFullscreen ? <Minimize size={14} /> : <Maximize size={14} />}
          </button>

          <button
            className="control-btn"
            onClick={handleExitPresentation}
            title="Sair (ESC)"
            id="btn-exit-presentation"
          >
            ESC
          </button>
        </div>
      </div>

      {/* Keyboard hints (show briefly) */}
      <div className="keyboard-hints">
        <span className="key-hint"><kbd>←→</kbd> navegar</span>
        <span className="key-hint"><kbd>F</kbd> tela cheia</span>
        <span className="key-hint"><kbd>L</kbd> laser</span>
        <span className="key-hint"><kbd>+/-</kbd> zoom</span>
      </div>
    </div>
  )
}
