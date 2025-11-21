import { Leaf, Heart, Award, Target, Users, CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      {/* HEADER SECTION */}
      <section className="text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
          About <span className="text-lime-600">Naturaahh</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Pure. Natural. Wholesome. We bring nature’s finest ingredients straight to your home.
        </p>
      </section>

      {/* BRAND SHOWCASE */}
      <section className="container mx-auto px-6 mb-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Naturaahh was born from a deep belief that true wellness comes from
              nature. With a passion for purity and authenticity, we set out to
              create products that honor traditional wisdom while embracing modern
              quality standards.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Every product we craft is sourced responsibly from local farmers,
              processed gently, and packed with nature’s original goodness—
              without chemicals, preservatives, or compromise.
            </p>
            <p className="text-gray-700 leading-relaxed">
              From leaf powders and cold-pressed oils to millets, herbs, and
              wholesome natural snacks — each product reflects our commitment to
              purity, sustainability, and your well-being.
            </p>
          </div>

          <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.pexels.com/photos/4198930/pexels-photo-4198930.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Naturaahh natural products"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* FOUR FEATURES */}
      <section className="container mx-auto px-6 mb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Leaf,
              title: "100% Natural",
              text: "Pure ingredients sourced directly from trusted farms.",
            },
            {
              icon: Award,
              title: "Superior Quality",
              text: "High-quality organic products with strict testing.",
            },
            {
              icon: Heart,
              title: "Crafted with Care",
              text: "Traditional processing methods for true authenticity.",
            },
            {
              icon: Target,
              title: "Wellness Focused",
              text: "Products designed to support a healthy lifestyle.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border border-lime-300 rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300 group"
            >
              <div className="bg-lime-300 text-lime-600 w-16 h-16 rounded-xl flex items-center justify-center mb-5 group-hover:bg-lime-200 group-hover:text-white transition">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GREEN MISSION SECTION */}
      <section className="bg-gradient-to-r from-lime-300 to-lime-200 text-black py-16 px-6 mb-24 rounded-3xl container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg md:text-xl leading-relaxed mb-8">
            To make natural, clean, and wholesome food accessible to every home
            while supporting sustainable farming and empowering local communities.
          </p>

          <div className="flex flex-wrap justify-center gap-8">
            {["Sustainable Sourcing", "Fair Trade Practices", "Eco-Friendly Packaging"].map(
              (text, index) => (
                <div key={index} className="flex items-center gap-2 text-lg">
                  <CheckCircle2 className="w-6 h-6" />
                  <span>{text}</span>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="container mx-auto px-6 mb-24">
        <div className="grid md:grid-cols-3 gap-10 text-center">
          {[
            { icon: Users, number: "50,000+", label: "Happy Customers" },
            { icon: Leaf, number: "120+", label: "Natural Products" },
            { icon: Award, number: "15+", label: "Years of Trust" },
          ].map((item, i) => (
            <div key={i}>
              <div className="bg-lime-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-12 h-12 text-lime-600" />
              </div>
              <h3 className="text-4xl font-extrabold text-lime-600">{item.number}</h3>
              <p className="text-gray-700 text-lg mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="container mx-auto px-6">
        <div className="bg-white border border-lime-100 shadow-lg rounded-3xl p-12">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                title: "Authenticity",
                text: "We stay true to natural ingredients and traditional processes.",
              },
              {
                title: "Transparency",
                text: "We believe you should know exactly what goes into your food.",
              },
              {
                title: "Sustainability",
                text: "Eco-friendly practices to protect our planet for the future.",
              },
              {
                title: "Community Support",
                text: "Partnering with local farmers & empowering rural communities.",
              },
            ].map((v, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-4 h-4 bg-lime-600 rounded-full mt-1"></div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{v.title}</h3>
                  <p className="text-gray-600 mt-1">{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
