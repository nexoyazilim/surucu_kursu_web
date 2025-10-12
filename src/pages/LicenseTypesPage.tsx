import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Car, Bike, Truck, Bus, Tractor, BookOpen, ArrowRight, Clock, Users, TrendingUp, Phone, MessageCircle } from 'lucide-react';

const LicenseTypesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // VERİLERİNİZDE HİÇBİR DEĞİŞİKLİK YAPILMADI
  const licenseTypes = [
    {
      type: "A Sınıfı",
      vehicles: "Tüm motosikletler",
      ageLimit: "24 (veya 2 yıllık A2)",
      color: "red",
      url: "a",
      icon: Bike,
      category: "motorcycle",
      details: "Sınırsız güç ve motor hacmi.",
      duration: "6-8 hafta",
      popularity: "Orta"
    },
    {
      type: "A1 Sınıfı",
      vehicles: "125cc'ye kadar motosikletler",
      ageLimit: "16",
      color: "orange",
      url: "a1",
      icon: Bike,
      category: "motorcycle",
      details: "Maksimum 11 kW güce sahip.",
      duration: "4-6 hafta",
      popularity: "Yüksek"
    },
    {
      type: "A2 Sınıfı",
      vehicles: "35 kW'a kadar motosikletler",
      ageLimit: "18",
      color: "yellow",
      url: "a2",
      icon: Bike,
      category: "motorcycle",
      details: "Maksimum 35 kW güç sınırı.",
      duration: "5-7 hafta",
      popularity: "Yüksek"
    },
    {
      type: "B Sınıfı",
      vehicles: "Otomobil, kamyonet",
      ageLimit: "18",
      color: "green",
      url: "b",
      icon: Car,
      category: "car",
      details: "En popüler ehliyet sınıfı.",
      duration: "4-6 hafta",
      popularity: "Çok Yüksek"
    },
    {
      type: "BE Sınıfı",
      vehicles: "Römorklu otomobil",
      ageLimit: "18",
      color: "teal",
      url: "be",
      icon: Car,
      category: "car",
      details: "B sınıfı ehliyet gerektirir.",
      duration: "2-3 hafta",
      popularity: "Orta"
    },
    {
      type: "C Sınıfı",
      vehicles: "Kamyon, çekici",
      ageLimit: "21",
      color: "blue",
      url: "c",
      icon: Truck,
      category: "commercial",
      details: "Ticari yük taşımacılığı için.",
      duration: "6-8 hafta",
      popularity: "Yüksek"
    },
    {
      type: "CE Sınıfı",
      vehicles: "Römorklu kamyon",
      ageLimit: "21",
      color: "indigo",
      url: "ce",
      icon: Truck,
      category: "commercial",
      details: "C sınıfı ehliyet gerektirir.",
      duration: "3-4 hafta",
      popularity: "Orta"
    },
    {
      type: "D Sınıfı",
      vehicles: "Otobüs",
      ageLimit: "24",
      color: "purple",
      url: "d",
      icon: Bus,
      category: "commercial",
      details: "Ticari yolcu taşımacılığı.",
      duration: "7-9 hafta",
      popularity: "Orta"
    },
    {
        type: "D1 Sınıfı",
        vehicles: "Minibüs",
        ageLimit: "21",
        color: "fuchsia",
        url: "d1",
        icon: Bus,
        category: "commercial",
        details: "16+1 koltuk sınırı bulunur.",
        duration: "5-7 hafta",
        popularity: "Düşük"
    },
    {
      type: "DE Sınıfı",
      vehicles: "Römorklu otobüs",
      ageLimit: "24",
      color: "pink",
      url: "de",
      icon: Bus,
      category: "commercial",
      details: "D sınıfı ehliyet gerektirir.",
      duration: "3-4 hafta",
      popularity: "Düşük"
    },
    {
      type: "F Sınıfı",
      vehicles: "Traktör",
      ageLimit: "18",
      color: "amber",
      url: "f",
      icon: Tractor,
      category: "other",
      details: "Tarımsal faaliyetler için.",
      duration: "3-5 hafta",
      popularity: "Orta"
    },
    {
      type: "G Sınıfı",
      vehicles: "İş makineleri",
      ageLimit: "18",
      color: "slate",
      url: "g",
      icon: BookOpen, // Placeholder
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

  // Tema ile uyumlu gradyan renkleri oluşturmak için bir harita
  const colorMap: { [key: string]: string } = {
    red: "from-red-600 to-orange-600",
    orange: "from-orange-500 to-amber-500",
    yellow: "from-yellow-500 to-lime-500",
    green: "from-green-600 to-emerald-600",
    teal: "from-teal-500 to-cyan-500",
    blue: "from-blue-600 to-sky-600",
    indigo: "from-indigo-600 to-violet-600",
    purple: "from-purple-600 to-fuchsia-600",
    fuchsia: "from-fuchsia-600 to-pink-600",
    pink: "from-pink-600 to-rose-600",
    amber: "from-amber-600 to-orange-600",
    slate: "from-slate-600 to-gray-600",
  };

  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1571895345105-3e4f39591a27?w=1200')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="inline-block mb-6">
            <div className="bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-2 text-sm font-semibold text-blue-300">
              Tüm Sınıflar Bir Arada
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black mb-6 text-white">
            Ehliyet Sınıfları
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            İhtiyaçlarınıza en uygun ehliyet sınıfını bulun. Kategorilere göre filtreleyerek aradığınızı kolayca keşfedin.
          </p>
        </div>
      </section>

      {/* Licenses Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filters */}
          <div className="flex justify-center flex-wrap gap-4 mb-16">
            {categories.map(category => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`px-6 py-3 text-sm font-bold rounded-full transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category.key
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* License Types Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredLicenses.map((license, index) => {
              const Icon = license.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-3xl shadow-xl border-2 border-gray-100 hover:shadow-2xl hover:border-blue-200 overflow-hidden transition-all duration-500 transform hover:-translate-y-2 flex flex-col"
                >
                  <div className="p-8 flex-grow flex flex-col">
                    <div className="flex items-start gap-6 mb-5">
                      <div className={`flex-shrink-0 bg-gradient-to-br ${colorMap[license.color] || 'from-gray-600 to-gray-600'} w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-black text-gray-900">{license.type}</h3>
                        <p className="text-gray-600">{license.details}</p>
                      </div>
                    </div>

                    <div className="space-y-4 text-sm my-6 py-6 border-y-2 border-gray-100">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-gray-700 flex items-center gap-2"><Users size={16} className="text-gray-500" />Yaş Sınırı:</span>
                        <span className="font-semibold text-gray-900">{license.ageLimit}</span>
                      </div>
                      <div className="flex items-start justify-between">
                        <span className="font-bold text-gray-700 flex items-center gap-2 flex-shrink-0 mr-4"><Car size={16} className="text-gray-500" />Araçlar:</span>
                        <span className="font-semibold text-gray-900 text-right">{license.vehicles}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-gray-700 flex items-center gap-2"><Clock size={16} className="text-gray-500" />Tahmini Süre:</span>
                        <span className="font-semibold text-gray-900">{license.duration}</span>
                      </div>
                       <div className="flex items-center justify-between">
                        <span className="font-bold text-gray-700 flex items-center gap-2"><TrendingUp size={16} className="text-gray-500" />Popülerlik:</span>
                        <span className="font-semibold text-gray-900">{license.popularity}</span>
                      </div>
                    </div>

                    <Link
                      to={`/license/${license.url}`}
                      className="mt-auto w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-3"
                    >
                      Detayları İncele
                      <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>


    </div>
  );
};

export default LicenseTypesPage;