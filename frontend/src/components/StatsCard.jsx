import { motion } from 'framer-motion'

function StatsCard({ title, count }) {
  return (

    <motion.div

      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}

      whileHover={{
        scale: 1.03,
      }}

      transition={{
        duration: 0.4,
      }}

      className="
        bg-slate-900
        border
        border-slate-800
        rounded-2xl
        p-6
        shadow-lg
      "
    >

      <h3 className="text-slate-400 text-sm mb-2">
        {title}
      </h3>

      <p className="text-4xl font-bold text-cyan-400">
        {count}
      </p>

    </motion.div>
  )
}

export default StatsCard