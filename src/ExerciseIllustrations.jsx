import { motion } from 'framer-motion'

/**
 * Breathing Illustration - Diaphragmatic breathing with glottic blow
 */
export function DiaphragmaticBreathing() {
  return (
    <div className="exercise-svg-container">
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Torso & Head Outline */}
        <path d="M45 10 Q55 10 55 15 L55 25 Q75 30 75 50 L70 85 Q50 90 30 85 L25 50 Q25 30 45 25 Z" fill="var(--color-primary-lighter)" opacity="0.1" stroke="var(--color-primary)" strokeWidth="0.5" />
        
        {/* Pursed Lips for Glottic Blow */}
        <path d="M48 18 Q50 17 52 18" stroke="var(--color-primary)" strokeWidth="1" strokeLinecap="round" />
        
        {/* Lungs */}
        <path d="M40 35 Q30 35 30 55 Q30 65 45 65 L45 35 Z M60 35 Q70 35 70 55 Q70 65 55 65 L55 35 Z" fill="var(--color-primary)" opacity="0.2" />
        
        {/* Diaphragm - Animated */}
        <motion.path
          d="M30 65 Q50 55 70 65"
          stroke="var(--color-primary)"
          strokeWidth="3"
          strokeLinecap="round"
          animate={{ 
            d: ["M30 65 Q50 55 70 65", "M30 75 Q50 65 70 75", "M30 65 Q50 55 70 65"] 
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Rib Cage Expansion */}
        <motion.path
          d="M35 45 L28 48 M65 45 L72 48"
          stroke="var(--color-primary)"
          strokeWidth="1"
          opacity="0.5"
          animate={{ x: [-2, 2, -2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Air Flow Particles (Sopro Glótico) */}
        <motion.g
          animate={{ y: [-5, -20], x: [-2, 2, -2], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <circle cx="50" cy="15" r="1.5" fill="var(--color-accent)" />
          <circle cx="48" cy="12" r="1" fill="var(--color-accent)" opacity="0.6" />
        </motion.g>
      </svg>
    </div>
  )
}

/**
 * Pelvic Mobility Illustration - Swiss Ball with Pelvic Tilt
 */
export function PelvicMobility() {
  return (
    <div className="exercise-svg-container">
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Swiss Ball with Texture */}
        <circle cx="50" cy="75" r="22" fill="var(--color-orange)" opacity="0.2" stroke="var(--color-orange)" strokeWidth="1" />
        <path d="M35 65 Q50 60 65 65 M32 75 Q50 70 68 75 M35 85 Q50 80 65 85" stroke="var(--color-orange)" strokeWidth="0.5" opacity="0.3" />
        
        {/* Pelvis & Spine Figure */}
        <motion.g
          animate={{ rotate: [-5, 5, -5] }}
          style={{ originX: "50px", originY: "55px" }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Spine */}
          <path d="M50 55 L50 25" stroke="var(--color-text)" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
          {/* Head */}
          <circle cx="50" cy="20" r="5" fill="var(--color-text)" opacity="0.8" />
          {/* Pelvis Shape */}
          <path d="M40 55 Q50 50 60 55 L55 62 Q50 65 45 62 Z" fill="var(--color-primary)" opacity="0.4" stroke="var(--color-primary)" strokeWidth="1" />
        </motion.g>

        {/* Directional Circular Arrows */}
        <motion.path
          d="M25 75 A25 25 0 0 1 75 75"
          stroke="var(--color-orange)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          strokeLinecap="round"
          animate={{ rotate: [0, 360] }}
          style={{ originX: "50px", originY: "75px" }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </svg>
    </div>
  )
}

/**
 * Deep Squat Illustration - Malasansana with Rectum Detail
 */
export function DeepSquat() {
  return (
    <div className="exercise-svg-container">
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Floor */}
        <line x1="10" y1="90" x2="90" y2="90" stroke="var(--color-border)" strokeWidth="1" />
        
        {/* Banquinho (Stool) */}
        <path d="M35 90 L35 82 L65 82 L65 90" stroke="var(--color-text-muted)" strokeWidth="2" strokeLinecap="round" fill="var(--color-bg-alt)" />
        
        {/* Squatting Figure (Side View) */}
        <path d="M40 82 L30 65 L45 45 L45 25" stroke="var(--color-accent)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="45" cy="20" r="6" fill="var(--color-accent)" />
        
        {/* Anatomical Rectum Detail - Shows opening angle */}
        <g transform="translate(48, 65)">
          {/* Rectum */}
          <path d="M0 -15 L0 0 L10 5" stroke="var(--color-primary)" strokeWidth="3" strokeLinecap="round" opacity="0.3" />
          {/* Puborectalis Muscle - Relaxing */}
          <motion.path
            d="M-5 5 Q0 10 5 5"
            stroke="var(--color-warning)"
            strokeWidth="2"
            strokeLinecap="round"
            animate={{ scaleX: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          {/* Angle Indicator */}
          <motion.path
            d="M5 -10 A15 15 0 0 1 15 5"
            stroke="var(--color-accent)"
            strokeWidth="1"
            strokeDasharray="2 2"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </g>
      </svg>
    </div>
  )
}

/**
 * Perineal Massage Illustration - Anatomical Detail
 */
export function PerinealMassage() {
  return (
    <div className="exercise-svg-container">
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Pelvic Bone Structure (Schematic) */}
        <path d="M25 30 Q15 40 25 70 M75 30 Q85 40 75 70" stroke="var(--color-text-muted)" strokeWidth="2" opacity="0.3" />
        <circle cx="50" cy="30" r="5" fill="var(--color-text-muted)" opacity="0.2" /> {/* Pubic bone */}
        <path d="M45 85 L55 85" stroke="var(--color-text-muted)" strokeWidth="3" opacity="0.2" /> {/* Coccyx */}
        
        {/* Levator Ani Muscles */}
        <path d="M30 40 Q50 90 70 40" stroke="var(--color-primary)" strokeWidth="5" opacity="0.2" strokeLinecap="round" />
        
        {/* Trigger Point / Massage Area */}
        <motion.g
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Massage Pressure Wave */}
          <motion.circle
            cx="50"
            cy="70"
            r="10"
            stroke="var(--color-purple)"
            strokeWidth="1"
            strokeDasharray="2 2"
            animate={{ r: [10, 20], opacity: [1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          {/* The Point */}
          <circle cx="50" cy="70" r="4" fill="var(--color-purple)" />
          {/* Manual pressure indicator */}
          <path d="M42 78 L50 70 L58 78" stroke="var(--color-purple)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </motion.g>

        {/* Release Indicators */}
        <motion.path
          d="M35 70 L25 70 M65 70 L75 70"
          stroke="var(--color-accent)"
          strokeWidth="1"
          strokeLinecap="round"
          animate={{ opacity: [0, 1, 0], x: [-5, 5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </svg>
    </div>
  )
}
