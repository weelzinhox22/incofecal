import { motion } from 'framer-motion'
import { Activity, Dumbbell, MonitorSmartphone, RotateCcw, GraduationCap, Target, CheckCircle2, Users, Zap, Wind } from 'lucide-react'

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

const interventions = [
  {
    icon: Dumbbell,
    label: 'Treinamento do Assoalho Pélvico',
    desc: 'Exercícios de contração e relaxamento (Kégel) para fortalecer fibras rápidas (força) e lentas (resistência), visando a continência em repouso e sob esforço.',
    color: 'blue',
    success: '70%',
    highlight: false,
  },
  {
    icon: Activity,
    label: 'Biofeedback Anorretal & EMG',
    desc: 'Uso de sensores de Eletromiografia (EMG) ou pressão para fornecer feedback visual/auditivo da atividade muscular, reeducando o padrão motor e a coordenação.',
    color: 'green',
    success: '80%',
    highlight: true,
  },
  {
    icon: Zap,
    label: 'Neuromodulação (PTNS)',
    desc: 'Estimulação elétrica do nervo tibial posterior para modular os reflexos sacrais, melhorando a percepção retal e a função do esfíncter anal.',
    color: 'orange',
    success: '75%',
    highlight: false,
  },
  {
    icon: Wind,
    label: 'Reeducação Sensorial (Balão)',
    desc: 'Treino com balão intra-retal para normalizar limiares de sensibilidade (hipo ou hipersensibilidade) e o reflexo de amostragem anal.',
    color: 'teal',
    success: '70%',
    highlight: false,
  },
  {
    icon: GraduationCap,
    label: 'Educação Comportamental',
    desc: 'Orientações sobre postura evacuatória (uso de banquinho), dieta e rotina intestinal regular.',
    color: 'purple',
    success: '—',
    highlight: false,
  },
]

export default function SlideTratamento({ slideNumber }) {
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
            <Activity size={22} />
          </div>
          <h2 className="slide-title">Abordagem Fisioterapêutica</h2>
        </motion.div>

        {/* Success stats strip */}
        <motion.div className="stat-grid" variants={stagger} style={{ gridTemplateColumns: 'repeat(3, 1fr)', marginBottom: '0.5rem', marginTop: '0.25rem' }}>
          <motion.div className="stat-card" variants={scaleIn} whileHover={{ scale: 1.05 }}>
            <div className="stat-number">
              <CheckCircle2 size={18} style={{ verticalAlign: 'middle', marginRight: 4 }} />
              1ª Linha
            </div>
            <div className="stat-label">Tratamento conservador</div>
          </motion.div>
          <motion.div className="stat-card" variants={scaleIn} whileHover={{ scale: 1.05 }}>
            <div className="stat-number">60-80%</div>
            <div className="stat-label">Taxa de sucesso (dissinergia)</div>
          </motion.div>
          <motion.div className="stat-card" variants={scaleIn} whileHover={{ scale: 1.05 }}>
            <div className="stat-number">Nível A</div>
            <div className="stat-label">Evidência científica</div>
          </motion.div>
        </motion.div>

        <motion.div className="content-with-image" variants={stagger}>
          <div className="text-content">
            <motion.div className="expandable-list" variants={stagger}>
              {interventions.map((item, i) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={i}
                    className={`expandable-item ${item.highlight ? 'card' : ''}`}
                    variants={fadeUp}
                    whileHover={{ x: 4, borderColor: 'var(--color-accent)' }}
                    style={item.highlight ? { 
                      padding: '1rem', 
                      background: 'var(--color-accent-lighter)',
                      border: '1px solid var(--color-accent)',
                      marginBottom: '0.5rem'
                    } : {}}
                  >
                    <div className="expandable-header">
                      <div className="step-number">{i + 1}</div>
                      <div className={`exp-icon icon-wrapper ${item.color}`} style={{ width: item.highlight ? 40 : 30, height: item.highlight ? 40 : 30, marginBottom: 0 }}>
                        <Icon size={item.highlight ? 20 : 14} />
                      </div>
                      <div className="exp-text">
                        <div className="exp-title" style={item.highlight ? { color: 'var(--color-accent)', fontWeight: 800, fontSize: '1.1rem' } : {}}>{item.label}</div>
                        <div className="exp-desc">{item.desc}</div>
                      </div>
                      {item.success !== '—' && (
                        <span className="tag accent" style={{ flexShrink: 0 }}>{item.success}</span>
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>

          <motion.div className="image-content" variants={fadeUp}>
            <div className="slide-illustration">
              <img
                src="/images/biofeedback_treatment.png"
                alt="Biofeedback anorretal"
              />
            </div>
          </motion.div>
        </motion.div>

        <motion.div className="highlight-box" variants={fadeUp}>
          <h4><Users size={12} style={{ verticalAlign: 'middle', marginRight: 4 }} /> Abordagem Multidisciplinar</h4>
          <p>
            O tratamento ideal envolve equipe multidisciplinar: <span className="keyword">fisioterapeuta</span> (reabilitação muscular),{' '}
            <span className="keyword">nutricionista</span> (adequação de fibras e hidratação),{' '}
            <span className="keyword">psicólogo</span> (manejo da ansiedade e comportamento evacuatório) e{' '}
            <span className="keyword">coloproctologista</span> (avaliação e acompanhamento clínico).
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}
