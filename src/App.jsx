import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import Dashboard from './pages/Dashboard'
import Account from './pages/Account'
import Customers from './pages/Customers'
import Login from './pages/Login'
import Settings from './pages/Settings'
import Users from './pages/Users'
import PageNotFound from './pages/PageNotFound'
import GlobalStyles from './styles/GlobalStyles'
import AppLayout from './ui/AppLayout'
import { Toaster } from 'react-hot-toast'
import Customer from './pages/Customer'
import ProtectedRoute from './ui/ProtectedRoute'
import { DarkModeProvider } from './context/DarkModeContext'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
})

function App() {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              {/* <Route index element={<Navigate replace to="dashboard" />} /> */}
              <Route index element={<Navigate replace to="Customers" />} />
              {/* <Route path="dashboard" element={<Dashboard />} /> */}
              <Route path="dashboard" element={<Customers />} />
              <Route path="account" element={<Account />} />
              <Route path="customers" element={<Customers />} />
              <Route path="customers/:customerId" element={<Customer />} />
              <Route path="settings" element={<Settings />} />
              <Route path="users" element={<Users />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: '8px' }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: '14px',
              maxWidth: '90vw',
              padding: '12px 16px',
              backgroundColor: 'var(--color-grey-0)',
              color: 'var(--color-grey-700)',
            },
          }}
        />
      </QueryClientProvider>
    </DarkModeProvider>
  )
}

export default App
