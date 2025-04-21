'use client'

import { SearchButton } from '../ui/buttons/search-button'
import { ClearButton } from '../ui/buttons/clear-button'

interface FilterTableActionsProps {
  onSearch: () => void
  onClear: () => void
}

export function FilterTableActions({ onSearch, onClear }: FilterTableActionsProps) {
  return (
    <div className="flex gap-2 mb-4">
      <SearchButton onClick={onSearch} />
      <ClearButton onClick={onClear} />
    </div>
  )
}
