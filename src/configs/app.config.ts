import { ROOT } from '@/constants/route.constant'

export type AppConfig = {
    apiPrefix: string
    authenticatedEntryPath: string
    unAuthenticatedEntryPath: string
    locale: string
    accessTokenPersistStrategy: 'localStorage' | 'sessionStorage' | 'cookies'
    enableMock: boolean
}

const appConfig: AppConfig = {
    apiPrefix: '/api',
    authenticatedEntryPath: ROOT,
    unAuthenticatedEntryPath: ROOT,
    locale: 'en',
    accessTokenPersistStrategy: 'cookies',
    enableMock: true,
}

export default appConfig
