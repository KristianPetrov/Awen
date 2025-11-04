import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <section className="relative flex min-h-[75vh] md:min-h-[85vh] items-center justify-center px-6 pt-16 sm:pt-20 md:pt-24"> 
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="relative">
            <div className="candle-glow-2" aria-hidden="true"></div>
            <div className="candle-glow" aria-hidden="true"></div>
            <div className="candle-core" aria-hidden="true"></div>
            <Image
              src="/devans-chair-logo.png"
              alt="Devan's Chair logo"
              width={600}
              height={600}
              priority
              className="relative z-10 w-auto h-auto"
            />
          </div>
          <h1 className="mt-8 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-maroon">
            Hair as a grounding ritual
          </h1>
          <p className="mt-4 max-w-2xl text-base sm:text-lg md:text-xl text-foreground/90">
            Calm, presence, and meaningful connection with every session.
          </p>
          <div className="mt-8 flex gap-4">
            <a
              href="#book"
              className="rounded-full bg-maroon text-white px-6 py-3 text-sm sm:text-base transition-colors hover:opacity-90"
            >
              Book Now
            </a>
            <a
              href="#vision"
              className="rounded-full border border-brown text-maroon px-6 py-3 text-sm sm:text-base transition-colors hover:bg-brown/10"
            >
              Our Vision
            </a>
          </div>
        </div>
      </section>

      <main className="px-6 sm:px-8 md:px-12 lg:px-24 pb-24">
        {/* <section id="mission" className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-maroon">Mission Statement</h2>
          <p className="mt-4 text-lg leading-relaxed text-foreground/90">
          Devan’s Chair offers intentional haircuts with a calm, grounded experience. Each appointment includes a relaxing scalp massage, gentle presence, and clean, flattering cuts that grow out beautifully. My focus is connection, consistency, and helping you feel like yourself — just more at ease.
          </p>
        </section> */}

        <div className="my-12 flex items-center justify-center">
          <span className="text-3xl text-maroon">⸻</span>
        </div>

        <section id="vision" className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-maroon">Vision Statement</h2>
          <p className="mt-4 text-lg leading-relaxed text-foreground/90">
          Devan’s Chair offers intentional haircuts with a calm, grounded experience. Each appointment includes a relaxing scalp massage, gentle presence, and clean, flattering cuts that grow out beautifully. My focus is connection, consistency, and helping you feel like yourself — just more at ease.
          </p>
        </section>

        <section id="book" className="max-w-3xl mx-auto mt-16">
          <h2 className="sr-only">Book</h2>
          <div className="rounded-xl border border-brown/30 p-6 text-foreground">
            Booking coming soon. Please check back shortly.
          </div>
        </section>

        <section id="contact" className="max-w-4xl mx-auto mt-16">
          <h2 className="text-2xl sm:text-3xl font-semibold text-maroon">Contact & Location</h2>
          <div className="mt-6 grid gap-6 grid-cols-1">
            <div className="rounded-xl border border-brown/30 overflow-hidden">
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  title="Devan's Chair Location"
                  aria-label="Map showing the location of Devan's Chair"
                  src="https://www.google.com/maps?q=2183%20Fairview%20Road%2C%20Ste%20220B%2C%20Costa%20Mesa%2C%20CA%2092627&output=embed"
                  className="absolute inset-0 h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="rounded-xl border border-brown/30 p-6">
              <p className="text-maroon font-semibold">Devan's Chair</p>
              <p className="mt-1 text-foreground">2183 Fairview Road, Ste 220B</p>
              <p className="text-foreground">Costa Mesa, California 92627</p>
              <p className="mt-3">
                <a href="https://www.google.com/maps/search/?api=1&query=2183+Fairview+Road,+Ste+220B,+Costa+Mesa,+CA+92627" target="_blank" rel="noopener noreferrer" className="text-maroon underline">Open in Google Maps</a>
              </p>

              <div className="mt-6">
                <p className="text-maroon font-semibold">Hours</p>
                <div className="mt-3 grid grid-cols-2 gap-y-2 text-foreground/90">
                  <span className="text-maroon">Monday</span>
                  <span>3:00 pm – 8:00 pm</span>
                  <span className="text-maroon">Tuesday</span>
                  <span>3:00 pm – 8:00 pm</span>
                  <span className="text-maroon">Wednesday</span>
                  <span>11:00 am – 4:00 pm</span>
                  <span className="text-maroon">Thursday</span>
                  <span>9:00 am – 3:00 pm</span>
                  <span className="text-maroon">Friday</span>
                  <span>9:00 am – 3:00 pm</span>
                  <span className="text-maroon">Saturday</span>
                  <span>7:00 am – 11:00 am</span>
                  <span className="text-maroon">Sunday</span>
                  <span>Closed</span>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-maroon font-semibold">Contact</p>
                <p className="mt-2">
                  <a href="tel:+15626075657" className="text-foreground hover:text-maroon">(562) 607-5657</a>
                </p>
                <p className="mt-1">
                  <a href="mailto:devan.evans.chair@gmail.com" className="text-foreground hover:text-maroon">devan.evans.chair@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
