import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import StartPageComponent from './app/start/start-page.component.tsx'
import TemplateSyntaxPage from './app/template-syntax/template-syntax.page.tsx'
import CustomerIndexComponent from './app/customer/customer-index.component.tsx'
import CustomerListComponent from './app/customer/views/customer-list.component.tsx'
import CustomerEditComponent from './app/customer/views/customer-edit.component.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <StartPageComponent />
  },
  {
    path: '/dashboard',
    element: <CustomerIndexComponent/>,
    children: [
      {
        path: '',
        element: <CustomerListComponent/>
      },
      {
        path: 'edit/:id',
        element: <CustomerEditComponent/>
      }
    ]
  },
  {
    path: '/template',
    element: <TemplateSyntaxPage/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
