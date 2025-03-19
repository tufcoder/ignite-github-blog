import { Icons } from '../Icons'

import { LinkContainer } from './styles'

interface LinkProps {
  text: string
  to: string
}

export function Link({ text, to }: LinkProps) {
  return (
    <LinkContainer href={to} target="_blank" rel="noopener noreferrer">
      {text}
      <Icons icon="ArrowSquareOut" />
    </LinkContainer>
  )
}
