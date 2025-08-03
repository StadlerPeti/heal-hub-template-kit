import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from './pages/Index'
import NotFound from './pages/NotFound'
import DocumentUpload from './pages/DocumentUpload'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import DocumentSummary from './pages/DocumentSummary'

const queryClient = new QueryClient()

const password = prompt('Enter password:')
if (password !== 'asdasd12345') {
  document.body.innerHTML = 'Access denied.'
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path='/heal-hub-template-kit' element={<Index />} />
          <Route path='/heal-hub-template-kit/login' element={<Login />} />
          <Route
            path='/heal-hub-template-kit/dashboard'
            element={<Dashboard />}
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route
            path='/heal-hub-template-kit/upload'
            element={<DocumentUpload />}
          />
          <Route
            path='/heal-hub-template-kit/document/:id'
            element={<DocumentSummary />}
          />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
)

export default App
