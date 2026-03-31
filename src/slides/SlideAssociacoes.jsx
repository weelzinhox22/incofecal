import { motion } from 'framer-motion'
import { GitBranch, Link, Info, ArrowDownRight } from 'lucide-react'

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const flowItem = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function SlideAssociacoes({ slideNumber }) {
  const associations = [
    {
      from: 'Dissinergia Evacuatória',
      to: 'Evacuação Obstruída',
      detail: 'A contração paradoxal do assoalho pélvico impede a saída do conteúdo fecal, gerando esforço prolongado e retenção.',
    },
    {
      from: 'Hipossensibilidade Retal',
      to: 'Constipação Crônica',
      detail: 'A perda da percepção de enchimento resulta em acúmulo fecal progressivo, distensão retal e megarreto.',
    },
    {
      from: 'Incontinência Fecal',
      to: 'Comprometimento neuromuscular',
      detail: 'Lesão esfincteriana ou denervação pudenda compromete o controle evacuatório e a continência.',
    },
    {
      from: 'Retenção Fecal Crônica',
      to: 'Incontinência por Transbordamento',
      detail: 'Acúmulo excessivo causa extravasamento passivo, confundindo-se clinicamente com incontinência verdadeira.',
    },
  ]

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
            <GitBranch size={22} />
          </div>
          <h2 className="slide-title">Relações entre os Distúrbios</h2>
        </motion.div>

        <motion.p className="slide-subtitle" variants={fadeUp}>
          Fluxograma clínico demonstrando as associações fisiopatológicas entre os
          principais distúrbios evacuatórios e suas consequências clínicas.
        </motion.p>

        <div className="flowchart">
          {associations.map((assoc, i) => (
            <motion.div key={i} variants={flowItem}>
              <div className="flow-row">
                <div className="flow-node cause">
                  {assoc.from}
                </div>
                <div className="flow-animated-arrow">
                  <motion.div
                    className="arrow-line"
                    initial={{ width: 0 }}
                    animate={{ width: 40 }}
                    transition={{ delay: 0.8 + i * 0.25, duration: 0.5, ease: 'easeOut' }}
                  >
                    <motion.div
                      className="arrow-particle"
                      animate={{ left: ['0%', '100%'], opacity: [0, 1, 0] }}
                      transition={{ delay: 1.3 + i * 0.25, duration: 1.2, repeat: Infinity, repeatDelay: 1 }}
                    />
                  </motion.div>
                </div>
                <div className="flow-node result">
                  {assoc.to}
                </div>
              </div>
              <p className="detail-text" style={{
                textAlign: 'center', marginTop: '0.15rem', maxWidth: 700,
                marginLeft: 'auto', marginRight: 'auto', fontSize: 'clamp(0.7rem, 1vw, 0.8rem)',
              }}>
                {assoc.detail}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div className="highlight-box" variants={fadeUp} style={{ marginTop: '1rem' }}>
          <h4><Link size={12} style={{ verticalAlign: 'middle', marginRight: 4 }} /> Interconexão Clínica</h4>
          <p>
            Esses distúrbios frequentemente <span className="keyword">coexistem</span> e compartilham
            mecanismos fisiopatológicos. Um mesmo paciente pode apresentar evacuação obstruída por
            dissinergia associada a hipossensibilidade retal, ou desenvolver incontinência por
            transbordamento secundária à retenção fecal crônica. A abordagem <span className="keyword">multidisciplinar</span> e
            a avaliação clínica integrada são fundamentais para o diagnóstico diferencial e o plano
            terapêutico individualizado.
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}
