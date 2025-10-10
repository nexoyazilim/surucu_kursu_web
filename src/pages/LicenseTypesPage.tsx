import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Car, Bike, Truck, Bus, Tractor, BookOpen, ArrowRight, Clock, Users, TrendingUp } from 'lucide-react';

const LicenseTypesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const licenseTypes = [
    {
      type: "A Sınıfı",
      vehicles: "Tüm motosikletler",
      ageLimit: "24 (veya 2 yıllık A2)",
      color: "bg-red-500",
      url: "a",
      icon: Bike,
      category: "motorcycle",
      details: "Sınırsız güç ve motor hacmi",
      duration: "6-8 hafta",
      popularity: "Orta"
    },
    {
      type: "A1 Sınıfı",
      vehicles: "125cc'ye kadar motosikletler",
      ageLimit: "16",
      color: "bg-orange-500",
      url: "a1",
      icon: Bike,
      category: "motorcycle",
      details: "Max 11 kW güç",
      duration: "4-6 hafta",
      popularity: "Yüksek"
    },
    {
      type: "A2 Sınıfı",
      vehicles: "35 kW'a kadar motosikletler",
      ageLimit: "18",
      color: "bg-yellow-500",
      url: "a2",
      icon: Bike,
      category: "motorcycle",
      details: "Max 35 kW güç sınırı",
      duration: "5-7 hafta",
      popularity: "Yüksek"
    },
    {
      type: "B Sınıfı",
      vehicles: "Otomobil, kamyonet",
      ageLimit: "18",
      color: "bg-green-500",
      url: "b",
      icon: Car,
      category: "car",
      details: "En popüler ehliyet sınıfı",
      duration: "4-6 hafta",
      popularity: "Çok Yüksek"
    },
    {
      type: "BE Sınıfı",
      vehicles: "Römorklu otomobil",
      ageLimit: "18",
      color: "bg-teal-500",
      url: "be",
      icon: Car,
      category: "car",
      details: "B ehliyeti gerektirir",
      duration: "2-3 hafta",
      popularity: "Orta"
    },
    {
      type: "C Sınıfı",
      vehicles: "Kamyon, çekici",
      ageLimit: "21",
      color: "bg-blue-500",
      url: "c",
      icon: Truck,
      category: "commercial",
      details: "Ticari yük taşımacılığı",
      duration: "6-8 hafta",
      popularity: "Yüksek"
    },
    {
      type: "CE Sınıfı",
      vehicles: "Römorklu kamyon",
      ageLimit: "21",
      color: "bg-indigo-500",
      url: "ce",
      icon: Truck,
      category: "commercial",
      details: "C ehliyeti gerektirir",
      duration: "3-4 hafta",
      popularity: "Orta"
    },
    {
      type: "D Sınıfı",
      vehicles: "Otobüs",
      ageLimit: "24",
      color: "bg-purple-500",
      url: "d",
      icon: Bus,
      category: "commercial",
      details: "Yolcu taşımacılığı",
      duration: "7-9 hafta",
      popularity: "Orta"
    },
    {
        type: "D1 Sınıfı",
        vehicles: "Minibüs",
        ageLimit: "21",
        color: "bg-fuchsia-500",
        url: "d1",
        icon: Bus,
        category: "commercial",
        details: "16+1 koltuk sınırı",
        duration: "5-7 hafta",
        popularity: "Düşük"
    },
    {
      type: "DE Sınıfı",
      vehicles: "Römorklu otobüs",
      ageLimit: "24",
      color: "bg-pink-500",
      url: "de",
      icon: Bus,
      category: "commercial",
      details: "D ehliyeti gerektirir",
      duration: "3-4 hafta",
      popularity: "Düşük"
    },
    {
      type: "F Sınıfı",
      vehicles: "Traktör",
      ageLimit: "18",
      color: "bg-amber-600",
      url: "f",
      icon: Tractor,
      category: "other",
      details: "Tarımsal faaliyetler için",
      duration: "3-5 hafta",
      popularity: "Orta"
    },
    {
      type: "G Sınıfı",
      vehicles: "İş makineleri",
      ageLimit: "18",
      color: "bg-slate-600",
      url: "g",
      icon: BookOpen, // Placeholder for specific machinery
      category: "other",
      details: "Forklift, beko loder vb.",
      duration: "2-4 hafta",
      popularity: "Düşük"
    },
  ];

  const categories = [
    { key: 'all', name: 'Tümü' },
    { key: 'motorcycle', name: 'Motosiklet' },
    { key: 'car', name: 'Otomobil' },
    { key: 'commercial', name: 'Ticari' },
    { key: 'other', name: 'Diğer' },
  ];

  const filteredLicenses = selectedCategory === 'all'
    ? licenseTypes
    : licenseTypes.filter(license => license.category === selectedCategory);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Ehliyet Sınıfları
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            İhtiyaçlarınıza en uygun ehliyet sınıfını bulun. Kategorilere göre filtreleyerek aradığınızı kolayca keşfedin.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center flex-wrap gap-2 sm:gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.key}
              onClick={() => setSelectedCategory(category.key)}
              className={`px-4 py-2 text-sm sm:text-base font-semibold rounded-full transition-all duration-300 ${
                selectedCategory === category.key
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* License Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredLicenses.map((license, index) => {
            const Icon = license.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
              >
                <div className="p-6 flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {license.type}
                    </h3>
                    <div className={`${license.color} p-3 rounded-full text-white`}>
                      <Icon size={24} />
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">{license.details}</p>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2 text-gray-500" />
                      <span className="font-semibold text-gray-700 dark:text-gray-300">Yaş Sınırı:</span>
                      <span className="ml-auto text-gray-900 dark:text-white">{license.ageLimit}</span>
                    </div>
                     <div className="flex items-center">
                      <Car className="w-4 h-4 mr-2 text-gray-500" />
                      <span className="font-semibold text-gray-700 dark:text-gray-300">Araçlar:</span>
                      <span className="ml-auto text-right text-gray-900 dark:text-white">{license.vehicles}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-gray-500" />
                      <span className="font-semibold text-gray-700 dark:text-gray-300">Tahmini Süre:</span>
                      <span className="ml-auto text-gray-900 dark:text-white">{license.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <TrendingUp className="w-4 h-4 mr-2 text-gray-500" />
                      <span className="font-semibold text-gray-700 dark:text-gray-300">Popülerlik:</span>
                      <span className="ml-auto text-gray-900 dark:text-white font-medium">{license.popularity}</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 mt-auto">
                    <Link
                        to={`/license/${license.url}`}
                        className="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center flex items-center justify-center group-hover:gap-3 gap-2"
                    >
                        Detayları İncele
                        <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-12 text-white shadow-2xl">
          <h2 className="text-3xl font-bold mb-4">
            Hangi Ehliyet Sınıfı Size Uygun?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Uzman danışmanlarımızla iletişime geçin, hedeflerinize ve ihtiyaçlarınıza en uygun ehliyet türünü birlikte belirleyelim.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 font-bold px-8 py-4 rounded-xl hover:bg-gray-200 transition-transform hover:scale-105"
            >
              Ücretsiz Danışmanlık Al
            </Link>
            <Link
              to="/courses"
              className="bg-blue-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-700 transition-transform hover:scale-105"
            >
              Tüm Kursları Gör
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LicenseTypesPage;