import React, { useState } from 'react';
import { Check, ArrowRight, Star, Phone, Mail, MapPin } from 'lucide-react';
import { usePricingData } from '../hooks/useData';

const PricingPage: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const { data: pricingData, loading, error } = usePricingData();

  const pricingPlans = [
    {
      title: "B Sınıfı Ehliyet",
      subtitle: "Otomobil Ehliyeti",
      price: "5.000",
      description: "Otomobil ehliyeti için temel paketimiz, teorik dersler, direksiyon eğitimi ve sınav hazırlığını içerir.",
      features: [
        "30 saat teorik ders",
        "20 saat direksiyon dersi", 
        "Online deneme sınavları",
        "Sınav hazırlık materyalleri",
        "Bireysel eğitmen desteği",
        "Araç tahsisi"
      ],
      popular: true,
      image: "https://images.pexels.com/photos/1028434/pexels-photo-1028434.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "A Sınıfı Ehliyet", 
      subtitle: "Motosiklet Ehliyeti",
      price: "7.500",
      description: "Motosiklet ehliyeti için kapsamlı paketimiz, güvenli sürüş teknikleri ve ileri seviye eğitimleri kapsar.",
      features: [
        "25 saat teorik ders",
        "25 saat pratik eğitim",
        "Motosiklet tahsisi", 
        "Güvenlik ekipmanları",
        "Deneyimli eğitmenler",
        "Sınav garantisi"
      ],
      popular: false,
      image: "https://images.pexels.com/photos/2112236/pexels-photo-2112236.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "C Sınıfı Ehliyet",
      subtitle: "Kamyon Ehliyeti", 
      price: "10.000",
      description: "Kamyon ehliyeti için profesyonel paketimiz, ticari sürüş standartları ve yük taşıma eğitimlerini içerir.",
      features: [
        "40 saat teorik ders",
        "30 saat pratik eğitim",
        "Ticari araç eğitimi",
        "Yük taşıma kuralları",
        "Profesyonel sertifikasyon", 
        "İş imkanı desteği"
      ],
      popular: false,
      image: "https://images.pexels.com/photos/1212407/pexels-photo-1212407.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const faqItems = [
    {
      question: "Ehliyet sınavı ne zaman yapılıyor?",
      answer: "Ehliyet sınavları Milli Eğitim Bakanlığı tarafından belirlenen tarihlerde, genellikle 2-3 ayda bir yapılmaktadır. Kesin tarihler için kursumuzla iletişime geçebilirsiniz."
    },
    {
      question: "Ek ders ücretleri ne kadar?", 
      answer: "Ek direksiyon dersi ücretlerimiz saatlik olarak hesaplanmaktadır. Güncel ücret bilgisi ve paket seçenekleri için lütfen danışmanlarımızla görüşün."
    },
    {
      question: "Sınavda başarılı olmak için ne yapmalıyım?",
      answer: "Başarı için teorik derslere düzenli katılım, bol bol pratik yapma ve deneme sınavlarını çözmek çok önemlidir. Eğitmenlerimizin tavsiyelerine uymanız başarınızı artıracaktır."
    },
    {
      question: "Ödeme seçenekleri nelerdir?",
      answer: "Nakit, kredi kartı ve taksitli ödeme seçeneklerimiz bulunmaktadır. Özel indirim kampanyalarımız için danışmanlarımızla iletişime geçebilirsiniz."
    }
  ];

  if (loading) {
    return (
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Fiyat bilgileri yükleniyor...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-red-600">Fiyat bilgileri yüklenirken hata oluştu: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
            Sürücü Kursu Fiyatları
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Sürücü Akademi olarak, kaliteli sürüş eğitimini herkes için erişilebilir kılmaya kararlıyız. 
            Fiyatlandırma politikamız, şeffaflık ve adil fiyatlandırma ilkelerine dayanmaktadır.
          </p>
        </div>


        {/* Detailed Pricing Table */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white mb-8 md:mb-12 px-4">
            Detaylı Fiyat Listesi
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
            {/* Ehliyet Fiyatları */}
            <div 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1 hover:scale-105 card-flip group"
              style={{ animation: 'fadeInUp 0.8s ease-out forwards' }}
            >
              <div className="card-flip-inner">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 text-center bg-blue-50 dark:bg-blue-900/20 py-2 md:py-3 rounded-lg group-hover:bg-blue-100 transition-all duration-300">
                  <span className="group-hover:animate-pulse">💰 Ehliyet Fiyatları</span>
                </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-xs md:text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-2 md:py-3 px-1 md:px-2 font-semibold text-gray-900 dark:text-white">Sertifika</th>
                      <th className="text-left py-2 md:py-3 px-1 md:px-2 font-semibold text-gray-900 dark:text-white">Fark</th>
                      <th className="text-right py-2 md:py-3 px-1 md:px-2 font-semibold text-gray-900 dark:text-white">Fiyat</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricingData?.pricing.licenses.map((license, index) => (
                      <tr key={index} className="border-b border-gray-100 dark:border-gray-800">
                        <td className="py-2 md:py-3 px-1 md:px-2 text-gray-700 dark:text-gray-300">{license.type}</td>
                        <td className="py-2 md:py-3 px-1 md:px-2 text-gray-700 dark:text-gray-300">-</td>
                        <td className="py-2 md:py-3 px-1 md:px-2 text-right font-semibold text-gray-900 dark:text-white">{license.price} ₺</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              </div>
            </div>

            {/* Ehliyet Yükseltme Fiyatları */}
            <div 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:-rotate-1 hover:scale-105 card-flip group"
              style={{ animation: 'fadeInUp 0.8s ease-out 0.2s forwards' }}
            >
              <div className="card-flip-inner">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 text-center bg-green-50 dark:bg-green-900/20 py-2 md:py-3 rounded-lg group-hover:bg-green-100 transition-all duration-300">
                  <span className="group-hover:animate-pulse">⬆️ Ehliyet Yükseltme Fiyatları</span>
                </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-xs md:text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-2 md:py-3 px-1 md:px-2 font-semibold text-gray-900 dark:text-white">Mevcut</th>
                      <th className="text-left py-2 md:py-3 px-1 md:px-2 font-semibold text-gray-900 dark:text-white">Hedef</th>
                      <th className="text-right py-2 md:py-3 px-1 md:px-2 font-semibold text-gray-900 dark:text-white">Fiyat</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricingData?.pricing.upgrades.map((upgrade, index) => (
                      <tr key={index} className="border-b border-gray-100 dark:border-gray-800">
                        <td className="py-2 md:py-3 px-1 md:px-2 text-gray-700 dark:text-gray-300">{upgrade.from}</td>
                        <td className="py-2 md:py-3 px-1 md:px-2 text-gray-700 dark:text-gray-300">{upgrade.to}</td>
                        <td className="py-2 md:py-3 px-1 md:px-2 text-right font-semibold text-gray-900 dark:text-white">{upgrade.price} ₺</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              </div>
            </div>
          </div>

          {/* Ek Ücretler */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {/* Sınav Ücretleri */}
            <div 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-4 md:p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-2 hover:scale-110 card-flip group"
              style={{ animation: 'bounceIn 0.8s ease-out forwards' }}
            >
              <div className="card-flip-inner">
                <h3 className="text-base md:text-lg font-bold text-gray-900 dark:text-white mb-3 md:mb-4 text-center bg-yellow-50 dark:bg-yellow-900/20 py-2 rounded-lg group-hover:bg-yellow-100 transition-all duration-300">
                  <span className="group-hover:animate-pulse">📝 Sınav Ücretleri</span>
                </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800">
                  <span className="text-gray-700 dark:text-gray-300">Teorik Sınav</span>
                  <span className="font-semibold text-gray-900 dark:text-white">{pricingData?.pricing.exams.teorik} ₺</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700 dark:text-gray-300">Direksiyon Sınavı</span>
                  <span className="font-semibold text-gray-900 dark:text-white">{pricingData?.pricing.exams.direksiyon} ₺</span>
                </div>
              </div>
              </div>
            </div>

            {/* Vergiler */}
            <div 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-4 md:p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:-rotate-2 hover:scale-110 card-flip group"
              style={{ animation: 'bounceIn 0.8s ease-out 0.2s forwards' }}
            >
              <div className="card-flip-inner">
                <h3 className="text-base md:text-lg font-bold text-gray-900 dark:text-white mb-3 md:mb-4 text-center bg-red-50 dark:bg-red-900/20 py-2 rounded-lg group-hover:bg-red-100 transition-all duration-300">
                  <span className="group-hover:animate-pulse">💸 Vergiler</span>
                </h3>
              <div className="space-y-3">
                {pricingData?.pricing.taxes && Object.entries(pricingData.pricing.taxes).map(([key, value], index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800 last:border-b-0">
                    <span className="text-gray-700 dark:text-gray-300">{key}</span>
                    <span className="font-semibold text-gray-900 dark:text-white">{value} ₺</span>
                  </div>
                ))}
              </div>
              </div>
            </div>

            {/* Ek Hizmetler */}
            <div 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-4 md:p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 hover:scale-110 card-flip group"
              style={{ animation: 'bounceIn 0.8s ease-out 0.4s forwards' }}
            >
              <div className="card-flip-inner">
                <h3 className="text-base md:text-lg font-bold text-gray-900 dark:text-white mb-3 md:mb-4 text-center bg-purple-50 dark:bg-purple-900/20 py-2 rounded-lg group-hover:bg-purple-100 transition-all duration-300">
                  <span className="group-hover:animate-pulse">⚙️ Ek Hizmetler</span>
                </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800">
                  <span className="text-gray-700 dark:text-gray-300 text-sm">Direksiyon İkinci Dört Hak</span>
                  <span className="font-semibold text-gray-900 dark:text-white">{pricingData?.pricing.services.direksiyonIkinciHak} ₺</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800">
                  <span className="text-gray-700 dark:text-gray-300 text-sm">Sınavdan Kalan Aday</span>
                  <span className="font-semibold text-gray-900 dark:text-white">{pricingData?.pricing.services.sinavdanKalan} ₺</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700 dark:text-gray-300">Özel Ders</span>
                  <span className="font-semibold text-gray-900 dark:text-white">{pricingData?.pricing.services.ozelDers} ₺</span>
                </div>
              </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl hover:shadow-lg transition-all duration-300">
            <p className="text-center text-gray-700 dark:text-gray-300">
              <strong>Not:</strong> Fiyatlar değişiklik gösterebilir. Güncel fiyatlar için lütfen kursumuzla iletişime geçiniz.
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Ek Ücretler ve Notlar
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Fiyatlara Dahil Olmayan Ücretler:
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Sınav harçları (MTK tarafından belirlenir)</li>
                <li>• Sağlık raporu masrafları</li>
                <li>• Fotoğraf çekimi ücretleri</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Ödeme Kolaylıkları:
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• 3 taksit imkanı (kredi kartı ile)</li>
                <li>• Erken kayıt indirimleri</li>
                <li>• Grup kayıt avantajları</li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Sıkça Sorulan Sorular
          </h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            {faqItems.map((item, index) => (
              <details
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm group"
              >
                <summary className="flex justify-between items-center cursor-pointer p-6 font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl transition-colors">
                  {item.question}
                  <span className="ml-4 text-gray-500 group-open:rotate-180 transition-transform">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-600 dark:text-gray-300">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Contact Info */}
              <div className="p-8 lg:p-12 text-white">
                <h2 className="text-3xl font-bold mb-6">İletişime Geçin</h2>
                <p className="text-blue-100 mb-8">
                  Fiyatlarımız ve kampanyalarımız hakkında detaylı bilgi almak için bizimle iletişime geçin.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 mr-4 text-blue-200" />
                    <span>(312) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 mr-4 text-blue-200" />
                    <span>info@surucu-akademi.com</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 mr-4 text-blue-200" />
                    <span>123 Sürücü Akademi Cad. Ankara</span>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white dark:bg-gray-800 p-8 lg:p-12">
                <form className="space-y-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Adınız Soyadınız"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="E-posta Adresiniz"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                    />
                  </div>
                  <div>
                    <select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors">
                      <option>İlgilendiğiniz Ehliyet Türü</option>
                      <option>B Sınıfı Ehliyet</option>
                      <option>A Sınıfı Ehliyet</option>
                      <option>C Sınıfı Ehliyet</option>
                    </select>
                  </div>
                  <div>
                    <textarea
                      rows={4}
                      placeholder="Mesajınız"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none transition-colors"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-colors transform hover:scale-105"
                  >
                    Mesaj Gönder
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;