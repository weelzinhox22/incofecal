import { motion } from 'framer-motion'
import { Shuffle, ClipboardList, Dna, Info, AlertCircle } from 'lucide-react'

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

const types = [
  { type: 'I', desc: 'Contração paradoxal com força propulsiva adequada' },
  { type: 'II', desc: 'Força propulsiva inadequada com contração paradoxal' },
  { type: 'III', desc: 'Força adequada com relaxamento incompleto' },
  { type: 'IV', desc: 'Força inadequada com relaxamento incompleto' },
]

export default function SlideDissinergia({ slideNumber }) {
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
            <Shuffle size={22} />
          </div>
          <div>
            <h2 className="slide-title">Dissinergia Evacuatória (Anismo)</h2>
          </div>
        </motion.div>

        <motion.div className="content-with-image" variants={stagger}>
          <div className="text-content">
            <motion.div className="definition-box" variants={fadeUp}>
              <p>
                Descoordenação entre os <strong>músculos do assoalho pélvico</strong> e o
                reto durante a evacuação. É considerada uma das principais causas de
                <strong> constipação funcional</strong>, responsável por até <strong>40%</strong> dos
                casos de evacuação obstruída encaminhados para avaliação especializada.
              </p>
            </motion.div>

            <motion.div className="explanation-box" variants={fadeUp}>
              <p>
                <Info size={14} style={{ verticalAlign: 'middle', marginRight: 5, color: 'var(--color-primary)' }} />
                Durante a evacuação normal, ocorre <strong>aumento da pressão intra-abdominal</strong> coordenado
                com o <strong>relaxamento do músculo puborretal</strong> e do <strong>esfíncter anal externo</strong>.
                Na dissinergia, esse mecanismo falha: o paciente realiza esforço adequado, porém
                ocorre <span className="keyword">contração paradoxal</span> ou relaxamento inadequado
                da musculatura, impossibilitando a passagem do conteúdo fecal pelo canal anal.
              </p>
            </motion.div>

            <motion.div className="stat-grid" variants={stagger} style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
              <motion.div className="stat-card" variants={scaleIn} whileHover={{ scale: 1.05 }}>
                <div className="stat-number">40%</div>
                <div className="stat-label">dos casos de evacuação obstruída</div>
              </motion.div>
              <motion.div className="stat-card" variants={scaleIn} whileHover={{ scale: 1.05 }}>
                <div className="stat-number">
                  <AlertCircle size={18} style={{ verticalAlign: 'middle', marginRight: 4 }} />
                  4 Tipos
                </div>
                <div className="stat-label">Classificação de Rao</div>
              </motion.div>
            </motion.div>
          </div>
          <motion.div className="image-content" variants={fadeUp}>
            <div className="slide-illustration medium">
              <img
                src="/images/dyssynergia_pelvic.png"
                alt="Ilustração — Dissinergia do assoalho pélvico"
              />
            </div>
          </motion.div>
        </motion.div>

        <motion.div className="two-columns" variants={stagger}>
          <motion.div className="column" variants={fadeUp}>
            <div className="column-header">
              <div className="icon-wrapper blue" style={{ width: 30, height: 30 }}>
                <ClipboardList size={15} />
              </div>
              <h3>Características Clínicas</h3>
            </div>
            <ul>
              <li>Esforço evacuatório excessivo e prolongado</li>
              <li>Sensação de evacuação incompleta persistente</li>
              <li>Evacuação prolongada (&gt;15 min no vaso sanitário)</li>
              <li>Dor ou desconforto evacuatório</li>
              <li>Necessidade de manobras digitais perineais</li>
              <li>Uso frequente de laxantes sem melhora sustentada</li>
            </ul>
          </motion.div>

          <motion.div className="column" variants={fadeUp}>
            <div className="column-header">
              <div className="icon-wrapper green" style={{ width: 30, height: 30 }}>
                <Dna size={15} />
              </div>
              <h3>Classificação de Rao</h3>
            </div>
            <div className="cards-grid" style={{ gridTemplateColumns: '1fr', gap: '0.5rem', marginTop: 0 }}>
              {types.map((t, i) => (
                <motion.div
                  key={i}
                  className="card"
                  whileHover={{ scale: 1.02, x: 5, borderColor: 'var(--color-accent)' }}
                  style={{ padding: '0.75rem 1rem', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1rem', minHeight: 'auto' }}
                >
                  <div className="step-number" style={{ width: 30, height: 30, fontSize: '0.9rem', flexShrink: 0 }}>{t.type}</div>
                  <div className="exp-text">
                    <div className="exp-desc" style={{ marginTop: 0, fontSize: '0.95rem', fontWeight: 500, color: 'var(--color-text)' }}>{t.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}
