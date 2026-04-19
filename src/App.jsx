import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import WhyUs from "./components/WhyUs";
import Gallery from "./components/Gallery";
import Testimonial from "./components/Testimonial";
import Reservation from "./components/Reservation";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <WhyUs />
      <Gallery />
      <Testimonial />
      <Reservation />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
