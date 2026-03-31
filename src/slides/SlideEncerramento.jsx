import { motion } from 'framer-motion'
import { Stethoscope, ArrowUp, Heart } from 'lucide-react'

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function SlideEncerramento({ slideNumber, goToSlide }) {
  return (
    <div className="slide slide-closing">
      <motion.div
        className="slide-content"
        variants={stagger}
        initial="hidden"
        animate="show"
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <motion.div variants={fadeUp} style={{ marginBottom: '1.5rem' }}>
          <Stethoscope size={48} strokeWidth={1.5} />
        </motion.div>

        <motion.h2 className="slide-title" variants={fadeUp}>
          Importância Clínica
        </motion.h2>

        <motion.p variants={fadeUp}>
          O reconhecimento precoce dos distúrbios evacuatórios permite intervenção
          fisioterapêutica eficaz, prevenindo complicações e melhorando a qualidade
          de vida dos pacientes. A fisioterapia pélvica representa a primeira linha
          de tratamento conservador, com evidências robustas de eficácia.
        </motion.p>

        <motion.button
          className="btn-primary"
          variants={fadeUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => goToSlide(0)}
          id="btn-review"
        >
          <ArrowUp size={18} />
          Revisar Conteúdo
        </motion.button>

        <motion.p
          variants={fadeUp}
          style={{
            marginTop: '2rem',
            fontSize: '0.85rem',
            opacity: 0.6,
            fontWeight: 300,
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <Heart size={14} />
          Fisioterapia Pélvica &amp; Coloproctologia
        </motion.p>
      </motion.div>
    </div>
  )
}
