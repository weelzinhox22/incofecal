import { motion } from 'framer-motion'
import { Play, BookOpen, GraduationCap, User, Users, Building2, Calendar, Sun, Download, Loader2 } from 'lucide-react'

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function LandingPage({ onStart, onDownloadPDF, isDownloading }) {
  return (
    <div className="landing-page">
      {/* Background decoration */}
      <div className="landing-bg-decoration" />

      <motion.div
        className="landing-content"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        {/* University badge */}
        <motion.div className="landing-university-badge" variants={fadeUp}>
          <Building2 size={16} />
          Unime Anhanguera
        </motion.div>

        {/* Illustration */}
        <motion.div className="landing-illustration" variants={scaleIn}>
          <img
            src="/images/anatomy_intestine.png"
            alt="Ilustração anatômica do sistema colorretal"
          />
        </motion.div>

        {/* Title */}
        <motion.h1 className="landing-title" variants={fadeUp}>
          Distúrbios Evacuatórios
        </motion.h1>

        <motion.p className="landing-subtitle" variants={fadeUp}>
          Abordagem Clínica e Fisioterapêutica
        </motion.p>

        <motion.p className="landing-tagline" variants={fadeUp}>
          <BookOpen size={16} style={{ verticalAlign: 'middle', marginRight: 6 }} />
          Apresentação Acadêmica — Fisioterapia Pélvica
        </motion.p>

        {/* Buttons group */}
        <motion.div 
          className="landing-buttons" 
          variants={fadeUp}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '1.5rem' }}
        >
          {/* Start button */}
          <motion.button
            className="landing-start-btn"
            whileHover={{ scale: 1.04, boxShadow: '0 20px 40px rgba(45, 138, 110, 0.3)' }}
            whileTap={{ scale: 0.97 }}
            onClick={onStart}
            id="btn-start-presentation"
            disabled={isDownloading}
          >
            <Play size={22} fill="white" />
            Iniciar Apresentação
          </motion.button>

          {/* PDF Download button */}
          <motion.button
            className="landing-pdf-btn"
            whileHover={{ scale: 1.04, boxShadow: '0 20px 40px rgba(37, 99, 235, 0.2)' }}
            whileTap={{ scale: 0.97 }}
            onClick={onDownloadPDF}
            disabled={isDownloading}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              background: 'white',
              color: 'var(--color-primary)',
              border: '2px solid var(--color-primary)',
              padding: 'var(--space-5) var(--space-8)',
              borderRadius: 'var(--radius-xl)',
              fontSize: 'var(--font-size-base)',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all var(--transition-base)',
              opacity: isDownloading ? 0.7 : 1
            }}
          >
            {isDownloading ? (
              <>
                <Loader2 size={22} className="animate-spin" />
                Gerando PDF...
              </>
            ) : (
              <>
                <Download size={22} />
                Baixar Slides (PDF)
              </>
            )}
          </motion.button>
        </motion.div>

        <motion.p className="landing-hint" variants={fadeUp}>
          A apresentação entrará em tela cheia automaticamente
        </motion.p>

        {/* Academic info cards */}
        <motion.div className="landing-info-grid" variants={stagger}>
          <motion.div className="landing-info-card" variants={fadeUp}>
            <User size={18} />
            <div>
              <span className="info-label">Aluno</span>
              <span className="info-value">Wesley Santos Sacramento</span>
            </div>
          </motion.div>

          <motion.div className="landing-info-card" variants={fadeUp}>
            <Users size={18} />
            <div>
              <span className="info-label">Professora</span>
              <span className="info-value">Leandra Oliva</span>
            </div>
          </motion.div>

          <motion.div className="landing-info-card" variants={fadeUp}>
            <GraduationCap size={18} />
            <div>
              <span className="info-label">Faculdade</span>
              <span className="info-value">Unime Anhanguera</span>
            </div>
          </motion.div>

          <motion.div className="landing-info-card" variants={fadeUp}>
            <Calendar size={18} />
            <div>
              <span className="info-label">Semestre</span>
              <span className="info-value">8º Semestre</span>
            </div>
          </motion.div>

          <motion.div className="landing-info-card" variants={fadeUp}>
            <Sun size={18} />
            <div>
              <span className="info-label">Turno</span>
              <span className="info-value">Matutino</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.footer className="landing-footer" variants={fadeUp}>
          <p>Wesley Santos Sacramento · Profa. Leandra Oliva</p>
          <p>Unime Anhanguera — 8º Semestre — Matutino</p>
        </motion.footer>
      </motion.div>
    </div>
  )
}
