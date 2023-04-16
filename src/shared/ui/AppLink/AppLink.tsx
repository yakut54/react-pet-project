import {FC} from 'react'
import {Link, LinkProps} from 'react-router-dom'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './AppLink.module.scss'

export const enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    to,
    theme = AppLinkTheme.PRIMARY,
    children,
    className,
    ...other
  } = props

  return (
    <Link
      to={to}
      className={classNames(cls.AppLink, {}, [className, cls[theme]])}
      {...other}
    >
      {children}
    </Link>
  )
}