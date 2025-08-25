import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ExamBasePage from "./pages/Exam/ExamBasePage.tsx";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Header from "./combonents/Header.tsx";
import Footer from "./combonents/Footer.tsx";
import ExamSummaryPage from "./pages/Exam/ExamSummaryPage.tsx";
import Login from "./pages/Auth/Login.tsx";
import SignUp from "./pages/Auth/Register.tsx";
import { AuthProvider } from "react-oidc-context";

const cognitoAuthConfig = {
  authority: "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_G4PBEuCoG",
  client_id: "7nk2p99tclc19c5p77ptour1ja",
  redirect_uri: "http://localhost:5173/Questionares",
  response_type: "code",
  scope: "phone openid email",
};

createRoot(document.getElementById("root")!).render(
  <AuthProvider {...cognitoAuthConfig}>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="/Questionares" element={<App />} />
        <Route path="SAA-C03" element={<ExamBasePage />} />
        <Route path="CP-C03" element={<ExamBasePage />} />
        <Route path="AIP" element={<ExamBasePage />} />

        <Route path="/Exam/Summary" element={<ExamSummaryPage />} />
        <Route path="Login" element={<Login />} />
        <Route path="Signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </AuthProvider>
);
