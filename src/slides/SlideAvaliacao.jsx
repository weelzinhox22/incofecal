import { motion } from 'framer-motion'
import { Clipboard, Search, Target, BookOpen, Stethoscope, FileText, Brain, BarChart2 } from 'lucide-react'

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.12 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

const methods = [
  {
    icon: FileText,
    title: 'Anamnese Detalhada',
    desc: 'História evacuatória, dieta, medicamentos, antecedentes obstétricos e cirúrgicos',
    color: 'blue',
    step: 1,
  },
  {
    icon: Stethoscope,
    title: 'Avaliação do Assoalho Pélvico',
    desc: 'Inspeção, palpação digital e avaliação da contratilidade muscular',
    color: 'green',
    step: 2,
  },
  {
    icon: BarChart2,
    title: 'Teste de Força Muscular',
    desc: 'Escala Oxford Modificada (graus 0-5) — quantificação objetiva',
    color: 'orange',
    step: 3,
  },
  {
    icon: Brain,
    title: 'Sensibilidade Retal',
    desc: 'Avaliação de reflexos perineais e percepção sensorial',
    color: 'purple',
    step: 4,
  },
  {
    icon: FileText,
    title: 'Diário Evacuatório',
    desc: 'Registro de frequência, esforço, consistência (Escala de Bristol) e episódios de perda',
    color: 'teal',
    step: 5,
  },
]

const objectives = [
  'Identificar disfunções musculares — hipertonia, hipotonia, assimetria',
  'Avaliar coordenação evacuatória — Valsalva e simulação',
  'Detectar alterações sensoriais — hipo ou hipersensibilidade',
  'Quantificar gravidade da incontinência e/ou constipação',
  'Estabelecer baseline para monitoramento terapêutico',
]

export default function SlideAvaliacao({ slideNumber }) {
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
            <Clipboard size={22} />
          </div>
          <h2 className="slide-title">Avaliação Fisioterapêutica</h2>
        </motion.div>

        <motion.div className="content-with-image" variants={stagger}>
          <div className="text-content">
            {/* Expandable-style method list — visual variety */}
            <motion.div variants={fadeUp}>
              <div className="column-header" style={{ marginBottom: '0.5rem' }}>
                <div className="icon-wrapper blue" style={{ width: 30, height: 30 }}>
                  <Search size={15} />
                </div>
                <h3 style={{ fontSize: 'clamp(0.9rem, 1.3vw, 1.05rem)', fontWeight: 700, color: 'var(--color-primary)', margin: 0 }}>Métodos de Avaliação</h3>
              </div>
            </motion.div>

            <motion.div className="expandable-list" variants={stagger}>
              {methods.map((m, i) => {
                const Icon = m.icon
                return (
                  <motion.div
                    key={i}
                    className="expandable-item"
                    variants={fadeUp}
                    whileHover={{ x: 4, borderColor: 'var(--color-accent)' }}
                  >
                    <div className="expandable-header">
                      <div className="step-number">{m.step}</div>
                      <div className={`exp-icon icon-wrapper ${m.color}`} style={{ width: 30, height: 30, marginBottom: 0 }}>
                        <Icon size={14} />
                      </div>
                      <div className="exp-text">
                        <div className="exp-title">{m.title}</div>
                        <div className="exp-desc">{m.desc}</div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* Objectives as tags */}
            <motion.div variants={fadeUp} style={{ marginTop: '0.75rem' }}>
              <div className="column-header" style={{ marginBottom: '0.5rem' }}>
                <div className="icon-wrapper green" style={{ width: 30, height: 30 }}>
                  <Target size={15} />
                </div>
                <h3 style={{ fontSize: 'clamp(0.9rem, 1.3vw, 1.05rem)', fontWeight: 700, color: 'var(--color-primary)', margin: 0 }}>Objetivos da Avaliação</h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {objectives.map((obj, i) => (
                  <motion.li
                    key={i}
                    variants={fadeUp}
                    style={{
                      fontSize: 'clamp(0.78rem, 1.1vw, 0.88rem)',
                      color: 'var(--color-text-secondary)',
                      padding: '0.35rem 0',
                      paddingLeft: '1.2rem',
                      position: 'relative',
                      lineHeight: 1.4,
                      borderBottom: '1px solid var(--color-border)',
                    }}
                  >
                    <span style={{
                      position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)',
                      width: 6, height: 6, borderRadius: '50%', border: '2px solid var(--color-accent)',
                    }} />
                    {obj}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div className="image-content" variants={fadeUp}>
            <div className="slide-illustration">
              <img
                src="/images/physiotherapy_evaluation.png"
                alt="Ilustração — Avaliação fisioterapêutica"
              />
            </div>
          </motion.div>
        </motion.div>

        <motion.div className="highlight-box" variants={fadeUp}>
          <h4><BookOpen size={12} style={{ verticalAlign: 'middle', marginRight: 4 }} /> Exames Complementares</h4>
          <p>
            <span className="keyword">Manometria anorretal</span>,{' '}
            <span className="keyword">ultrassonografia endoanal</span>,{' '}
            <span className="keyword">defecografia</span> e{' '}
            <span className="keyword">eletromiografia</span>.
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}
