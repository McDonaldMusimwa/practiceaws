//import awsExports from "./aws-exports.ts";
//import { Amplify } from "aws-amplify";
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
import { useAuth } from "react-oidc-context";


// Configure Amplify
//Amplify.configure(awsExports);


function App() {

    const auth = useAuth();

  const signOutRedirect = () => {
    const clientId = "5vnnnbupq21711l42jtds0b2fr";
    const logoutUri = "<logout uri>";
    const cognitoDomain = "https://us-east-1tnpz7kn4w.auth.us-east-1.amazoncognito.com";
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
  };
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="About" element={<About />} />

        <Route path="Questionares" element={<Main />}>
          <Route path=":examcode" element={<ExamBasePage />}>
            <Route path="Summary" element={<ExamSummaryPage />} />
          </Route>
        </Route>

        <Route path="Login" element={<Login />} />
        <Route path="Signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
