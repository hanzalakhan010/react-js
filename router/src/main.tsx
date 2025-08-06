// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import { createBrowserRouter, Route, RouterProvider } from 'react-router'
import HomePage from './pages/Home.tsx'
import About from './pages/About.tsx'
import Contact from './pages/Contact.tsx'
import Layout from './components/Layout.tsx'
import { createRoutesFromElements } from 'react-router'



// const router = createBrowserRouter([{
//   path: "/",
//   element: <Layout />,
//   children: [
//     {
//       path: '/',
//       element: <HomePage />
//     }, {
//       path: '/about',
//       element: <About />
//     },
//     {
//       path: '/contact',
//       element: <Contact />
//     }
//   ]
// }
// ])


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element = {<Layout/>}>
      <Route path='/' element={<HomePage />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/about' element={<About />} />

    </Route>
  )
)
createRoot(document.getElementById('root')!).render(
  // <BrowserRouter>
  <RouterProvider router={router} />
  // </BrowserRouter>,
)