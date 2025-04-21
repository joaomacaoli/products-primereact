'use client'

import { useEffect, useState } from 'react'
import { ReusableTable } from '@/components/table/reusable-table'
import { generateMockProducts } from '@/mocks/products'
import { Product } from '@/types/products'

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [filters, setFilters] = useState<Record<string, string>>({
    name: '',
    description: '',
    price: '',
  })

  const [filtered, setFiltered] = useState<Product[]>(products)

  useEffect(() => {
    const mockData = generateMockProducts(30)
    setProducts(mockData)
    setFiltered(mockData)
  }, [])

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
  }

  const handleSearch = () => {
    const result = products.filter((item) =>
      Object.entries(filters).every(([key, value]) =>
        String(item[key as keyof Product])
          .toLowerCase()
          .includes(value.toLowerCase())
      )
    )
    setFiltered(result)
  }

  const handleClear = () => {
    const cleared = Object.fromEntries(
      Object.keys(filters).map((key) => [key, ''])
    )
    setFilters(cleared)
    setFiltered(products)
  }

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Produtos</h1>
      <ReusableTable<Product>
        data={filtered}
        filters={filters}
        onFilterChange={handleFilterChange}
        onSearch={handleSearch}
        onClear={handleClear}
        columns={[
          { field: 'name', header: 'Nome' },
          { field: 'description', header: 'Descrição' },
          {
            field: 'price',
            header: 'Preço',
            render: (item) => `R$ ${item.price.toFixed(2)}`,
          },
        ]}
        onEdit={(item) => alert(`Editar ${item.name}`)}
        onDelete={(item) => alert(`Remover ${item.name}`)}
      />
    </div>
  )
}
