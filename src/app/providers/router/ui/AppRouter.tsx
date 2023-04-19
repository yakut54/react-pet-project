import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routerConfig } from 'shared/config/routeConfig/routeConfig'
import { useTranslation } from 'react-i18next'

export const AppRouter = () => {
  const { t } = useTranslation()

  return (
    <Suspense fallback={<div>{t('Загрузка...')}</div>}>
      <Routes>
        {Object.values(routerConfig).map(({ element, path }) => (
          <Route path={path} element={element} key={path} />
        ))}
      </Routes>
    </Suspense>
  )
}
