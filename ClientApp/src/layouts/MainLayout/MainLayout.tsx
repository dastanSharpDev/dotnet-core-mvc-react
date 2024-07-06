import { Spin } from 'antd'
import { Footer, Header } from 'antd/es/layout/layout'
import React, { memo, Suspense } from 'react'
import { Outlet } from 'react-router-dom'

export const MainLayout = memo(function MainLayout() {
  return (
    <div style={{ width: '100%' }}>
      <Header />
      <div >
        <Suspense fallback={<Spin size="small" />}>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </div>
  )
})
