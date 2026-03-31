import { motion } from 'framer-motion'
import { ShieldAlert, Zap, Search, HeartCrack, ArrowRight, BarChart3 } from 'lucide-react'

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

export default function SlideIncontinencia({ slideNumber }) {
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
            <ShieldAlert size={22} />
          </div>
          <div>
            <h2 className="slide-title">Incontinência Fecal</h2>
          </div>
        </motion.div>

        <motion.div className="content-with-image" variants={stagger}>
          <div className="text-content">
            <motion.div className="definition-box" variants={fadeUp}>
              <p>
                Perda involuntária de fezes ou gases devido à <strong>incapacidade de controle
                dos esfíncteres anais</strong>.
              </p>
            </motion.div>

            {/* Stats strip — visual break */}
            <motion.div className="stat-grid" variants={stagger} style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
              <motion.div className="stat-card" variants={scaleIn} whileHover={{ scale: 1.05 }}>
                <div className="stat-number">2-15%</div>
                <div className="stat-label">Prevalência geral</div>
              </motion.div>
              <motion.div className="stat-card" variants={scaleIn} whileHover={{ scale: 1.05 }}>
                <div className="stat-number">
                  <BarChart3 size={18} style={{ verticalAlign: 'middle', marginRight: 2 }} />
                  50%
                </div>
                <div className="stat-label">Idosos institucionalizados</div>
              </motion.div>
              <motion.div className="stat-card" variants={scaleIn} whileHover={{ scale: 1.05 }}>
                <div className="stat-number">3x</div>
                <div className="stat-label">Mais comum em multíparas</div>
              </motion.div>
            </motion.div>
          </div>
          <motion.div className="image-content" variants={fadeUp}>
            <div className="slide-illustration medium">
              <img
                src="/images/fecal_incontinence.png"
                alt="Ilustração do esfíncter anal — Incontinência Fecal"
              />
            </div>
          </motion.div>
        </motion.div>

        <motion.div className="cards-grid" variants={stagger}>
          <motion.div className="card card-animated card-shimmer" variants={fadeUp} whileHover={{ y: -3 }}>
            <div className="icon-wrapper red icon-pulse"><Zap size={18} /></div>
            <h3 style={{ fontSize: 'clamp(0.9rem, 1.3vw, 1rem)' }}>Causas Principais</h3>
            <ul>
              <li>Fraqueza do esfíncter anal interno e/ou externo</li>
              <li>Lesões neurológicas (central ou periférica)</li>
              <li>Lesões obstétricas (lacerações grau III/IV)</li>
              <li>Envelhecimento e degeneração muscular</li>
              <li>Diarreia crônica e doenças inflamatórias</li>
              <li>Alterações cognitivas e demências</li>
              <li>Cirurgias anorretais prévias</li>
            </ul>
          </motion.div>

          <motion.div className="card card-animated card-shimmer" variants={fadeUp} whileHover={{ y: -3 }}>
            <div className="icon-wrapper blue icon-pulse"><Search size={18} /></div>
            <h3 style={{ fontSize: 'clamp(0.9rem, 1.3vw, 1rem)' }}>Sinais e Sintomas</h3>
            <ul>
              <li>Perda involuntária de fezes sólidas, líquidas ou gasosas</li>
              <li>Escape de gases sem controle voluntário</li>
              <li>Urgência evacuatória — necessidade imediata</li>
              <li>Sujidade anal e dermatite perianal</li>
              <li>Incontinência passiva (sem percepção)</li>
              <li>Soiling (perda de pequenas quantidades)</li>
            </ul>
          </motion.div>

          <motion.div className="card card-animated card-shimmer" variants={fadeUp} whileHover={{ y: -3 }}>
            <div className="icon-wrapper orange icon-pulse"><HeartCrack size={18} /></div>
            <h3 style={{ fontSize: 'clamp(0.9rem, 1.3vw, 1rem)' }}>Impactos Funcionais</h3>
            <ul>
              <li>Redução significativa da qualidade de vida</li>
              <li>Isolamento social e limitação de atividades</li>
              <li>Ansiedade, depressão e baixa autoestima</li>
              <li>Comprometimento das atividades laborais</li>
              <li>Dependência de absorventes</li>
              <li>Impacto nas relações interpessoais</li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div className="highlight-box" variants={fadeUp}>
          <h4><ArrowRight size={12} style={{ verticalAlign: 'middle', marginRight: 4 }} /> Classificação</h4>
          <p>
            Classifica-se como <span className="keyword">urgência</span> (perda associada a forte vontade),{' '}
            <span className="keyword">passiva</span> (perda sem percepção) ou{' '}
            <span className="keyword">soiling</span> (pequenas quantidades).
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}
