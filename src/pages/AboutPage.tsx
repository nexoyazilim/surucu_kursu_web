import React from 'react';
import { Award, Users, Calendar, Target, Eye, Heart } from 'lucide-react';

// Animasyonlar için framer-motion
import { motion } from 'framer-motion';

// Görüntülendiğinde tetiklenecek animasyonlar için
import { useInView } from 'react-intersection-observer';

// Dinamik sayaç için
import CountUp from 'react-countup';

// Tekrar eden animasyon varyantları
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const AboutPage: React.FC = () => {
  const stats = [
    { number: 18, label: "Yıllık Deneyim", icon: Calendar, suffix: "+" },
    { number: 5000, label: "Mezun Öğrenci", icon: Users, suffix: "+" },
    { number: 95, label: "Başarı Oranı", icon: Award, suffix: "%" },
    { number: 15, label: "Uzman Eğitmen", icon: Target, suffix: "" }
  ];

  const values = [
    {
      icon: Target,
      title: "Misyonumuz",
      description: "Güvenli, bilinçli ve sorumlu sürücüler yetiştirerek trafik güvenliğine katkıda bulunmak."
    },
    {
      icon: Eye,
      title: "Vizyonumuz", 
      description: "Türkiye'nin en güvenilir ve kaliteli sürücü kursu olmak, sektörde öncü rol oynamak."
    },
    {
      icon: Heart,
      title: "Değerlerimiz",
      description: "Güvenlik, kalite, saygı ve sürekli gelişim ilkelerimizle hizmet sunuyoruz."
    }
  ];

  const team = [
    {
      name: "Mehmet Yılmaz",
      position: "Kurucu & Genel Müdür",
      experience: "20 yıl",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Ayşe Demir",
      position: "Baş Eğitmen",
      experience: "15 yıl",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Can Özkan",
      position: "Teorik Eğitim Koordinatörü", 
      experience: "12 yıl",
      image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Elif Kaya",
      position: "Pratik Eğitim Uzmanı",
      experience: "10 yıl", 
      image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const milestones = [
    { year: "2005", event: "Sürücü Akademi kuruldu", description: "İlk merkezimizi açarak hizmete başladık." },
    { year: "2010", event: "İkinci şube açıldı", description: "Büyüyen talebimize karşılık ikinci merkezimizi hizmete aldık." },
    { year: "2015", event: "Online eğitim sistemi", description: "Dijital dönüşümle online teorik eğitim sistemimizi devreye aldık." },
    { year: "2020", event: "5000. mezunumuz", description: "5000'inci öğrencimizi mezun ederek önemli bir kilometre taşını geçtik." },
    { year: "2023", event: "Yeni teknolojiler", description: "Simülatör eğitimi ve VR teknolojilerini eğitim programımıza entegre ettik." }
  ];

  // Sayaç bileşeni
  const StatCounter = ({ number, suffix }: { number: number; suffix: string }) => {
    const { ref, inView } = useInView({
      triggerOnce: true, // Animasyon sadece bir kez tetiklensin
      threshold: 0.1,
    });
    return (
      <div ref={ref} className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
        {inView ? <CountUp end={number} duration={2.5} /> : '0'}
        {suffix}
      </div>
    );
  };
  
  return (
    <div className="bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <motion.section 
        className="relative py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* SVG Arka Plan Deseni */}
        <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="a" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="scale(2) rotate(45)"><rect x="0" y="0" width="100%" height="100%" fill="hsla(0,0%,100%,0)"/><path d="M10-10l20 20m0-40l-20 20" stroke-width="2" stroke="hsla(0,0%,100%,.5)" fill="none"/></pattern></defs><rect width="800%" height="800%" transform="translate(0,0)" fill="url(#a)"/></svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            Hakkımızda
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.2 }}
          >
            2005'ten beri güvenli sürüş eğitiminde öncü kuruluş. Misyonumuz, vizyonumuz ve 
            değerlerimizle Türkiye'nin en güvenilir sürücü kursu olmaya devam ediyoruz.
          </motion.p>
        </div>
      </motion.section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
                className="text-center mb-16"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeInUp}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Başarılarımız Rakamlarla
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                18 yıllık deneyimimizle elde ettiğimiz başarılar
              </p>
            </motion.div>

          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2"
                  variants={fadeInUp}
                >
                  <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <StatCounter number={stat.number} suffix={stat.suffix} />
                  <div className="text-lg font-semibold text-gray-900 dark:text-white">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
                className="text-center mb-16"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeInUp}
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Misyonumuz, Vizyonumuz & Değerlerimiz
              </h2>
              <p className="text-xl text-white/80">
                Bizi yönlendiren ilkeler ve hedefler
              </p>
            </motion.div>

            <motion.div 
                className="grid lg:grid-cols-3 gap-12"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
            >
              {values.map((value, index) => {
                const IconComponent = value.icon;
                const cardColors = [
                  // Renk şemaları aynı kalabilir, gayet güzeller.
                   {
                     bg: "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/40",
                     border: "border-blue-200 dark:border-blue-700",
                     icon: "bg-blue-600",
                     accent: "text-blue-600 dark:text-blue-400"
                   },
                   {
                     bg: "bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/40",
                     border: "border-green-200 dark:border-green-700",
                     icon: "bg-green-600",
                     accent: "text-green-600 dark:text-green-400"
                   },
                   {
                     bg: "bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/40",
                     border: "border-purple-200 dark:border-purple-700",
                     icon: "bg-purple-600",
                     accent: "text-purple-600 dark:text-purple-400"
                   }
                ];
                const colorScheme = cardColors[index];
                return (
                  <motion.div
                    key={index}
                    className={`text-center p-8 ${colorScheme.bg} rounded-2xl shadow-lg border ${colorScheme.border} hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}
                    variants={fadeInUp}
                  >
                    <div className={`${colorScheme.icon} text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <h3 className={`text-2xl font-bold ${colorScheme.accent} mb-4`}>
                      {value.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-200 leading-relaxed font-medium">
                      {value.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
        </div>
      </section>
      
      {/* History Timeline */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                    className="text-center mb-20"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={fadeInUp}
                >
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    Tarihçemiz
                  </h2>
                  <p className="text-xl text-gray-600 dark:text-gray-300">
                    Sürücü Akademi'nin gelişim yolculuğu
                  </p>
              </motion.div>

              <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200 dark:bg-blue-800" aria-hidden="true"></div>
                  <div className="space-y-12">
                      {milestones.map((milestone, index) => {
                          const isEven = index % 2 === 0;
                          const slideIn = {
                            initial: { opacity: 0, x: isEven ? -100 : 100 },
                            animate: { opacity: 1, x: 0 },
                          };
                          return (
                              <div
                                  key={index}
                                  className={`relative flex items-center ${isEven ? 'justify-start' : 'justify-end'}`}
                              >
                                  <motion.div
                                      className={`w-full md:w-5/12 ${isEven ? 'md:pr-8' : 'md:pl-8'}`}
                                      initial="initial"
                                      whileInView="animate"
                                      viewport={{ once: true, amount: 0.5 }}
                                      variants={slideIn}
                                  >
                                      <div className={`relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700
                                                        ${isEven ? 'text-right' : 'text-left'}`}>
                                          {/* Ok işareti */}
                                          <div className={`absolute top-1/2 -mt-2 w-4 h-4 bg-white dark:bg-gray-800 transform rotate-45 
                                                          ${isEven ? 'right-0 -mr-2' : 'left-0 -ml-2'}`}></div>
                                          
                                          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                                              {milestone.year}
                                          </div>
                                          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                                              {milestone.event}
                                          </h3>
                                          <p className="text-gray-600 dark:text-gray-300">
                                              {milestone.description}
                                          </p>
                                      </div>
                                  </motion.div>

                                  <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900"></div>
                              </div>
                          );
                      })}
                  </div>
              </div>
          </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white dark:bg-gray-950">
          {/* ... Diğer bölümlerle benzer şekilde animasyonlar eklenebilir. Şimdilik bu kısmı sade bırakıyorum. */}
          {/* ... Örnek: Tıpkı Stats bölümü gibi bu bölümü de motion.div ile sarmalayıp stagger ve fadeInUp efektleri verebilirsiniz. */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-white mb-4">Uzman Kadromuz</h2>
                <p className="text-xl text-white/80">Deneyimli ve sertifikalı eğitmenlerimizle tanışın</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {team.map((member, index) => (
                    <div key={index} className="group text-center">
                        <div className="relative w-40 h-40 mx-auto">
                            <img src={member.image} alt={member.name} className="w-40 h-40 rounded-full mx-auto object-cover shadow-lg transform group-hover:scale-110 transition-transform duration-300"/>
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md translate-y-4 group-hover:translate-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                {member.experience}
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-1">{member.name}</h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">{member.position}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>


      {/* Facilities Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Tesislerimiz</h2>
                  <p className="text-xl text-gray-600 dark:text-ray-300">Modern ve güvenli eğitim ortamlarımızı keşfedin</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                  {[
                      // Veri aynı kalabilir...
                      { title: "Modern Derslikler", description: "Teknoloji destekli, konforlu dersliklerimizde teorik eğitim alın.", image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600" },
                      { title: "Araç Filosu", description: "Son model, güvenli araçlarımızla pratik eğitim yapın.", image: "https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=600" },
                      { title: "Simülatör Sistemi", description: "VR teknolojili simülatörlerimizle güvenli ortamda pratik yapın.", image: "https://images.pexels.com/photos/2977304/pexels-photo-2977304.jpeg?auto=compress&cs=tinysrgb&w=600" }
                  ].map((facility, index) => (
                      <div key={index} className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                          <div className="overflow-hidden">
                              <img src={facility.image} alt={facility.title} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"/>
                          </div>
                          <div className="p-6">
                              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{facility.title}</h3>
                              <p className="text-gray-600 dark:text-gray-300">{facility.description}</p>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold mb-6 tracking-tight">
            Sürücü Akademi Ailesine Katılın
          </h2>
          <p className="text-xl opacity-90 mb-10">
            18 yıllık deneyimimiz ve binlerce mezunumuzla güvenli sürüş yolculuğunuzda 
            yanınızdayız. Siz de başarı hikayemizin bir parçası olun.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.button 
                className="bg-white text-blue-600 font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-gray-100 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
              Bize Ulaşın
            </motion.button>
            <motion.button 
                className="bg-blue-900/50 backdrop-blur-sm border border-blue-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-blue-900/80 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
              Eğitim Programlarını Görüntüle
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;