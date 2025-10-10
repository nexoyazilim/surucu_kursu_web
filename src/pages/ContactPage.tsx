import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactPage: React.FC = () => {

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresimiz",
      details: [
        "123 Sürücü Akademi Caddesi",
        "Çankaya, Ankara 06000",
        "Türkiye"
      ]
    },
    {
      icon: Phone, 
      title: "Telefon",
      details: [
        "(312) 123-4567",
        "(312) 123-456",
        "WhatsApp: (535) 123-4567"
      ]
    },
    {
      icon: Mail,
      title: "E-posta",
      details: [
        "info@surucu-akademi.com",
        "kayit@surucu-akademi.com", 
        "destek@surucu-akademi.com"
      ]
    },
    {
      icon: Clock,
      title: "Çalışma Saatleri",
      details: [
        "Pazartesi - Cuma: 08:00 - 18:00",
        "Cumartesi: 09:00 - 16:00",
        "Pazar: Kapalı"
      ]
    }
  ];

  const branches = [
    {
      name: "Merkez Şube (Çankaya)",
      address: "123 Sürücü Akademi Cad. Çankaya/Ankara",
      phone: "(312) 123-4567",
      image: "https://images.pexels.com/photos/323503/pexels-photo-323503.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Keçiören Şubesi",
      address: "456 Eğitim Sok. Keçiören/Ankara", 
      phone: "(312) 987-6543",
      image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Mamak Şubesi",
      address: "789 Sürücü Blv. Mamak/Ankara",
      phone: "(312) 555-0123",
      image: "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            İletişim
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Sorularınız mı var? Size yardımcı olmaktan mutluluk duyarız. 
            Bizimle iletişime geçin ve hayalinizdeki ehliyete ulaşma yolculuğunuza başlayın.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                İletişim Bilgileri
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Sorularınız ve talepleriniz için aşağıdaki iletişim kanallarından bize ulaşabilirsiniz.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg flex-shrink-0">
                      <IconComponent className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                        {info.title}
                      </h3>
                      <div className="space-y-2">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-600 dark:text-gray-300">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Şubelerimiz
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Size en yakın şubemizi ziyaret ederek detaylı bilgi alabilirsiniz.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {branches.map((branch, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <img
                  src={branch.image}
                  alt={branch.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {branch.name}
                  </h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {branch.address}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-gray-400 mr-2" />
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {branch.phone}
                      </p>
                    </div>
                  </div>
                  <button className="w-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-semibold py-3 px-4 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                    Yol Tarifi Al
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Sıkça Sorulan Sorular
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Merak ettiğiniz soruların cevaplarını bulun
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Kayıt için hangi belgeler gerekli?",
                answer: "Kayıt için TC kimlik kartı, 4 adet vesikalık fotoğraf, sağlık raporu ve kayıt ücretiniz gereklidir."
              },
              {
                question: "Kurs süresi ne kadar?",
                answer: "B sınıfı ehliyet kursu yaklaşık 6-8 hafta sürmektedir. Bu süre bireysel ilerlemenize göre değişebilir."
              },
              {
                question: "Sınav başvurusu ne zaman yapılır?",
                answer: "Teorik ve pratik eğitiminizi tamamladıktan sonra sınav başvurunuzu yaparız. Sınav tarihleri için MTK takvimini takip ederiz."
              },
              {
                question: "Ders saatleri nasıl belirlenir?",
                answer: "Ders saatlerinizi eğitmeninizle birlikte kendi programınıza uygun şekilde planlayabilirsiniz."
              }
            ].map((faq, index) => (
              <details
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm group"
              >
                <summary className="flex justify-between items-center cursor-pointer p-6 font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl transition-colors">
                  {faq.question}
                  <span className="ml-4 text-gray-500 group-open:rotate-180 transition-transform">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Hemen Başlayın!
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Sürücü Akademi ile güvenli sürüş yolculuğunuza bugün başlayın. 
            Uzman ekibimiz size en iyi eğitimi sunmaya hazır.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-blue-600 font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors transform hover:scale-105">
              Şimdi Arayın: (312) 123-4567
            </button>
            <button className="bg-blue-800 text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-900 transition-colors transform hover:scale-105">
              Detaylı Bilgi Alın
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;