import { useState } from 'react'
import { motion } from 'framer-motion'

function SearchPanel() {

  const [path, setPath] = useState('')
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  const searchFiles = async () => {

    if (!path || !query) {
      return
    }

    try {

      const response = await fetch(
        'http://127.0.0.1:8000/search',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            path,
            query,
          }),
        }
      )

      const data = await response.json()

      setResults(data.results)

    } catch (error) {

      console.error(error)

    }
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
        Search Files
      </h2>

      <div className="flex flex-col md:flex-row gap-4">

        <input
          type="text"
          placeholder="Folder path..."
          value={path}
          onChange={(e) => setPath(e.target.value)}
          className="
            flex-1
            bg-slate-950
            border
            border-slate-700
            rounded-xl
            px-4
            py-3
            outline-none
          "
        />

        <input
          type="text"
          placeholder="Search query..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="
            flex-1
            bg-slate-950
            border
            border-slate-700
            rounded-xl
            px-4
            py-3
            outline-none
          "
        />

        <button
          onClick={searchFiles}
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

          Search

        </button>

      </div>

      <div className="space-y-4 mt-6">

        {results.map((file, index) => (

          <motion.div

            key={index}

            whileHover={{
              scale: 1.01,
            }}

            className="
              bg-slate-950
              border
              border-slate-800
              rounded-xl
              p-4
            "
          >

            <p className="font-semibold">
              {file.name}
            </p>

            <p className="text-slate-400 text-sm mt-1">
              {file.location}
            </p>

          </motion.div>

        ))}

      </div>

    </motion.div>

  )
}

export default SearchPanel