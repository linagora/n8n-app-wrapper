import React from 'react'
import { Outlet } from 'react-router-dom'

import { BarComponent } from 'cozy-bar'

import { N8n } from '@/components/Icons/N8n'
import { N8nText } from '@/components/Icons/N8nText'

export const AppLayout = () => {
  return (
    <>
      <BarComponent
        searchOptions={{ enabled: false }}
        appIcon={N8n}
        appTextIcon={N8nText}
        componentsProps={{
          CozyTheme: {
            type: 'auto'
          }
        }}
      />
      <Outlet />
    </>
  )
}
