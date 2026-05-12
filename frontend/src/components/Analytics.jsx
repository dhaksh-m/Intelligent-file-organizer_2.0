import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

import { motion } from 'framer-motion'

function Analytics({ stats }) {

  const data = [
    {
      name: 'Images',
      value: stats.Images,
    },
    {
      name: 'Documents',
      value: stats.Documents,
    },
    {
      name: 'Videos',
      value: stats.Videos,
    },
    {
      name: 'Code',
      value: stats.Code,
    },
  ]

  const COLORS = [
    '#06b6d4',
    '#3b82f6',
    '#8b5cf6',
    '#10b981',
  ]

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

      <div className="flex items-center justify-between mb-6">

        <div>

          <h2 className="text-2xl font-bold">
            Storage Analytics
          </h2>

          <p className="text-slate-400 text-sm">
            File distribution overview
          </p>

        </div>

      </div>

      <div className="h-[350px]">

        <ResponsiveContainer width="100%" height="100%">

          <PieChart>

            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={120}
              dataKey="value"
              label
            >

              {data.map((entry, index) => (

                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />

              ))}

            </Pie>

            <Tooltip />

          </PieChart>

        </ResponsiveContainer>

      </div>

    </motion.div>

  )
}

export default Analytics