import React from 'react';

const FirstAidPage: React.FC = () => {
  const videos = [
    { title: "İlkyardımın Tanımı ve Önemi", url: "https://www.youtube.com/watch?v=fa2mC0FsKVA" },
    { title: "İnsan Vücudu", url: "https://www.youtube.com/watch?v=AwWIsWCig0k" },
    { title: "Temel Yaşam Desteği, Solunum ve Kalp Durması", url: "https://www.youtube.com/watch?v=pEksX32cjDQ" },
    { title: "Suni Solunum Uygulamaları", url: "https://www.youtube.com/watch?v=_QWHrhiOHY4" },
    { title: "Kanamalar ve Yaralanmalar", url: "https://www.youtube.com/watch?v=DB72wpWMEqk" },
    { title: "Şok, Bayılma ve Komada İlkyardım", url: "https://www.youtube.com/watch?v=bZw9cqpUh7M" },
    { title: "Yara ve Yara Çeşitleri", url: "https://www.youtube.com/watch?v=ozexMSiBHjU" },
    { title: "Kırık, Çıkık ve Burkulmalar", url: "https://www.youtube.com/watch?v=fVAMUhw6ugw" },
    { title: "Bilinç Bozukluklarında İlkyardım", url: "https://www.youtube.com/watch?v=cB01-h5DIfE" },
    { title: "Yaralının Taşınmaya Hazırlanması ve Taşıma Şekilleri", url: "https://www.youtube.com/watch?v=W3YZfmFoCHk" },
    { title: "Yaralıları Taşıma Yöntemleri", url: "https://www.youtube.com/watch?v=qd317JFKz6M" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            İlk Yardım Bilgisi
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Hayat kurtarıcı ilk yardım teknikleri ve uygulamaları hakkında kapsamlı eğitim videoları
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
                    <div className="bg-green-100 p-3 rounded-full group-hover:bg-green-200 transition-colors">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                      {video.title}
                    </h3>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Video Ders</span>
                    <span className="text-green-600 group-hover:translate-x-2 transition-transform inline-flex items-center">
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

export default FirstAidPage;
