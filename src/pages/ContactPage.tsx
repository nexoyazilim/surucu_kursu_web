import React from 'react';
import { MapPin, Phone, Mail, Clock, ChevronDown } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
};

const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const ContactPage: React.FC = () => {
    const contactInfo = [
        { icon: MapPin, title: "Adresimiz", details: ["123 Sürücü Akademi Caddesi", "Çankaya, Ankara 06000", "Türkiye"] },
        { icon: Phone, title: "Telefon", details: ["(312) 123-4567", "(312) 123-456", "WhatsApp: (535) 123-4567"] },
        { icon: Mail, title: "E-posta", details: ["info@surucu-akademi.com", "kayit@surucu-akademi.com", "destek@surucu-akademi.com"] },
        { icon: Clock, title: "Çalışma Saatleri", details: ["Pazartesi - Cuma: 08:00 - 18:00", "Cumartesi: 09:00 - 16:00", "Pazar: Kapalı"] }
    ];
    const branches = [
        { name: "Merkez Şube (Çankaya)", address: "123 Sürücü Akademi Cad. Çankaya/Ankara", phone: "(312) 123-4567", image: "https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { name: "Keçiören Şubesi", address: "456 Eğitim Sok. Keçiören/Ankara", phone: "(312) 987-6543", image: "https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { name: "Mamak Şubesi", address: "789 Sürücü Blv. Mamak/Ankara", phone: "(312) 555-0123", image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600" }
    ];
    const faqs = [
        { question: "Kayıt için hangi belgeler gerekli?", answer: "Kayıt için TC kimlik kartı, 4 adet vesikalık fotoğraf, sağlık raporu ve kayıt ücretiniz gereklidir." },
        { question: "Kurs süresi ne kadar?", answer: "B sınıfı ehliyet kursu yaklaşık 6-8 hafta sürmektedir. Bu süre bireysel ilerlemenize göre değişebilir." },
        { question: "Sınav başvurusu ne zaman yapılır?", answer: "Teorik ve pratik eğitiminizi tamamladıktan sonra sınav başvurunuzu yaparız. Sınav tarihleri için MTK takvimini takip ederiz." },
        { question: "Ders saatleri nasıl belirlenir?", answer: "Ders saatlerinizi eğitmeninizle birlikte kendi programınıza uygun şekilde planlayabilirsiniz." }
    ];

  return (
    <div className="bg-white dark:bg-blue-950">
      {/* Hero Section */}
      <motion.section 
        className="relative py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight" variants={fadeInUp} initial="initial" animate="animate">
            İletişim
          </motion.h1>
          <motion.p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto" variants={fadeInUp} initial="initial" animate="animate" transition={{ delay: 0.2 }}>
            Sorularınız mı var? Size yardımcı olmaktan mutluluk duyarız. Bizimle iletişime geçin ve hayalinizdeki ehliyete ulaşma yolculuğunuza başlayın.
          </motion.p>
        </div>
      </motion.section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.2 }}>
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <motion.div key={index} className="text-center p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2" variants={fadeInUp}>
                  <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-600 dark:text-gray-300">{detail}</p>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
      
      {/* Contact Form & Map Section */}
      <section className="py-20 bg-white dark:bg-blue-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.5 }} variants={fadeInUp}>
            <h2 className="text-3xl font-bold text-white mb-4">Bize Mesaj Gönderin</h2>
            <p className="text-xl text-white/80">Aşağıdaki formu doldurun, en kısa sürede size geri dönelim.</p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <motion.form 
                className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 space-y-6"
                variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div variants={fadeInUp}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Adınız Soyadınız</label>
                <input type="text" id="name" placeholder="Adınız ve Soyadınız" className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500" />
              </motion.div>
              <motion.div variants={fadeInUp}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">E-posta Adresiniz</label>
                <input type="email" id="email" placeholder="ornek@mail.com" className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500" />
              </motion.div>
              <motion.div variants={fadeInUp}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Mesajınız</label>
                <textarea id="message" rows={5} placeholder="Bize iletmek istediğiniz mesaj..." className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500"></textarea>
              </motion.div>
              <motion.button type="submit" className="w-full bg-blue-600 text-white font-bold py-4 px-6 rounded-lg hover:bg-blue-700 transition-colors shadow-lg" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                Mesajı Gönder
              </motion.button>
            </motion.form>
            
            {/* Map */}
            <motion.div className="h-full w-full min-h-[400px] lg:min-h-full" variants={fadeInUp}>
              {/* KENDİ ADRESİNİZİ EKLEMEK İÇİN: 
                1. Google Haritalar'a gidin.
                2. İşletmenizi veya adresinizi aratın.
                3. "Paylaş" > "Harita Yerleştirme" seçeneğine tıklayın.
                4. "HTML'i Kopyala" butonuna basın ve aşağıdaki src="" içeriğini kopyaladığınız link ile değiştirin.
              */}
              <iframe
                // DÜZELTME: Hatalı link, çalışan genel bir Ankara haritası ile değiştirildi.
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195842.1272304856!2d32.70977284989916!3d39.9035238995393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d347d520732db1%3A0xbdc5bfdcf0f23d62!2sAnkara%2C%20T%C3%BCrkiye!5e0!3m2!1str!2sde!4v1668123456789"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>



      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-blue-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="text-center mb-16" initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.5 }} variants={fadeInUp}>
                <h2 className="text-3xl font-bold text-white mb-4">Sıkça Sorulan Sorular</h2>
                <p className="text-xl text-white/80">Merak ettiğiniz soruların cevaplarını bulun</p>
            </motion.div>
            <motion.div className="space-y-4" variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.2 }}>
                {faqs.map((faq, index) => (
                    <motion.details key={index} className="bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm group" variants={fadeInUp}>
                        <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-t-xl transition-colors">
                            {faq.question}
                            <ChevronDown className="h-6 w-6 text-gray-500 dark:text-gray-400 group-open:rotate-180 transition-transform duration-300" />
                        </summary>
                        <div className="px-6 pb-6 pt-2 border-t border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300">
                            <p>{faq.answer}</p>
                        </div>
                    </motion.details>
                ))}
            </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;