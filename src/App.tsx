import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Contact from "./pages/Contact/Contact";
import Teacher from "./pages/Teacher/Teacher";
import Template from "./pages/CoursesTemplate/Courses_Template";
import Scroll from "./components/ScrollToTop/ScrollToTop";
import NavToTop from "./components/NavToTop/NavToTop";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <NavToTop />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/teachers" element={<Teacher />}></Route>
        <Route path="/courses-template" element={<Template />}></Route>
      </Routes>
      <Footer />
      <Scroll />
    </BrowserRouter>
  );
}

export default App;
