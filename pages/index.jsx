import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import ShowMenu from "../components/ShowMenu"
import Rating from "../components/Rating"
import Contact from "../components/Contact"
import Welcome from "../components/Welcome"
import Script from 'next/script'
export default function Home() {
  return (
    <div className="bg-secondary cabin text-white">
      <Navbar />
      <Hero />
      <Welcome />
      <ShowMenu />
      <Rating />
      <Contact />
      
     
              <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"></Script>

    </div>
  )
}
