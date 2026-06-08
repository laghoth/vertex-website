"use client";
import { useState } from "react";
import {
  FaPlane,
  FaShip,
  FaTruck,
  FaWarehouse,
  FaRegFileAlt,
  FaBars,
  FaTimes,
  FaShieldAlt,
  FaArrowRight,
} from "react-icons/fa";
import { FiActivity } from "react-icons/fi";

export default function Home() {
  const [showCookie, setShowCookie] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased">
      {/* 🍪 COOKIE BANNER */}
      {showCookie && (
        <div className="fixed bottom-0 left-0 right-0 bg-slate-900 text-white p-4 z-50 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-slate-700 shadow-xl">
          <p className="text-sm text-slate-300 max-w-4xl text-center md:text-left">
            When you visit our website, cookies are placed on your computer,
            mobile phone, or tablet. Their purpose is to facilitate your
            browsing experience.
          </p>
          <button
            onClick={() => setShowCookie(false)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-lg text-sm transition-all"
          >
            Got it
          </button>
        </div>
      )}

      {/* 🧭 NAVIGATION */}
      <header className="sticky top-0 w-full z-50">
        {/* 🏢 1. Top Mini-Bar (Info Bar dial les entreprises pro) */}
        <div className="hidden sm:block bg-slate-900 text-slate-400 text-xs py-2 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <div className="flex items-center gap-6">
              <span>📧 contact@vertex.com</span>
              <span>📞 +212 (0) 5222-49051</span>
            </div>
            <div className="flex items-center gap-4">
              <span>Mon - Fri: 8:00 AM - 6:00 PM</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>{" "}
                Systems Operational
              </span>
            </div>
          </div>
        </div>

        {/* 🧭 2. Main Navigation Bar */}
        <div className="bg-white/80 backdrop-blur-lg border-b border-slate-200/80 transition-all duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-2 group cursor-pointer">
              <img
                src={"/logo.png"}
                alt="Vertex Logo"
                className="h-9 w-auto object-contain group-hover:scale-102 transition-transform duration-300"
              />
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8 font-semibold text-sm text-slate-600 tracking-wide">
              {[
                { label: "THE GROUP", href: "#about" },
                { label: "OUR SERVICES", href: "#services" },
                { label: "TRACKING", href: "#tracking" },
                { label: "CONTACT", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative py-2 text-slate-600 hover:text-blue-600 transition-colors duration-300 group"
                >
                  {link.label}
                  {/* L-Khet dial hover l-m9add underneath */}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="#quote"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl text-sm font-bold tracking-wide transition-all duration-300 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 hover:-translate-y-0.5"
              >
                Get a Quote
              </a>
            </div>

            {/* Mobile Menu Trigger Button */}
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="md:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenu ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>

        {/* 📱 3. Premium Mobile Dropdown Menu */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-xl transition-all duration-300 ease-in-out ${
            mobileMenu
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="px-6 py-6 space-y-4">
            {[
              { label: "THE GROUP", href: "#about" },
              { label: "OUR SERVICES", href: "#services" },
              { label: "TRACKING", href: "#tracking" },
              { label: "CONTACT", href: "#contact" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenu(false)}
                className="block font-semibold text-slate-700 hover:text-blue-600 p-2 rounded-lg hover:bg-slate-50 transition-all text-base tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-100">
              <a
                href="#quote"
                onClick={() => setMobileMenu(false)}
                className="block text-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold text-sm tracking-wide shadow-md transition-all"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* 🚀 HERO SECTION */}
      <section className="relative text-white py-24 lg:py-32 overflow-hidden bg-slate-950">
        {/* 🖼️ 1. Background Image mn l-public folder */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/bg-hero.jpg')" }}
        />

        {/* 🎨 2. Overlay Gradient (bach l-image t-ndj m3a l-app o l-mktouba t-bqa bayna clear) */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/45 via-blue-950/80 to-slate-950/45 mix-blend-multiply" />

        {/* 🧱 3. Content container (Z-index 10) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/20 px-3 py-1.5 rounded-full text-blue-400 text-sm font-semibold backdrop-blur-sm">
              <FaShieldAlt size={16} /> Your logistics partner par excellence
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-sm">
              International Transport &{" "}
              <span className="text-blue-400">Global Logistics</span> Solutions
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0">
              As specialists in international transport, the Vertex group
              handles the shipment of your goods worldwide securely and
              efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a
                href="#services"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3.5 rounded-lg transition text-center shadow-lg shadow-blue-900/40"
              >
                Discover our services
              </a>
              <a
                href="#quote"
                className="bg-white/10 hover:bg-white/20 text-white font-medium px-8 py-3.5 rounded-lg transition text-center border border-white/20 backdrop-blur-sm"
              >
                Get a quote
              </a>
            </div>

            {/* Experience Counter */}
            {/* <div className="pt-8 flex justify-center lg:justify-start items-center gap-4">
              <div className="text-4xl sm:text-5xl font-black text-blue-400">
                20+
              </div>
              <div className="text-sm tracking-wide text-slate-400 uppercase text-left font-semibold">
                Years of <br /> Experience
              </div>
            </div> */}
          </div>

          {/* Quick Action Card */}
          <div className="lg:col-span-5 bg-white text-slate-900 p-8 rounded-2xl shadow-2xl border border-slate-100 space-y-6 relative z-20">
            <h3 className="text-xl font-bold border-b pb-4 text-blue-900">
              Quick Booking & Quotes
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-slate-50 rounded-xl hover:border-blue-500 border border-transparent transition">
                <h4 className="font-bold text-base">Reservation</h4>
                <p className="text-xs text-slate-500 mb-2">
                  Schedule your transport online easily!
                </p>
                <a
                  href="#quote"
                  className="text-sm font-bold text-blue-600 inline-flex items-center gap-1 hover:gap-2 transition"
                >
                  Book now <FaArrowRight className="inline ml-1" size={14} />
                </a>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl hover:border-blue-500 border border-transparent transition">
                <h4 className="font-bold text-base">Tell us what you need!</h4>
                <p className="text-xs text-slate-500 mb-2">
                  Would you like to know more about our logistics solutions?
                </p>
                <a
                  href="#quote"
                  className="text-sm font-bold text-blue-600 inline-flex items-center gap-1 hover:gap-2 transition"
                >
                  My quote <FaArrowRight className="inline ml-1" size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 📡 TRACKING SECTION */}
      <section id="tracking" className="py-12 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4 max-w-2xl">
            <div className="p-3 bg-white/10 rounded-xl shrink-0">
              <FiActivity size={32} className="text-blue-200" />
            </div>
            <div>
              <h2 className="text-xl font-bold uppercase tracking-wider text-blue-200">
                TRACKING SECTION
              </h2>
              <p className="text-sm text-blue-50 opacity-90 mt-1">
                Access all real-time updates provided by the carrier regarding
                loading status, departure, and arrival information.
              </p>
            </div>
          </div>
          <button className="bg-white text-blue-900 hover:bg-blue-50 font-bold px-8 py-3.5 rounded-lg transition shrink-0 shadow-lg">
            Track your shipment
          </button>
        </div>
      </section>

      {/* 🏢 WHO WE ARE */}
      <section
        id="about"
        className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-16 items-center"
      >
        <div className="lg:col-span-6 space-y-6">
          <div className="text-xs font-bold uppercase tracking-widest text-blue-600">
            Who We Are
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950">
            Experts in International Logistics & Freight Transport
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Since its creation in 2001, Vertex has developed professional
            international transport and logistics solutions tailored
            specifically for its SME and enterprise clients worldwide.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 pt-4">
            <div className="border-l-4 border-blue-600 pl-4">
              <h4 className="font-bold text-lg text-slate-900">
                Import/Export
              </h4>
              <p className="text-sm text-slate-500 mt-1">
                Comprehensive global transit and forwarding networks.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-bold text-lg text-slate-900">Cross Trade</h4>
              <p className="text-sm text-slate-500 mt-1">
                Third-country shipping routes bypassing home ports seamlessly.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-6 bg-slate-200 h-96 rounded-2xl flex items-center justify-center text-slate-400 font-medium overflow-hidden shadow-inner relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent"></div>
          <img src="/container-cargo.jpg" alt="" />
        </div>
      </section>

      {/* 💼 OUR SERVICES/EXPERTISE */}
      <section id="services" className="py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
              Our Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950">
              Tailored to Your Requirements & Goods
            </h2>
            <p className="text-slate-600">
              Vertex studies and implements the optimized freight method best
              suited to your operational and financial needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="p-3 bg-blue-50 text-blue-600 w-fit rounded-xl mb-6">
                  <FaPlane size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Air Freight
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Shipping your high-value or time-critical goods to the ends of
                  the earth in no time.
                </p>
              </div>
              <a
                href="#contact"
                className="text-sm font-bold text-blue-600 mt-6 inline-flex items-center gap-1 hover:gap-2 transition"
              >
                Learn more <FaArrowRight className="inline ml-1" size={14} />
              </a>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="p-3 bg-blue-50 text-blue-600 w-fit rounded-xl mb-6">
                  <FaShip size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Maritime Freight
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Containerized (FCL), conventional, or RoRo freight… Ensuring
                  your cargo arrives safely at its destination port.
                </p>
              </div>
              <a
                href="#contact"
                className="text-sm font-bold text-blue-600 mt-6 inline-flex items-center gap-1 hover:gap-2 transition"
              >
                Learn more <FaArrowRight className="inline ml-1" size={14} />
              </a>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="p-3 bg-blue-50 text-blue-600 w-fit rounded-xl mb-6">
                  <FaTruck size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Road Freight
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  An integral part of Vertex's multimodal network, providing
                  safe overland point-to-point delivery.
                </p>
              </div>
              <a
                href="#contact"
                className="text-sm font-bold text-blue-600 mt-6 inline-flex items-center gap-1 hover:gap-2 transition"
              >
                Learn more <FaArrowRight className="inline ml-1" size={14} />
              </a>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="p-3 bg-blue-50 text-blue-600 w-fit rounded-xl mb-6">
                  <FaWarehouse size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Logistics Solutions
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We offer unique and innovative modern warehousing solutions to
                  ensure secure product storage and distribution.
                </p>
              </div>
              <a
                href="#contact"
                className="text-sm font-bold text-blue-600 mt-6 inline-flex items-center gap-1 hover:gap-2 transition"
              >
                Learn more <FaArrowRight className="inline ml-1" size={14} />
              </a>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="p-3 bg-blue-50 text-blue-600 w-fit rounded-xl mb-6">
                  <FaRegFileAlt size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Customs Management
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Expert advice, strategic support, and full handling management
                  of your complex cross-border clearance operations.
                </p>
              </div>
              <a
                href="#contact"
                className="text-sm font-bold text-blue-600 mt-6 inline-flex items-center gap-1 hover:gap-2 transition"
              >
                Learn more <FaArrowRight className="inline ml-1" size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 📈 Vertex IN FIGURES */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
                Proven Performance
              </span>
              <h2 className="text-3xl font-extrabold sm:text-4xl">
                Vertex in Figures
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-slate-400 text-base max-w-xl">
                When you're looking for freight transport companies, you need to
                know that your cargo and business are in safe hands. Here's why
                you should choose us.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 border-t border-slate-800 pt-12">
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl font-black text-blue-400">
                10,000
              </div>
              <div className="text-xs uppercase tracking-wider font-bold text-slate-400">
                TEUs transported / year
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl font-black text-blue-400">
                1,900
              </div>
              <div className="text-xs uppercase tracking-wider font-bold text-slate-400">
                Tons of air freight / year
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl font-black text-blue-400">
                8,000
              </div>
              <div className="text-xs uppercase tracking-wider font-bold text-slate-400">
                FTL, LTL shipments / year
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl font-black text-blue-400">
                9,000 m²
              </div>
              <div className="text-xs uppercase tracking-wider font-bold text-slate-400">
                Of managed warehouses
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl font-black text-blue-400">
                10,000
              </div>
              <div className="text-xs uppercase tracking-wider font-bold text-slate-400">
                Customs declarations / year
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔄 METHODOLOGY */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
            How we operate
          </span>
          <h2 className="text-3xl font-bold text-slate-900">
            Personalized Solutions For Each Client
          </h2>
          <p className="text-slate-600">
            Depending on your constraints, we design the workflow best suited to
            your production deadlines.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl border border-slate-200">
            <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center mb-4">
              1
            </div>
            <h4 className="font-bold text-lg mb-2">Needs Analysis</h4>
            <p className="text-sm text-slate-600">
              Detailed auditing of cargo limits, deadlines, and cost profiles.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl border border-slate-200">
            <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center mb-4">
              2
            </div>
            <h4 className="font-bold text-lg mb-2">
              Customized Transport Solutions
            </h4>
            <p className="text-sm text-slate-600">
              Routing configuration using multiple integrated options.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl border border-slate-200">
            <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center mb-4">
              3
            </div>
            <h4 className="font-bold text-lg mb-2">Organization & Customs</h4>
            <p className="text-sm text-slate-600">
              Executing administrative compliance files for worry-free arrival.
            </p>
          </div>
        </div>
      </section>

      {/* 📞 CTA */}
      <section
        id="quote"
        className="py-24 bg-blue-50 border-t border-b border-blue-100"
      >
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950">
            Do you have a need, a project?
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Need a professional partner to handle the logistics of your
            products? Contact us now for a personalized quote or for more
            information about our services.
          </p>
          <div>
            <a
              href="mailto:contact@Vertex.com"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl transition shadow-lg shadow-blue-200"
            >
              Request a quote
            </a>
          </div>
        </div>
      </section>

      {/* 🏁 FOOTER */}
      <footer
        id="contact"
        className="bg-slate-950 text-slate-400 pt-16 pb-8 border-t border-slate-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-4 space-y-4">
            <div className="text-xl font-black text-white tracking-wider">
              Vertex
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Head Office: Boulevard Moulay Ismail, Residence Palace Emile Zola
              No. 12, Casablanca.
              <br />
              Tel: +212 (0) 5222-49051
            </p>
            <div className="flex gap-4 pt-2 text-slate-500">
              <a href="#" className="hover:text-blue-500 text-xs font-bold">
                LinkedIn
              </a>
              <a href="#" className="hover:text-blue-500 text-xs font-bold">
                Facebook
              </a>
              <a href="#" className="hover:text-blue-500 text-xs font-bold">
                Twitter
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-3">
            <h5 className="text-white font-bold text-sm tracking-wide uppercase">
              About
            </h5>
            <ul className="text-xs space-y-2">
              <li>
                <a href="#" className="hover:text-white transition">
                  The group
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Career
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <h5 className="text-white font-bold text-sm tracking-wide uppercase">
              Services
            </h5>
            <ul className="text-xs space-y-2 grid grid-cols-2 gap-x-2 gap-y-2">
              <li>
                <a href="#" className="hover:text-white transition">
                  Air Freight
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Maritime
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Road
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Logistics
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Customs
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <h5 className="text-white font-bold text-sm tracking-wide uppercase">
              Legal
            </h5>
            <ul className="text-xs space-y-2">
              <li>
                <a href="#" className="hover:text-white transition">
                  Legal notice
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Terms of use
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-slate-900 flex flex-col sm:flex-row justify-center items-center gap-4 text-xs text-slate-600">
          <p>Copyright © 2026 Vertex. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
