import { motion } from 'framer-motion'

function Navbar() {
  return (

    <motion.nav

      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}

      transition={{
        duration: 0.5,
      }}

      className="
        w-full
        border-b
        border-slate-800
        px-8
        py-5
        flex
        items-center
        justify-between
      "
    >

      <div>

        <h1 className="text-4xl font-bold text-cyan-400">
          Intelligent File Organizer
        </h1>

        <p className="text-slate-400 text-sm">
          AI-powered smart file management
        </p>

      </div>

      <motion.button

        whileHover={{
          scale: 1.05,
        }}

        whileTap={{
          scale: 0.95,
        }}

        className="
          bg-cyan-500
          hover:bg-cyan-600
          px-6
          py-3
          rounded-xl
          font-semibold
          transition
        "
      >

        Organize Files

      </motion.button>

    </motion.nav>
  )
}

export default Navbar