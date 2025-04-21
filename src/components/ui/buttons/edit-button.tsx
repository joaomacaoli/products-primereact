'use client'

import { Button } from "primereact/button"

interface EditButtonProps {
  onClick: () => void
}

export function EditButton({ onClick }: EditButtonProps) {
  return (
    <Button
      // label="Editar"
      icon="pi pi-pencil"
      onClick={onClick}
      rounded
    />
  )
}
