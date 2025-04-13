"use client"; // If you're using the App Router in Next.js 13+

import { useEffect } from "react";

export default function Home() {
  // Optional: enable smooth scrolling in all browsers
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <main className="bg-gray-100 min-h-screen">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow z-10">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <span className="text-xl font-bold text-blue-600">StreamlineAV</span>
          <div className="space-x-4">
            <a href="#about" className="text-gray-700 hover:text-blue-600">
              About
            </a>
            <a href="#services" className="text-gray-700 hover:text-blue-600">
              Services
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative h-screen pt-16 bg-cover bg-center bg-no-repeat flex items-center justify-center text-white text-center px-4"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 z-0"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to StreamlineAV
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Seamless audio-visual and smart home solutions designed for the way
            you live.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white text-center">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4">
          About StreamlineAV
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
          At StreamlineAV, we specialize in transforming everyday spaces into
          intelligent, immersive environments. From home theaters and surround
          sound to smart lighting, security, and automation, we bring
          cutting-edge technology together to enhance comfort, convenience, and
          connection.
          <br />
          <br />
          Founded in 2017, StreamlineAV is built on over 20 years of hands-on
          experience in home entertainment, networking, and smart systems. As a
          local business owner, I’m committed to delivering personalized service
          with a focus on quality, reliability, and long-term relationships.
          Every project is approached with care, attention to detail, and a
          passion for helping clients create homes that truly work for them.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4">
          Our Services
        </h2>
        <ul className="text-gray-700 max-w-2xl mx-auto space-y-2">
          <li>- Home Theater Installation</li>
          <li>- Conference Room AV Systems</li>
          <li>- Smart Home Integration</li>
          <li>- Custom Audio Solutions</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white text-center">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4">Contact</h2>
        <p className="text-gray-700 mb-8">
          Get in touch with us to start your next project.
        </p>

        <form
          action="https://formspree.io/f/{yourFormID}" // <-- replace with your actual Formspree endpoint
          method="POST"
          className="max-w-xl mx-auto space-y-4 text-left"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              required
              className="w-full border border-gray-300 rounded p-2"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}
