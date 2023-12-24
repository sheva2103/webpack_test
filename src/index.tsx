//import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './components/App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LazyAbout } from './pages/About/About.lazy'
import { LazyShop } from './pages/Shop/LazyShop'
import { Suspense } from 'react';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/about',
                element: <Suspense fallback={<div>...loading</div>}><LazyAbout /></Suspense>
            },
            {
                path: '/shop',
                element: <Suspense fallback={<div>...loading</div>}><LazyShop /></Suspense>
            }
        ],
        errorElement: <div>error page</div>
    },
])

const root = document.getElementById('root')

if (!root) throw new Error('root not found')

const container = createRoot(root)

container.render(<RouterProvider router={router} />)