import { BrowserRouter, Route, Routes, Navigate } from "react-router";
import Header from "./combonents/Header.tsx";
import Footer from "./combonents/Footer.tsx";

import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Main from "./Main/Main.tsx";
import ExamSelectionBasePage from "./pages/Exam/ExamSelectionBasePage.tsx";
import ExamBasePage from "./pages/Exam/ExamBasePage.tsx";
import ExamSummaryPage from "./pages/Exam/ExamSummaryPage.tsx";

import Login from "./pages/Auth/Login.tsx";
import SignUp from "./pages/Auth/Register.tsx";

import { useAuth } from "react-oidc-context";

function App() {
  const auth = useAuth();

  const ProtectedRoute = ({
    children,
    section_module,
  }: {
    children: JSX.Element;
    section_module?: string;
  }) => {
    // Always allow section 1
    if (section_module === "1") {
      return children;
    }

    // Require login for section 2+
    if (!auth.isAuthenticated) {
      return <Navigate to="/Login" replace />;
    }

    return children;
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="About" element={<About />} />

        {/* Questionares is public */}
        <Route path="Questionares" element={<Main />}>
          <Route path=":examcode" element={<ExamSelectionBasePage />}>
            <Route
              path=":section_module"
              element={
                <ProtectedRoute section_module="{section_module}">
                  <ExamBasePage />
                </ProtectedRoute>
              }
            >
              <Route path="Summary" element={<ExamSummaryPage />} />
            </Route>
          </Route>
        </Route>

        {/* Auth */}
        <Route path="Login" element={<Login />} />
        <Route path="Signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
