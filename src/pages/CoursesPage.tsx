import React from 'react';
import { Car, Users, Shield, Award } from 'lucide-react';

// Base path for assets - BU FONKSİYON OLDUĞU GİBİ KALDI
const getAssetPath = (path: string) => {
  return import.meta.env.PROD ? `/surucu_kursu_web${path}` : path;
};

const CoursesPage: React.FC = () => {
  // VERİLERİNİZDE HİÇBİR DEĞİŞİKLİK YAPILMADI
  const courses = [
    {
      title: "Temel Sürücü Kursu (B Sınıfı)",
      description: "Otomobil kullanmayı öğrenmek isteyenler için kapsamlı eğitim programı.",
      duration: "6-8 hafta",
      students: "2,500+",
      rating: "4.9",
      features: [
        "30 saat teorik eğitim",
        "20 saat pratik sürüş",
        "Online deneme sınavları", 
        "Bireysel eğitmen desteği"
      ],
      image: "https://images.pexels.com/photos/1028434/pexels-photo-1028434.jpeg?auto=compress&cs=tinysrgb&w=600",
      level: "Başlangıç",
      price: "5.000 ₺"
    },
    {
      title: "Motosiklet Sürücü Kursu (A Sınıfı)",
      description: "Motosiklet sürmeyi güvenli bir şekilde öğrenmek için profesyonel eğitim.",
      duration: "4-6 hafta", 
      students: "850+",
      rating: "4.8",
      features: [
        "25 saat teorik eğitim",
        "25 saat pratik sürüş",
        "Güvenlik ekipmanları dahil",
        "Deneyimli motosiklet eğitmenleri"
      ],
      image: "https://images.pexels.com/photos/2112236/pexels-photo-2112236.jpeg?auto=compress&cs=tinysrgb&w=600",
      level: "Başlangıç-Orta",
      price: "7.500 ₺"
    },
    {
      title: "Ticari Araç Sürücü Kursu (C Sınıfı)", 
      description: "Kamyon ve ticari araç kullanımı için profesyonel eğitim programı.",
      duration: "8-10 hafta",
      students: "650+",
      rating: "4.7",
      features: [
        "40 saat teorik eğitim", 
        "30 saat pratik sürüş",
        "Yük taşıma kuralları",
        "İş güvenliği eğitimi"
      ],
      image: "https://images.pexels.com/photos/1212407/pexels-photo-1212407.jpeg?auto=compress&cs=tinysrgb&w=600",
      level: "İleri",
      price: "10.000 ₺"
    },
    {
      title: "Savunma Sürüşü Kursu",
      description: "Güvenli sürüş tekniklerini öğrenmek ve risk yönetimi becerileri geliştirmek için.",
      duration: "2-3 hafta",
      students: "1,200+", 
      rating: "4.9",
      features: [
        "15 saat teorik eğitim",
        "10 saat pratik eğitim", 
        "Acil durum simülasyonları",
        "Sertifika programı"
      ],
      image: "https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg?auto=compress&cs=tinysrgb&w=600",
      level: "Tüm Seviyeler",
      price: "3.500 ₺"
    }
  ];

  const features = [
    {
      icon: Car,
      title: "Modern Araç Filosu",
      description: "En son güvenlik teknolojileri ile donatılmış araçlarımızla eğitim alın.",
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      icon: Users,
      title: "Uzman Eğitmenler", 
      description: "Sertifikalı ve deneyimli eğitmenlerimizden profesyonel eğitim alın.",
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      icon: Shield,
      title: "Güvenlik Önceliği",
      description: "Tüm eğitimlerimizde güvenlik en yüksek öncelik olarak ele alınır.",
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      icon: Award,
      title: "Sertifikalı Eğitim",
      description: "Tüm kurslarımız resmi otoriteler tarafından onaylanmış programlardır.",
      gradient: "from-blue-600 to-cyan-600"
    }
  ];

  // Video konularına da ContactPage'deki gibi gradyan renkleri eklendi.
  const videoTopics = [
    {
      to: "/traffic-knowledge",
      image: getAssetPath("/images/trafik_ve_cevre.png"),
      alt: "Trafik ve Çevre Bilgisi",
      title: "Trafik ve Çevre Bilgisi",
      description: "Trafik kuralları ve çevre bilgisi hakkında kapsamlı eğitim videoları",
      gradient: "from-red-500 to-blue-700"
    },
    {
      to: "/first-aid",
      image: getAssetPath("/images/ilk_yardim.png"),
      alt: "İlk Yardım Bilgisi",
      title: "İlk Yardım Bilgisi",
      description: "Temel ilk yardım teknikleri ve uygulamaları",
      gradient: "from-red-500 to-blue-700"
    },
    {
      to: "/vehicle-tech",
      image: getAssetPath("/images/motor_teknigi.png"),
      alt: "Araç Tekniği",
      title: "Araç Tekniği",
      description: "Motor ve araç sistemleri hakkında teknik bilgiler",
      gradient: "from-red-500 to-blue-700"
    },
    {
      to: "/traffic-etiquette",
      image: getAssetPath("/images/trafikte_saygi.png"),
      alt: "Trafik Adabı",
      title: "Trafik Adabı",
      description: "Trafikte görgü kuralları ve etik davranışlar",
      gradient: "from-red-500 to-blue-700"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section - ContactPage ile aynı stil */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542037104857-e617d3b4b8a2?w=1200')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="inline-block mb-6">
            <div className="bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-2 text-sm font-semibold text-blue-300">
              Kaliteli Eğitim Programları
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black mb-6 text-white">
            Sürücü Kursları
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Profesyonel eğitmenlerimiz ve modern araç filomuz ile güvenli sürüş öğrenin. Her seviyeye uygun kurslarımız ile hayalinizdeki ehliyete sahip olun.
          </p>
        </div>
      </section>

      {/* Video Links Section - Arka plan resimleri büyütüldü */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Videolu Konu Anlatımları
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Uzman eğitmenlerimizin hazırladığı detaylı konu anlatım videoları ile öğrenin.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {videoTopics.map((topic, index) => (
              <a
                key={index}
                href={topic.to}
                className="group block bg-white rounded-3xl overflow-hidden shadow-xl border-2 border-gray-100 hover:shadow-2xl hover:border-blue-200 transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${topic.gradient} opacity-90`}></div>
                  <img 
                    src={topic.image}
                    alt={topic.alt} 
                    className="w-full h-full object-contain p-12 relative z-10 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-black text-gray-900 mb-2">
                    {topic.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {topic.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - ContactPage ikonlu kart stiliyle güncellendi */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Neden Sürücü Akademi'yi Seçmelisiniz?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kaliteli eğitim ve güvenilir hizmet anlayışımızla öne çıkıyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-100 hover:shadow-2xl hover:border-blue-200 transition-all duration-500 transform hover:-translate-y-2"
                >
                  <div className={`bg-gradient-to-br ${feature.gradient} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;