import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routerConfig } from 'shared/config/routeConfig/routeConfig'

export const AppRouter = () => (
  <Suspense fallback={<div>Загрузка...</div>}>
    <Routes>
      {Object.values(routerConfig).map(({ element, path }) => (
        <Route path={path} element={element} key={path} />
      ))}
    </Routes>
  </Suspense>
)
