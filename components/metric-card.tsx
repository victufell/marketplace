import { LucideIcon } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

interface MetricCardProps {
  icon: LucideIcon
  value: string | number
  label: string
}

export function MetricCard({ icon: Icon, value, label }: MetricCardProps) {
  return (
    <Card className="border-none bg-shape">
      <CardContent className="flex items-center gap-4 p-4">
        <div className="rounded-lg bg-blue-light p-2">
          <Icon className="h-6 w-6 text-blue-dark" />
        </div>
        <div>
          <div className="font-DM_Sans text-2xl font-bold text-gray-500">{value}</div>
          <div className="font-poppins text-sm text-gray-200">{label}</div>
        </div>
      </CardContent>
    </Card>
  )
}

