import { motion } from 'framer-motion'
import { BookOpen, RefreshCw, Zap, AlertTriangle, Ban, Microscope, Key, TrendingUp, Users, Clock } from 'lucide-react'

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
}

const manifestations = [
  {
    icon: RefreshCw,
    label: 'Constipação',
    desc: 'Redução na frequência evacuatória e/ou dificuldade na passagem das fezes.',
    color: 'blue',
  },
  {
    icon: Zap,
    label: 'Evacuação incompleta',
    desc: 'Sensação persistente de que nem todo o conteúdo fecal foi eliminado.',
    color: 'orange',
  },
  {
    icon: AlertTriangle,
    label: 'Perda involuntária',
    desc: 'Incapacidade de controlar a eliminação de fezes ou gases, em diferentes graus.',
    color: 'red',
  },
  {
    icon: Ban,
    label: 'Bloqueio evacuatório',
    desc: 'Percepção de obstrução na saída do reto, mesmo com vontade de evacuar.',
    color: 'purple',
  },
  {
    icon: Microscope,
    label: 'Alterações sensoriais',
    desc: 'O reto não detecta adequadamente o enchimento fecal.',
    color: 'teal',
  },
]

export default function SlideIntro({ slideNumber, isPDF }) {
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

        <motion.div className="slide-header" variants={fadeUp} style={{ marginBottom: isPDF ? '0.5rem' : '1.5rem' }}>
          <div className="header-icon primary">
            <BookOpen size={22} />
          </div>
          <h2 className="slide-title">O que são distúrbios evacuatórios?</h2>
        </motion.div>

        <motion.div className="definition-box" variants={fadeUp} style={{ padding: isPDF ? '0.5rem 0.75rem' : '1rem 1.25rem' }}>
          <p style={{ fontSize: isPDF ? '0.85rem' : '1rem' }}>
            Distúrbios evacuatórios são <strong>alterações no processo normal de evacuação</strong> que
            podem envolver dificuldades para eliminar fezes, perda involuntária ou alterações
            sensoriais do reto.
          </p>
        </motion.div>

        {/* Stats row — breaks monotony */}
        <motion.div className="stat-grid" variants={stagger} style={{ marginTop: isPDF ? '0.5rem' : '1.5rem', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          <motion.div className="stat-card" variants={scaleIn} style={{ padding: isPDF ? '0.4rem' : '1rem' }}>
            <div className="stat-number" style={{ fontSize: isPDF ? '1.2rem' : '1.8rem' }}>27%</div>
            <div className="stat-label" style={{ fontSize: isPDF ? '0.65rem' : '0.75rem' }}>afetada</div>
          </motion.div>
          <motion.div className="stat-card" variants={scaleIn} style={{ padding: isPDF ? '0.4rem' : '1rem' }}>
            <div className="stat-number" style={{ fontSize: isPDF ? '1.2rem' : '1.8rem' }}>
              <Users size={isPDF ? 14 : 20} style={{ verticalAlign: 'middle', marginRight: 4 }} />
              2:1
            </div>
            <div className="stat-label" style={{ fontSize: isPDF ? '0.65rem' : '0.75rem' }}>Mulheres</div>
          </motion.div>
          <motion.div className="stat-card" variants={scaleIn} style={{ padding: isPDF ? '0.4rem' : '1rem' }}>
            <div className="stat-number" style={{ fontSize: isPDF ? '1.2rem' : '1.8rem' }}>
              <TrendingUp size={isPDF ? 14 : 20} style={{ verticalAlign: 'middle', marginRight: 4 }} />
              60+
            </div>
            <div className="stat-label" style={{ fontSize: isPDF ? '0.65rem' : '0.75rem' }}>Prevalência</div>
          </motion.div>
          <motion.div className="stat-card" variants={scaleIn} style={{ padding: isPDF ? '0.4rem' : '1rem' }}>
            <div className="stat-number" style={{ fontSize: isPDF ? '1.2rem' : '1.8rem' }}>
              <Clock size={isPDF ? 14 : 20} style={{ verticalAlign: 'middle', marginRight: 4 }} />
              Crônico
            </div>
            <div className="stat-label" style={{ fontSize: isPDF ? '0.65rem' : '0.75rem' }}>Evolução</div>
          </motion.div>
        </motion.div>

        {/* Cards with shimmer effect */}
        <motion.div className="cards-grid" variants={stagger} style={{ marginTop: isPDF ? '0.5rem' : '1.5rem', gap: isPDF ? '0.5rem' : '1rem' }}>
          {manifestations.slice(0, isPDF ? 4 : 5).map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={i}
                className="card card-animated card-shimmer"
                variants={fadeUp}
                style={{ padding: isPDF ? '0.5rem' : '1.25rem' }}
              >
                <div className={`icon-wrapper ${item.color}`} style={{ width: 24, height: 24, marginBottom: '0.25rem' }}>
                  <Icon size={14} />
                </div>
                <p style={{ fontSize: isPDF ? '0.75rem' : '0.9rem', color: 'var(--color-primary)', fontWeight: 600, marginBottom: '0.1rem' }}>
                  {item.label}
                </p>
                <p style={{ fontSize: isPDF ? '0.65rem' : '0.75rem', color: 'var(--color-text-secondary)', lineHeight: 1.3 }}>
                  {item.desc}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div className="highlight-box" variants={fadeUp} style={{ marginTop: isPDF ? '0.5rem' : '2rem', padding: isPDF ? '0.5rem 0.75rem' : '1rem 1.25rem' }}>
          <h4 style={{ fontSize: isPDF ? '0.7rem' : '0.8rem' }}><Key size={12} style={{ verticalAlign: 'middle', marginRight: 4 }} /> Importância clínica</h4>
          <p style={{ fontSize: isPDF ? '0.75rem' : '0.85rem' }}>
            Impactam diretamente a <span className="keyword">qualidade de vida</span>, gerando constrangimento social e impacto psicológico.
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}
