import { Routes, Route, BrowserRouter } from "react-router-dom";
import Index from "./Pages";
import Contact from "./Pages/contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
