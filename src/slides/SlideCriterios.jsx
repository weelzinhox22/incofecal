import { motion } from 'framer-motion'
import { CheckSquare, CheckCircle, Info, FileText, AlertCircle } from 'lucide-react'

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

const criterios = [
  "Esforço evacuatório em mais de 25% das defecações",
  "Fezes endurecidas (Bristol 1-2) em mais de 25% das defecações",
  "Sensação de evacuação incompleta em mais de 25% das defecações",
  "Sensação de obstrução/bloqueio anorretal em mais de 25% das defecações",
  "Manobras manuais para facilitar em mais de 25% das defecações",
  "Menos de 3 evacuações espontâneas por semana"
]

export default function SlideCriterios({ slideNumber }) {
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
            <CheckSquare size={22} />
          </div>
          <div>
            <h2 className="slide-title">Critérios de Roma IV</h2>
            <p className="slide-subtitle">Diagnóstico de Constipação Funcional</p>
          </div>
        </motion.div>

        <div className="mobile-stack" style={{ gap: '0.75rem' }}>
          {/* Header Consolidado: Intro + Stats */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <motion.div className="card-blue-intro" variants={fadeUp} style={{ padding: '0.75rem 1rem', marginBottom: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div className="icon-wrapper blue" style={{ width: 32, height: 32, marginBottom: 0 }}>
                  <FileText size={16} />
                </div>
                <p style={{ margin: 0, fontSize: '0.9rem' }}>
                  O diagnóstico requer <strong>2 ou mais</strong> sintomas nos últimos 3 meses.
                </p>
              </div>
            </motion.div>

            <div className="stat-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem', margin: 0 }}>
              <motion.div className="stat-card" variants={fadeUp} style={{ padding: '0.5rem' }}>
                <div className="stat-number" style={{ fontSize: '1.5rem' }}>2+</div>
                <div className="stat-label" style={{ fontSize: '0.6rem' }}>Sintomas</div>
              </motion.div>
              <motion.div className="stat-card" variants={fadeUp} style={{ padding: '0.5rem' }}>
                <div className="stat-number" style={{ fontSize: '1.5rem' }}>3m</div>
                <div className="stat-label" style={{ fontSize: '0.6rem' }}>Duração</div>
              </motion.div>
            </div>
          </div>

          {/* Ilustração Central Reduzida */}
          <motion.div className="image-content" variants={fadeUp} style={{ margin: '0.25rem auto' }}>
            <div className="slide-illustration" style={{ maxWidth: '180px', maxHeight: '120px' }}>
              <img
                src="/images/fecal_incontinence.png" 
                alt="Ilustração — Critérios de Roma IV"
                style={{ objectFit: 'contain', height: '100%' }}
              />
            </div>
          </motion.div>

          {/* Grid de Duas Colunas para Critérios */}
          <motion.div className="expandable-list" variants={stagger} style={{ marginTop: 0 }}>
            <div className="column-header" style={{ marginBottom: '0.5rem' }}>
              <div className="icon-wrapper green" style={{ width: 28, height: 28 }}>
                <CheckCircle size={14} />
              </div>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 700, margin: 0 }}>Critérios Clínicos</h3>
            </div>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
              gap: '0.5rem' 
            }}>
              {criterios.map((c, i) => (
                <motion.div
                  key={i}
                  className="expandable-item"
                  variants={fadeUp}
                  whileHover={{ x: 3, borderColor: 'var(--color-accent)' }}
                  style={{ padding: '0.5rem 0.75rem' }}
                >
                  <div className="expandable-header" style={{ padding: 0, gap: '0.5rem' }}>
                    <div className="step-number" style={{ width: 18, height: 18, fontSize: '0.65rem', flexShrink: 0 }}>{i + 1}</div>
                    <div className="exp-text">
                      <div className="exp-title" style={{ fontSize: '0.78rem', fontWeight: 500, lineHeight: 1.3 }}>{c}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Highlight Box Final Compacta */}
          <motion.div className="highlight-box" variants={fadeUp} style={{ marginTop: 0, padding: '0.5rem 0.75rem' }}>
            <h4 style={{ fontSize: '0.7rem', marginBottom: '0.25rem' }}>
              <AlertCircle size={10} style={{ verticalAlign: 'middle', marginRight: 4 }} /> Nota Clínica
            </h4>
            <p style={{ fontSize: '0.8rem', margin: 0 }}>
              Raridade de fezes amolecidas sem laxantes e insuficiência de critérios para SII.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
