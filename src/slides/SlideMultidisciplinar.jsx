import { motion } from 'framer-motion'
import { Users, Heart, Apple, Brain, Stethoscope, Activity } from 'lucide-react'

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
}

const team = [
  {
    icon: Activity,
    name: 'Fisioterapeuta',
    role: 'Reabilitação do assoalho pélvico, biofeedback, neuromodulação, reeducação sensorial e treino evacuatório',
    iconClass: 'fisio',
  },
  {
    icon: Apple,
    name: 'Nutricionista',
    role: 'Adequação de fibras (25-30g/dia), hidratação, dieta laxativa e orientação alimentar individualizada',
    iconClass: 'nutri',
  },
  {
    icon: Brain,
    name: 'Psicólogo',
    role: 'Manejo da ansiedade evacuatória, terapia comportamental, suporte emocional e autoestima',
    iconClass: 'psico',
  },
  {
    icon: Stethoscope,
    name: 'Coloproctologista',
    role: 'Diagnóstico diferencial, exames complementares, indicação cirúrgica quando necessário',
    iconClass: 'medico',
  },
  {
    icon: Heart,
    name: 'Enfermeiro',
    role: 'Orientação de cuidados, acompanhamento contínuo, educação em saúde e prevenção',
    iconClass: 'enferm',
  },
]

export default function SlideMultidisciplinar({ slideNumber }) {
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
            <Users size={22} />
          </div>
          <h2 className="slide-title">Equipe Multidisciplinar</h2>
        </motion.div>

        <motion.div className="definition-box" variants={fadeUp}>
          <p>
            O manejo dos distúrbios evacuatórios exige uma <strong>abordagem multidisciplinar integrada</strong>.
            A complexidade dessas condições — que envolve aspectos musculares, neurológicos,
            nutricionais e psicológicos — torna essencial a atuação coordenada de diferentes
            profissionais de saúde para um resultado terapêutico eficaz.
          </p>
        </motion.div>

        <motion.div className="team-grid" variants={stagger}>
          {team.map((member, i) => {
            const Icon = member.icon
            return (
              <motion.div
                key={i}
                className="team-card"
                variants={scaleIn}
                whileHover={{ y: -5, boxShadow: '0 12px 24px rgba(0,0,0,0.1)' }}
              >
                <div className={`team-icon ${member.iconClass}`}>
                  <Icon size={22} />
                </div>
                <div className="team-name">{member.name}</div>
                <div className="team-role">{member.role}</div>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div className="highlight-box" variants={fadeUp}>
          <h4><Users size={12} style={{ verticalAlign: 'middle', marginRight: 4 }} /> Importância da Nutrição</h4>
          <p>
            O aspecto nutricional é fundamental nos distúrbios evacuatórios. A ingesta adequada de
            <span className="keyword"> fibras</span> (25-30g/dia), <span className="keyword">hidratação</span> (1,5-2L/dia)
            e a orientação sobre alimentos que favorecem o trânsito intestinal são pilares
            indispensáveis do tratamento, complementando a reabilitação fisioterapêutica.
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}
