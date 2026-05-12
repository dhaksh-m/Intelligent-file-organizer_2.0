function ActivityPanel() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl mt-8">

      <h2 className="text-2xl font-semibold mb-5">
        Recent Activity
      </h2>

      <div className="space-y-4">

        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
          Organized Downloads folder
        </div>

        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
          Moved 42 image files
        </div>

        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
          Removed duplicate documents
        </div>

      </div>

    </div>
  )
}

export default ActivityPanel