import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Version } from "./screens/Version";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <Version />
  </StrictMode>,
);
