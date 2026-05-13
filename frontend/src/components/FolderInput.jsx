import { useState } from 'react'

function FolderInput({
  setStats,
  setDuplicates,
  setLargeFiles,
}) {

  const [path, setPath] = useState('')
  const [loading, setLoading] = useState(false)

  const organizeFiles = async () => {

    if (!path) {
      alert('Enter folder path')
      return
    }

    try {

      setLoading(true)

      const response = await fetch(
        'https://intelligent-file-organizer-2-0.onrender.com/organize',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ path }),
        }
      )

      const data = await response.json()

      console.log(data)

      // Update stats
      if (data.stats) {
        setStats(data.stats)
      }

      // Update duplicate count
      if (data.duplicates !== undefined) {
        setDuplicates(data.duplicates)
      }

      // Update large files
      if (data.large_files) {
        setLargeFiles(data.large_files)
      }

      alert(data.status)

    } catch (error) {

      console.error(error)
      alert('Backend connection failed')

    } finally {

      setLoading(false)

    }
  }

  return (

    <div className="
      bg-slate-900
      border
      border-slate-800
      rounded-2xl
      p-6
      shadow-xl
    ">

      <h2 className="text-2xl font-semibold mb-5">
        Select Folder
      </h2>

      <div className="flex flex-col md:flex-row gap-4">

        <input
          type="text"
          placeholder="Enter folder path..."
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

        <button
          onClick={organizeFiles}
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

          {loading
            ? 'Organizing...'
            : 'Start Organizing'}

        </button>

      </div>

    </div>

  )
}

export default FolderInput