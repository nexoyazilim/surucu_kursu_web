import React from 'react';
import { Clock, Users, Award, BookOpen, Car, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

// Base path for assets
const getAssetPath = (path: string) => {
  return import.meta.env.PROD ? `/surucu_kursu_web${path}` : path;
};

const CoursesPage: React.FC = () => {
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
      description: "En son güvenlik teknolojileri ile donatılmış araçlarımızla eğitim alın."
    },
    {
      icon: Users,
      title: "Uzman Eğitmenler", 
      description: "Sertifikalı ve deneyimli eğitmenlerimizden profesyonel eğitim alın."
    },
    {
      icon: Shield,
      title: "Güvenlik Önceliği",
      description: "Tüm eğitimlerimizde güvenlik en yüksek öncelik olarak ele alınır."
    },
    {
      icon: Award,
      title: "Sertifikalı Eğitim",
      description: "Tüm kurslarımız resmi otoriteler tarafından onaylanmış programlardır."
    }
  ];

  return (
    <div className="py-0">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 px-4">
            Sürücü Kursları
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto px-4 leading-relaxed">
            Profesyonel eğitmenlerimiz ve modern araç filomuz ile güvenli sürüş öğrenin. 
            Her seviyeye uygun kurslarımız ile hayalinizdeki ehliyete sahip olun.
          </p>
        </div>
      </section>

            {/* Video Links Section */}
            <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-20 px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              Videolu Konu Anlatımları
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Uzman eğitmenlerimizin hazırladığı detaylı konu anlatım videoları ile öğrenin.
            </p>
          </div>

          {/* Kurs Kategorileri */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {/* Trafik ve Çevre Bilgisi */}
            <Link
              to="/traffic-knowledge"
              className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-6 text-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="bg-white/20 p-6 rounded-full mb-4">
                  <img 
                    src={getAssetPath("/images/trafik_ve_cevre.png")}
                    alt="Trafik ve Çevre Bilgisi" 
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Trafik ve Çevre Bilgisi</h3>
                <p className="text-sm opacity-90">Trafik kuralları ve çevre bilgisi hakkında kapsamlı eğitim videoları</p>
              </div>
            </Link>

          {/* İlk Yardım */}
            <Link
              to="/first-aid"
              className="bg-gradient-to-br from-green-500 to-green-700 rounded-xl p-6 text-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="bg-white/20 p-6 rounded-full mb-4">
                  <img 
                    src={getAssetPath("/images/ilk_yardim.png")}
                    alt="İlk Yardım Bilgisi" 
                    className="w-16 h-16 object-contain"
                  />
                      </div>
                <h3 className="text-xl font-bold mb-2">İlk Yardım Bilgisi</h3>
                <p className="text-sm opacity-90">Temel ilk yardım teknikleri ve uygulamaları</p>
                    </div>
            </Link>

          {/* Araç Tekniği */}
            <Link
              to="/vehicle-tech"
              className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl p-6 text-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="bg-white/20 p-6 rounded-full mb-4">
                  <img 
                    src={getAssetPath("/images/motor_teknigi.png")}
                    alt="Araç Tekniği" 
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Araç Tekniği</h3>
                <p className="text-sm opacity-90">Motor ve araç sistemleri hakkında teknik bilgiler</p>
              </div>
            </Link>

            {/* Trafik Adabı */}
            <Link
              to="/traffic-etiquette"
              className="bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-xl p-6 text-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="bg-white/20 p-6 rounded-full mb-4">
                  <img 
                    src={getAssetPath("/images/trafikte_saygi.png")}
                    alt="Trafik Adabı" 
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Trafik Adabı</h3>
                <p className="text-sm opacity-90">Trafikte görgü kuralları ve etik davranışlar</p>
              </div>
            </Link>
          </div>

        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Neden Sürücü Akademi'yi Seçmelisiniz?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Kaliteli eğitim ve güvenilir hizmet anlayışımızla öne çıkıyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="text-center p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
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