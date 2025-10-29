import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <section className="relative flex min-h-[75vh] md:min-h-[85vh] items-center justify-center px-6">
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="relative">
            <div className="candle-glow-2" aria-hidden="true"></div>
            <div className="candle-glow" aria-hidden="true"></div>
            <div className="candle-core" aria-hidden="true"></div>
            <Image
              src="/awen-viney-white-thick.png"
              alt="Awen Chair logo"
              width={600}
              height={600}
              priority
              className="relative z-10 w-auto h-auto"
            />
          </div>
          <h1 className="mt-8 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-brown">
            Hair as a grounding ritual
          </h1>
          <p className="mt-4 max-w-2xl text-base sm:text-lg md:text-xl text-brown/90">
            Calm, presence, and meaningful connection with every session.
          </p>
          <div className="mt-8 flex gap-4">
            <a
              href="#mission"
              className="rounded-full bg-maroon text-white px-6 py-3 text-sm sm:text-base transition-colors hover:opacity-90"
            >
              Our Mission
            </a>
            <a
              href="#vision"
              className="rounded-full border border-brown text-brown px-6 py-3 text-sm sm:text-base transition-colors hover:bg-brown/10"
            >
              Our Vision
            </a>
          </div>
        </div>
      </section>

      <main className="px-6 sm:px-8 md:px-12 lg:px-24 pb-24">
        <section id="mission" className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-brown">Mission Statement</h2>
          <p className="mt-4 text-lg leading-relaxed text-brown/90">
            At Awen Chair, our mission is to transform every haircut into a grounding and restorative ritual — an experience that nourishes the body, mind, and spirit. We offer more than just a style; we create space for calm, presence, and meaningful connection. Each session is guided by intention and care, helping our clients leave not only looking renewed, but feeling centered, confident, and deeply seen.
          </p>
        </section>

        <div className="my-12 flex items-center justify-center">
          <span className="text-3xl text-maroon">⸻</span>
        </div>

        <section id="vision" className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-brown">Vision Statement</h2>
          <p className="mt-4 text-lg leading-relaxed text-brown/90">
            We envision a world where beauty is not driven by vanity, but by self-respect — where the act of self-care becomes a sacred ritual that restores inner balance. Our space embodies calm intimacy, soothing sensory experiences, and heartfelt conversation that flows naturally, never forced. Through each touch, sound, and moment of presence, we aim to remind every client that they are whole, worthy, and radiant — inside and out.
          </p>
        </section>

        <section id="book" className="max-w-3xl mx-auto mt-16">
          <h2 className="sr-only">Book</h2>
          <div className="rounded-xl border border-brown/30 p-6 text-brown/90">
            Booking coming soon. Please check back shortly.
          </div>
        </section>

        <section id="contact" className="max-w-3xl mx-auto mt-8">
          <h2 className="sr-only">Contact</h2>
          <div className="rounded-xl border border-brown/30 p-6 text-brown/90">
            Contact coming soon.
          </div>
        </section>
      </main>
    </div>
  );
}
