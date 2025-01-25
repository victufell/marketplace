"use client"

import { Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function ProductFilter() {
  return (
    <div className="space-y-4 rounded-lg bg-shape p-4">
      <div className="space-y-2">
        <label className="font-poppins text-sm text-gray-300">
          Pesquisar
        </label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-200" />
          <Input 
            placeholder="Buscar produto..." 
            className="pl-9"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="font-poppins text-sm text-gray-300">
          Status
        </label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Selecione um status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos</SelectItem>
            <SelectItem value="available">Disponível</SelectItem>
            <SelectItem value="sold">Vendido</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button className="w-full bg-orange-base hover:bg-orange-dark">
        Aplicar filtro
      </Button>
    </div>
  )
}

