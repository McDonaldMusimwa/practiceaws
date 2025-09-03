
import awsExports from "./aws-exports.ts";
import { Amplify } from "aws-amplify";
//import { Authenticator } from "./pages/Auth/AuthenticatorCog.tsx";
import ExamBasePage from "./pages/Exam/ExamBasePage.tsx";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Header from "./combonents/Header.tsx";
import Footer from "./combonents/Footer.tsx";
import ExamSummaryPage from "./pages/Exam/ExamSummaryPage.tsx";
import Login from "./pages/Auth/Login.tsx";
import SignUp from "./pages/Auth/Register.tsx";
import Main from "./Main/Main.tsx";


// Configure Amplify
Amplify.configure(awsExports);

function App() {


 

  return (
  
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="/Questionares" element={<Main />} />
          <Route path="SAA-C03" element={<ExamBasePage />} />
          <Route path="CP-C03" element={<ExamBasePage />} />
          <Route path="AIP" element={<ExamBasePage />} />
          <Route path="/Exam/Summary" element={<ExamSummaryPage />} />
          <Route path="Login" element={<Login />} />
          <Route path="Signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
 
  );
}

export default App;
