import React from 'react';
import { Link } from 'react-router-dom';

const LicenseTypesPage: React.FC = () => {
  const licenseTypes = [
    {
      type: "A Sınıfı",
      vehicles: "Tüm motosikletler",
      ageLimit: "25 (veya 2 yıllık A2 deneyimi)",
      color: "bg-red-500",
      url: "a",
    },
    {
      type: "A1 Sınıfı", 
      vehicles: "125cc'ye kadar motosikletler",
      ageLimit: "17",
      color: "bg-orange-500",
      url: "a1",
    },
    {
      type: "A2 Sınıfı",
      vehicles: "35 kW'a kadar motosikletler", 
      ageLimit: "19",
      color: "bg-yellow-500",
      url: "a2",
    },
    {
      type: "B Sınıfı",
      vehicles: "Otomobil, kamyonet",
      ageLimit: "18", 
      color: "bg-green-500",
      url: "b",
    },
    {
      type: "BE Sınıfı",
      vehicles: "Römorklu otomobil",
      ageLimit: "18",
      color: "bg-teal-500",
      url: "be",
    },
    {
      type: "C Sınıfı", 
      vehicles: "Kamyon, çekici",
      ageLimit: "22",
      color: "bg-blue-500",
      url: "c",
    },
    {
      type: "CE Sınıfı",
      vehicles: "Römorklu kamyon", 
      ageLimit: "22",
      color: "bg-indigo-500",
      url: "ce",
    },
    {
      type: "D Sınıfı",
      vehicles: "Otobüs, minibüs",
      ageLimit: "25",
      color: "bg-purple-500", 
      url: "d",
    },
    {
      type: "D1 Sınıfı",
      vehicles: "Minibüs",
      ageLimit: "22",
      color: "bg-teal-500",
      url: "d1",
    },
    {
      type: "DE Sınıfı",
      vehicles: "Römorklu otobüs",
      ageLimit: "25",
      color: "bg-pink-500",
      url: "de",
    },
    {
      type: "F Sınıfı",
      vehicles: "Traktör", 
      ageLimit: "18",
      color: "bg-amber-600",
      url: "f",
    },
    {
      type: "G Sınıfı",
      vehicles: "İş makineleri",
      ageLimit: "19", 
      color: "bg-slate-600",
      url: "g",
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Ehliyet Tipleri ve Araç Uyumluluğu
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            Farklı ehliyet tipleri ve hangi araçları kullanabileceğiniz hakkında detaylı bilgi edinin. 
            Her ehliyet sınıfının kendine özgü yaş sınırları ve araç kategorileri bulunmaktadır.
          </p>
        </div>

        {/* License Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {licenseTypes.map((license, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`${license.color} h-2 w-full`}></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {license.type}
                </h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Uyumlu Araçlar:
                    </span>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                      {license.vehicles}
                    </p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Yaş Sınırı:
                    </span>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                      {license.ageLimit}
                    </p>
                  </div>
                </div>
                <Link
                  to={`/license/${license.url}`}
                  className="w-full mt-6 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-semibold py-3 px-4 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors text-center block"
                >
                  Detaylı Bilgi
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Sections */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Requirements */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Genel Şartlar
            </h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full flex-shrink-0">
                  <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Yaş Şartı</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Her ehliyet sınıfı için belirlenmiş minimum yaş şartını sağlamalısınız.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full flex-shrink-0">
                  <div className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Sağlık Raporu</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Güncel sağlık raporu ve göz muayenesi sonucu gereklidir.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-full flex-shrink-0">
                  <div className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Teorik Sınav</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Trafik kuralları ve güvenlik konularından teorik sınavı geçmelisiniz.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-orange-100 dark:bg-orange-900/30 p-2 rounded-full flex-shrink-0">
                  <div className="w-2 h-2 bg-orange-600 dark:bg-orange-400 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Pratik Sınav</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Direksiyon sınavını başarıyla tamamlamalısınız.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Upgrade Path */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Ehliyet Yükseltme
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">A1 → A2</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  A1 ehliyetiniz varsa, 18 yaşını doldurduktan sonra A2 sınıfına yükseltebilirsiniz.
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">A2 → A</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  2 yıl A2 deneyimi ile veya 20 yaşını doldurarak A sınıfına yükseltebilirsiniz.
                </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">B → C/D</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  B sınıfı ehliyetiniz varsa, yaş şartını sağlayarak C veya D sınıfına geçebilirsiniz.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Hangi Ehliyet Sınıfı Size Uygun?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Uzman danışmanlarımızla iletişime geçin, size en uygun ehliyet türünü belirleyin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors"
            >
              Ücretsiz Danışmanlık
            </Link>
            <Link
              to="/contact"
              className="bg-blue-800 text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-900 transition-colors"
            >
              Kursa Kaydol
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LicenseTypesPage;