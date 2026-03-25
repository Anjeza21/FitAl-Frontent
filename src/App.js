import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import BlogPost2 from "./pages/BlogPost2";
import Portfolio from "./pages/Portfolio";
import PhotoDetails from "./pages/PhotoDetails";
import PhotoDetails2 from "./pages/PhotoDetails2";
import PhotoDetails3 from "./pages/PhotoDetails3";
import WebDevelopment from "./pages/WebDevelopment";
import Services from "./pages/Services";
import MobileDevelopment from "./pages/MobileDevelopment";


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <Router>
      <TopBar />
      <NavigationBar />
       
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/BlogPost" element={<BlogPost />} />
        <Route path="/BlogPost2" element={<BlogPost2 />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/PhotoDetails" element={<PhotoDetails />} />
        <Route path="/PhotoDetails2" element={<PhotoDetails2 />} />
        <Route path="/PhotoDetails3" element={<PhotoDetails3 />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/WebDevelopment" element={<WebDevelopment />} />
        <Route path="/MobileDevelopment" element={<MobileDevelopment />} />
        

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
