import { motion } from 'framer-motion'
import { EyeOff, ClipboardList, Microscope, Info, Gauge } from 'lucide-react'

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.12 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function SlideHipossensibilidade({ slideNumber, isPDF }) {
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
            <EyeOff size={22} />
          </div>
          <h2 className="slide-title">Hipossensibilidade Retal</h2>
        </motion.div>

        <motion.div className="content-with-image" variants={stagger} style={{ gap: isPDF ? '1rem' : '2rem' }}>
          <div className="text-content">
            <motion.div className="definition-box" variants={fadeUp} style={{ padding: isPDF ? '0.5rem 0.75rem' : '1rem 1.25rem' }}>
              <p style={{ fontSize: isPDF ? '0.85rem' : '1rem' }}>
                Diminuição da <strong>sensibilidade do reto ao enchimento fecal</strong>. Aumento dos limiares avaliados por manometria.
              </p>
            </motion.div>

            <motion.div className="explanation-box" variants={fadeUp} style={{ padding: isPDF ? '0.5rem 0.75rem' : '1rem 1.25rem', marginTop: isPDF ? '0.5rem' : '1rem' }}>
              <p style={{ fontSize: isPDF ? '0.8rem' : '0.9rem' }}>
                <Info size={14} style={{ verticalAlign: 'middle', marginRight: 5, color: 'var(--color-primary)' }} />
                O paciente não percebe o estímulo evacuatório, gerando um ciclo vicioso de retenção e distensão crônica.
              </p>
            </motion.div>

            <motion.div className="stat-grid" variants={stagger} style={{ gridTemplateColumns: 'repeat(3, 1fr)', marginTop: isPDF ? '0.5rem' : '1.5rem' }}>
              <motion.div className="stat-card" variants={scaleIn} style={{ padding: isPDF ? '0.4rem' : '1rem' }}>
                <div className="stat-number" style={{ fontSize: isPDF ? '1rem' : '1.5rem' }}>Percepção</div>
                <div className="stat-label" style={{ fontSize: isPDF ? '0.65rem' : '0.75rem' }}>Limiar ↑</div>
              </motion.div>
              <motion.div className="stat-card" variants={scaleIn} style={{ padding: isPDF ? '0.4rem' : '1rem' }}>
                <div className="stat-number" style={{ fontSize: isPDF ? '1rem' : '1.5rem' }}>Desejo</div>
                <div className="stat-label" style={{ fontSize: isPDF ? '0.65rem' : '0.75rem' }}>Volume ↑</div>
              </motion.div>
              <motion.div className="stat-card" variants={scaleIn} style={{ padding: isPDF ? '0.4rem' : '1rem' }}>
                <div className="stat-number" style={{ fontSize: isPDF ? '1rem' : '1.5rem' }}>Máximo</div>
                <div className="stat-label" style={{ fontSize: isPDF ? '0.65rem' : '0.75rem' }}>Tolerável ↑</div>
              </motion.div>
            </motion.div>
          </div>
          <motion.div className="image-content" variants={fadeUp}>
            <div className="slide-illustration" style={{ maxHeight: isPDF ? '180px' : '300px' }}>
              <img
                src="/images/rectal_sensitivity.png"
                alt="Ilustração — Hipossensibilidade Retal"
                style={{ maxHeight: isPDF ? '180px' : '300px' }}
              />
            </div>
          </motion.div>
        </motion.div>

        <motion.div className="two-columns" variants={stagger} style={{ marginTop: isPDF ? '0.5rem' : '2rem', gap: isPDF ? '1rem' : '2rem' }}>
          <motion.div className="column" variants={fadeUp}>
            <div className="column-header" style={{ marginBottom: isPDF ? '0.25rem' : '1rem' }}>
              <div className="icon-wrapper blue" style={{ width: 24, height: 24 }}>
                <ClipboardList size={12} />
              </div>
              <h3 style={{ fontSize: isPDF ? '0.9rem' : '1.1rem' }}>Características</h3>
            </div>
            <ul style={{ fontSize: isPDF ? '0.75rem' : '0.85rem' }}>
              <li>Redução da vontade espontânea</li>
              <li>Constipação crônica severa</li>
              <li>Acúmulo fecal significativo</li>
            </ul>
          </motion.div>

          <motion.div className="column" variants={fadeUp}>
            <div className="column-header" style={{ marginBottom: isPDF ? '0.25rem' : '1rem' }}>
              <div className="icon-wrapper green" style={{ width: 24, height: 24 }}>
                <Microscope size={12} />
              </div>
              <h3 style={{ fontSize: isPDF ? '0.9rem' : '1.1rem' }}>Causas</h3>
            </div>
            <ul style={{ fontSize: isPDF ? '0.75rem' : '0.85rem' }}>
              <li>Lesões neurológicas</li>
              <li>Megarreto adquirido</li>
              <li>Abuso de laxantes</li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div className="highlight-box" variants={fadeUp} style={{ marginTop: isPDF ? '0.5rem' : '2rem', padding: isPDF ? '0.5rem 0.75rem' : '1rem 1.25rem' }}>
          <h4 style={{ fontSize: isPDF ? '0.7rem' : '0.8rem' }}><Info size={12} style={{ verticalAlign: 'middle', marginRight: 4 }} /> Diagnóstico</h4>
          <p style={{ fontSize: isPDF ? '0.75rem' : '0.85rem' }}>
            A <span className="keyword">manometria anorretal</span> com balão é o padrão-ouro para diagnóstico.
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}
