import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import Hero from "../components/sections/Hero.jsx";
import PainPoints from "../components/sections/PainPoints.jsx";
import ShopIntro from "../components/sections/ShopIntro.jsx";
import ProductGrid from "../components/sections/ProductGrid.jsx";
import TechHumans from "../components/sections/TechHumans.jsx";
import Roles from "../components/sections/Roles.jsx";
import WinCta from "../components/sections/WinCta.jsx";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* .page: hero is pinned inside it while the sheets slide over; footer sits outside */}
      <div className="page">
        <Hero />
        <main>
          <section className="sheet s1"><ProductGrid /><PainPoints /><ShopIntro /></section>
          <section className="sheet s2"><TechHumans /></section>
          <section className="sheet s3"><Roles /></section>
          <WinCta />
        </main>
      </div>
      <Footer />
    </>
  );
}
