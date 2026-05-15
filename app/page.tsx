import Nav      from '@/components/nav'
import Hero      from '@/components/sections/hero'
import Services  from '@/components/sections/services'
import Philosophy from '@/components/sections/philosophy'
import Products  from '@/components/sections/products'
import Waitlist  from '@/components/sections/waitlist'
import Footer    from '@/components/sections/footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Philosophy />
        <Products />
        <Waitlist />
      </main>
      <Footer />
    </>
  )
}
