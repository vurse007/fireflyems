import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Mission from '@/components/Mission'
import ProductOverview from '@/components/ProductOverview'
import Benefits from '@/components/Benefits'
import Team from '@/components/Team'
import Comparison from '@/components/Comparison'
import HowItWorks from '@/components/HowItWorks'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Mission />
      <ProductOverview />
      <Benefits />
      <Team />
      <Comparison />
      <HowItWorks />
      <Contact />
      <Footer />
    </main>
  )
}
