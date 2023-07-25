import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { router } from './Router.jsx';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Authprovider from './Componant/Provider/Authprovider';
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Authprovider>
   <QueryClientProvider client={queryClient}>
    <div className='mx-2'>
    <RouterProvider router={router} />
    </div>
    </QueryClientProvider>
   </Authprovider>
  </React.StrictMode>,
)
