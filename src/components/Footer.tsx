import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-4 col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3">
              <Car className="h-7 md:h-8 w-7 md:w-8 text-blue-400 animate-float" />
              <h3 className="text-xl md:text-2xl font-bold">Sürücü Akademi</h3>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              Güvenli sürüş eğitiminde öncü kuruluş. 2005'ten beri kaliteli eğitim veriyoruz.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110">
                <Facebook className="h-5 md:h-6 w-5 md:w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110">
                <Twitter className="h-5 md:h-6 w-5 md:w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110">
                <Instagram className="h-5 md:h-6 w-5 md:w-6" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-base md:text-lg font-semibold">Hızlı Linkler</h4>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-blue-400 transition-all duration-300 text-sm md:text-base hover:translate-x-1 inline-block">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-400 hover:text-blue-400 transition-all duration-300 text-sm md:text-base hover:translate-x-1 inline-block">
                  Kurslar
                </Link>
              </li>
              <li>
                <Link to="/license-types" className="text-gray-400 hover:text-blue-400 transition-all duration-300 text-sm md:text-base hover:translate-x-1 inline-block">
                  Ehliyet Tipleri
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-400 hover:text-blue-400 transition-all duration-300 text-sm md:text-base hover:translate-x-1 inline-block">
                  Fiyatlar
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-base md:text-lg font-semibold">Hizmetler</h4>
            <ul className="space-y-2 md:space-y-3">
              <li className="text-gray-400">B Sınıfı Ehliyet</li>
              <li className="text-gray-400">A Sınıfı Ehliyet</li>
              <li className="text-gray-400">C Sınıfı Ehliyet</li>
              <li className="text-gray-400">Online Sınavlar</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-base md:text-lg font-semibold">İletişim</h4>
            <div className="space-y-2 md:space-y-3 text-gray-400 text-sm md:text-base">
              <p className="hover:text-blue-400 transition-colors">123 Sürücü Akademi Cad.</p>
              <p className="hover:text-blue-400 transition-colors">Ankara, Türkiye</p>
              <p className="hover:text-blue-400 transition-colors">Tel: (312) 123-4567</p>
              <p className="hover:text-blue-400 transition-colors">Email: info@surucu-akademi.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 md:mt-12 pt-6 md:pt-8 text-center text-gray-400">
          <p className="text-sm md:text-base">&copy; 2024 Sürücü Akademi. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;