import {Link} from 'react-router-dom'
import {useTheme} from 'app/providers/ThemeProvider'
import {classNames} from 'shared/lib/classNames/classNames'
import {AppRouter} from 'app/providers/router'

const App = () => {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О Сайте</Link>
      <button onClick={toggleTheme}>click</button>

      <AppRouter />
    </div>
  )
}

export default App