import { motion } from 'framer-motion'
import { Footprints, Clock, Clipboard, Apple, Info, CheckCircle2 } from 'lucide-react'

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.12 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

const habits = [
  {
    icon: Footprints,
    title: 'Postura Evacuatória',
    desc: 'Uso de banquinho para elevar os pés, flexionando o quadril > 90°. Isso retifica o ângulo anorretal, relaxando o músculo puborretal.',
    color: 'blue',
  },
  {
    icon: Clock,
    title: 'Rotina e Reflexo',
    desc: 'Aproveitar o reflexo gastro-cólico (após refeições) para tentar evacuar, estabelecendo um horário regular sem pressa ou esforço excessivo.',
    color: 'green',
  },
  {
    icon: Clipboard,
    title: 'Diário Evacuatório',
    desc: 'Ferramenta essencial para monitorar frequência, consistência (Bristol) e episódios de perda, orientando os ajustes na terapia.',
    color: 'orange',
  },
  {
    icon: Apple,
    title: 'Manejo de Fibras',
    desc: 'Ingesta gradual de fibras solúveis e insolúveis associada à hidratação adequada para modular a consistência das fezes.',
    color: 'purple',
  },
]

export default function SlideHabitos({ slideNumber, isPDF }) {
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
          <div className="header-icon primary">
            <CheckCircle2 size={22} />
          </div>
          <h2 className="slide-title">Hábitos e Orientações</h2>
        </motion.div>

        <motion.div className="content-with-image" variants={stagger}>
          <div className="text-content">
            <motion.div className="definition-box" variants={fadeUp}>
              <p>
                Mudanças no <strong>estilo de vida e comportamento</strong> são a base do tratamento
                fisioterapêutico. Pequenas adaptações na rotina e na forma de evacuar podem
                reduzir significativamente o esforço e os episódios de incontinência.
              </p>
            </motion.div>

            <div className="expandable-list" style={{ marginTop: isPDF ? '0.25rem' : '0.5rem' }}>
              {habits.map((h, i) => {
                const Icon = h.icon
                return (
                  <motion.div
                    key={i}
                    className="expandable-item"
                    variants={fadeUp}
                    whileHover={{ x: 5, borderColor: 'var(--color-accent)' }}
                    style={{ padding: isPDF ? '0.4rem 0.75rem' : '0.75rem 1rem' }}
                  >
                    <div className="expandable-header">
                      <div className={`exp-icon icon-wrapper ${h.color}`} style={{ width: 35, height: 35 }}>
                        <Icon size={18} />
                      </div>
                      <div className="exp-text">
                        <div className="exp-title" style={{ fontWeight: 700, fontSize: isPDF ? '0.85rem' : '1rem' }}>{h.title}</div>
                        <div className="exp-desc" style={{ fontSize: isPDF ? '0.75rem' : '0.85rem' }}>{h.desc}</div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          <motion.div className="image-content" variants={fadeUp}>
            <div className="slide-illustration" style={{ maxHeight: isPDF ? '250px' : '400px' }}>
              {/* Using an existing relevant image or a placeholder logic */}
              <img
                src="/images/physiotherapy_evaluation.png" 
                alt="Orientações de Hábitos"
                style={{ opacity: 0.8, maxHeight: isPDF ? '250px' : 'none' }}
              />
              <div style={{ 
                position: isPDF ? 'relative' : 'absolute', 
                bottom: isPDF ? 'auto' : '10%', 
                left: isPDF ? 'auto' : '10%', 
                right: isPDF ? 'auto' : '10%', 
                marginTop: isPDF ? '1rem' : '0',
                background: 'var(--color-bg-card)',
                padding: '0.75rem',
                borderRadius: '8px',
                border: '1px solid var(--color-accent)',
                boxShadow: 'var(--shadow-lg)',
                fontSize: '0.75rem',
                textAlign: 'center',
                color: 'var(--color-text)',
                opacity: 0.95,
                zIndex: 10
              }}>
                <strong>Dica de Ouro:</strong> Nunca ignore o desejo evacuatório. Adiar a ida ao banheiro pode levar ao ressecamento das fezes e perda da sensibilidade retal.
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div className="highlight-box" variants={fadeUp} style={{ marginTop: isPDF ? '0.5rem' : '2rem' }}>
          <h4><Info size={12} style={{ verticalAlign: 'middle', marginRight: 4 }} /> Ângulo Anorretal</h4>
          <p style={{ fontSize: isPDF ? '0.85rem' : 'var(--font-size-base)' }}>
            Na posição sentada comum (90°), o músculo <span className="keyword">puborretal</span> mantém uma "dobra" no reto. 
            Ao elevar os pés (posição de agachamento parcial), esse músculo relaxa, permitindo uma passagem mais retilínea e fácil das fezes.
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}
