import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function formatTimeBRL(date: Date) {
  const distance = formatDistanceToNow(date, {
    addSuffix: true,
    locale: ptBR,
  })
  return distance.charAt(0).toUpperCase() + distance.slice(1)
}
