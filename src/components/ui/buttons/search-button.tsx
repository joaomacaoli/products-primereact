'use client'

import { Button } from "primereact/button";

interface SearchButtonProps {
  onClick: () => void
}

export function SearchButton({ onClick }: SearchButtonProps) {
  return (
    <Button
      label="Pesquisar"
      icon="pi pi-search"
      onClick={onClick}
    />
  )
}
