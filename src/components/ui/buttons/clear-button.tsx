'use client'

import { Button } from 'primereact/button'

interface ClearButtonProps {
  onClick: () => void
}

export function ClearButton({ onClick }: ClearButtonProps) {
  return (
    <Button
      label="Limpar"
      icon="pi pi-times"
      severity="secondary"
      onClick={onClick}
    />
  )
}
