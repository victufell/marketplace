import { Header } from "@/components/header"
import { ProductCard } from "@/components/product-card"
import { ProductFilter } from "@/components/product-filter"

// This would typically come from an API
const products = [
  {
    id: "1",
    name: "Sofá",
    price: 1200.90,
    description: "Sofá revestido em couro legítimo, com acabamento em madeira maciça e pés em...",
    status: "available",
    image: "/placeholder.svg"
  },
  {
    id: "2",
    name: "Camiseta masculina",
    price: 35.89,
    description: "Camiseta 100% algodão, confeccionada em algodão 100%, com gola alta e...",
    status: "available",
    image: "/placeholder.svg"
  },
  {
    id: "3",
    name: "Kit utensílios",
    price: 86.79,
    description: "Conjunto completo de utensílios, feitos em aço inoxidável de alta...",
    status: "sold",
    image: "/placeholder.svg"
  },
  // Add more products...
] as const

export default function ProductsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="mx-auto w-full max-w-[1030px] flex-1 space-y-6 p-6">
        <div className="space-y-1">
          <h1 className="font-DM_Sans text-2xl font-bold text-gray-500">
            Seus produtos
          </h1>
          <p className="font-poppins text-sm text-gray-200">
            Acesse gerencia e sua lista de produtos à venda
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-[240px,1fr]">
          <ProductFilter />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

