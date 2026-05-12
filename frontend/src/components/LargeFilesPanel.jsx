import { motion } from 'framer-motion'

function LargeFilesPanel({ largeFiles }) {

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
        Large Files Detected
      </h2>

      <div className="space-y-4">

        {largeFiles.length === 0 ? (

          <div className="
            bg-slate-950
            border
            border-slate-800
            rounded-xl
            p-4
            text-slate-400
          ">
            No large files detected.
          </div>

        ) : (

          largeFiles.map((file, index) => (

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
                flex
                justify-between
                items-center
              "
            >

              <span>{file.name}</span>

              <span className="text-cyan-400 font-bold">
                {file.size} MB
              </span>

            </motion.div>

          ))

        )}

      </div>

    </motion.div>

  )
}

export default LargeFilesPanel