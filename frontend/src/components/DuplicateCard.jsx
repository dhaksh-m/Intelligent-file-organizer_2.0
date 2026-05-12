import { motion } from 'framer-motion'

function DuplicateCard({ duplicates }) {

  return (

    <motion.div

      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}

      whileHover={{
        scale: 1.03,
      }}

      className="
        bg-red-500/10
        border
        border-red-500/30
        rounded-2xl
        p-6
        shadow-xl
        mt-8
      "
    >

      <h2 className="text-2xl font-bold text-red-400">
        Duplicate Files Detected
      </h2>

      <p className="text-5xl font-bold mt-4">
        {duplicates}
      </p>

      <p className="text-slate-400 mt-3">
        Duplicate files waste storage space.
      </p>

    </motion.div>
  )
}

export default DuplicateCard