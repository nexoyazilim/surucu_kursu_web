import React from 'react';

const TrafficKnowledgePage: React.FC = () => {
  const videos = [
    { title: "Davranış Psikolojisi ve Genel Kavramlar", url: "https://www.youtube.com/watch?v=DUu76nTKiM0" },
    { title: "Trafik Psikolojisi", url: "https://www.youtube.com/watch?v=7iawDZqjmxQ" },
    { title: "Trafik İle İlgili Kurullar, Kuruluşlar ve Komisyonlar", url: "https://www.youtube.com/watch?v=XzZV2vYwZvk" },
    { title: "Trafik İşaretleri", url: "https://www.youtube.com/watch?v=YpEMeGeF0qs" },
    { title: "Karayolu Yapısının ve Trafik İşaretlerinin Korunması", url: "https://www.youtube.com/watch?v=L2qbovYQH9o" },
    { title: "Trafik, Karayolu ve Araçlarla İlgili Tanımlar", url: "https://www.youtube.com/watch?v=ityJzK5mhl8" },
    { title: "Işıklı Trafik İşaretleri", url: "https://www.youtube.com/watch?v=TWetTNR2UoM" },
    { title: "Yol Çizgileri", url: "https://www.youtube.com/watch?v=9sgnziBt4jU" },
    { title: "Trafik İşaret Levhaları", url: "https://www.youtube.com/watch?v=SkzH1ZrYlnA" },
    { title: "Hız Kuralları", url: "https://www.youtube.com/watch?v=vw7TBq8qRxw" },
    { title: "Araç Kullanma Süreleri", url: "https://www.youtube.com/watch?v=eFzaSxPbXvA" },
    { title: "Araç Sürme Yasağı", url: "https://www.youtube.com/watch?v=R4QLdJm6SHs" },
    { title: "Takip Mesafesi", url: "https://www.youtube.com/watch?v=IyIjWuxnJck" },
    { title: "Geçme Kuralları / Sollama Kuralları", url: "https://www.youtube.com/watch?v=ZQsCOMv-uJ8" },
    { title: "Dönüşler Doğrultu Değiştirme", url: "https://www.youtube.com/watch?v=wlTbs54_aog" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            Trafik ve Çevre Bilgisi
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Trafik kuralları, işaretler ve çevre bilgisi hakkında detaylı video derslerimiz
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
                    <div className="bg-blue-100 p-3 rounded-full group-hover:bg-blue-200 transition-colors">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {video.title}
                    </h3>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Video Ders</span>
                    <span className="text-blue-600 group-hover:translate-x-2 transition-transform inline-flex items-center">
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

export default TrafficKnowledgePage;
