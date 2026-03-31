import { motion } from 'framer-motion'
import { Table2, ShieldAlert, Shuffle, OctagonX, EyeOff } from 'lucide-react'

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const tableRow = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

const data = [
  {
    icon: ShieldAlert,
    disorder: 'Incontinência Fecal',
    definition: 'Perda involuntária de fezes ou gases por falha no controle esfincteriano',
    mainCause: 'Lesão esfincteriana, obstétrica ou neurológica',
    treatment: 'Fortalecimento do assoalho pélvico e biofeedback',
  },
  {
    icon: Shuffle,
    disorder: 'Dissinergia Evacuatória',
    definition: 'Descoordenação reto-anal com contração paradoxal durante evacuação',
    mainCause: 'Disfunção da coordenação muscular pélvica',
    treatment: 'Biofeedback e treino de coordenação evacuatória',
  },
  {
    icon: OctagonX,
    disorder: 'Evacuação Obstruída',
    definition: 'Dificuldade para eliminar fezes apesar da presença no reto',
    mainCause: 'Dissinergia, retocele, intussuscepção',
    treatment: 'Treino evacuatório e manejo comportamental',
  },
  {
    icon: EyeOff,
    disorder: 'Hipossensibilidade Retal',
    definition: 'Diminuição da percepção sensorial retal ao enchimento fecal',
    mainCause: 'Neuropatia, megarreto, uso crônico de laxantes',
    treatment: 'Treinamento sensorial com balão e biofeedback',
  },
]

export default function SlideResumo({ slideNumber }) {
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
            <Table2 size={24} />
          </div>
          <div>
            <h2 className="slide-title">Resumo Geral</h2>
          </div>
        </motion.div>

        <motion.p className="slide-subtitle" variants={fadeUp}>
          Quadro comparativo dos principais distúrbios evacuatórios, suas definições,
          etiologias predominantes e abordagens terapêuticas.
        </motion.p>

        <motion.table className="comparison-table" variants={stagger}>
          <thead>
            <motion.tr variants={fadeUp}>
              <th style={{ width: '44px' }}></th>
              <th>Distúrbio</th>
              <th>Definição</th>
              <th>Causa Principal</th>
              <th>Tratamento Fisioterapêutico</th>
            </motion.tr>
          </thead>
          <tbody>
            {data.map((row, i) => {
              const Icon = row.icon
              return (
                <motion.tr key={i} variants={tableRow}>
                  <td style={{ textAlign: 'center' }}>
                    <Icon size={18} style={{ color: 'var(--color-accent)' }} />
                  </td>
                  <td>{row.disorder}</td>
                  <td>{row.definition}</td>
                  <td>{row.mainCause}</td>
                  <td>{row.treatment}</td>
                </motion.tr>
              )
            })}
          </tbody>
        </motion.table>
      </motion.div>
    </div>
  )
}
