import { motion } from 'framer-motion'
import { Wind, CircleDot, Accessibility, HandMetal, Info } from 'lucide-react'

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

const exercises = [
  {
    icon: Wind,
    title: 'Respiração Diafragmática',
    subtitle: 'Sopro Glótico',
    desc: 'Coordenação da expiração frenada para gerir a pressão intra-abdominal sem sobrecarregar o assoalho pélvico.',
    focus: 'Evitar a manobra de Valsalva excessiva durante o esforço.',
    color: 'blue',
    img: '/images/respiracaodiafragmatica.jpg'
  },
  {
    icon: CircleDot,
    title: 'Mobilidade Pélvica',
    subtitle: 'Bola Suíça',
    desc: 'Movimentos de báscula (anteroversão/retroversão) e circundução sentada.',
    focus: 'Relaxamento da musculatura periforme e obturadora interna, facilitando o ângulo anorretal.',
    color: 'orange',
    img: '/images/mobilidadepelvica.png'
  },
  {
    icon: Accessibility,
    title: 'Agachamento Malasansana',
    subtitle: 'Deep Squat',
    desc: 'Posicionamento em cócoras profunda com biofeedback tátil.',
    focus: 'Alongamento máximo das fibras do músculo puborretal e abertura do ângulo anorretal (ideal para evacuação).',
    color: 'green',
    img: '/images/agachamentomalasansana.png'
  },
  {
    icon: HandMetal,
    title: 'Massagem Perineal',
    subtitle: 'Pompoagem e Liberação',
    desc: 'Técnicas manuais de dessensibilização e liberação miofascial dos trigger points no levantador do ânus.',
    focus: 'Redução de hipertonia e dor evacuatória.',
    color: 'purple',
    img: '/images/massagemperineal.jpg'
  },
]

export default function SlideExerciciosFuncionais({ slideNumber }) {
  return (
    <div className="slide">
      <motion.div
        className="slide-content"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        <motion.span className="slide-number" variants={fadeUp}>
          Slide {String(slideNumber).padStart(2, '0')}
        </motion.span>

        <motion.div className="slide-header" variants={fadeUp}>
          <div className="header-icon accent">
            <Accessibility size={22} />
          </div>
          <div>
            <h2 className="slide-title">Práticas de Integração e Exercícios Funcionais</h2>
            <p className="slide-subtitle">Condutas Avançadas em Reabilitação Anorretal</p>
          </div>
        </motion.div>

        <div className="mobile-stack" style={{ gap: '0.75rem' }}>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-4" 
            variants={stagger}
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
              gap: '1.25rem' 
            }}
          >
            {exercises.map((ex, i) => {
              const Icon = ex.icon
              return (
                <motion.div
                  key={i}
                  className="card"
                  variants={fadeUp}
                  whileHover={{ scale: 1.02, translateY: -2, borderColor: `var(--color-${ex.color})` }}
                  style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    padding: '1rem', 
                    borderLeft: `5px solid var(--color-${ex.color})`,
                    minHeight: 'auto',
                    gap: '0.75rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div className={`icon-wrapper ${ex.color}`} style={{ width: 36, height: 36, marginBottom: 0 }}>
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1rem', fontWeight: 700, margin: 0, color: 'var(--color-primary)' }}>{ex.title}</h3>
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>{ex.subtitle}</span>
                    </div>
                  </div>

                  <div className="exercise-card-body" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    {/* Imagem em destaque - maior */}
                    <div className="exercise-image-wrapper" style={{ 
                      width: '120px', 
                      height: '120px', 
                      flexShrink: 0, 
                      borderRadius: '12px',
                      overflow: 'hidden',
                      boxShadow: 'var(--shadow-md)',
                      background: 'var(--color-bg-alt)',
                      border: '1px solid var(--color-border)'
                    }}>
                      <img 
                        src={ex.img} 
                        alt={ex.title} 
                        style={{ 
                          width: '100%', 
                          height: '100%', 
                          objectFit: 'cover' 
                        }} 
                      />
                    </div>

                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: '0.85rem', color: 'var(--color-text)', margin: '0 0 0.5rem 0', lineHeight: 1.5 }}>
                        {ex.desc}
                      </p>
                      <div style={{ 
                        padding: '0.5rem', 
                        background: 'var(--color-highlight-bg)', 
                        borderRadius: '6px',
                        borderLeft: `3px solid var(--color-${ex.color})`
                      }}>
                        <p style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-text-secondary)', margin: 0 }}>
                          <Info size={12} style={{ marginRight: 6, verticalAlign: 'middle' }} />
                          Foco: {ex.focus}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
          
          <motion.div className="highlight-box" variants={fadeUp} style={{ marginTop: '0.5rem', padding: '0.75rem 1.25rem' }}>
            <p style={{ fontSize: '0.9rem', margin: 0 }}>
              <strong>Integração Sensório-Motora:</strong> O sucesso da reabilitação depende da transição dos exercícios isolados (Kegel) para atividades funcionais e posturais do dia a dia.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}


