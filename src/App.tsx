import { Navbar } from "../src/components/Nabvar/Navbar";
import { Hero } from "../src/sections/Hero/Hero";
import { Features } from "../src/sections/Features/Features";
import { Integrations } from "../src/sections/Integrations/Integrations";
import { Footer } from "../src/components/Footer/Footer";

const Home = () => {

  return (
    <>
    <header>
      <Navbar />
    </header>
      <main>
        <Hero />
        <Features />
        <Integrations />
      </main>
      <Footer />
    </>
  )
}

export default Home;
