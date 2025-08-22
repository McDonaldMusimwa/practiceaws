
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ExamBasePage from './pages/Exam/ExamBasePage.tsx';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import { BrowserRouter, Route, Routes } from "react-router";
import Header from './combonents/Header.tsx';
import Footer from './combonents/Footer.tsx';


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <Header />
    <Routes>
<Route path='About' element={<About />} />
      <Route  path='/Questionares' element={<App />} />
      <Route path='SAA-C03' element={<ExamBasePage />} /> 
      <Route path='CP-C03' element={<ExamBasePage/>} /> 
      <Route path='AIP' element={<ExamBasePage />} />
      <Route index path='/' element={<Home />} />

    </Routes>
    <Footer />
  </BrowserRouter>
)
