import { useSelectedLanguage } from '@shared/generic-react-hooks'
import { Flowbite } from '@shared/ui'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { NextIntlProvider } from 'next-intl'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'

// React Query Client:
const queryClient = new QueryClient()

export const AppContainer = (props: AppProps) => {
  const { Component, pageProps } = props

  const router = useRouter()

  useSelectedLanguage({
    onLanguageChange: (locale) => {
      const { pathname, query, asPath } = router
      router.push({ pathname, query }, asPath, { locale })
    }
  })

  return (
    <Flowbite theme={{ dark: true }}>
      <QueryClientProvider client={queryClient}>
        <NextIntlProvider messages={pageProps.messages}>
          <div id='modal-root' />
          <Component {...pageProps} />
        </NextIntlProvider>
      </QueryClientProvider>
    </Flowbite>
  )
}
