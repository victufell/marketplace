"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { type VisitorData } from "@/lib/schema"

const data: VisitorData[] = [
  { date: "25", visitors: 30 },
  { date: "26", visitors: 45 },
  { date: "27", visitors: 25 },
  { date: "28", visitors: 60 },
  { date: "29", visitors: 35 },
  { date: "30", visitors: 80 },
  { date: "01", visitors: 45 },
  { date: "02", visitors: 70 },
  { date: "03", visitors: 50 },
  { date: "04", visitors: 90 },
  { date: "05", visitors: 60 },
  { date: "06", visitors: 120 },
  { date: "07", visitors: 80 },
  { date: "08", visitors: 153 },
  { date: "09", visitors: 110 },
  { date: "10", visitors: 140 },
  { date: "11", visitors: 130 },
  { date: "12", visitors: 145 },
  { date: "13", visitors: 135 },
  { date: "14", visitors: 125 },
  { date: "15", visitors: 100 },
  { date: "16", visitors: 80 },
  { date: "17", visitors: 60 },
  { date: "18", visitors: 45 },
  { date: "19", visitors: 30 },
]

export function VisitorChart() {
  return (
    <Card className="col-span-4 border-none bg-shape">
      <CardHeader className="space-y-0 pb-6">
        <CardTitle className="font-DM_Sans text-xl text-gray-500">Visitantes</CardTitle>
        <div className="font-poppins text-sm text-gray-200">
          26 DE JUNHO - 25 DE JUNHO
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <XAxis
              dataKey="date"
              stroke="#ADADAD"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              fontFamily="Poppins"
            />
            <YAxis
              stroke="#ADADAD"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}`}
              fontFamily="Poppins"
            />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="rounded-lg border border-shape bg-white p-2 shadow-sm">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex flex-col">
                          <span className="font-poppins text-[0.70rem] uppercase text-gray-200">
                            {payload[0].payload.date}
                          </span>
                          <span className="font-poppins font-bold text-gray-300">
                            {payload[0].value} visitantes
                          </span>
                        </div>
                      </div>
                    </div>
                  )
                }
                return null
              }}
            />
            <Line
              type="monotone"
              dataKey="visitors"
              stroke="#5EC5FD"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

