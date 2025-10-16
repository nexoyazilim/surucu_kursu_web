import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ChevronDown, Send, MessageCircle, Building } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const contactInfo = [
    { 
      icon: MapPin, 
      title: "Adresimiz", 
      details: ["Çankaya Mahallesi", "Ankara 06000", "Türkiye"],
      gradient: "from-blue-600 to-cyan-600"
    },
    { 
      icon: Phone, 
      title: "Telefon", 
      details: ["(312) 123-4567", "(312) 123-4568", "WhatsApp: (535) 123-4567"],
      gradient: "from-blue-600 to-cyan-600"
    },
    { 
      icon: Mail, 
      title: "E-posta", 
      details: ["info@surucu-akademi.com", "kayit@surucu-akademi.com", "destek@surucu-akademi.com"],
      gradient: "from-blue-600 to-cyan-600"
    },
    { 
      icon: Clock, 
      title: "Çalışma Saatleri", 
      details: ["Pzt - Cuma: 08:00 - 18:00", "Cumartesi: 09:00 - 16:00", "Pazar: Kapalı"],
      gradient: "from-blue-600 to-cyan-600"
    }
  ];

  const branches = [
    { 
      name: "Merkez Şube (Çankaya)", 
      address: "Çankaya Mahallesi, Ankara", 
      phone: "(312) 123-4567", 
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80" 
    },
    { 
      name: "Keçiören Şubesi", 
      address: "Keçiören, Ankara", 
      phone: "(312) 987-6543", 
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80" 
    },
    { 
      name: "Mamak Şubesi", 
      address: "Mamak, Ankara", 
      phone: "(312) 555-0123", 
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80" 
    }
  ];

  const faqs = [
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
    },
    { 
      question: "Ödeme seçenekleri nelerdir?", 
      answer: "Nakit, kredi kartı ve taksitli ödeme seçeneklerimiz bulunmaktadır. Detaylı bilgi için lütfen aramızdan biriyle görüşün." 
    }
  ];

  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200')] bg-cover bg-center opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="inline-block mb-6">
            <div className="bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-2 text-sm font-semibold text-blue-300">
              7/24 Destek Hattı
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black mb-6 text-white">
            İletişim
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Sorularınız mı var? Size yardımcı olmaktan mutluluk duyarız. 
            Bizimle iletişime geçin ve hayalinizdeki ehliyete ulaşma yolculuğunuza başlayın.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div 
                  key={index} 
                  className="group bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-100 hover:shadow-2xl hover:border-blue-200 transition-all duration-500 transform hover:-translate-y-2"
                >
                  <div className={`bg-gradient-to-br ${info.gradient} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-4 text-center">
                    {info.title}
                  </h3>
                  <div className="space-y-2">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-600 text-center leading-relaxed">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Contact Form & Map Section */}
      <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Bize Mesaj Gönderin
            </h2>
            <p className="text-xl text-gray-600">
              Aşağıdaki formu doldurun, en kısa sürede size geri dönelim
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <form className="bg-white p-10 rounded-3xl shadow-xl border-2 border-gray-100 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                  Adınız Soyadınız *
                </label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Adınız ve Soyadınız" 
                  className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                  E-posta Adresiniz *
                </label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="ornek@mail.com" 
                  className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">
                  Telefon Numaranız
                </label>
                <input 
                  type="tel" 
                  id="phone" 
                  placeholder="(5XX) XXX XX XX" 
                  className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-2">
                  Konu
                </label>
                <select 
                  id="subject" 
                  className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900"
                >
                  <option>Genel Bilgi</option>
                  <option>Kayıt İşlemleri</option>
                  <option>Fiyat Bilgisi</option>
                  <option>Şikayet ve Öneri</option>
                  <option>Diğer</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                  Mesajınız *
                </label>
                <textarea 
                  id="message" 
                  rows={6} 
                  placeholder="Bize iletmek istediğiniz mesajınızı buraya yazın..." 
                  className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900 resize-none"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-5 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-3"
              >
                <Send className="h-5 w-5" />
                Mesajı Gönder
              </button>

              <p className="text-sm text-gray-500 text-center">
                * işaretli alanlar zorunludur
              </p>
            </form>
            
            {/* Map */}
            <div className="h-full w-full min-h-[600px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195842.1272304856!2d32.70977284989916!3d39.9035238995393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d347d520732db1%3A0xbdc5bfdcf0f23d62!2sAnkara%2C%20T%C3%BCrkiye!5e0!3m2!1str!2sde!4v1668123456789"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-3xl shadow-xl border-2 border-gray-100"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Şubelerimiz
            </h2>
            <p className="text-xl text-gray-600">
              Size en yakın şubemizden hizmet alın
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {branches.map((branch, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-3xl overflow-hidden shadow-xl border-2 border-gray-100 hover:shadow-2xl hover:border-blue-200 transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={branch.image} 
                    alt={branch.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/20 backdrop-blur-md rounded-xl p-3 border border-white/30">
                      <h3 className="text-lg font-black text-white">{branch.name}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-start gap-3 mb-4">
                    <MapPin className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-600">{branch.address}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <p className="text-gray-900 font-bold">{branch.phone}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
};

export default ContactPage;