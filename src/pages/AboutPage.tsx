import { Leaf, Award, Heart, Target, Users, CheckCircle } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">About Naturaahh</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bringing the power of nature to your doorstep with 100% natural and organic products
          </p>
        </div>

        <div className="relative mb-20">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 rounded-3xl opacity-20 blur-3xl"></div>
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Founded with a vision to reconnect people with the healing power of nature, Naturaahh
                  emerged from a deep-rooted belief in traditional wellness practices and natural remedies.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We started our journey in a small organic farm, where we learned the true value of
                  pure, unadulterated natural products. Today, we bring you the finest selection of
                  leaf powders, cold-pressed oils, millets, herbs, and healthy snacks.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Every product is carefully sourced, traditionally processed, and rigorously tested to
                  ensure you receive only the best that nature has to offer.
                </p>
              </div>
              <div className="relative h-[400px] md:h-auto">
                <img
                  src="https://images.pexels.com/photos/4198930/pexels-photo-4198930.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Natural products"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            {
              icon: Leaf,
              title: '100% Natural',
              description: 'Pure ingredients from nature with no chemicals or preservatives'
            },
            {
              icon: Award,
              title: 'Premium Quality',
              description: 'Certified organic products tested for highest quality standards'
            },
            {
              icon: Heart,
              title: 'Made with Love',
              description: 'Traditional methods preserving authentic taste and nutrition'
            },
            {
              icon: Target,
              title: 'Health Focused',
              description: 'Every product designed to enhance your wellness journey'
            }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-green-100 text-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-green-500 group-hover:text-white transition-colors">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-3xl shadow-2xl p-12 mb-20 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl leading-relaxed mb-8">
              To make natural, healthy, and sustainable products accessible to everyone while
              preserving traditional wisdom and supporting local farmers and communities.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-lg">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6" />
                <span>Sustainable Sourcing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6" />
                <span>Fair Trade Practices</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6" />
                <span>Eco-Friendly Packaging</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="text-center">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-4xl font-bold text-green-600 mb-2">50,000+</h3>
            <p className="text-gray-600 text-lg">Happy Customers</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-4xl font-bold text-green-600 mb-2">100+</h3>
            <p className="text-gray-600 text-lg">Natural Products</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-4xl font-bold text-green-600 mb-2">15+</h3>
            <p className="text-gray-600 text-lg">Years of Excellence</p>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Authenticity',
                description: 'We believe in staying true to traditional methods and natural ingredients without any shortcuts or compromises.'
              },
              {
                title: 'Transparency',
                description: 'Complete transparency in sourcing, processing, and pricing. You deserve to know what goes into every product.'
              },
              {
                title: 'Sustainability',
                description: 'Committed to eco-friendly practices that protect our planet for future generations.'
              },
              {
                title: 'Community',
                description: 'Supporting local farmers and communities while building a healthier society together.'
              }
            ].map((value, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
