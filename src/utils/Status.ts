export function status(status: number | null) {
  if (!status) return 'Em Andamento';
  return 'Finalizado';
}
