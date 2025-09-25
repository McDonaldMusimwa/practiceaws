import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "./index.css";
import App from "./App.tsx";
import { Buffer } from "buffer";
import { AuthProvider } from "react-oidc-context";

const cognitoAuthConfig = {
  authority: "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_tNpZ7Kn4W",
  client_id: "5vnnnbupq21711l42jtds0b2fr",
  redirect_uri: "https://staging.d385k1fvsqio60.amplifyapp.com/Questionares",
  response_type: "code",
  scope: "email openid phone",
};

window.global = window;
window.Buffer = Buffer;

// The rest of your app's code...

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider {...cognitoAuthConfig}>
      <App />
    </AuthProvider>
  </StrictMode>
);
