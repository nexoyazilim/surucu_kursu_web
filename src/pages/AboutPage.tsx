import React from 'react';
import { Award, Users, Calendar, Target, Eye, Heart } from 'lucide-react';

const AboutPage: React.FC = () => {
  const stats = [
    { number: "18+", label: "Yıllık Deneyim", icon: Calendar },
    { number: "5,000+", label: "Mezun Öğrenci", icon: Users },
    { number: "95%", label: "Başarı Oranı", icon: Award },
    { number: "15", label: "Uzman Eğitmen", icon: Target }
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

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hakkımızda
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto">
            2005'ten beri güvenli sürüş eğitiminde öncü kuruluş. Misyonumuz, vizyonumuz ve 
            değerlerimizle Türkiye'nin en güvenilir sürücü kursu olmaya devam ediyoruz.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Başarılarımız Rakamlarla
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              18 yıllık deneyimimizle elde ettiğimiz başarılar
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-gray-900 dark:text-white">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Misyonumuz, Vizyonumuz & Değerlerimiz
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Bizi yönlendiren ilkeler ve hedefler
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              const cardColors = [
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
                <div
                  key={index}
                  className={`text-center p-8 ${colorScheme.bg} rounded-2xl shadow-lg border ${colorScheme.border} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
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
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Tarihçemiz
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Sürücü Akademi'nin gelişim yolculuğu
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200 dark:bg-blue-800"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div
                    className={`w-5/12 ${
                      index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'
                    }`}
                  >
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
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
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Uzman Kadromuz
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Deneyimli ve sertifikalı eğitmenlerimizle tanışın
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="text-center bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg"
                  />
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {member.experience}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 font-medium">
                  {member.position}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Tesislerimiz
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Modern ve güvenli eğitim ortamlarımızı keşfedin
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Modern Derslikler",
                description: "Teknoloji destekli, konforlu dersliklerimizde teorik eğitim alın.",
                image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600"
              },
              {
                title: "Araç Filosu",
                description: "Son model, güvenli araçlarımızla pratik eğitim yapın.",
                image: "https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=600"
              },
              {
                title: "Simülatör Sistemi", 
                description: "VR teknolojili simülatörlerimizle güvenli ortamda pratik yapın.",
                image: "https://images.pexels.com/photos/2977304/pexels-photo-2977304.jpeg?auto=compress&cs=tinysrgb&w=600"
              }
            ].map((facility, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {facility.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {facility.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Sürücü Akademi Ailesine Katılın
          </h2>
          <p className="text-xl opacity-90 mb-8">
            18 yıllık deneyimimiz ve binlerce mezunumuzla güvenli sürüş yolculuğunuzda 
            yanınızdayız. Siz de başarı hikayemizin bir parçası olun.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-blue-600 font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors transform hover:scale-105">
              Bize Ulaşın
            </button>
            <button className="bg-blue-800 text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-900 transition-colors transform hover:scale-105">
              Eğitim Programlarını Görüntüle
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;