
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import SolutionsArchitect from './pages/Exam/SolutionsArchitect.tsx';
import Practitioner from './pages/Exam/Practioner.tsx';
import About from './pages/Home.tsx';
import { BrowserRouter, Route, Routes } from "react-router";
import Header from './combonents/Header.tsx';
import Footer from './combonents/Footer.tsx';
import AiPractitioner from './pages/Exam/Aipractioner.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <Header />
    <Routes>

      <Route  path='/Questionares' element={<App />} />
      <Route path='SAA-C03' element={<SolutionsArchitect />} /> 
      <Route path='CP-C03' element={<Practitioner />} /> 
      <Route path='AIP' element={<AiPractitioner />} />
      <Route index path='/' element={<About />} />

    </Routes>
    <Footer />
  </BrowserRouter>
)
