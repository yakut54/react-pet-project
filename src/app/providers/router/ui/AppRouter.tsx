import React, {Suspense} from 'react'
import {Route, Routes} from 'react-router-dom'
import {routerConfig} from 'shared/config/routeConfig/routeConfig'
import {PageLoader} from 'widgets/PageLoader/PageLoader'

export const AppRouter = () => {

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(routerConfig).map(({ element, path }) => (
          <Route path={path} element={element} key={path} />
        ))}
      </Routes>
    </Suspense>
  )
}
