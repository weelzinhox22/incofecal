import { motion } from 'framer-motion'
import { Stethoscope, ChevronDown, User, GraduationCap, Building2 } from 'lucide-react'

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function SlideCover({ isPDF }) {
  return (
    <div className="slide slide-cover">
      <motion.div
        className="cover-content"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        <motion.div className="cover-illustration" variants={fadeUp}>
          <img
            src="/images/anatomy_intestine.png"
            alt="Ilustração anatômica do intestino grosso e reto"
          />
        </motion.div>

        <motion.h1 className="cover-title" variants={fadeUp}>
          Distúrbios Evacuatórios
        </motion.h1>

        <motion.p className="cover-subtitle" variants={fadeUp}>
          Abordagem Clínica e Fisioterapêutica
        </motion.p>

        <motion.div className="cover-info-grid" variants={fadeUp}>
          <div className="cover-info-item">
            <User size={14} />
            <span><strong>Discente:</strong> Wesley Sacramento</span>
          </div>
          <div className="cover-info-item">
            <GraduationCap size={14} />
            <span><strong>Docente:</strong> Profª. Leandra Oliva</span>
          </div>
          <div className="cover-info-item">
            <Building2 size={14} />
            <span>Unime Anhanguera</span>
          </div>
        </motion.div>

        {!isPDF && (
          <motion.p className="cover-start-hint" variants={fadeUp}>
            <ChevronDown size={16} style={{ verticalAlign: 'middle', marginRight: 4 }} />
            Pressione ↓ ou role para começar
          </motion.p>
        )}
      </motion.div>
    </div>
  )
}
