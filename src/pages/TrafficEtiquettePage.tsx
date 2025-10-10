import React from 'react';

const TrafficEtiquettePage: React.FC = () => {
  const videos = [
    { title: "Adap ve Trafik", url: "https://www.youtube.com/watch?v=gh67VNEYeNI" },
    { title: "Trafikte Temel Değerler", url: "https://www.youtube.com/watch?v=FT-8UKCQobc" },
    { title: "Trafikte Empati ve İletişim", url: "https://www.youtube.com/watch?v=avot-YL4LtM" },
    { title: "Trafikte Hak İhlalleri", url: "https://www.youtube.com/watch?v=Qhhr62S9frk" },
    { title: "Trafikte Diğerlerinin Sürücü Davranışlarına Etkisi", url: "https://www.youtube.com/watch?v=9X0OPhCxG7I" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-600 to-yellow-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            Trafik Adabı
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Trafikte görgü kuralları ve etik davranışlar hakkında bilgilendirici videolar
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
                    <div className="bg-yellow-100 p-3 rounded-full group-hover:bg-yellow-200 transition-colors">
                      <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-yellow-600 transition-colors">
                      {video.title}
                    </h3>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Video Ders</span>
                    <span className="text-yellow-600 group-hover:translate-x-2 transition-transform inline-flex items-center">
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

export default TrafficEtiquettePage;
