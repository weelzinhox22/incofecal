import { motion } from 'framer-motion'
import { OctagonX, ClipboardList, Microscope, Info, FileCheck } from 'lucide-react'

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

const causes = [
  { label: 'Dissinergia evacuatória', tag: 'Funcional', tagColor: 'accent' },
  { label: 'Retocele', tag: 'Anatômica', tagColor: 'primary' },
  { label: 'Intussuscepção retal', tag: 'Anatômica', tagColor: 'primary' },
  { label: 'Prolapso retal interno/externo', tag: 'Anatômica', tagColor: 'primary' },
  { label: 'Enterocele e sigmoidocele', tag: 'Anatômica', tagColor: 'primary' },
  { label: 'Megarreto e megacólon', tag: 'Estrutural', tagColor: 'warning' },
]

export default function SlideEvacuacao({ slideNumber, isPDF }) {
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
            <OctagonX size={22} />
          </div>
          <h2 className="slide-title">Evacuação Obstruída</h2>
        </motion.div>

        <motion.div className="content-with-image" variants={stagger} style={{ gap: isPDF ? '1rem' : '2rem' }}>
          <div className="text-content">
            <motion.div className="definition-box" variants={fadeUp} style={{ padding: isPDF ? '0.5rem 0.75rem' : '1rem 1.25rem' }}>
              <p style={{ fontSize: isPDF ? '0.85rem' : '1rem' }}>
                Dificuldade para eliminar fezes mesmo com <strong>presença de conteúdo fecal
                no reto</strong>. Também conhecida como <strong>Síndrome da Evacuação Obstruída (ODS)</strong>.
              </p>
            </motion.div>

            <motion.div className="explanation-box" variants={fadeUp} style={{ padding: isPDF ? '0.5rem 0.75rem' : '1rem 1.25rem', marginTop: isPDF ? '0.5rem' : '1rem' }}>
              <p style={{ fontSize: isPDF ? '0.8rem' : '0.9rem' }}>
                <Info size={14} style={{ verticalAlign: 'middle', marginRight: 5, color: 'var(--color-primary)' }} />
                A evacuação obstruída pode ter origem <strong>funcional</strong> ou <strong>anatômica</strong>.
                O paciente sente vontade de evacuar, mas a evacuação é <span className="keyword">incompleta ou impossível</span>.
              </p>
            </motion.div>

            <motion.div className="stat-grid" variants={stagger} style={{ gridTemplateColumns: 'repeat(2, 1fr)', marginTop: isPDF ? '0.5rem' : '1.5rem' }}>
              <motion.div className="stat-card" variants={scaleIn} style={{ padding: isPDF ? '0.4rem' : '1rem' }}>
                <div className="stat-number" style={{ fontSize: isPDF ? '1.2rem' : '1.8rem' }}>50%</div>
                <div className="stat-label" style={{ fontSize: isPDF ? '0.65rem' : '0.75rem' }}>dos pacientes</div>
              </motion.div>
              <motion.div className="stat-card" variants={scaleIn} style={{ padding: isPDF ? '0.4rem' : '1rem' }}>
                <div className="stat-number" style={{ fontSize: isPDF ? '1.2rem' : '1.8rem' }}>
                  <FileCheck size={18} style={{ verticalAlign: 'middle', marginRight: 4 }} />
                  Roma IV
                </div>
                <div className="stat-label" style={{ fontSize: isPDF ? '0.65rem' : '0.75rem' }}>Critérios</div>
              </motion.div>
            </motion.div>
          </div>
          <motion.div className="image-content" variants={fadeUp}>
            <div className="slide-illustration" style={{ maxHeight: isPDF ? '180px' : '300px' }}>
              <img
                src="/images/obstructed_defecation.png"
                alt="Ilustração — Evacuação Obstruída"
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
              <li>Sensação de bloqueio anorretal</li>
              <li>Esforço excessivo e improdutivo</li>
              <li>Necessidade de manobras manuais</li>
              <li>Evacuação incompleta</li>
            </ul>
          </motion.div>

          <motion.div className="column" variants={fadeUp}>
            <div className="column-header" style={{ marginBottom: isPDF ? '0.25rem' : '1rem' }}>
              <div className="icon-wrapper green" style={{ width: 24, height: 24 }}>
                <Microscope size={12} />
              </div>
              <h3 style={{ fontSize: isPDF ? '0.9rem' : '1.1rem' }}>Possíveis Causas</h3>
            </div>
            <div className="expandable-list" style={{ gap: isPDF ? '0.25rem' : '0.5rem' }}>
              {causes.slice(0, isPDF ? 4 : 6).map((c, i) => (
                <motion.div
                  key={i}
                  className="expandable-item"
                  style={{ padding: isPDF ? '0.25rem 0.5rem' : '0.5rem 1rem' }}
                >
                  <div className="expandable-header" style={{ padding: 0 }}>
                    <div className="exp-text">
                      <div className="exp-title" style={{ fontSize: isPDF ? '0.7rem' : '0.8rem' }}>{c.label}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div className="highlight-box" variants={fadeUp} style={{ marginTop: isPDF ? '0.5rem' : '2rem', padding: isPDF ? '0.5rem 0.75rem' : '1rem 1.25rem' }}>
          <h4 style={{ fontSize: isPDF ? '0.7rem' : '0.8rem' }}><FileCheck size={12} style={{ verticalAlign: 'middle', marginRight: 4 }} /> Roma IV</h4>
          <p style={{ fontSize: isPDF ? '0.75rem' : '0.85rem' }}>
            Evidência de <span className="keyword">evacuação inadequada</span> + pelo menos 2 critérios diagnósticos por 3 meses.
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}
