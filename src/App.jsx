
import './App.css'
import {Button, HeroUIProvider} from "@heroui/react"; 
import AppRoutes from './routes/AppRoutes';
import { BrowserRouter } from 'react-router-dom';


function App() {


  return (
    <>
      <HeroUIProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </HeroUIProvider>
    </>
  )
}

export default App
