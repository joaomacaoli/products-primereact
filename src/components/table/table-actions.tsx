'use client'

import { DeleteButton } from "../ui/buttons/delete-button"
import { EditButton } from "../ui/buttons/edit-button"


interface TableActionsProps {
  onEdit: () => void
  onDelete: () => void
}

export function TableActions({ onEdit, onDelete }: TableActionsProps) {
  return (
    <div className="flex gap-2 mb-4">
      <EditButton onClick={onEdit} />
      <DeleteButton onClick={onDelete} />
    </div>
  )
}
