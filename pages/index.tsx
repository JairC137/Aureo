// pages/index.tsx
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import Opiniones from '../components/Opiniones'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Aureo | Servicios de Catering</title>
        <meta name="description" content="Experiencias gastronómicas con sello de excelencia" />
      </Head>
      <Navbar />
      <Hero
        title="Experiencias gastronómicas con sello de excelencia"
        subtitle="Servicios de catering, comedores industriales y más."
        ctaText="Cotiza tu evento"
      />
      <Services />
      <About />
      <ContactForm />
      <Opiniones />
      <Footer />
    </>
  )
}

