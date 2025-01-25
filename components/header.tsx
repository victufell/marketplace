"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Plus, User } from 'lucide-react'

export function Header() {
  const pathname = usePathname()

  const navigation = [
    { name: "Dashboard", href: "/" },
    { name: "Produtos", href: "/products" },
  ]

  return (
    <header className="w-full border-b border-shape bg-white">
      <div className="mx-auto flex h-16 max-w-[1366px] items-center justify-between px-4">
        <Link href="/dashboard" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={100}
            height={100}
          />
        </Link>
        <nav className="absolute left-1/2 flex -translate-x-1/2 items-center gap-8 font-poppins text-sm">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition-colors",
                pathname === item.href
                  ? "text-orange-base"
                  : "text-gray-500 hover:text-gray-400"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Button 
            variant="default"
            className="bg-orange-base font-poppins text-white hover:bg-orange-dark"
          >
            <Plus className="mr-2 h-4 w-4" /> Novo produto
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <User className="h-5 w-5 text-gray-500" />
            <span className="sr-only">Perfil</span>
          </Button>
        </div>
      </div>
    </header>
  )
}

