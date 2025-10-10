import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Calendar, FileText, Lightbulb, HelpCircle, Star } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 tracking-tight mb-6">
            Ankara'nın En Güvenilir<br />
            <span className="text-blue-600">Sürücü Kursu</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            18 yıllık deneyimimiz ve uzman eğitmen kadromuzla güvenli sürüş eğitimi veriyoruz. 
            Teorik ve pratik eğitimlerimizle ehliyet alma yolculuğunuzda yanınızdayız.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/courses"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Eğitim Programları
            </Link>
            <Link
              to="/pricing"
              className="bg-white hover:bg-gray-50 text-blue-600 font-bold px-8 py-4 rounded-xl text-lg border-2 border-blue-600 transition-all duration-200 transform hover:scale-105"
            >
              Fiyatları Görüntüle
            </Link>
          </div>
        </div>
      </section>


      {/* Video Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Kapsamlı Sürücü Eğitimi
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Uzman eğitmenlerimiz tarafından verilen teorik ve praktik eğitimlerle 
              güvenli sürücü olma yolculuğunuzu başlatın.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Teorik Eğitim Programı",
                image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400",
              },
              {
                title: "Pratik Direksiyon Dersleri",
                image: "https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=400",
              },
              {
                title: "Simülatör Eğitimleri",
                image: "https://images.pexels.com/photos/2977304/pexels-photo-2977304.jpeg?auto=compress&cs=tinysrgb&w=400",
              },
            ].map((course, index) => (
              <div 
                key={index} 
                className="group cursor-pointer card-flip hover-rotate"
                style={{ 
                  animationDelay: `${index * 200}ms`,
                  animation: 'fadeInUp 0.8s ease-out forwards'
                }}
              >
                <div className="card-flip-inner">
                  <div className="relative aspect-video rounded-xl overflow-hidden mb-4 shadow-lg transform transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2 group-hover:rotate-1">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-blue/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <button className="bg-white/30 backdrop-blur-sm rounded-full p-4 hover:bg-white/50 transition-all duration-300 transform hover:scale-110 animate-pulse">
                        <GraduationCap className="h-8 w-8 text-white transform group-hover:scale-110 transition-transform" />
                      </button>
                    </div>
                    <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold transform translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 delay-150">
                      Başla
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all duration-300 transform group-hover:translate-x-2">
                    {course.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                Ders Programı ve Duyurular
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Eğitim programlarımızın tarihlerini ve önemli duyuruları buradan takip edebilirsiniz.
              </p>
              
              <div className="space-y-4">
                <div 
                  className="flex items-start space-x-4 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-102 group cursor-pointer"
                  style={{ animation: 'slideInLeft 0.8s ease-out forwards' }}
                >
                  <div className="bg-blue-600 text-white rounded-full p-3 flex-shrink-0 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
                    <Calendar className="h-6 w-6 group-hover:animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 transition-colors">
                      Pratik Eğitim Başlangıcı
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-700 transition-colors">
                      15 Temmuz - Kayıt son tarihi: 10 Temmuz
                    </p>
                  </div>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                  </div>
                </div>

                <div 
                  className="flex items-start space-x-4 p-6 bg-green-50 dark:bg-green-900/20 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-102 group cursor-pointer"
                  style={{ animation: 'slideInLeft 0.8s ease-out 0.2s forwards' }}
                >
                  <div className="bg-green-600 text-white rounded-full p-3 flex-shrink-0 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
                    <Calendar className="h-6 w-6 group-hover:animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-green-600 transition-colors">
                      Teorik Eğitim Başlangıcı
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-700 transition-colors">
                      28 Temmuz - Kayıt son tarihi: 22 Temmuz
                    </p>
                  </div>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                    <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Calendar Widget */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors">
                  <span className="text-xl">←</span>
                </button>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Temmuz 2024</h3>
                <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors">
                  <span className="text-xl">→</span>
                </button>
              </div>

              <div className="grid grid-cols-7 gap-1 text-center text-sm">
                {['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'].map((day) => (
                  <div key={day} className="font-semibold text-gray-500 dark:text-gray-400 py-2">
                    {day}
                  </div>
                ))}
                {Array.from({ length: 31 }, (_, i) => i + 1).map((date) => (
                  <div
                    key={date}
                    className={`py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 rounded transition-colors cursor-pointer ${
                      date === 15 || date === 28
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : ''
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

      {/* Resources Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Eğitim Destekleri
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Öğrenme sürecinizi destekleyecek ek eğitim materyalleri ve kaynaklar.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: FileText, title: "Ders Notları", description: "Kapsamlı konu özetleri." },
              { icon: Lightbulb, title: "Eğitim İpuçları", description: "Öğrenme stratejileri." },
              { icon: HelpCircle, title: "SSS", description: "Sıkça sorulan sorular." },
              { icon: Star, title: "Mezun Hikayeleri", description: "Başarılı öğrenci hikayeleri." },
            ].map((resource, index) => {
              const IconComponent = resource.icon;
              return (
                <Link
                  key={index}
                  to="/courses"
                  className="group bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-500 transform hover:-translate-y-4 hover:rotate-2 hover:scale-105 card-flip"
                  style={{ 
                    animationDelay: `${index * 150}ms`,
                    animation: 'bounceIn 0.8s ease-out forwards'
                  }}
                >
                  <div className="card-flip-inner">
                    <IconComponent className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 animate-float" />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-all duration-300">
                      {resource.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-700 transition-all duration-300">
                      {resource.description}
                    </p>
                    <div className="absolute top-2 right-2 w-3 h-3 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse"></div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;