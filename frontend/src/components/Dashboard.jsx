import { useState } from 'react'

import FolderInput from './FolderInput'
import StatsCard from './StatsCard'
import ActivityPanel from './ActivityPanel'
import Analytics from './Analytics'
import SuggestionsPanel from './SuggestionsPanel'
import DuplicateCard from './DuplicateCard'
import LargeFilesPanel from './LargeFilesPanel'
import SearchPanel from './SearchPanel'

function Dashboard() {

  const [stats, setStats] = useState({
    Images: 0,
    Documents: 0,
    Videos: 0,
    Code: 0,
  })

  const [duplicates, setDuplicates] = useState(0)

  const [largeFiles, setLargeFiles] = useState([])

  return (

    <div className="p-8">

      <FolderInput
        setStats={setStats}
        setDuplicates={setDuplicates}
        setLargeFiles={setLargeFiles}
      />

      <div className="grid md:grid-cols-4 gap-6 mt-8">

        <StatsCard
          title="Images"
          count={stats.Images}
        />

        <StatsCard
          title="Documents"
          count={stats.Documents}
        />

        <StatsCard
          title="Videos"
          count={stats.Videos}
        />

        <StatsCard
          title="Code"
          count={stats.Code}
        />

      </div>

      <Analytics stats={stats} />

      <DuplicateCard duplicates={duplicates} />

      <LargeFilesPanel largeFiles={largeFiles} />

      <SuggestionsPanel stats={stats} />

      <SearchPanel />

      <ActivityPanel />

    </div>

  )
}

export default Dashboard