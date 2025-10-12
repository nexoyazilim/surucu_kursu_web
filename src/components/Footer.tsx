import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Facebook, Twitter, Instagram, Linkedin, Youtube, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 relative">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl blur-lg opacity-50"></div>
                <div className="relative bg-gradient-to-br from-blue-600 to-cyan-600 p-3 rounded-xl shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <Car className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-black bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  Sürücü Akademi
                </h3>
                <p className="text-blue-300 text-xs font-semibold">18 Yıllık Deneyim</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed text-sm">
              Güvenli sürüş eğitiminde öncü kuruluş. 2005'ten beri kaliteli eğitim ve %98 başarı oranıyla hizmet veriyoruz.
            </p>



            {/* Social Media */}
            <div>
              <p className="text-xs font-semibold text-gray-400 mb-2">Bizi Takip Edin</p>
              <div className="flex gap-2">
                {[
                  { icon: Facebook, href: '#', color: 'from-blue-600 to-blue-700' },
                  { icon: Instagram, href: '#', color: 'from-pink-600 to-purple-600' },
                  { icon: Twitter, href: '#', color: 'from-blue-400 to-cyan-500' },
                  { icon: Youtube, href: '#', color: 'from-red-600 to-red-700' },
                  { icon: Linkedin, href: '#', color: 'from-blue-700 to-blue-800' },
                ].map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a 
                      key={index}
                      href={social.href}
                      className={`group relative bg-white/10 backdrop-blur-sm p-2 rounded-lg border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110 hover:-translate-y-1`}
                    >
                      <Icon className="h-4 w-4 text-gray-300 group-hover:text-white transition-colors" />
                      <div className={`absolute inset-0 bg-gradient-to-br ${social.color} rounded-lg opacity-0 group-hover:opacity-100 transition-opacity -z-10`}></div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Quick Links */}
            <div className="space-y-3">
              <h4 className="text-lg font-black mb-4 flex items-center gap-2">
                <div className="w-1 h-4 bg-gradient-to-b from-blue-600 to-cyan-600 rounded-full"></div>
                Hızlı Linkler
              </h4>
              <ul className="space-y-2">
                {[
                  { name: 'Ana Sayfa', href: '/' },
                  { name: 'Kurslar', href: '/courses' },
                  { name: 'Ehliyet Tipleri', href: '/license-types' },
                  { name: 'Fiyatlar', href: '/pricing' },
                  { name: 'Hakkımızda', href: '/about' },
                  { name: 'İletişim', href: '/contact' },
                ].map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.href}
                      className="group flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300"
                    >
                      <span className="w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 group-hover:w-4 transition-all duration-300"></span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-3">
              <h4 className="text-lg font-black mb-4 flex items-center gap-2">
                <div className="w-1 h-4 bg-gradient-to-b from-orange-600 to-yellow-600 rounded-full"></div>
                Hizmetler
              </h4>
              <ul className="space-y-2">
                {[
                  { name: 'B Sınıfı Ehliyet', href: '/license/b' },
                  { name: 'A Sınıfı Ehliyet', href: '/license/a' },
                  { name: 'C Sınıfı Ehliyet', href: '/license/c' },
                  { name: 'D Sınıfı Ehliyet', href: '/license/d' },
                  { name: 'Simülatör Eğitimi', href: '/courses' },
                  { name: 'Online Eğitim', href: '/courses' },
                ].map((service, index) => (
                  <li key={index}>
                    <Link 
                      to={service.href}
                      className="group flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300"
                    >
                      <span className="w-0 h-0.5 bg-gradient-to-r from-orange-600 to-yellow-600 group-hover:w-4 transition-all duration-300"></span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{service.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <h4 className="text-lg font-black mb-4 flex items-center gap-2">
                <div className="w-1 h-4 bg-gradient-to-b from-green-600 to-emerald-600 rounded-full"></div>
                İletişim
              </h4>
              <div className="space-y-3">
                <a href="#" className="group flex items-start gap-2 text-gray-300 hover:text-white transition-all duration-300">
                  <div className="bg-white/10 p-1.5 rounded-lg group-hover:bg-gradient-to-br group-hover:from-green-600 group-hover:to-emerald-600 transition-all duration-300">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-sm">Adres</p>
                    <p className="text-xs text-gray-400">Çankaya, Ankara</p>
                  </div>
                </a>

                <a href="tel:+903121234567" className="group flex items-start gap-2 text-gray-300 hover:text-white transition-all duration-300">
                  <div className="bg-white/10 p-1.5 rounded-lg group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-cyan-600 transition-all duration-300">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-sm">Telefon</p>
                    <p className="text-xs text-gray-400">(0312) 123 45 67</p>
                  </div>
                </a>

                <a href="mailto:info@surucukursu.com" className="group flex items-start gap-2 text-gray-300 hover:text-white transition-all duration-300">
                  <div className="bg-white/10 p-1.5 rounded-lg group-hover:bg-gradient-to-br group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-sm">E-posta</p>
                    <p className="text-xs text-gray-400">info@surucukursu.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-2 text-gray-300">
                  <div className="bg-white/10 p-1.5 rounded-lg">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-sm">Çalışma Saatleri</p>
                    <p className="text-xs text-gray-400">Pzt-Cmt: 09:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-gray-400 text-xs text-center md:text-left">
              &copy; 2024 Sürücü Akademi. Tüm hakları saklıdır.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Gizlilik Politikası
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                Kullanım Şartları
              </Link>
              <Link to="/kvkk" className="text-gray-400 hover:text-white transition-colors">
                KVKK
              </Link>
            </div>
          </div>
        </div>


      </div>
    </footer>
  );
};

export default Footer;