import React from 'react';
import { Award, Users, Calendar, Target, Eye, Heart, Shield, TrendingUp } from 'lucide-react';

const AboutPage: React.FC = () => {
  const stats = [
    { number: 18, label: "Yıllık Deneyim", icon: Calendar, suffix: "+" },
    { number: 5000, label: "Mezun Öğrenci", icon: Users, suffix: "+" },
    { number: 98, label: "Başarı Oranı", icon: Award, suffix: "%" },
    { number: 25, label: "Uzman Eğitmen", icon: Target, suffix: "+" }
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
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80"
    },
    {
      name: "Ayşe Demir",
      position: "Baş Eğitmen",
      experience: "15 yıl",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80"
    },
    {
      name: "Can Özkan",
      position: "Teorik Eğitim Koordinatörü", 
      experience: "12 yıl",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80"
    },
    {
      name: "Elif Kaya",
      position: "Pratik Eğitim Uzmanı",
      experience: "10 yıl", 
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80"
    }
  ];

  const milestones = [
    { year: "2005", event: "Sürücü Akademi kuruldu", description: "İlk merkezimizi açarak hizmete başladık." },
    { year: "2010", event: "İkinci şube açıldı", description: "Büyüyen talebimize karşılık ikinci merkezimizi hizmete aldık." },
    { year: "2015", event: "Online eğitim sistemi", description: "Dijital dönüşümle online teorik eğitim sistemimizi devreye aldık." },
    { year: "2020", event: "5000. mezunumuz", description: "5000'inci öğrencimizi mezun ederek önemli bir kilometre taşını geçtik." },
    { year: "2024", event: "Yeni teknolojiler", description: "Simülatör eğitimi ve modern teknolojileri eğitim programımıza entegre ettik." }
  ];

  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="inline-block mb-6">
            <div className="bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-2 text-sm font-semibold text-blue-300">
              18 Yıllık Güvenilir Hizmet
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black mb-6 text-white">
            Hakkımızda
          </h1>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            2005'ten beri güvenli sürüş eğitiminde öncü kuruluş. Kaliteli eğitim, deneyimli kadro ve 
            modern teknolojilerle Türkiye'nin en güvenilir sürücü kursu olmaya devam ediyoruz.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Başarılarımız Rakamlarla
            </h2>
            <p className="text-xl text-gray-600">
              18 yıllık deneyimimizle elde ettiğimiz başarılar
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              const gradients = [
                'from-blue-600 to-cyan-600',
                'from-green-600 to-emerald-600',
                'from-orange-600 to-yellow-600',
                'from-purple-600 to-pink-600'
              ];
              return (
                <div
                  key={index}
                  className="text-center p-8 bg-white rounded-3xl shadow-lg border-2 border-gray-100 hover:shadow-2xl hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className={`bg-gradient-to-br ${gradients[index]} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="text-5xl font-black bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">
                    {stat.number}{stat.suffix}
                  </div>
                  <div className="text-lg font-bold text-gray-700">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Misyon, Vizyon & Değerlerimiz
            </h2>
            <p className="text-xl text-gray-600">
              Bizi yönlendiren ilkeler ve hedefler
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              const gradients = [
                { bg: 'from-blue-600 to-cyan-600', light: 'from-blue-50 to-cyan-50' },
                { bg: 'from-green-600 to-emerald-600', light: 'from-green-50 to-emerald-50' },
                { bg: 'from-purple-600 to-pink-600', light: 'from-purple-50 to-pink-50' }
              ];
              const gradient = gradients[index];
              
              return (
                <div
                  key={index}
                  className="relative group bg-white rounded-3xl p-10 shadow-xl border-2 border-gray-100 hover:shadow-2xl transition-all duration-500 overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradient.light} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <div className="relative">
                    <div className={`bg-gradient-to-br ${gradient.bg} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-black text-gray-900 mb-4 text-center">
                      {value.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-center text-lg">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* History Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Tarihçemiz
            </h2>
            <p className="text-xl text-gray-600">
              Sürücü Akademi'nin gelişim yolculuğu
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200"></div>
            
            <div className="space-y-16">
              {milestones.map((milestone, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={index}
                    className={`relative flex items-center ${isEven ? 'justify-start' : 'justify-end'}`}
                  >
                    <div className={`w-full md:w-5/12 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                      <div className={`relative bg-white p-8 rounded-3xl shadow-xl border-2 border-gray-100 hover:shadow-2xl hover:border-blue-200 transition-all duration-300 ${isEven ? 'text-right' : 'text-left'}`}>
                        <div className="text-3xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-3">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-black text-gray-900 mb-3">
                          {milestone.event}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>

                    <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Uzman Kadromuz
            </h2>
            <p className="text-xl text-gray-600">
              Deneyimli ve sertifikalı eğitmenlerimizle tanışın
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {team.map((member, index) => (
              <div key={index} className="group text-center">
                <div className="relative mb-6">
                  <div className="w-48 h-48 mx-auto rounded-3xl overflow-hidden shadow-xl ring-4 ring-gray-100 group-hover:ring-blue-200 transition-all duration-300">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    {member.experience} tecrübe
                  </div>
                </div>
                <h3 className="text-xl font-black text-gray-900 mt-8 mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-600 font-semibold">
                  {member.position}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>




    </div>
  );
};

export default AboutPage;