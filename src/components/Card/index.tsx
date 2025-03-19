import { formatTimeBRL } from '../../utils/functions'

import { CardsContainer } from './styles'

interface CardProps {
  title: string
  date: string
  text: string
}

export function Card({ title, date, text }: CardProps) {
  function truncateText(text: string, maxLength: number = 200) {
    if (text.length <= maxLength) return text
    return text.substring(0, maxLength) + '...'
  }

  return (
    <CardsContainer>
      <header>
        <h2>{title}</h2>
        <span>{formatTimeBRL(new Date(date))}</span>
      </header>
      <p>{truncateText(text)}</p>
    </CardsContainer>
  )
}
