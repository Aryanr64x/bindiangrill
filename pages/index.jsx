import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import ShowMenu from "../components/ShowMenu"
import Rating from "../components/Rating"
import Contact from "../components/Contact"
import Head from 'next/head';

export default function Home() {
  return (
    <div className="bg-secondary cabin text-white">
      <Navbar />
      <Hero />
      <ShowMenu />
      <Rating />
      <Contact />
      <Head>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
        crossorigin="anonymous"></script>
      </Head>
    </div>
  )
}
