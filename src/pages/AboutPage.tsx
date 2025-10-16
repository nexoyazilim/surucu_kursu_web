import React from 'react';
import { Award, Users, Calendar, Target, Eye, Heart } from 'lucide-react';

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
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200')] bg-cover bg-center opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 text-center">
          <div className="inline-block mb-6">
            <div className="bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 sm:px-6 py-2 text-xs sm:text-sm font-semibold text-blue-300">
              18 Yıllık Güvenilir Hizmet
            </div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 text-white px-2">
            Hakkımızda
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed px-2">
            2005'ten beri güvenli sürüş eğitiminde öncü kuruluş. Kaliteli eğitim, deneyimli kadro ve 
            modern teknolojilerle Türkiye'nin en güvenilir sürücü kursu olmaya devam ediyoruz.
          </p>
        </div>
      </section>


      {/* Mission Vision Values */}
      <section className="py-12 sm:py-16 lg:py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-3 sm:mb-4 px-2">
              Misyon, Vizyon & Değerlerimiz
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 px-2">
              Bizi yönlendiren ilkeler ve hedefler
            </p>
          </div>

          <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
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
                  className="relative group bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border-2 border-gray-100 hover:shadow-2xl transition-all duration-500 overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradient.light} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <div className="relative">
                    <div className={`bg-gradient-to-br ${gradient.bg} w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 lg:mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-3 sm:mb-4 text-center">
                      {value.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-center text-sm sm:text-base lg:text-lg">
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
      <section className="py-12 sm:py-16 lg:py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-3 sm:mb-4 px-2">
              Tarihçemiz
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 px-2">
              Sürücü Akademi'nin gelişim yolculuğu
            </p>
          </div>

          <div className="relative">
            {/* Desktop timeline line - only visible on md and up */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200"></div>
            
            {/* Mobile timeline line - only visible on mobile */}
            <div className="md:hidden absolute left-4 sm:left-6 top-0 w-0.5 h-full bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200"></div>
            
            <div className="space-y-8 sm:space-y-12 md:space-y-4">
              {milestones.map((milestone, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={index}
                    className={`relative flex items-center ${isEven ? 'md:justify-start' : 'md:justify-end'}`}
                  >
                    {/* Mobile layout */}
                    <div className="md:hidden pl-10 sm:pl-14 pr-2 w-full">
                      <div className="relative bg-white p-4 sm:p-6 rounded-2xl shadow-xl border-2 border-gray-100 hover:shadow-2xl hover:border-blue-200 transition-all duration-300">
                        <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2 sm:mb-3">
                          {milestone.year}
                        </div>
                        <h3 className="text-base sm:text-lg font-black text-gray-900 mb-2 sm:mb-3">
                          {milestone.event}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>

                    {/* Desktop layout */}
                    <div className={`hidden md:block w-full md:w-5/12 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                      <div className={`relative bg-white p-6 lg:p-8 rounded-2xl lg:rounded-3xl shadow-xl border-2 border-gray-100 hover:shadow-2xl hover:border-blue-200 transition-all duration-300 ${isEven ? 'text-right' : 'text-left'}`}>
                        <div className="text-2xl lg:text-3xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2 lg:mb-3">
                          {milestone.year}
                        </div>
                        <h3 className="text-lg lg:text-xl font-black text-gray-900 mb-2 lg:mb-3">
                          {milestone.event}
                        </h3>
                        <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>

                    {/* Mobile timeline dot */}
                    <div className="md:hidden absolute left-2.5 sm:left-4 transform -translate-x-1/2 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full border-2 sm:border-4 border-white shadow-lg"></div>

                    {/* Desktop timeline dot */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 sm:py-16 lg:py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-3 sm:mb-4 px-2">
              Uzman Kadromuz
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 px-2">
              Deneyimli ve sertifikalı eğitmenlerimizle tanışın
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            {team.map((member, index) => (
              <div key={index} className="group text-center">
                <div className="relative mb-6">
                  <div className="w-36 h-36 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl ring-2 sm:ring-4 ring-gray-100 group-hover:ring-blue-200 transition-all duration-300">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute -bottom-3 sm:-bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg">
                    {member.experience} tecrübe
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-black text-gray-900 mt-6 sm:mt-8 mb-2">
                  {member.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 font-semibold px-2">
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