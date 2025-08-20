import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider as ReduxProvider } from "react-redux"
import { RouterProvider } from 'react-router'
import { Toaster } from 'sonner'
import './index.css'
import { ThemeProvider } from './provider.tsx/theme-provider.tsx'
import { store } from './redux/store.ts'
import { router } from './routes/index.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
        <Toaster />
      </ThemeProvider>
    </ReduxProvider>
  </StrictMode>,
)
