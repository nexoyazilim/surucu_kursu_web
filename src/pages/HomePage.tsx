import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Calendar, HelpCircle, Award, CheckCircle, Phone, Car, Trophy, Target } from 'lucide-react';

const HomePage = () => {
  const [stats, setStats] = useState({ students: 0, success: 0, years: 0, instructors: 0 });

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = duration / steps;
    
    const targets = { students: 5000, success: 98, years: 18, instructors: 25 };
    let current = { students: 0, success: 0, years: 0, instructors: 0 };
    
    const timer = setInterval(() => {
      let allReached = true;
      Object.keys(targets).forEach(key => {
        const typedKey = key as keyof typeof targets;
        if (current[typedKey] < targets[typedKey]) {
          current[typedKey] = Math.min(current[typedKey] + Math.ceil(targets[typedKey] / steps), targets[typedKey]);
          allReached = false;
        }
      });
      setStats({...current});
      if (allReached) clearInterval(timer);
    }, increment);

    return () => clearInterval(timer);
  }, []);



  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-blue-800 to-cyan-700 pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200')] bg-cover bg-center opacity-50"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/50 to-blue-900"></div>
        </div>
        
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-white rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-yellow-300 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-block bg-white/10 backdrop-blur-md px-6 py-3 rounded-full mb-8 border border-white/20 shadow-lg">
                <span className="flex items-center gap-3 text-sm font-bold">
                  <Trophy className="h-5 w-5 text-yellow-400" />
                  <span className="bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent">
                    Ankara'nın 1 Numaralı Sürücü Kursu
                  </span>
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white via-blue-50 to-white bg-clip-text text-transparent">
                  Hayalinizdeki Ehliyete
                </span>
                <span className="block bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent mt-2">
                  Bir Adım Daha Yakın
                </span>
              </h1>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                18 yıllık deneyimimiz, 5000+ mezun öğrencimiz ve %98 başarı oranımızla 
                güvenli sürüş eğitiminde lideriz.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  to="/courses"
                  className="group bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold px-8 py-5 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-yellow-500/50 flex items-center justify-center gap-3"
                >
                  <GraduationCap className="h-6 w-6 group-hover:rotate-12 transition-transform" />
                  Hemen Başla
                </Link>
                <Link
                  to="/pricing"
                  className="group bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-bold px-8 py-5 rounded-2xl text-lg border-2 border-white/30 hover:border-white/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
                >
                  <Phone className="h-6 w-6 group-hover:rotate-12 transition-transform" />
                  Bilgi Al
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                  <div className="text-4xl font-black bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent mb-1">{stats.students}+</div>
                  <div className="text-sm text-blue-200">Mezun Öğrenci</div>
                </div>
                <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                  <div className="text-4xl font-black bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent mb-1">%{stats.success}</div>
                  <div className="text-sm text-blue-200">Başarı Oranı</div>
                </div>
                <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                  <div className="text-4xl font-black bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent mb-1">{stats.years}</div>
                  <div className="text-sm text-blue-200">Yıllık Tecrübe</div>
                </div>
                <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                  <div className="text-4xl font-black bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent mb-1">{stats.instructors}+</div>
                  <div className="text-sm text-blue-200">Eğitmen</div>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/30 to-cyan-400/30 blur-3xl rounded-full"></div>
              <div className="relative z-10 transform hover:scale-105 transition-all duration-500">
                <img
                  src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80"
                  alt="Sürücü Eğitimi"
                  className="rounded-3xl shadow-2xl ring-8 ring-white/10"
                />
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-yellow-400 to-orange-500 text-white p-6 rounded-2xl shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                      <Award className="h-8 w-8" />
                    </div>
                    <div>
                      <div className="text-3xl font-black">18+</div>
                      <div className="text-sm opacity-90">Yıl Tecrübe</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Video/Courses Section */}
      <section className="py-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-sm uppercase tracking-wider px-6 py-2 rounded-full mb-4 shadow-lg">
              Eğitim Programlarımız
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Kapsamlı Sürücü Eğitimi
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Teoriden pratiğe, simülatörden gerçek trafiğe tam donanımlı eğitim
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: "Teorik Eğitim",
                image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80",
                desc: "Trafik kuralları ve işaretler",
                duration: "30 saat",
                gradient: "from-blue-600 to-blue-800"
              },
              {
                title: "Pratik Direksiyon",
                image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&q=80",
                desc: "Gerçek trafik deneyimi",
                duration: "12 saat",
                gradient: "from-orange-600 to-red-600"
              },
              
            ].map((course, index) => (
              <div key={index} className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${course.gradient} opacity-60`}></div>
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    {course.duration}
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-3xl font-black text-white mb-2">{course.title}</h3>
                    <p className="text-white/90 text-sm font-medium">{course.desc}</p>
                  </div>
                </div>
                <div className="p-8">
                  <Link to="/courses" className="inline-flex items-center gap-3 text-blue-600 font-bold group-hover:gap-5 transition-all">
                    Detaylı Bilgi
                    <span className="text-xl">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Popular Pricing Section */}
      <section className="py-12 sm:py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <span className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-4 sm:px-6 py-2 rounded-full mb-3 sm:mb-4 shadow-lg">
              Popüler Paketler
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 sm:mb-6 px-2">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Uygun Fiyatlar
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
              Şeffaf fiyatlandırma ve esnek ödeme seçenekleri
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10">
            {/* B Sınıfı - Most Popular */}
            <div className="relative bg-white rounded-2xl sm:rounded-3xl border-2 border-green-600 shadow-2xl shadow-blue-100 transition-all duration-500 hover:-translate-y-3 overflow-hidden">
              <div className="absolute top-0 right-0 bg-gradient-to-br from-blue-600 to-cyan-600 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-bl-xl sm:rounded-bl-2xl font-bold text-xs sm:text-sm shadow-lg">
                ⭐ En Popüler
              </div>
              <div className="p-6 sm:p-8 pt-10 sm:pt-12">
                <div className="bg-gradient-to-br from-blue-600 to-cyan-600 w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 mx-auto shadow-lg">
                  <Car className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-center text-gray-900 mb-2">
                  B Sınıfı
                </h3>
                <p className="text-xs sm:text-sm text-center text-gray-500 mb-4 sm:mb-6">
                  Otomobil Ehliyeti
                </p>
                <div className="text-center mb-6 sm:mb-8 pb-6 sm:pb-8 border-b-2 border-gray-100">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">17.500</span>
                    <span className="text-xl sm:text-2xl font-bold text-gray-500">₺</span>
                  </div>
                </div>
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  <li className="flex items-start text-gray-700 text-sm sm:text-base">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                    <span>Teorik dersler dahil</span>
                  </li>
                  <li className="flex items-start text-gray-700 text-sm sm:text-base">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                    <span>12 saat direksiyon eğitimi</span>
                  </li>
                  <li className="flex items-start text-gray-700 text-sm sm:text-base">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                    <span>Modern araç filosu</span>
                  </li>
                  <li className="flex items-start text-gray-700 text-sm sm:text-base">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                    <span>Sınav öncesi hazırlık</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* A2 Sınıfı */}
            <div className="relative bg-white rounded-2xl sm:rounded-3xl border-2 border-gray-200 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:border-blue-300">
              <div className="p-6 sm:p-8">
                <div className="bg-gradient-to-br from-blue-600 to-cyan-600 w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 mx-auto shadow-lg">
                  <Target className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-center text-gray-900 mb-2">
                  A2 Sınıfı
                </h3>
                <p className="text-xs sm:text-sm text-center text-gray-500 mb-4 sm:mb-6">
                  Motosiklet Ehliyeti
                </p>
                <div className="text-center mb-6 sm:mb-8 pb-6 sm:pb-8 border-b-2 border-gray-100">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900">14.000</span>
                    <span className="text-xl sm:text-2xl font-bold text-gray-500">₺</span>
                  </div>
                </div>
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  <li className="flex items-start text-gray-700 text-sm sm:text-base">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                    <span>Teorik dersler dahil</span>
                  </li>
                  <li className="flex items-start text-gray-700 text-sm sm:text-base">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                    <span>Motosiklet eğitimi</span>
                  </li>
                  <li className="flex items-start text-gray-700 text-sm sm:text-base">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                    <span>Güvenlik ekipmanları</span>
                  </li>
                  <li className="flex items-start text-gray-700 text-sm sm:text-base">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                    <span>Deneyimli eğitmenler</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* A1 Sınıfı */}
            <div className="relative bg-white rounded-2xl sm:rounded-3xl border-2 border-gray-200 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:border-blue-300 sm:col-span-2 lg:col-span-1">
              <div className="p-6 sm:p-8">
                <div className="bg-gradient-to-br from-blue-600 to-cyan-600 w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 mx-auto shadow-lg">
                  <Award className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-center text-gray-900 mb-2">
                  A1 Sınıfı
                </h3>
                <p className="text-xs sm:text-sm text-center text-gray-500 mb-4 sm:mb-6">
                  Hafif Motosiklet
                </p>
                <div className="text-center mb-6 sm:mb-8 pb-6 sm:pb-8 border-b-2 border-gray-100">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900">13.000</span>
                    <span className="text-xl sm:text-2xl font-bold text-gray-500">₺</span>
                  </div>
                </div>
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  <li className="flex items-start text-gray-700 text-sm sm:text-base">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                    <span>Teorik dersler dahil</span>
                  </li>
                  <li className="flex items-start text-gray-700 text-sm sm:text-base">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                    <span>Hafif motor eğitimi</span>
                  </li>
                  <li className="flex items-start text-gray-700 text-sm sm:text-base">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                    <span>Uygun fiyat avantajı</span>
                  </li>
                  <li className="flex items-start text-gray-700 text-sm sm:text-base">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                    <span>16 yaş üzeri için</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold px-6 sm:px-10 py-3 sm:py-5 rounded-xl sm:rounded-2xl text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-blue-500/50"
            >
              Tüm Fiyatları Görüntüle
              <span className="text-lg sm:text-xl">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog/News Section */}
      <section className="py-8 sm:py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <span className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-4 sm:px-6 py-2 rounded-full mb-3 sm:mb-4 shadow-lg">
              Blog & Haberler
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 sm:mb-6 px-2">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Son Yazılar
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "2024 Ehliyet Sınav Değişiklikleri",
                excerpt: "Yeni yılda ehliyet sınavlarında yapılan değişiklikler ve bunlara nasıl hazırlanacağınız...",
                image: "https://www.acibadem.com.tr/hayat/Images/YayinMakaleler/sinav-kayginizi-azaltacak-10-oneri_9100_1.jpg",
                date: "15 Haziran 2024",
                category: "Sınav İpuçları",
                gradient: "from-blue-600 to-cyan-600"
              },
              {
                title: "Kış Sürüşünde Dikkat Edilmesi Gerekenler",
                excerpt: "Karlı ve buzlu havalarda güvenli sürüş için mutlaka bilmeniz gereken 10 altın kural...",
                image: "https://www.otopratik.com.tr/uploads/content_images/karli-havada-araba.webp",
                date: "10 Haziran 2024",
                category: "Güvenlik",
                gradient: "from-orange-600 to-red-600"
              },
              {
                title: "Yeni Başlayanlar İçin Park Etme Teknikleri",
                excerpt: "Paralel park, dik park ve garaj park teknikleri hakkında detaylı bilgiler...",
                image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=600&q=80",
                date: "5 Haziran 2024",
                category: "Eğitim",
                gradient: "from-purple-600 to-pink-600"
              }
            ].map((post, index) => (
              <article key={index} className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${post.gradient} opacity-40`}></div>
                  <div className="absolute top-6 left-6">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                      {post.category}
                    </span>
                  </div>

                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link to="/blog" className="inline-flex items-center gap-3 text-blue-600 font-bold group-hover:gap-5 transition-all">
                    Devamını Oku
                    <span className="text-xl">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <span className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-4 sm:px-6 py-2 rounded-full mb-3 sm:mb-4 shadow-lg">
              Merak Edilenler
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 sm:mb-6 px-2">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Sıkça Sorulan Sorular
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 px-2">
              En çok merak edilen sorulara yanıtlar
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {[
              {
                question: "Ehliyet almak için kaç yaşında olmam gerekir?",
                answer: "B sınıfı ehliyet için 18 yaşını doldurmuş olmanız gerekmektedir. Ancak 17 yaşını dolduranlarda eğitime başlayabilir."
              },
              {
                question: "Eğitim süreci ne kadar sürer?",
                answer: "Teorik eğitim 30 saat, pratik eğitim 12 saat ve simülatör eğitimi 8 saat olmak üzere toplam yaklaşık 2 ay sürmektedir."
              },
              {
                question: "Ders saatlerini kendim belirleyebilir miyim?",
                answer: "Evet, pratik dersleriniz için size uygun gün ve saatleri eğitmeninizle birlikte planlayabilirsiniz."
              },
              {
                question: "Sınav başarısız olursam ne olur?",
                answer: "Sınavda başarısız olursanız, ek pratik dersler alarak tekrar sınava girebilirsiniz. Kursumuz bu süreçte size destek olmaya devam eder."
              },
              {
                question: "Araçlar hangi modellerde?",
                answer: "Modern ve güvenli araç filomuzda manuel ve otomatik vites seçenekleri bulunmaktadır. Tüm araçlarımız düzenli bakımlıdır."
              }
            ].map((faq, index) => (
              <details key={index} className="group bg-gradient-to-r from-gray-50 to-white rounded-2xl sm:rounded-3xl hover:shadow-xl transition-all border border-gray-100 overflow-hidden">
                <summary className="flex justify-between items-center font-bold text-gray-900 text-base sm:text-lg md:text-xl cursor-pointer list-none p-5 sm:p-6 lg:p-8 w-full hover:bg-gray-50/50 transition-colors">
                  <span className="flex items-center gap-3 sm:gap-4 flex-1">
                    <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-2 sm:p-3 rounded-xl sm:rounded-2xl group-hover:scale-110 transition-transform shadow-lg flex-shrink-0">
                      <HelpCircle className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <span className="pr-2">{faq.question}</span>
                  </span>
                  <span className="text-2xl sm:text-3xl text-blue-600 group-open:rotate-45 transition-transform flex-shrink-0">+</span>
                </summary>
                <p className="px-5 sm:px-8 pb-5 sm:pb-8 text-gray-600 leading-relaxed pl-14 sm:pl-20 lg:pl-24 text-sm sm:text-base lg:text-lg">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/faq"
              className="inline-flex items-center gap-3 text-blue-600 hover:text-blue-700 font-bold text-lg group"
            >
              Daha Fazla Soru
              <span className="text-xl group-hover:translate-x-2 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>




    </div>
  );
};

export default HomePage;