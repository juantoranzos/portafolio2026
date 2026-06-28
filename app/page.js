import { Carrusel } from "@/components/general/carrusel";
import HeaderComponent from "@/components/general/header";
import Proyectos from "@/components/general/proyectos";
import ServiciosComponent from "@/components/general/servicios";
import AboutMe from "@/components/general/about-me";
import ContactComponent from "@/components/general/contact";
import Footer from "@/components/general/footer";

export default function Home() {
  return (
    <>
      <main>
        <HeaderComponent />
        <Carrusel />
        <AboutMe />
        <Proyectos />
        <ServiciosComponent />
        <ContactComponent />
      </main>
      <Footer />
    </>
  );
}
