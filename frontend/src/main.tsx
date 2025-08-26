import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "./index.css";
import App from "./App.tsx";
import { Buffer } from 'buffer';

window.global = window;
window.Buffer = Buffer;

// The rest of your app's code...

createRoot(document.getElementById("root")!).render(

    <StrictMode>
     <App />
    </StrictMode>

);
