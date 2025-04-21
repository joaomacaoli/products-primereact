import { Product } from "@/types/products"

export const generateMockProducts = (length: number): Product[] => {
  return Array.from({ length }, (_, i) => ({
    id: crypto.randomUUID(), // executa no client
    name: `Produto ${i + 1}`,
    description: `Descrição do produto ${i + 1}`,
    price: Number((Math.random() * 1000 + 10).toFixed(2)),
  }))
}
