import {Suspense} from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import {MainPage} from 'pages/MainPage'
import {AboutPage} from 'pages/AboutPage'
import {useTheme} from 'app/providers/ThemeProvider'
import {classNames} from 'shared/lib/classNames/classNames'

const App = () => {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О Сайте</Link>
      <button onClick={toggleTheme}>click</button>

      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPage />}/>
          <Route path={'/'} element={<MainPage />}/>
        </Routes>
      </Suspense>
    </div>
  )
}

export default App