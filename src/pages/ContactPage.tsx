import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Validation Function
  const validateForm = () => {
    const newErrors = {
      name: formData.name ? "" : "Name is required.",
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
        ? ""
        : "Enter a valid email address.",
      phone:
        /^[0-9]{10}$/.test(formData.phone) && !/[A-Za-z]/.test(formData.phone)
          ? ""
          : "Enter a valid 10-digit phone number.",
      message: formData.message ? "" : "Message is required.",
    };

    setErrors(newErrors);
    return Object.values(newErrors).every((err) => err === "");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name === "phone") {
      if (/[^0-9]/.test(value)) return; // Block alphabets instantly
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    const msg = `📩 *New Contact Request*\n\n👤 *Name*: ${formData.name}\n📧 *Email*: ${formData.email}\n📱 *Phone*: ${formData.phone}\n\n💬 *Message*: ${formData.message}`;

    const whatsappNumber = "919000965896";
    const encodedMessage = encodeURIComponent(msg);

    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");

    setIsSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });

    setTimeout(() => setIsSubmitted(false), 4000);
  };

  return (
    <section id="contact">
    <div className="min-h-screen bg-gradient-to-b from-lime-50 to-white pt-24 pb-20">
      <div className="container mx-auto px-5">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 drop-shadow-sm">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mt-3 max-w-3xl mx-auto">
            We’re here to help! Reach out anytime — our team replies quickly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Details */}
          <div className="space-y-8">

            <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-lime-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>

              {/* Info Cards */}
              <div className="space-y-6">

                {/* Address */}
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-lime-100 text-lime-500 rounded-xl group-hover:bg-lime-300 group-hover:text-white transition-all shadow">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Visit Us</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Hyderabad.

                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-lime-100 text-lime-500 rounded-xl group-hover:bg-lime-300 group-hover:text-white transition-all shadow">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Call Us</h3>
                    <p className="text-gray-600">
                      +91 90009 65896<br />
                      
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-lime-100 text-lime-500 rounded-xl group-hover:bg-lime-300 group-hover:text-white transition-all shadow">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email Us</h3>
                    <p className="text-gray-600">
                      naturaahh@gmail.com<br />
                      
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-lime-100 text-lime-500 rounded-xl group-hover:bg-lime-300 group-hover:text-white transition-all shadow">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Business Hours</h3>
                    <p className="text-gray-600">
                      Mon–Sat: 9:00 AM – 7:00 PM<br />
                      Sunday: 10:00 AM – 5:00 PM
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Green Card */}
            <div className="bg-gradient-to-r from-lime-400 to-lime-200 text-black p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Why Choose Naturaahh?</h3>
              <ul className="space-y-3 text-lg">
                {[
                  "100% Natural & Organic Products",
                  "Premium Quality Guaranteed",
                  "Free Shipping on All Orders",
                  "Traditional Processing Methods",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6" /> {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-white/70 backdrop-blur-lg rounded-2xl border border-lime-100 shadow-2xl p-8">

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>

            {isSubmitted && (
              <div className="p-4 bg-lime-100 text-lime-500 border border-lime-200 rounded-xl mb-6 animate-fadeIn">
                Message sent successfully! We will contact you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name */}
              <div>
                <label className="font-semibold text-gray-700">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full mt-2 p-3 rounded-xl border-2 border-gray-300 focus:border-lime-500 outline-none"
                  placeholder="Your name"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="font-semibold text-gray-700">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full mt-2 p-3 rounded-xl border-2 border-gray-300 focus:border-lime-500 outline-none"
                  placeholder="your@email.com"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="font-semibold text-gray-700">Phone *</label>
                <input
                  type="text"
                  name="phone"
                  maxLength={10}
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full mt-2 p-3 rounded-xl border-2 border-gray-300 focus:border-lime-500 outline-none"
                  placeholder="10-digit number"
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
              </div>

              {/* Message */}
              <div>
                <label className="font-semibold text-gray-700">Message *</label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full mt-2 p-3 rounded-xl border-2 border-gray-300 focus:border-lime-500 outline-none resize-none"
                  placeholder="Write your message..."
                />
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-lime-600 hover:bg-lime-700 text-white py-4 rounded-xl text-lg font-bold flex items-center justify-center gap-3 transform transition-all duration-300 hover:scale-[1.04]"
              >
                <Send className="w-6 h-6" /> Send Message
              </button>
            </form>
          </div>

        </div>

        {/* GOOGLE MAP — KEPT */}
        <div className="mt-16 rounded-2xl overflow-hidden shadow-2xl h-[450px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.9937835704423!2d72.8310494!3d19.0144963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce92e4c2fb33%3A0x6b25c8f5e8d7f1e7!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Map"
          />
        </div>
      </div>
    </div>
    </section>
  );
}
