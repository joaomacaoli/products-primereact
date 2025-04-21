'use client'

import { Button } from "primereact/button"

interface DeleteButtonProps {
  onClick: () => void
}

export function DeleteButton({ onClick }: DeleteButtonProps) {
  return (
    <Button
      // label="Deletar"
      icon="pi pi-trash"
      onClick={onClick}
      severity="danger"
      rounded
    />
  )
}
