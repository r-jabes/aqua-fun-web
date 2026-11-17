import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Feeling } from "./components/Feeling";
import { Attractions } from "./components/Attractions";
import { Moments } from "./components/Moments";
import { Visit } from "./components/Visit";
import { Faq } from "./components/Faq";
import { Groups } from "./components/Groups";
import { CtaBand } from "./components/CtaBand";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Feeling />
        <Attractions />
        <Moments />
        <Visit />
        <Faq />
        <Groups />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
