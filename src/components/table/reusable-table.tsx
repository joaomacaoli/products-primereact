'use client'

import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { TableFilter } from './table-filter'
import { FilterTableActions } from './filter-actions'
import { TableActions } from './table-actions'


type ColumnConfig<T> = {
  field: keyof T
  header: string
  render?: (data: T) => React.ReactNode
}

interface ReusableTableProps<T> {
  columns: ColumnConfig<T>[]
  data: T[]
  filters: Record<string, string>
  onFilterChange: (key: string, value: string) => void
  onSearch: () => void
  onClear: () => void
  onEdit?: (item: T) => void
  onDelete?: (item: T) => void
}

export function ReusableTable<T extends { id: string }>({
  columns,
  data,
  filters,
  onFilterChange,
  onSearch,
  onClear,
  onEdit,
  onDelete,
}: ReusableTableProps<T>) {
  const renderActions = (rowData: T) => (
    <TableActions
      onDelete={() => onDelete?.(rowData)}
      onEdit={() => onEdit?.(rowData)}
    />
    // <div className="flex gap-2">
    //   <EditButton onClick={() => onEdit?.(rowData)} />
    //   <DeleteButton onClick={() => onDelete?.(rowData)} />
    // </div>
  )

  return (
    <div className="p-4">
      <TableFilter
        filters={filters}
        onFilterChange={onFilterChange}
        fields={columns.map(({ field, header }) => ({
          key: String(field),
          label: header,
        }))}
      />

      <FilterTableActions onSearch={onSearch} onClear={onClear} />

      <DataTable
        value={data}
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
        className="shadow-md rounded-lg"
      >
        {columns.map(({ field, header, render }) => (
          <Column
            key={String(field)}
            field={String(field)}
            header={header}
            body={render}
            sortable
          />
        ))}
        <Column header="Ações" body={renderActions} />
      </DataTable>
    </div>
  )
}
