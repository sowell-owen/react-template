import React from "react";
import { BrowserRouter } from "react-router-dom";

import RenderRoutes from "./routes/RenderRoutes";

function App() {
  return (
    <BrowserRouter>
      <RenderRoutes />
    </BrowserRouter>
  );
}

export default App;
