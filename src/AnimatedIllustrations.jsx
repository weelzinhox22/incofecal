import { motion } from 'framer-motion'

/**
 * Animated pelvic floor diagram - shows reto, esfíncter, puborretal
 * with animated arrows and contraction indicators
 */
export function AnimPelvicFloor({ paradoxal = false }) {
  return (
    <motion.div
      className="anim-pelvic"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div className="organ-rect reto">Reto</div>
      <div className="flow-arrow-down" />
      <div className="organ-rect esfinct">Esfíncter Anal</div>
      <div className="contraction-wave" />
      <div className="flow-arrow-down2" />
      <div className="organ-rect puborretal">M. Puborretal</div>
      <div className={`status-label ${paradoxal ? 'paradoxal' : 'normal'}`}>
        {paradoxal ? '⚠ Contração paradoxal' : '✓ Relaxamento normal'}
      </div>
    </motion.div>
  )
}

/**
 * Animated biofeedback monitor - EMG waves and pressure signals
 */
export function AnimBiofeedback() {
  return (
    <motion.div
      className="anim-biofeedback"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <div className="bf-header">
        <span>Biofeedback EMG</span>
        <div className="bf-dot" />
      </div>
      <div className="bf-wave-container">
        <div className="bf-wave" />
      </div>
      <div className="bf-emg">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="bf-emg-bar"
            style={{
              left: `${i * 8.5 + 2}%`,
              animationDelay: `${i * 0.15}s`,
            }}
          />
        ))}
      </div>
      <div className="bf-label">Atividade muscular em tempo real</div>
    </motion.div>
  )
}

/**
 * Animated sensitivity gauge
 */
export function AnimSensitivityGauge() {
  return (
    <motion.div
      className="anim-gauge"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div className="gauge-track" />
      <div className="gauge-fill" />
      <div className="gauge-center">
        <div className="gauge-value">↑↑</div>
        <div className="gauge-text">Limiar</div>
      </div>
      <div className="gauge-label">Sensibilidade retal diminuída</div>
    </motion.div>
  )
}

/**
 * Animated flow arrow with particle
 */
export function AnimFlowArrow() {
  return (
    <div className="flow-animated-arrow">
      <div className="arrow-line">
        <div className="arrow-particle" />
      </div>
    </div>
  )
}
