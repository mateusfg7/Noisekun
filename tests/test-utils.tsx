import { ReactElement } from 'react'
import { RenderOptions, render } from '@testing-library/react'
import { I18nProviderClient } from '../src/i18n/client'
import en from '../src/i18n/langs/en'

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <I18nProviderClient locale="en">{children}</I18nProviderClient>
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: Providers, ...options })

export * from '@testing-library/react'
export { customRender as render }
