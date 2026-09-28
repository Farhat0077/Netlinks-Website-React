import Hero from "./Components/Hero/Hero";
import Logo from "./Components/Logo/Logo";
import Navbar from "./Components/Navbar/Navbar";
import WhatWeDo from "./Components/WhatWeDO/WhatWeDo";
import Auto from "./Components/Auto/Auto";
import Custom from "./Components/Custom/Custom";
import Industry from "./Components/Industry/Industry";
import Answer from "./Components/Answer/Answer";
import Talk from "./Components/Talk/Talk";
import Footer from "./Components/Footer/Footer";
import "./App.css";
import Odd from "./Components/ODD/Odd";
import Founder from "./Components/Foundre/Founder";
export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Logo />
      <WhatWeDo />
      <Odd />
      <Auto />
      <Custom />
      <Industry />
      <Founder />
     <Answer />
      <Talk />
       <Footer />
    </>
  );
}