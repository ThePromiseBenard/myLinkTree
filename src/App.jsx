import { Routes, Route, BrowserRouter } from "react-router-dom";
import Footer from "./conponents/Footer";
import Index from "./Pages";
import Contact from "./Pages/contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <div className="container pb-16 px-6 mx-auto gap-8 flex flex-col items-center justify-center">
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
