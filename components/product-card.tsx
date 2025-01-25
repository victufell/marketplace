import Image from "next/image"
import { formatCurrency, cn } from "@/lib/utils"
import { type Product } from "@/lib/schema"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="overflow-hidden rounded-lg bg-shape">
      <div className="relative aspect-square">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
        <div className="absolute right-2 top-2 rounded bg-white px-2 py-1">
          <span className={cn(
            "text-xs font-medium",
            product.status === "available" ? "text-success" : "text-danger"
          )}>
            {product.status === "available" ? "DISPONÍVEL" : "VENDIDO"}
          </span>
        </div>
      </div>
      <div className="p-4">
        <div className="mb-2 flex items-start justify-between gap-2">
          <h3 className="font-DM_Sans text-lg font-medium text-gray-500">
            {product.name}
          </h3>
          <span className="font-DM_Sans text-lg font-bold text-gray-500">
            {formatCurrency(product.price)}
          </span>
        </div>
        <p className="text-sm text-gray-200 line-clamp-2">
          {product.description}
        </p>
      </div>
    </div>
  )
}

