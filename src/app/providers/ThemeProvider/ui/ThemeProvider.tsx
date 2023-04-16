import {LOCALSTORAGE_THEME_KEY, Theme, ThemeContext} from '../lib/ThemeContext';
import {FC, useMemo, useState} from 'react';

const defaultTheme = localStorage.getItem((LOCALSTORAGE_THEME_KEY)) as Theme || Theme.LIGHT

export const ThemeProvider: FC = ({children}) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  const defaultProps = useMemo(() => ({
    theme, setTheme
  }), [theme])

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}