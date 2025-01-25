import { Package, ShoppingBag, Users } from 'lucide-react'
import { Header } from "@/components/header"
import { MetricCard } from "@/components/metric-card"
import { VisitorChart } from "@/components/visitor-chart"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="mx-auto w-full max-w-[1030px] flex-1 space-y-6 p-6">
        <div className="space-y-1">
          <h1 className="font-DM_Sans text-2xl font-bold text-gray-500">
            Últimos 30 dias
          </h1>
          <p className="font-poppins text-sm text-gray-200">
            Confira as estatísticas da sua loja no último mês
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-5">
          <div className="space-y-4">
            <MetricCard
              icon={ShoppingBag}
              value="24"
              label="Produtos vendidos"
            />
            <MetricCard
              icon={Package}
              value="56"
              label="Produtos anunciados"
            />
            <MetricCard
              icon={Users}
              value="1.238"
              label="Pessoas visitantes"
            />
          </div>
          <VisitorChart />
        </div>
      </div>
    </div>
  )
}

