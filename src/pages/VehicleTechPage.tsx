import React from 'react';

const VehicleTechPage: React.FC = () => {
  const videos = [
    { title: "Araç Tekniği", url: "https://www.youtube.com/watch?v=6MsuxFbkIIE" },
    { title: "Motorun ve Aracın Sistemleri", url: "https://www.youtube.com/watch?v=8cbLcU5KfsQ" },
    { title: "Araca Binmeden Önce Yapılması Gereken Kontroller", url: "https://www.youtube.com/watch?v=dEmUOPU63e4" },
    { title: "Aracın Çalıştırılması", url: "https://www.youtube.com/watch?v=Kbe9b_d0CUU" },
    { title: "Gösterge Sistemi Görevi", url: "https://www.youtube.com/watch?v=3DP1qtGIbRI" },
    { title: "Aydınlatma, İkaz Sistemi, Aktif ve Pasif Güvenlik Sistemleri", url: "https://www.youtube.com/watch?v=SB4TgMFuBig" },
    { title: "Aktif ve Pasif Güvenlik Sistemleri", url: "https://www.youtube.com/watch?v=VUmnWZr8T9M" },
    { title: "Rodaj ve Motorun Bakımları", url: "https://www.youtube.com/watch?v=CRNqSPwkVXM" },
    { title: "Lastikler", url: "https://www.youtube.com/watch?v=LMiLeiGqQ1E" },
    { title: "Aracın Durdurulması ve Kontrol Edilmesi Gereken Haller", url: "https://www.youtube.com/watch?v=1QmoLfLUFLk" },
    { title: "Yakıt Ekonomisi, Tasarrufu", url: "https://www.youtube.com/watch?v=iuAx3QVAvTg" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            Araç Tekniği ve Motor Bilgisi
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Araç sistemleri, bakım ve teknik bilgiler hakkında detaylı eğitim videoları
          </p>
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <a
                key={index}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
              >
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-purple-100 p-3 rounded-full group-hover:bg-purple-200 transition-colors">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                      {video.title}
                    </h3>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Video Ders</span>
                    <span className="text-purple-600 group-hover:translate-x-2 transition-transform inline-flex items-center">
                      İzle
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default VehicleTechPage;
