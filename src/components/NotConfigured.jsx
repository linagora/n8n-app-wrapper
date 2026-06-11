import React from 'react'
import { useI18n } from 'twake-i18n'

import Empty from 'cozy-ui/transpiled/react/Empty'

import { N8n } from '@/components/Icons/N8n'

export const NotConfigured = ({ flagName }) => {
  const { t } = useI18n()

  return (
    <Empty
      data-testid="not-configured"
      centered
      icon={<N8n />}
      title={t('notConfigured.title')}
      text={t('notConfigured.text', { flag: flagName })}
    />
  )
}
