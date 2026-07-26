import { RootRoute, Route, createRouter } from '@tanstack/react-router'
import RootLayout from './routes/__root'

const rootRoute = new RootRoute({
  component: RootLayout,
})

export const router = createRouter({
  routeTree: rootRoute,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
