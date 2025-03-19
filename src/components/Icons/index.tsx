import {
  ArrowSquareOut,
  Building,
  CalendarDot,
  CaretLeft,
  ChatCircle,
  GithubLogo,
  Users,
} from '@phosphor-icons/react'

import { IconWrapper } from './IconWrapper'

enum IconTitles {
  GithubLogo = 'github user',
  Building = 'working at',
  Users = 'followers',
  CalendarDot = 'calendar',
  CaretLeft = 'back',
  ChatCircle = 'comments',
  ArrowSquareOut = 'link',
}

interface IconContainerProps {
  icon: keyof typeof IconTitles
  size?: number
}

/**
 * Este componente `NÃO` precisa de um arquivo `styles.ts`.
 *
 * @param icon Ícone a ser renderizado. Veja as opções no enum `IconTitles`.
 * @returns Um ícone renderizado dentro de um `<span>` com um `title` atribuído
 * para acessibilidade, serve também como um tooltip.
 */
export function Icons({ icon, size = 16 }: IconContainerProps) {
  const iconComponent = () => {
    switch (icon) {
      case 'GithubLogo':
        return (
          <IconWrapper
            icon={<GithubLogo size={size} />}
            text={IconTitles.GithubLogo}
          />
        )
      case 'Building':
        return (
          <IconWrapper
            icon={<Building size={size} />}
            text={IconTitles.Building}
          />
        )
      case 'Users':
        return (
          <IconWrapper icon={<Users size={size} />} text={IconTitles.Users} />
        )
      case 'CalendarDot':
        return (
          <IconWrapper
            icon={<CalendarDot size={size} />}
            text={IconTitles.CalendarDot}
          />
        )
      case 'CaretLeft':
        return (
          <IconWrapper
            icon={<CaretLeft size={size} />}
            text={IconTitles.CaretLeft}
          />
        )
      case 'ChatCircle':
        return (
          <IconWrapper
            icon={<ChatCircle size={size} />}
            text={IconTitles.ChatCircle}
          />
        )
      case 'ArrowSquareOut':
        return (
          <IconWrapper
            icon={<ArrowSquareOut size={size} weight="bold" />}
            text={IconTitles.ArrowSquareOut}
          />
        )
      default:
        return null
    }
  }

  return iconComponent()
}
