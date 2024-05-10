
import ButtonGradient from "./assets/svg/ButtonGradient";
// import Button from "./components/Button";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";



const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Collaboration />
        <Benefits />
        <Project />
        <Contact />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
