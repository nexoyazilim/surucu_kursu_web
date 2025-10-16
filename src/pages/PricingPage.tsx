import React, { useState } from 'react';
import { Phone, Mail, MapPin, Check, Star, TrendingUp, Award, Users, Clock, Shield, Target, Zap } from 'lucide-react';

const PricingPage = () => {
  const [activeTab, setActiveTab] = useState('licenses');
  
  const pricingData = {
    pricing: {
      licenses: [
        { type: "100 CEZA", category: "ceza", price: "11.000,00", icon: Shield, popular: false },
        { type: "A1", category: "ehliyet", price: "13.000,00", icon: Target, popular: false },
        { type: "A2", category: "ehliyet", price: "14.000,00", icon: Target, popular: false },
        { type: "A", category: "ehliyet", price: "16.000,00", icon: Target, popular: false },
        { type: "B", category: "ehliyet", price: "17.500,00", icon: Award, popular: true },
        { type: "B ENGELLİ", category: "ehliyet", price: "20.000,00", icon: Users, popular: false }
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
    { icon: Award, title: "Deneyimli Eğitmenler", desc: "15+ yıl tecrübe" },
    { icon: Users, title: "Başarı Oranı", desc: "%98 başarı" },
    { icon: Clock, title: "Esnek Saatler", desc: "Size uygun program" },
    { icon: Shield, title: "Modern Araçlar", desc: "2024 model araçlar" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <div className="inline-block mb-6">
            <div className="bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-2 text-sm font-semibold text-blue-300">
              2024 Güncel Fiyat Listesi
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black mb-6 text-white">
            Sürücü Kursu Fiyatları
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12">
            Şeffaf fiyatlandırma, kaliteli eğitim ve profesyonel hizmet anlayışı
          </p>
          
          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <Icon className="w-8 h-8 text-blue-400 mb-3 mx-auto" />
                  <div className="font-bold text-white text-sm mb-1">{feature.title}</div>
                  <div className="text-xs text-slate-400">{feature.desc}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-16">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-1.5 inline-flex gap-1">
            <button
              onClick={() => setActiveTab('licenses')}
              className={`px-8 py-3.5 rounded-xl font-bold transition-all duration-300 ${
                activeTab === 'licenses'
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              Ehliyet Fiyatları
            </button>
            <button
              onClick={() => setActiveTab('upgrades')}
              className={`px-8 py-3.5 rounded-xl font-bold transition-all duration-300 ${
                activeTab === 'upgrades'
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              Sınıf Yükseltme
            </button>
          </div>
        </div>

        {/* License Pricing Cards */}
        {activeTab === 'licenses' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {pricingData.pricing.licenses.map((license, index) => {
              const Icon = license.icon;
              return (
                <div
                  key={index}
                  className={`relative bg-white rounded-3xl border-2 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                    license.popular 
                      ? 'border-blue-600 shadow-xl shadow-blue-100' 
                      : 'border-gray-200 shadow-lg'
                  }`}
                >
                  
                  
                  <div className="p-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto ${
                      license.popular 
                        ? 'bg-gradient-to-br from-blue-600 to-cyan-600' 
                        : 'bg-gradient-to-br from-gray-600 to-gray-700'
                    }`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-black text-center text-gray-900 mb-1">
                      {license.type}
                    </h3>
                    <p className="text-xs text-center text-gray-500 mb-4">
                      {license.category === 'ceza' ? 'Ceza Puanı Silme' : 'Ehliyet Eğitimi'}
                    </p>
                    
                    <div className="text-center mb-6 pb-6 border-b border-gray-200">
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-3xl font-black text-gray-900">{license.price}</span>
                        <span className="text-lg font-bold text-gray-500">₺</span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start text-gray-700 text-sm">
                        <div className="bg-green-100 rounded-full p-0.5 mr-2 mt-0.5">
                          <Check className="w-3 h-3 text-green-600" />
                        </div>
                        <span>Teorik dersler dahil</span>
                      </li>
                      <li className="flex items-start text-gray-700 text-sm">
                        <div className="bg-green-100 rounded-full p-0.5 mr-2 mt-0.5">
                          <Check className="w-3 h-3 text-green-600" />
                        </div>
                        <span>Direksiyon eğitimi</span>
                      </li>
                      <li className="flex items-start text-gray-700 text-sm">
                        <div className="bg-green-100 rounded-full p-0.5 mr-2 mt-0.5">
                          <Check className="w-3 h-3 text-green-600" />
                        </div>
                        <span>Modern araç filosu</span>
                      </li>
                      <li className="flex items-start text-gray-700 text-sm">
                        <div className="bg-green-100 rounded-full p-0.5 mr-2 mt-0.5">
                          <Check className="w-3 h-3 text-green-600" />
                        </div>
                        <span>Sınav öncesi hazırlık</span>
                      </li>
                    </ul>

                    
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Upgrade Pricing */}
        {activeTab === 'upgrades' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {pricingData.pricing.upgrades.map((upgrade, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border-2 border-gray-200 p-8 hover:shadow-xl hover:border-blue-300 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="bg-slate-100 text-slate-700 rounded-xl px-5 py-3">
                    <div className="text-xs font-semibold text-slate-500 mb-1">Mevcut</div>
                    <div className="font-black text-lg">{upgrade.from}</div>
                  </div>
                  <div className="bg-blue-100 rounded-full p-3">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="bg-blue-600 text-white rounded-xl px-5 py-3">
                    <div className="text-xs font-semibold text-blue-200 mb-1">Hedef</div>
                    <div className="font-black text-lg">{upgrade.to}</div>
                  </div>
                </div>
                
                <div className="text-center pt-6 border-t-2 border-gray-100">
                  <div className="text-sm font-semibold text-gray-500 mb-2">Yükseltme Ücreti</div>
                  <div className="flex items-baseline justify-center gap-1 mb-6">
                    <span className="text-4xl font-black text-gray-900">{upgrade.price}</span>
                    <span className="text-xl font-bold text-gray-500">₺</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Additional Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
            <div className="bg-blue-100 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
              <Zap className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-6">Sınav Ücretleri</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-gray-700">Teorik Sınav</span>
                <span className="text-xl font-black text-gray-900">{pricingData.pricing.exams.teorik} ₺</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-gray-700">Direksiyon Sınavı</span>
                <span className="text-xl font-black text-gray-900">{pricingData.pricing.exams.direksiyon} ₺</span>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
            <div className="bg-green-100 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
              <Shield className="w-7 h-7 text-green-600" />
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-6">Vergiler</h3>
            <div className="space-y-4">
              {Object.entries(pricingData.pricing.taxes).map(([key, value], index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
                  <span className="text-sm text-gray-700">{key}</span>
                  <span className="text-lg font-bold text-gray-900">{value} ₺</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
            <div className="bg-purple-100 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-purple-600" />
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-6">Ek Hizmetler</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-sm text-gray-700">İkinci Dört Hak</span>
                <span className="text-lg font-bold text-gray-900">{pricingData.pricing.services.direksiyonIkinciHak} ₺</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-sm text-gray-700">Sınavdan Kalan</span>
                <span className="text-lg font-bold text-gray-900">{pricingData.pricing.services.sinavdanKalan} ₺</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-sm text-gray-700">Özel Ders</span>
                <span className="text-lg font-bold text-gray-900">{pricingData.pricing.services.ozelDers} ₺</span>
              </div>
            </div>
          </div>
        </div>

        {/* Info Banner */}
        <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl p-12 mb-20 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200')] bg-cover bg-center opacity-50"></div>
          <div className="relative grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-lg">
                  <Check className="w-6 h-6" />
                </div>
                Ödeme Kolaylıkları
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-blue-300" />
                  <span className="text-slate-200">3 taksit imkanı (kredi kartı ile)</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-blue-300" />
                  <span className="text-slate-200">Erken kayıt indirimleri</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-blue-300" />
                  <span className="text-slate-200">Grup kayıt avantajları</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-lg">
                  <Shield className="w-6 h-6" />
                </div>
                Önemli Notlar
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-blue-300" />
                  <span className="text-slate-200">Sınav harçları ayrıca ödenir</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-blue-300" />
                  <span className="text-slate-200">Sağlık raporu masrafları dahil değil</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-blue-300" />
                  <span className="text-slate-200">Fotoğraf çekimi ücretsiz</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Sıkça Sorulan Sorular
            </h2>
            <p className="text-xl text-gray-600">Merak ettiklerinizin cevapları</p>
          </div>
          
          <div className="space-y-4 max-w-4xl mx-auto">
            {faqItems.map((item, index) => (
              <details
                key={index}
                className="group bg-white rounded-2xl border-2 border-gray-200 hover:border-blue-300 transition-all duration-300"
              >
                <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-gray-900 hover:text-blue-600 transition-colors">
                  <span>{item.question}</span>
                  <span className="ml-4 text-blue-600 group-open:rotate-180 transition-transform duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-8 pb-8 text-gray-600 leading-relaxed">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-xl border-2 border-gray-200">
          <div className="grid lg:grid-cols-2">
            <div className="bg-gradient-to-br from-slate-900 to-blue-900 p-12 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200')] bg-cover bg-center opacity-5"></div>
              <div className="relative">
                <h2 className="text-4xl font-black mb-4">Hemen İletişime Geçin</h2>
                <p className="text-slate-300 mb-10 text-lg">
                  Fiyatlarımız ve kampanyalarımız hakkında detaylı bilgi almak için bizimle iletişime geçin.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 hover:bg-white/20 transition-all duration-300">
                    <Phone className="h-6 w-6 mr-4 text-blue-300" />
                    <div>
                      <div className="text-sm text-slate-400">Telefon</div>
                      <div className="font-bold text-lg">(312) 123-4567</div>
                    </div>
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 hover:bg-white/20 transition-all duration-300">
                    <Mail className="h-6 w-6 mr-4 text-blue-300" />
                    <div>
                      <div className="text-sm text-slate-400">E-posta</div>
                      <div className="font-bold text-lg">info@surucu-akademi.com</div>
                    </div>
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 hover:bg-white/20 transition-all duration-300">
                    <MapPin className="h-6 w-6 mr-4 text-blue-300" />
                    <div>
                      <div className="text-sm text-slate-400">Adres</div>
                      <div className="font-bold text-lg">Çankaya, Ankara</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-12">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Ad Soyad</label>
                  <input
                    type="text"
                    placeholder="Adınız Soyadınız"
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">E-posta</label>
                  <input
                    type="email"
                    placeholder="E-posta Adresiniz"
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Ehliyet Türü</label>
                  <select className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300">
                    <option>Seçiniz</option>
                    <option>B Sınıfı Ehliyet</option>
                    <option>A Sınıfı Ehliyet</option>
                    <option>C Sınıfı Ehliyet</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Mesajınız</label>
                  <textarea
                    rows={4}
                    placeholder="Mesajınız"
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none transition-all duration-300"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Mesaj Gönder
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