import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Contact from "./pages/Contact/Contact";
import Teacher from "./pages/Teacher/Teacher";
import Template from "./pages/CoursesTemplate/Courses_Template";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/teachers" element={<Teacher />}></Route>
        <Route path="/courses-template" element={<Template />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
