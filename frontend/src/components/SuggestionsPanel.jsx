import { motion } from 'framer-motion'

function SuggestionsPanel({ stats }) {

  const suggestions = []

  const totalFiles =
    stats.Images +
    stats.Documents +
    stats.Videos +
    stats.Code

  if (totalFiles > 20) {
    suggestions.push(
      'Your selected folder contains many files. Organization recommended.'
    )
  }

  if (stats.Videos > stats.Images) {
    suggestions.push(
      'Videos consume a large portion of storage.'
    )
  }

  if (stats.Documents > 10) {
    suggestions.push(
      'Large number of documents detected.'
    )
  }

  if (stats.Code > 5) {
    suggestions.push(
      'Development-related files found.'
    )
  }

  if (suggestions.length === 0) {
    suggestions.push(
      'Your storage looks clean and organized.'
    )
  }

  return (

    <motion.div

      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}

      transition={{
        duration: 0.5,
      }}

      className="
        bg-slate-900
        border
        border-slate-800
        rounded-2xl
        p-6
        shadow-xl
        mt-8
      "
    >

      <h2 className="text-2xl font-bold mb-5">
        AI Suggestions
      </h2>

      <div className="space-y-4">

        {suggestions.map((item, index) => (

          <motion.div

            key={index}

            whileHover={{
              scale: 1.02,
            }}

            className="
              bg-slate-950
              border
              border-slate-800
              rounded-xl
              p-4
              text-slate-300
            "
          >

            {item}

          </motion.div>

        ))}

      </div>

    </motion.div>

  )
}

export default SuggestionsPanel