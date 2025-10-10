import React from 'react';
import { Clock, Users, Award, BookOpen, Car, Shield } from 'lucide-react';

const CoursesPage: React.FC = () => {
  const courses = [
    {
      title: "Temel Sürücü Kursu (B Sınıfı)",
      description: "Otomobil kullanmayı öğrenmek isteyenler için kapsamlı eğitim programı.",
      duration: "6-8 hafta",
      students: "2,500+",
      rating: "4.9",
      features: [
        "30 saat teorik eğitim",
        "20 saat pratik sürüş",
        "Online deneme sınavları", 
        "Bireysel eğitmen desteği"
      ],
      image: "https://images.pexels.com/photos/1028434/pexels-photo-1028434.jpeg?auto=compress&cs=tinysrgb&w=600",
      level: "Başlangıç",
      price: "5.000 ₺"
    },
    {
      title: "Motosiklet Sürücü Kursu (A Sınıfı)",
      description: "Motosiklet sürmeyi güvenli bir şekilde öğrenmek için profesyonel eğitim.",
      duration: "4-6 hafta", 
      students: "850+",
      rating: "4.8",
      features: [
        "25 saat teorik eğitim",
        "25 saat pratik sürüş",
        "Güvenlik ekipmanları dahil",
        "Deneyimli motosiklet eğitmenleri"
      ],
      image: "https://images.pexels.com/photos/2112236/pexels-photo-2112236.jpeg?auto=compress&cs=tinysrgb&w=600",
      level: "Başlangıç-Orta",
      price: "7.500 ₺"
    },
    {
      title: "Ticari Araç Sürücü Kursu (C Sınıfı)", 
      description: "Kamyon ve ticari araç kullanımı için profesyonel eğitim programı.",
      duration: "8-10 hafta",
      students: "650+",
      rating: "4.7",
      features: [
        "40 saat teorik eğitim", 
        "30 saat pratik sürüş",
        "Yük taşıma kuralları",
        "İş güvenliği eğitimi"
      ],
      image: "https://images.pexels.com/photos/1212407/pexels-photo-1212407.jpeg?auto=compress&cs=tinysrgb&w=600",
      level: "İleri",
      price: "10.000 ₺"
    },
    {
      title: "Savunma Sürüşü Kursu",
      description: "Güvenli sürüş tekniklerini öğrenmek ve risk yönetimi becerileri geliştirmek için.",
      duration: "2-3 hafta",
      students: "1,200+", 
      rating: "4.9",
      features: [
        "15 saat teorik eğitim",
        "10 saat pratik eğitim", 
        "Acil durum simülasyonları",
        "Sertifika programı"
      ],
      image: "https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg?auto=compress&cs=tinysrgb&w=600",
      level: "Tüm Seviyeler",
      price: "3.500 ₺"
    }
  ];

  const features = [
    {
      icon: Car,
      title: "Modern Araç Filosu",
      description: "En son güvenlik teknolojileri ile donatılmış araçlarımızla eğitim alın."
    },
    {
      icon: Users,
      title: "Uzman Eğitmenler", 
      description: "Sertifikalı ve deneyimli eğitmenlerimizden profesyonel eğitim alın."
    },
    {
      icon: Shield,
      title: "Güvenlik Önceliği",
      description: "Tüm eğitimlerimizde güvenlik en yüksek öncelik olarak ele alınır."
    },
    {
      icon: Award,
      title: "Sertifikalı Eğitim",
      description: "Tüm kurslarımız resmi otoriteler tarafından onaylanmış programlardır."
    }
  ];

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 px-4">
            Sürücü Kursları
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto px-4 leading-relaxed">
            Profesyonel eğitmenlerimiz ve modern araç filomuz ile güvenli sürüş öğrenin. 
            Her seviyeye uygun kurslarımız ile hayalinizdeki ehliyete sahip olun.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Neden Sürücü Akademi'yi Seçmelisiniz?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Kaliteli eğitim ve güvenilir hizmet anlayışımızla öne çıkıyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="text-center p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* Video Links Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 px-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Videolu Konu Anlatımları
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Uzman eğitmenlerimizin hazırladığı detaylı konu anlatım videoları ile öğrenin.
            </p>
          </div>

          {/* Trafik ve Çevre Bilgisi */}
          <div className="mb-8 md:mb-12">
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-6 md:mb-8 text-center bg-blue-50 py-3 md:py-4 rounded-lg mx-4">
              Trafik ve Çevre Bilgisi
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              {[
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
                { title: "Dönüşler Doğrultu Değiştirme", url: "https://www.youtube.com/watch?v=wlTbs54_aog" },
                { title: "Araçların Manevralarına Dair Kurallar", url: "https://www.youtube.com/watch?v=UQnthF42WD0" },
                { title: "Sürücülerinin Geri Gitme, Geri Dönüş Manevraları", url: "https://www.youtube.com/watch?v=UHm91yUMA_s" },
                { title: "Kavşaklarda Geçiş Hakkı", url: "https://www.youtube.com/watch?v=M2K7zw6db78" },
                { title: "Geçiş Üstünlüğüne Sahip Araçlar ve Sürücülerinin Uyacağı Kurallar", url: "https://www.youtube.com/watch?v=Mhw0ueKFlAs" },
                { title: "Gelen Trafikle Karşılaşmada Geçiş Kolaylığı Sağlama Kuralları", url: "https://www.youtube.com/watch?v=cWIQjtS8DuI" },
                { title: "Durma, Duraklama ve Park Etme Kuralları", url: "https://www.youtube.com/watch?v=NyZhArQNW5w" },
                { title: "Araçların Işıklandırılması ve Kullanılması", url: "https://www.youtube.com/watch?v=m0eGvh4ntJ4" },
                { title: "Karayolunda Bozulan Araçların İşaretlenmesi ve Çekilmesi", url: "https://www.youtube.com/watch?v=l-_NJ-PxCRY" },
                { title: "Tedbirsiz ve Saygısız Araç Sürme", url: "https://www.youtube.com/watch?v=M6Hzmr2e0ao" },
                { title: "Ses, Müzik, Görüntü ve Haberleşme Cihazları", url: "https://www.youtube.com/watch?v=n17L8uO6A_o" },
                { title: "Okul Taşıtları", url: "https://www.youtube.com/watch?v=krSawJoEWCo" },
                { title: "Araçların Boyutları, Ölçü ve Ağırlıkları İle Yüklenmesi Esasları", url: "https://www.youtube.com/watch?v=gbCUZFdTdgo" },
                { title: "Otoyol Kuralları", url: "https://www.youtube.com/watch?v=DR1c2tatwTc" },
                { title: "Bisiklet, Motorlu Bisiklet, Motosiklet ve Sürücüleri İle İlgili Kurallar", url: "https://www.youtube.com/watch?v=wGtZ_XXPA3c" },
                { title: "Sürücülerin ve Yolcuların Koruyucu Tertibat Kullanma Mecburiyeti", url: "https://www.youtube.com/watch?v=tmxqNViWvME" },
                { title: "Yayalar, Hayvan Sürücüleri ve Yarışlar Hakkında Kurallar", url: "https://www.youtube.com/watch?v=peUpOJk94bI" },
                { title: "Çocuk, Engelli, Hasta ve Sakat Taşıtları", url: "https://www.youtube.com/watch?v=sQyniG8nmoA" },
                { title: "Araçların Tescil İşlemleri, Motorlu Araçlara Ait Şartlar ile Muayeneleri", url: "https://www.youtube.com/watch?v=9n4KVhxi0Js" },
                { title: "Sürücü Belgeleri, Müracaat Esasları ve Verilme Şartları", url: "https://www.youtube.com/watch?v=RUnAnKdDyPk" },
                { title: "Trafik Kazaları", url: "https://www.youtube.com/watch?v=EZOZ2W_hIlQ" },
                { title: "Trafik Kazalarında Asli Kusur Sayılan Haller", url: "https://www.youtube.com/watch?v=3DD0Z5tGA3E" },
                { title: "Hukuki Sorumluluk ve Sigorta", url: "https://www.youtube.com/watch?v=akkp-HL4HQE" },
                { title: "Araçlarda Bulundurulması Gereken Teçhizat ve Malzemeler", url: "https://www.youtube.com/watch?v=YuRmFp6lsXo" },
                { title: "Çevre Bilgisi", url: "https://www.youtube.com/watch?v=F-2eO_YK5CE" },
                { title: "Harita Bilgisi", url: "https://www.youtube.com/watch?v=P4f1hnyJ28A" }
              ].map((video, index) => (
                <a
                key={index}
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 md:p-4 bg-white rounded-lg shadow-md hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 hover:rotate-1 border border-gray-200 hover:border-red-300 card-flip group"
                >
                  <div className="card-flip-inner">
                    <div className="flex items-start space-x-3">
                      <div className="bg-red-100 p-2 rounded-full flex-shrink-0 group-hover:bg-red-200 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                        <svg className="w-4 h-4 text-red-600 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xs md:text-sm font-semibold text-gray-900 mb-1 line-clamp-2 group-hover:text-red-600 transition-colors">
                          {video.title}
                        </h4>
                        <p className="text-xs text-gray-500 group-hover:text-red-500 transition-colors">Trafik ve Çevre Bilgisi</p>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                        <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
                  </div>
                </div>

          {/* İlk Yardım */}
          <div className="mb-8 md:mb-12">
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-6 md:mb-8 text-center bg-green-50 py-3 md:py-4 rounded-lg mx-4">
              İlk Yardım Bilgisi
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              {[
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
              ].map((video, index) => (
                <a
                  key={index}
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 md:p-4 bg-white rounded-lg shadow-md hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 hover:rotate-1 border border-gray-200 hover:border-red-300 card-flip group"
                >
                  <div className="card-flip-inner">
                    <div className="flex items-start space-x-3">
                      <div className="bg-green-100 p-2 rounded-full flex-shrink-0 group-hover:bg-green-200 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                        <svg className="w-4 h-4 text-green-600 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-2 group-hover:text-green-600 transition-colors">
                          {video.title}
                        </h4>
                        <p className="text-xs text-gray-500 group-hover:text-green-500 transition-colors">İlk Yardım Bilgisi</p>
                    </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                        <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
                    </div>
                    </div>
                  </div>
                </a>
              ))}
                    </div>
                  </div>

          {/* Araç Tekniği */}
          <div className="mb-12">
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-6 md:mb-8 text-center bg-purple-50 py-3 md:py-4 rounded-lg mx-4">
              Araç Tekniği ve Motor Bilgisi
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              {[
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
              ].map((video, index) => (
                <a
                  key={index}
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 md:p-4 bg-white rounded-lg shadow-md hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 hover:rotate-1 border border-gray-200 hover:border-red-300 card-flip group"
                >
                  <div className="card-flip-inner">
                    <div className="flex items-start space-x-3">
                      <div className="bg-purple-100 p-2 rounded-full flex-shrink-0 group-hover:bg-purple-200 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                        <svg className="w-4 h-4 text-purple-600 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-2 group-hover:text-purple-600 transition-colors">
                          {video.title}
                        </h4>
                        <p className="text-xs text-gray-500 group-hover:text-purple-500 transition-colors">Araç Tekniği</p>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                        <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
                  </div>

          {/* Trafik Adabı */}
          <div className="mb-8 md:mb-12">
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-6 md:mb-8 text-center bg-yellow-50 py-3 md:py-4 rounded-lg mx-4">
              Trafik Adabı
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              {[
                { title: "Adap ve Trafik", url: "https://www.youtube.com/watch?v=gh67VNEYeNI" },
                { title: "Trafikte Temel Değerler", url: "https://www.youtube.com/watch?v=FT-8UKCQobc" },
                { title: "Trafikte Empati ve İletişim", url: "https://www.youtube.com/watch?v=avot-YL4LtM" },
                { title: "Trafikte Hak İhlalleri", url: "https://www.youtube.com/watch?v=Qhhr62S9frk" },
                { title: "Trafikte Diğerlerinin Sürücü Davranışlarına Etkisi", url: "https://www.youtube.com/watch?v=9X0OPhCxG7I" }
              ].map((video, index) => (
                <a
                  key={index}
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 md:p-4 bg-white rounded-lg shadow-md hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 hover:rotate-1 border border-gray-200 hover:border-red-300 card-flip group"
                >
                  <div className="card-flip-inner">
                    <div className="flex items-start space-x-3">
                      <div className="bg-yellow-100 p-2 rounded-full flex-shrink-0 group-hover:bg-yellow-200 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                        <svg className="w-4 h-4 text-yellow-600 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-2 group-hover:text-yellow-600 transition-colors">
                          {video.title}
                        </h4>
                        <p className="text-xs text-gray-500 group-hover:text-yellow-500 transition-colors">Trafik Adabı</p>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                        <div className="w-2 h-2 bg-yellow-600 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
                </a>
            ))}
          </div>
          </div>

          {/* Direksiyon Dersi */}
          <div className="mb-8 md:mb-12">
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-6 md:mb-8 text-center bg-orange-50 py-3 md:py-4 rounded-lg mx-4">
              Direksiyon Dersi
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              {[
                { title: "Acemi Sürücüler İçin Trafikte Bir Gün! / Sollama, Şerit İzleme", url: "https://www.youtube.com/watch?v=m6pjNPK0QhA" },
                { title: "Detaylı Araç Kaldırma Teknikleri / Artık Stop Ettirmek Yok!", url: "https://www.youtube.com/watch?v=RWdcS5-DOxs" },
                { title: "Rampada Araç Nasıl Kaldırılır? - Debriyaj ve Gaz İlişkisi", url: "https://www.youtube.com/watch?v=GpzNNS3BdYk" },
                { title: "Direksiyon Sınavı Nasıl Yapılır? - Sınavı Kazanma Garantili", url: "https://www.youtube.com/watch?v=CW2luTyU07I" },
                { title: "Ehliyet Alacaklar için Direksiyon Sınavı", url: "https://www.youtube.com/watch?v=9afxHI9KGCw" },
                { title: "Araç Tanıma (İlk Adım) - Araç Nasıl Kaldırılır?", url: "https://www.youtube.com/watch?v=PwYqgd5q6AU" }
              ].map((video, index) => (
                <a
                  key={index}
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 md:p-4 bg-white rounded-lg shadow-md hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 hover:rotate-1 border border-gray-200 hover:border-red-300 card-flip group"
                >
                  <div className="card-flip-inner">
                    <div className="flex items-start space-x-3">
                      <div className="bg-orange-100 p-2 rounded-full flex-shrink-0 group-hover:bg-orange-200 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                        <svg className="w-4 h-4 text-orange-600 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-2 group-hover:text-orange-600 transition-colors">
                          {video.title}
                        </h4>
                        <p className="text-xs text-gray-500 group-hover:text-orange-500 transition-colors">Direksiyon Dersi</p>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                        <div className="w-2 h-2 bg-orange-600 rounded-full animate-pulse"></div>
                      </div>
                </div>
              </div>
                </a>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Hayalinizdeki Ehliyete Ulaşın
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Profesyonel eğitmenlerimiz ve kaliteli hizmet anlayışımızla 
            güvenli bir sürücü olmaya hazır mısınız?
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-blue-600 font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors transform hover:scale-105">
              Ücretsiz Danışmanlık
            </button>
            <button className="bg-blue-800 text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-900 transition-colors transform hover:scale-105">
              Kursa Kaydol
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;