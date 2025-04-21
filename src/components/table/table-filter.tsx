'use client'

import { InputText } from 'primereact/inputtext'

interface TableFilterProps {
  filters: Record<string, string>
  onFilterChange: (key: string, value: string) => void
  fields: { key: string; label: string }[]
}

export function TableFilter({ filters, onFilterChange, fields }: TableFilterProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
      {fields.map(({ key, label }) => (
        <span key={key} className="p-input-icon-left w-full">
          {/* <i className="pi pi-search" /> */}
          <InputText
            className="w-full"
            placeholder={`Pesquisar por ${label.toLocaleLowerCase()}`}
            value={filters[key] || ''}
            onChange={(e) => onFilterChange(key, e.target.value)}
          />
        </span>
      ))}
    </div>
  )
}
