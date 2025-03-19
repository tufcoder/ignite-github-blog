import { cloneElement, ReactElement } from 'react'

interface IconWrapperProps {
  icon: ReactElement<HTMLElement>
  text: string
}

export function IconWrapper({ icon, text }: IconWrapperProps) {
  const clonedIcon = cloneElement(icon, { title: text })

  return <span title={text}>{clonedIcon}</span>
}
