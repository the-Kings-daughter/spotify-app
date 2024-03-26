import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css';
import { LandingPage } from './Pages/LandingPage'
import { LoginPage } from './Pages/Login/index'
import { IsProtectedRoute } from './components/hoc/isProtectedRoute'

const router = createBrowserRouter([
  {
    path: '' ,
    element:   <LandingPage /> 
  }, 
  {
    path: 'dashboard' ,
    element: <IsProtectedRoute> <LoginPage /> </IsProtectedRoute> 
  }, 
  {
    path: 'login' ,
    element: <LoginPage />
  }, 
  {
    path: '*' ,
    element: <h1 style={{color: 'red', fontSize:100, backgroundColor: 'black',  margin: 0, }}>ERROR 404 <br /> <br /> Page not Found</h1>
  }, 
])
export function App() {
  return (

    <RouterProvider router={router} />
  )
}



