import React, { useState } from 'react';
import { Phone, Mail, MapPin, Check, Star, TrendingUp, Award, Users, Clock } from 'lucide-react';

const PricingPage = () => {
  const [activeTab, setActiveTab] = useState('licenses');
  
  const pricingData = {
    pricing: {
      licenses: [
        { type: "100 CEZA", category: "ceza", price: "11.000,00", icon: "⚠️", popular: false },
        { type: "A1", category: "ehliyet", price: "13.000,00", icon: "🏍️", popular: false },
        { type: "A2", category: "ehliyet", price: "14.000,00", icon: "🏍️", popular: false },
        { type: "A", category: "ehliyet", price: "16.000,00", icon: "🏍️", popular: false },
        { type: "B", category: "ehliyet", price: "17.500,00", icon: "🚗", popular: true },
        { type: "B ENGELLİ", category: "ehliyet", price: "20.000,00", icon: "♿", popular: false }
      ],
      upgrades: [
        { from: "A1", to: "A2", price: "12.000,00" },
        { from: "A1 A2", to: "A", price: "15.000,00" },
        { from: "A1 A2 A", to: "B", price: "17.500,00" },
        { from: "B", to: "A1", price: "10.000,00" },
        { from: "B", to: "A2", price: "12.000,00" },
        { from: "B", to: "A", price: "15.000,00" },
        { from: "B", to: "BE", price: "15.000,00" },
        { from: "B", to: "C", price: "18.000,00" },
        { from: "B", to: "D", price: "18.000,00" },
        { from: "B", to: "D1", price: "14.000,00" },
        { from: "C", to: "CE", price: "15.000,00" }
      ],
      exams: { teorik: "900,00", direksiyon: "1.350,00" },
      taxes: {
        "A1-A2-A": "3.643,10",
        "B": "7.438,60",
        "C-CE-D1-D-DE": "11.235,60"
      },
      services: {
        direksiyonIkinciHak: "13.500,00",
        sinavdanKalan: "3.250,00",
        ozelDers: "1.000,00"
      }
    }
  };

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

  const features = [
    { icon: <Award className="w-6 h-6" />, title: "Deneyimli Eğitmenler", desc: "15+ yıl tecrübe" },
    { icon: <Users className="w-6 h-6" />, title: "Başarı Oranı", desc: "%95 başarı" },
    { icon: <Clock className="w-6 h-6" />, title: "Esnek Saatler", desc: "Size uygun program" },
    { icon: <Star className="w-6 h-6" />, title: "Modern Araçlar", desc: "2024 model araçlar" }
  ];

  return (
    <div className="min-h-screen bg-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block animate-bounce mb-4">
            <div className="bg-white/20 backdrop-blur-lg rounded-full px-6 py-2 text-sm font-semibold">
              🎉 2024 Özel Kampanya
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Sürücü Kursu Fiyatları
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Hayalinizdeki ehliyete en uygun fiyatlarla kavuşun
          </p>
          
          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-4 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="text-blue-200 mb-2 flex justify-center">{feature.icon}</div>
                <div className="font-semibold text-sm">{feature.title}</div>
                <div className="text-xs text-blue-200">{feature.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-2 inline-flex gap-2">
            <button
              onClick={() => setActiveTab('licenses')}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'licenses'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              💰 Ehliyet Fiyatları
            </button>
            <button
              onClick={() => setActiveTab('upgrades')}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'upgrades'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              ⬆️ Yükseltme
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        {activeTab === 'licenses' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {pricingData.pricing.licenses.map((license, index) => (
              <div
                key={index}
                className={`relative bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                  license.popular ? 'ring-4 ring-blue-500 transform scale-105' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {license.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                      <Star className="w-4 h-4 fill-current" />
                      En Popüler
                    </div>
                  </div>
                )}
                
                <div className="text-6xl mb-4 text-center">{license.icon}</div>
                <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-4">
                  {license.type}
                </h3>
                
                <div className="text-center mb-6">
                  <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {license.price} ₺
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    Teorik dersler dahil
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    Direksiyon eğitimi
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    Modern araç filosu
                  </li>
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Upgrade Pricing */}
        {activeTab === 'upgrades' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {pricingData.pricing.upgrades.map((upgrade, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl px-5 py-3 shadow-md">
                    <div className="text-xs font-semibold mb-1">Mevcut</div>
                    <div className="font-bold text-lg">{upgrade.from}</div>
                  </div>
                  <TrendingUp className="w-10 h-10 text-green-500" />
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl px-5 py-3 shadow-md">
                    <div className="text-xs font-semibold mb-1">Hedef</div>
                    <div className="font-bold text-lg">{upgrade.to}</div>
                  </div>
                </div>
                <div className="text-center pt-4 border-t-2 border-gray-100 dark:border-gray-700">
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">Yükseltme Ücreti</div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {upgrade.price} ₺
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Additional Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="text-5xl mb-4">📝</div>
            <h3 className="text-2xl font-bold mb-4">Sınav Ücretleri</h3>
            <div className="space-y-3 bg-white/20 backdrop-blur-lg rounded-xl p-4">
              <div className="flex justify-between">
                <span>Teorik Sınav</span>
                <span className="font-bold">{pricingData.pricing.exams.teorik} ₺</span>
              </div>
              <div className="flex justify-between">
                <span>Direksiyon Sınavı</span>
                <span className="font-bold">{pricingData.pricing.exams.direksiyon} ₺</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-500 to-pink-600 rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="text-5xl mb-4">💸</div>
            <h3 className="text-2xl font-bold mb-4">Vergiler</h3>
            <div className="space-y-3 bg-white/20 backdrop-blur-lg rounded-xl p-4">
              {Object.entries(pricingData.pricing.taxes).map(([key, value], index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-sm">{key}</span>
                  <span className="font-bold">{value} ₺</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="text-5xl mb-4">⚙️</div>
            <h3 className="text-2xl font-bold mb-4">Ek Hizmetler</h3>
            <div className="space-y-3 bg-white/20 backdrop-blur-lg rounded-xl p-4">
              <div className="flex justify-between">
                <span className="text-sm">İkinci Dört Hak</span>
                <span className="font-bold">{pricingData.pricing.services.direksiyonIkinciHak} ₺</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Sınavdan Kalan</span>
                <span className="font-bold">{pricingData.pricing.services.sinavdanKalan} ₺</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Özel Ders</span>
                <span className="font-bold">{pricingData.pricing.services.ozelDers} ₺</span>
              </div>
            </div>
          </div>
        </div>

        {/* Info Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 mb-16 text-white shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">💰 Ödeme Kolaylıkları</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="w-5 h-5 mr-3" />
                  3 taksit imkanı (kredi kartı ile)
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 mr-3" />
                  Erken kayıt indirimleri
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 mr-3" />
                  Grup kayıt avantajları
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">📋 Önemli Notlar</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="w-5 h-5 mr-3" />
                  Sınav harçları ayrıca ödenir
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 mr-3" />
                  Sağlık raporu masrafları dahil değil
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 mr-3" />
                  Fotoğraf çekimi ücretsiz
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-12">
            Sıkça Sorulan Sorular
          </h2>
          <div className="space-y-4 max-w-4xl mx-auto">
            {faqItems.map((item, index) => (
              <details
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-700 shadow-lg group hover:shadow-xl transition-all duration-300"
              >
                <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <span className="flex items-center gap-3">
                    <span className="text-2xl">❓</span>
                    {item.question}
                  </span>
                  <span className="ml-4 text-blue-500 group-open:rotate-180 transition-transform duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-12 text-white">
              <h2 className="text-4xl font-bold mb-6">Hemen İletişime Geçin! 🚗</h2>
              <p className="text-blue-100 mb-8 text-lg">
                Fiyatlarımız ve kampanyalarımız hakkında detaylı bilgi almak için bizimle iletişime geçin.
              </p>
              <div className="space-y-6">
                <div className="flex items-center bg-white/10 backdrop-blur-lg rounded-xl p-4 hover:bg-white/20 transition-all duration-300">
                  <Phone className="h-8 w-8 mr-4 text-blue-200" />
                  <div>
                    <div className="text-sm text-blue-200">Telefon</div>
                    <div className="font-semibold text-lg">(312) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-lg rounded-xl p-4 hover:bg-white/20 transition-all duration-300">
                  <Mail className="h-8 w-8 mr-4 text-blue-200" />
                  <div>
                    <div className="text-sm text-blue-200">E-posta</div>
                    <div className="font-semibold text-lg">info@surucu-akademi.com</div>
                  </div>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-lg rounded-xl p-4 hover:bg-white/20 transition-all duration-300">
                  <MapPin className="h-8 w-8 mr-4 text-blue-200" />
                  <div>
                    <div className="text-sm text-blue-200">Adres</div>
                    <div className="font-semibold text-lg">123 Sürücü Akademi Cad. Ankara</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-12">
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Adınız Soyadınız"
                    className="w-full px-6 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:ring-4 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="E-posta Adresiniz"
                    className="w-full px-6 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:ring-4 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300"
                  />
                </div>
                <div>
                  <select className="w-full px-6 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:ring-4 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300">
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
                    className="w-full px-6 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:ring-4 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none transition-all duration-300"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Mesaj Gönder 🚀
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;