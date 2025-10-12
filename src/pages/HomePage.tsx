import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Calendar, FileText, Lightbulb, HelpCircle, Star, Users, Award, Clock, CheckCircle, Phone, Mail, MapPin, TrendingUp, BookOpen, Car, Shield, Trophy } from 'lucide-react';

const HomePage = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [stats, setStats] = useState({ students: 0, success: 0, years: 0, instructors: 0 });

  useEffect(() => {
    // Animasyonlu sayaç
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: "Ayşe Yılmaz",
      text: "Harika bir eğitim deneyimi! Eğitmenler çok sabırlı ve profesyonel. İlk denemede sınavı geçtim.",
      rating: 5,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      name: "Mehmet Kaya",
      text: "18 yıllık deneyim gerçekten fark yaratıyor. Hem teorik hem pratik eğitimler mükemmeldi.",
      rating: 5,
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      name: "Zeynep Demir",
      text: "Simülatör eğitimleri sayesinde gerçek trafiğe çok daha hazır hissettim. Teşekkürler!",
      rating: 5,
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100"
    }
  ];

  const features = [
    { icon: Shield, title: "Güvenli Eğitim", desc: "Modern araçlar ve güvenlik sistemleri" },
    { icon: Award, title: "%98 Başarı", desc: "Yüksek sınav başarı oranı" },
    { icon: Users, title: "Uzman Kadro", desc: "25+ deneyimli eğitmen" },
    { icon: Clock, title: "Esnek Saatler", desc: "Size uygun ders programı" }
  ];

  const advantages = [
    "Ücretsiz teorik deneme sınavları",
    "Modern araç filosu",
    "Bireysel eğitim programı",
    "Sınav öncesi özel hazırlık",
    "Online ders takip sistemi",
    "Kapıdan alım servisi"
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="white" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-block bg-blue-500/30 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-blue-400/30">
                <span className="flex items-center gap-2 text-sm font-semibold">
                  <Trophy className="h-4 w-4" />
                  Ankara'nın 1 Numaralı Sürücü Kursu
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                Hayalinizdeki Ehliyete
                <span className="block text-yellow-300">Bir Adım Daha Yakın</span>
              </h1>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                18 yıllık deneyimimiz, 5000+ mezun öğrencimiz ve %98 başarı oranımızla 
                güvenli sürüş eğitiminde lideriz.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  to="/courses"
                  className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center gap-2"
                >
                  <GraduationCap className="h-5 w-5" />
                  Hemen Başla
                </Link>
                <Link
                  to="/pricing"
                  className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl text-lg border-2 border-white/30 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Phone className="h-5 w-5" />
                  Bilgi Al
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-black text-yellow-300 mb-1">{stats.students}+</div>
                  <div className="text-sm text-blue-200">Mezun Öğrenci</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-yellow-300 mb-1">%{stats.success}</div>
                  <div className="text-sm text-blue-200">Başarı Oranı</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-yellow-300 mb-1">{stats.years}</div>
                  <div className="text-sm text-blue-200">Yıllık Tecrübe</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-yellow-300 mb-1">{stats.instructors}+</div>
                  <div className="text-sm text-blue-200">Eğitmen</div>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative z-10">
                <img
                  src="https://images.pexels.com/photos/1687147/pexels-photo-1687147.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Sürücü Eğitimi"
                  className="rounded-2xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500"
                />
              </div>
              <div className="absolute top-10 -right-10 w-64 h-64 bg-yellow-400 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-400 rounded-full opacity-20 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="relative -mt-16 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="bg-blue-100 p-3 rounded-xl group-hover:bg-blue-600 transition-colors duration-300">
                      <Icon className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Video/Courses Section */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Eğitim Programlarımız</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-2 mb-4">
              Kapsamlı Sürücü Eğitimi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Teoriden pratiğe, simülatörden gerçek trafiğe tam donanımlı eğitim
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Teorik Eğitim",
                image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400",
                desc: "Trafik kuralları ve işaretler",
                duration: "30 saat"
              },
              {
                title: "Pratik Direksiyon",
                image: "https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=400",
                desc: "Gerçek trafik deneyimi",
                duration: "12 saat"
              },
              {
                title: "Simülatör Eğitimi",
                image: "https://images.pexels.com/photos/2977304/pexels-photo-2977304.jpeg?auto=compress&cs=tinysrgb&w=400",
                desc: "Güvenli öğrenme ortamı",
                duration: "8 saat"
              },
            ].map((course, index) => (
              <div key={index} className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-sm font-bold">
                    {course.duration}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-1">{course.title}</h3>
                    <p className="text-blue-100 text-sm">{course.desc}</p>
                  </div>
                </div>
                <div className="p-6">
                  <Link to="/courses" className="text-blue-600 font-semibold flex items-center gap-2 group-hover:gap-4 transition-all">
                    Detaylı Bilgi
                    <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-5 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Neden Biz?</span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-2 mb-6">
                Farkımızı Keşfedin
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Ankara'nın en köklü sürücü kursu olarak size en iyi eğitimi sunuyoruz.
              </p>
              
              <div className="space-y-4">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="bg-green-100 p-2 rounded-lg group-hover:bg-green-500 transition-colors duration-300">
                      <CheckCircle className="h-5 w-5 text-green-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-gray-700 group-hover:text-gray-900 font-medium transition-colors">{advantage}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  Hakkımızda Daha Fazla
                  <span>→</span>
                </Link>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Eğitim"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-8 rounded-2xl shadow-xl max-w-xs">
                <div className="flex items-center gap-4 mb-2">
                  <TrendingUp className="h-8 w-8 text-yellow-300" />
                  <div className="text-3xl font-black">%98</div>
                </div>
                <p className="text-blue-100">İlk denemede başarı oranı</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-200 font-semibold text-sm uppercase tracking-wide">Öğrenci Yorumları</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-2">
              Mezunlarımız Ne Diyor?
            </h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonials[activeTestimonial].image}
                  alt={testimonials[activeTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-blue-100"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{testimonials[activeTestimonial].name}</h3>
                  <div className="flex gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed italic">
                "{testimonials[activeTestimonial].text}"
              </p>
            </div>

            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial ? 'w-12 bg-white' : 'w-3 bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Yaklaşan Eğitimler</span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-2 mb-6">
                Ders Programı
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Yeni dönem eğitimlerimiz için kayıtlar devam ediyor. Yerinizi şimdiden ayırtın!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-blue-600">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Calendar className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      Pratik Eğitim Başlangıcı
                    </h3>
                    <p className="text-gray-600 mb-2">15 Temmuz 2024</p>
                    <p className="text-sm text-blue-600 font-semibold">Kayıt son tarihi: 10 Temmuz</p>
                  </div>
                  <Link to="/register" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">
                    Kayıt Ol
                  </Link>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-green-600">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <BookOpen className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      Teorik Eğitim Başlangıcı
                    </h3>
                    <p className="text-gray-600 mb-2">28 Temmuz 2024</p>
                    <p className="text-sm text-green-600 font-semibold">Kayıt son tarihi: 22 Temmuz</p>
                  </div>
                  <Link to="/register" className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors">
                    Kayıt Ol
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <span className="text-xl">←</span>
                </button>
                <h3 className="text-lg font-bold text-gray-900">Temmuz 2024</h3>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <span className="text-xl">→</span>
                </button>
              </div>

              <div className="grid grid-cols-7 gap-1 text-center text-sm">
                {['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'].map((day) => (
                  <div key={day} className="font-semibold text-gray-500 py-2">
                    {day}
                  </div>
                ))}
                {Array.from({ length: 31 }, (_, i) => i + 1).map((date) => (
                  <div
                    key={date}
                    className={`py-3 rounded-lg transition-all cursor-pointer ${
                      date === 15
                        ? 'bg-blue-600 text-white font-bold shadow-lg scale-110'
                        : date === 28
                        ? 'bg-green-600 text-white font-bold shadow-lg scale-110'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {date}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-5 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Öğrenme Kaynakları</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-2 mb-4">
              Eğitim Destekleri
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Başarınızı artıracak ek materyaller ve içerikler
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: FileText, title: "Ders Notları", description: "Kapsamlı konu özetleri ve çalışma materyalleri", color: "blue" },
              { icon: Lightbulb, title: "Eğitim İpuçları", description: "Öğrenme stratejileri ve pratik tavsiyeler", color: "yellow" },
              { icon: HelpCircle, title: "SSS", description: "Sıkça sorulan sorular ve cevapları", color: "green" },
              { icon: Star, title: "Başarı Hikayeleri", description: "Mezunlarımızın ilham verici hikayeleri", color: "purple" },
            ].map((resource, index) => {
              const Icon = resource.icon;
              const colors: Record<string, string> = {
                blue: 'from-blue-500 to-blue-600',
                yellow: 'from-yellow-500 to-orange-500',
                green: 'from-green-500 to-emerald-600',
                purple: 'from-purple-500 to-pink-600'
              };
              return (
                <Link
                  key={index}
                  to="/courses"
                  className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className={`bg-gradient-to-br ${colors[resource.color]} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {resource.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>



      {/* Blog/News Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Blog & Haberler</span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-2">
                Son Yazılar
              </h2>
            </div>
            <Link to="/blog" className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2">
              Tümünü Gör
              <span>→</span>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "2024 Ehliyet Sınav Değişiklikleri",
                excerpt: "Yeni yılda ehliyet sınavlarında yapılan değişiklikler ve bunlara nasıl hazırlanacağınız...",
                image: "https://images.pexels.com/photos/4427430/pexels-photo-4427430.jpeg?auto=compress&cs=tinysrgb&w=400",
                date: "15 Haziran 2024",
                category: "Sınav İpuçları"
              },
              {
                title: "Kış Sürüşünde Dikkat Edilmesi Gerekenler",
                excerpt: "Karlı ve buzlu havalarda güvenli sürüş için mutlaka bilmeniz gereken 10 altın kural...",
                image: "https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=400",
                date: "10 Haziran 2024",
                category: "Güvenlik"
              },
              {
                title: "Yeni Başlayanlar İçin Park Etme Teknikleri",
                excerpt: "Paralel park, dik park ve garaj park teknikleri hakkında detaylı bilgiler...",
                image: "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=400",
                date: "5 Haziran 2024",
                category: "Eğitim"
              }
            ].map((post, index) => (
              <article key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link to="/blog" className="text-blue-600 font-semibold text-sm flex items-center gap-2 group-hover:gap-4 transition-all">
                    Devamını Oku
                    <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-5 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Merak Edilenler</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-2 mb-4">
              Sıkça Sorulan Sorular
            </h2>
            <p className="text-xl text-gray-600">
              En çok merak edilen sorulara yanıtlar
            </p>
          </div>

          <div className="space-y-4">
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
              <details key={index} className="group bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors cursor-pointer">
                <summary className="flex justify-between items-center font-bold text-gray-900 text-lg cursor-pointer list-none">
                  <span className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg group-hover:bg-blue-600 transition-colors">
                      <HelpCircle className="h-5 w-5 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    {faq.question}
                  </span>
                  <span className="text-2xl text-blue-600 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed pl-14">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/faq"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
            >
              Daha Fazla Soru
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Car className="absolute top-10 left-10 h-32 w-32 animate-pulse" />
          <Car className="absolute bottom-10 right-10 h-32 w-32 animate-pulse" style={{animationDelay: '1s'}} />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Hemen Başlayın!
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Ehliyetinize giden yolda ilk adımı atmak için bugün bize katılın. 
            Ücretsiz danışmanlık için hemen iletişime geçin.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/register"
              className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Online Kayıt
            </Link>
            <a
              href="tel:+903121234567"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl text-lg border-2 border-white/30 transition-all duration-300 transform hover:scale-105"
            >
              (0312) 123 45 67
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-blue-100">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span>Ankara, Çankaya</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              <span>info@surucukursu.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>Pzt-Cmt: 09:00 - 18:00</span>
            </div>
          </div>
        </div>
      </section>



      {/* Partners/Certifications */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Sertifikalarımız ve İş Ortaklarımız</h3>
            <p className="text-gray-600">Güvenilir ve kaliteli eğitim için akredite kurum</p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {[
              "MEB Onaylı",
              "ISO 9001",
              "Trafik Güvenliği Sertifikalı",
              "MTSK Üyesi"
            ].map((cert, index) => (
              <div key={index} className="bg-white px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <p className="text-gray-700 font-semibold text-center">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
        
      
    </div>
  );
};

export default HomePage;