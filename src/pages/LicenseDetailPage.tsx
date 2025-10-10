import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Clock, Users, Car, FileText, Phone, Mail } from 'lucide-react';

const LicenseDetailPage: React.FC = () => {
  const { type } = useParams<{ type: string }>();

  const licenseData: Record<string, any> = {
    'a1': {
      title: 'A1 Sınıfı Ehliyet',
      subtitle: 'Küçük Motosiklet Ehliyeti',
      description: 'Silindir hacmi 125 santimetreküpü, gücü 11 kilovatı ve gücünün ağırlığına oranı 0,1\'i geçmeyen, sepetli veya sepetsiz iki tekerlekli motosikletler ile gücü 15 kilovatı geçmeyen üç tekerlekli motosikletler.',
      minAge: '17',
      duration: '4-6 hafta',
      price: '6.000 ₺',
      image: 'https://images.pexels.com/photos/2112236/pexels-photo-2112236.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'bg-orange-500',
      vehicles: [
        'Silindir hacmi 125cc\'ye kadar motosikletler',
        'Gücü 11 kW\'ı geçmeyen motosikletler', 
        'Gücü 15 kW\'ı geçmeyen üç tekerlekli motosikletler',
        'M sınıfı araçlar (moped)'
      ],
      requirements: [
        '17 yaşından en az bir gün almış olmak',
        'En az ilkokul düzeyinde eğitim almış olmak',
        'Sağlık şartlarını taşımak',
        'Adli sicil kaydında belirtilen suçlardan hüküm giymemiş olmak'
      ],
      documents: [
        'Nüfus cüzdanı fotokopisi (2 adet)',
        'Diploma veya Öğrenim Belgesi',
        'İkametgah Belgesi',
        '2 Adet Biyometrik fotoğraf',
        'Sabıka Kaydı',
        'Sürücü Olur Sağlık Raporu',
        'Sözleşme (Sürücü kursunda doldurulacak)'
      ],
      process: [
        'Teorik eğitim (25 saat)',
        'Pratik eğitim (20 saat)',
        'Teorik sınav',
        'Direksiyon sınavı',
        'Ehliyet alma'
      ]
    },
    'a2': {
      title: 'A2 Sınıfı Ehliyet',
      subtitle: 'Orta Güç Motosiklet Ehliyeti',
      description: 'Gücü 35 kilovatı ve gücünün ağırlığına oranı 0,2\'yi geçmeyen, sepetli veya sepetsiz iki tekerlekli motosikletler ile gücü 35 kilovatı geçmeyen üç tekerlekli motosikletler.',
      minAge: '19',
      duration: '4-6 hafta',
      price: '7.000 ₺',
      image: 'https://images.pexels.com/photos/2112236/pexels-photo-2112236.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'bg-yellow-500',
      vehicles: [
        'Gücü 35 kW\'ı geçmeyen motosikletler',
        'Güç/ağırlık oranı 0,2\'yi geçmeyen motosikletler',
        'Gücü 35 kW\'ı geçmeyen üç tekerlekli motosikletler',
        'M ve A1 sınıfı araçlar'
      ],
      requirements: [
        '19 yaşından en az bir gün almış olmak',
        'En az ilkokul düzeyinde eğitim almış olmak',
        'Sağlık şartlarını taşımak',
        'Adli sicil kaydında belirtilen suçlardan hüküm giymemiş olmak'
      ],
      documents: [
        'Nüfus cüzdanı fotokopisi (2 adet)',
        'Diploma veya Öğrenim Belgesi',
        'İkametgah Belgesi',
        '2 Adet Biyometrik fotoğraf',
        'Sabıka Kaydı',
        'Sürücü Olur Sağlık Raporu',
        'Sözleşme (Sürücü kursunda doldurulacak)'
      ],
      process: [
        'Teorik eğitim (25 saat)',
        'Pratik eğitim (25 saat)',
        'Teorik sınav',
        'Direksiyon sınavı',
        'Ehliyet alma'
      ]
    },
    'a': {
      title: 'A Sınıfı Ehliyet',
      subtitle: 'Tüm Motosiklet Ehliyeti',
      description: 'Tüm motosiklet gruplarını kapsar. En üst düzey motosiklet ehliyeti.',
      minAge: '25 veya 2 yıllık A2 deneyimi',
      duration: '4-6 hafta',
      price: '8.000 ₺',
      image: 'https://images.pexels.com/photos/2112236/pexels-photo-2112236.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'bg-red-500',
      vehicles: [
        'Tüm motosiklet türleri',
        'Sınırsız güç ve hacim',
        'M, A1, A2 sınıfı araçlar'
      ],
      requirements: [
        '25 yaşından gün almış olmak veya en az 2 yıllık A2 sürücü belgesi sahibi olmak',
        'En az ilkokul düzeyinde eğitim almış olmak',
        'Sağlık şartlarını taşımak',
        'Adli sicil kaydında belirtilen suçlardan hüküm giymemiş olmak'
      ],
      documents: [
        'Nüfus cüzdanı fotokopisi (2 adet)',
        'Diploma veya Öğrenim Belgesi',
        'İkametgah Belgesi',
        '2 Adet Biyometrik fotoğraf',
        'Sabıka Kaydı',
        'Sürücü Olur Sağlık Raporu',
        'Sözleşme (Sürücü kursunda doldurulacak)'
      ],
      process: [
        'Teorik eğitim (25 saat)',
        'Pratik eğitim (25 saat)',
        'Teorik sınav',
        'Direksiyon sınavı',
        'Ehliyet alma'
      ]
    },
    'b': {
      title: 'B Sınıfı Ehliyet',
      subtitle: 'Otomobil Ehliyeti',
      description: 'Genel olarak belirli bir uzunluk ve ağırlığa kadar olan otomobilleri ve traktörleri sürebilmek için gerekli olan ehliyet türüdür.',
      minAge: '18',
      duration: '6-8 hafta',
      price: '5.000 ₺',
      image: 'https://images.pexels.com/photos/1028434/pexels-photo-1028434.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'bg-green-500',
      vehicles: [
        'Düz vites otomobil',
        'Otomatik vitesli otomobil',
        'Kamyonet (azami yüklü ağırlığı 4.250 kg)',
        'Motor bisiklet (M sınıfı)',
        'Traktör (F sınıfı)'
      ],
      requirements: [
        '18 yaşını doldurmuş olmak',
        'Aile hekimi veya uzman doktor tarafından düzenlenecek "sürücü olur" sağlık raporu',
        'Diploma veya öğrenim belgesi',
        'Sabıka kaydına ilişkin adli sicil belgesi',
        'Son 6 ay içinde çekilmiş 2 adet biyometrik fotoğraf',
        'Nüfus cüzdanı fotokopisi'
      ],
      documents: [
        'Nüfus cüzdanı fotokopisi (2 adet)',
        'Diploma veya Öğrenim Belgesi',
        'İkametgah Belgesi',
        '2 Adet Biyometrik fotoğraf',
        'Sabıka Kaydı',
        'Sürücü Olur Sağlık Raporu',
        'Sözleşme (Sürücü kursunda doldurulacak)'
      ],
      process: [
        'Teorik eğitim (30 saat)',
        'Pratik eğitim (20 saat)',
        'Teorik sınav',
        'Direksiyon sınavı',
        'Ehliyet alma'
      ]
    },
    'c': {
      title: 'C Sınıfı Ehliyet',
      subtitle: 'Kamyon Ehliyeti',
      description: 'Kamyon ve çekici (römorksuz) araçları kullanacakların alması gereken ehliyet çeşididir.',
      minAge: '22 (B ehliyeti gerekli)',
      duration: '8-10 hafta',
      price: '10.000 ₺',
      image: 'https://images.pexels.com/photos/1212407/pexels-photo-1212407.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'bg-blue-500',
      vehicles: [
        'Kamyon (römorksuz)',
        'Çekici (römorksuz)',
        'B sınıfı tüm araçlar'
      ],
      requirements: [
        'En az B grubu ehliyete sahip olmak',
        '22 yaşından en az 1 gün almış olmak',
        'Sağlık şartlarını taşımak',
        'Adli sicil kaydında belirtilen suçlardan hüküm giymemiş olmak'
      ],
      documents: [
        'Nüfus cüzdanı fotokopisi (2 adet)',
        'Sürücü belgesi fotokopisi (2 adet)',
        'Diploma veya Öğrenim Belgesi',
        'İkametgah Belgesi',
        '2 Adet Biyometrik fotoğraf',
        'Sabıka Kaydı',
        'Sürücü Olur Sağlık Raporu',
        'Sözleşme (Sürücü kursunda doldurulacak)'
      ],
      process: [
        'Teorik sınavına gerek yok (B ehliyeti varsa)',
        'Direksiyon eğitimi (30 saat)',
        'Direksiyon sınavı',
        'Ehliyet harç ve kart ücreti ödeme',
        'Ehliyet alma (yaklaşık 2 ay)'
      ]
    },
    'd': {
      title: 'D Sınıfı Ehliyet',
      subtitle: 'Otobüs/Minibüs Ehliyeti',
      description: 'Minibüs ve otobüs kullanacakların alması gereken ehliyet çeşididir.',
      minAge: '25 (B ehliyeti gerekli)',
      duration: '8-10 hafta',
      price: '12.000 ₺',
      image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'bg-purple-500',
      vehicles: [
        'Otobüs',
        'Minibüs',
        'B sınıfı tüm araçlar'
      ],
      requirements: [
        'En az B grubu ehliyete sahip olmak',
        '25 yaşından en az 1 gün almış olmak',
        'Sağlık şartlarını taşımak',
        'Adli sicil kaydında belirtilen suçlardan hüküm giymemiş olmak'
      ],
      documents: [
        'Nüfus cüzdanı fotokopisi (2 adet)',
        'Sürücü belgesi fotokopisi (2 adet)',
        'Diploma veya Öğrenim Belgesi',
        'İkametgah Belgesi',
        '2 Adet Biyometrik fotoğraf',
        'Sabıka Kaydı',
        'Sürücü Olur Sağlık Raporu',
        'Sözleşme (Sürücü kursunda doldurulacak)'
      ],
      process: [
        'Teorik sınavına gerek yok (B ehliyeti varsa)',
        'Direksiyon eğitimi (40 saat)',
        'Direksiyon sınavı',
        'Ehliyet harç ve kart ücreti ödeme',
        'Ehliyet alma (yaklaşık 2 ay)'
      ]
    },
    'd1': {
      title: 'D1 Sınıfı Ehliyet',
      subtitle: 'Minibüs Ehliyeti',
      description: '2016 yılından sonra ortaya çıkan yeni bir ehliyet sınıfıdır. Minibüs kullanabilmek için gereklidir.',
      minAge: '22 (B ehliyeti gerekli)',
      duration: '6-8 hafta',
      price: '8.500 ₺',
      image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'bg-teal-500',
      vehicles: [
        'Minibüs (en az 10 koltuklu)',
        'B sınıfı tüm araçlar'
      ],
      requirements: [
        'Öncelikle B sınıfı ehliyet sahibi olmak',
        '21 yaşını doldurmuş, 22 yaşından gün almış olmak',
        'Sağlık şartlarını taşımak',
        'Adli sicil kaydında belirtilen suçlardan hüküm giymemiş olmak'
      ],
      documents: [
        'Nüfus cüzdanı fotokopisi (2 adet)',
        'Sürücü belgesi fotokopisi (2 adet)',
        'Diploma veya Öğrenim Belgesi',
        'İkametgah Belgesi',
        '2 Adet Biyometrik fotoğraf',
        'Sabıka Kaydı',
        'Sürücü Olur Sağlık Raporu',
        'Sözleşme (Sürücü kursunda doldurulacak)'
      ],
      process: [
        'Teorik sınavına gerek yok (B ehliyeti varsa)',
        'Direksiyon eğitimi (25 saat)',
        'Direksiyon sınavı (minibüs ile)',
        'Ehliyet harç ve kart ücreti ödeme',
        'Ehliyet alma'
      ],
      note: '24 yaşını dolduranlar D sınıfı alabildikleri için, D1 sınıfı arada kalmış bir ehliyet sınıfı olarak tanımlanabilir. Sadece B sınıfı ehliyetini 2016 yılından sonra almış olan, 21 yaşından büyük ancak 24 yaşından küçükler için alınması mantıklıdır.'
    },
    'g': {
      title: 'G Sınıfı Ehliyet',
      subtitle: 'İş Makinaları Ehliyeti',
      description: 'İş makinesi türündeki motorlu araçları kullanacaklara verilir.',
      minAge: '19',
      duration: '4-6 hafta',
      price: '7.500 ₺',
      image: 'https://images.pexels.com/photos/2977304/pexels-photo-2977304.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'bg-slate-600',
      vehicles: [
        'İş makinaları',
        'Ekskavatör',
        'Buldozer',
        'Forklift',
        'M sınıfı araçlar'
      ],
      requirements: [
        '19 yaşından 1 gün almış olmak',
        'En az ilkokul düzeyinde eğitim almış olmak',
        'Sağlık şartlarını taşımak',
        'Adli sicil kaydında belirtilen suçlardan hüküm giymemiş olmak',
        'Önceden aynı sınıf sürücü belgesinin bulunmaması'
      ],
      documents: [
        'Nüfus cüzdanı fotokopisi (2 adet)',
        'Varsa sürücü belgesi fotokopisi (2 adet)',
        'Diploma veya Öğrenim Belgesi',
        'İkametgah Belgesi',
        '2 Adet Biyometrik fotoğraf',
        'Sabıka Kaydı',
        'Sürücü Olur Sağlık Raporu',
        'Sözleşme (Sürücü kursunda doldurulacak)'
      ],
      process: [
        'İş makinası kursu (operatör belgesi alma)',
        'Teorik eğitim (trafik ve ilkyardım)',
        'Uygulama eğitimi',
        'Yazılı sınav (70+ puan)',
        'Uygulama sınavı (70+ puan)',
        'G sınıfı sertifika alma'
      ],
      note: 'Önce kullanacağı makina için iş makinası kursundan makineye ait operatör belgesi alacak, G sınıfı için başvurduğunda bu belge ile sadece trafik ve ilkyardımdan sınava girecektir.'
    },
    'be': {
      title: 'BE Sınıfı Ehliyet',
      subtitle: 'Römorklu Otomobil Ehliyeti',
      description: 'B sınıfı araçlara ek olarak römork takılı araçları kullanabilmek için gerekli ehliyet.',
      minAge: '18 (B ehliyeti gerekli)',
      duration: '2-3 hafta',
      price: '3.000 ₺',
      image: 'https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'bg-teal-500',
      vehicles: [
        'Römorklu otomobil',
        'B sınıfı tüm araçlar',
        'Karavan',
        'Tekne römorku'
      ],
      requirements: [
        'B sınıfı ehliyet sahibi olmak',
        '18 yaşını doldurmuş olmak',
        'Sağlık şartlarını taşımak'
      ],
      documents: [
        'B sınıfı ehliyet fotokopisi',
        'Nüfus cüzdanı fotokopisi',
        'Sağlık raporu',
        'Fotoğraf'
      ],
      process: [
        'Kursa kayıt',
        'Pratik eğitim',
        'Direksiyon sınavı',
        'Ehliyet alma'
      ]
    },
    'ce': {
      title: 'CE Sınıfı Ehliyet',
      subtitle: 'Römorklu Kamyon Ehliyeti',
      description: 'C sınıfı araçlara ek olarak römork takılı kamyon ve çekici kullanabilmek için gerekli ehliyet.',
      minAge: '22 (C ehliyeti gerekli)',
      duration: '4-6 hafta',
      price: '6.000 ₺',
      image: 'https://images.pexels.com/photos/1212407/pexels-photo-1212407.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'bg-indigo-500',
      vehicles: [
        'Römorklu kamyon',
        'Römorklu çekici',
        'TIR',
        'C sınıfı tüm araçlar'
      ],
      requirements: [
        'C sınıfı ehliyet sahibi olmak',
        '22 yaşını doldurmuş olmak',
        'Sağlık şartlarını taşımak'
      ],
      documents: [
        'C sınıfı ehliyet fotokopisi',
        'Nüfus cüzdanı fotokopisi',
        'Sağlık raporu',
        'Fotoğraf'
      ],
      process: [
        'Kursa kayıt',
        'Pratik eğitim',
        'Direksiyon sınavı',
        'Ehliyet alma'
      ]
    },
    'de': {
      title: 'DE Sınıfı Ehliyet',
      subtitle: 'Römorklu Otobüs Ehliyeti',
      description: 'D sınıfı araçlara ek olarak römork takılı otobüs kullanabilmek için gerekli ehliyet.',
      minAge: '25 (D ehliyeti gerekli)',
      duration: '4-6 hafta',
      price: '6.000 ₺',
      image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'bg-pink-500',
      vehicles: [
        'Römorklu otobüs',
        'Uzun otobüs',
        'D sınıfı tüm araçlar'
      ],
      requirements: [
        'D sınıfı ehliyet sahibi olmak',
        '25 yaşını doldurmuş olmak',
        'Sağlık şartlarını taşımak'
      ],
      documents: [
        'D sınıfı ehliyet fotokopisi',
        'Nüfus cüzdanı fotokopisi',
        'Sağlık raporu',
        'Fotoğraf'
      ],
      process: [
        'Kursa kayıt',
        'Pratik eğitim',
        'Direksiyon sınavı',
        'Ehliyet alma'
      ]
    },
    'f': {
      title: 'F Sınıfı Ehliyet',
      subtitle: 'Traktör Ehliyeti',
      description: 'Tarım ve orman işlerinde kullanılan traktörleri kullanabilmek için gerekli ehliyet.',
      minAge: '18',
      duration: '3-4 hafta',
      price: '4.000 ₺',
      image: 'https://images.pexels.com/photos/169523/pexels-photo-169523.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'bg-amber-600',
      vehicles: [
        'Traktör',
        'Tarım makinaları',
        'Orman makinaları'
      ],
      requirements: [
        '18 yaşını doldurmuş olmak',
        'En az ilkokul mezunu olmak',
        'Sağlık şartlarını taşımak'
      ],
      documents: [
        'Nüfus cüzdanı fotokopisi',
        'Öğrenim belgesi',
        'Sağlık raporu',
        'Fotoğraf'
      ],
      process: [
        'Teorik eğitim',
        'Pratik eğitim',
        'Teorik sınav',
        'Direksiyon sınavı',
        'Ehliyet alma'
      ]
    }
  };

  const license = licenseData[type?.toLowerCase() || ''];

  if (!license) {
    return (
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Ehliyet Bulunamadı
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Aradığınız ehliyet türü bulunamadı.
          </p>
          <Link
            to="/license-types"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-lg transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Ehliyet Türlerine Dön
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/license-types"
            className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Ehliyet Türlerine Dön
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className={`inline-block ${license.color} text-white px-4 py-2 rounded-full text-sm font-bold mb-4`}>
                {license.title}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                {license.subtitle}
              </h1>
              <p className="text-xl opacity-90 mb-8">
                {license.description}
              </p>
              <div className="flex flex-wrap gap-6 text-lg">
                <div className="flex items-center">
                  <Clock className="h-6 w-6 mr-2 text-blue-200" />
                  <span>Süre: {license.duration}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-6 w-6 mr-2 text-blue-200" />
                  <span>Yaş: {license.minAge}</span>
                </div>
                <div className="flex items-center font-bold">
                  <span className="text-2xl">{license.price}</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={license.image}
                alt={license.title}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Kullanılabilir Araçlar */}
        <section className="py-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Kullanılabilir Araçlar
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {license.vehicles.map((vehicle: string, index: number) => (
              <div
                key={index}
                className="flex items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <Car className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-4 flex-shrink-0" />
                <span className="text-gray-900 dark:text-white font-medium">{vehicle}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Başvuru Şartları */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Başvuru Şartları
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                Gerekli Şartlar
              </h3>
              <div className="space-y-4">
                {license.requirements.map((req: string, index: number) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full mr-4 flex-shrink-0">
                      <div className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full"></div>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{req}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <FileText className="h-6 w-6 text-blue-500 mr-3" />
                Gerekli Belgeler
              </h3>
              <div className="space-y-4">
                {license.documents.map((doc: string, index: number) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full mr-4 flex-shrink-0">
                      <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{doc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Eğitim Süreci */}
        <section className="py-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Eğitim Süreci
          </h2>
          <div className="grid md:grid-cols-5 gap-8">
            {license.process.map((step: string, index: number) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {step}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* Özel Not (varsa) */}
        {license.note && (
          <section className="py-12">
            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                ⚠️ Önemli Bilgi
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {license.note}
              </p>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">
              {license.title} Almaya Hazır mısınız?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Uzman eğitmenlerimiz ve modern araç filomuzla güvenli bir şekilde {license.subtitle.toLowerCase()} alın.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="flex items-center text-lg">
                <Phone className="h-6 w-6 mr-2" />
                <span>(312) 123-4567</span>
              </div>
              <div className="flex items-center text-lg">
                <Mail className="h-6 w-6 mr-2" />
                <span>info@surucu-akademi.com</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8">
              <button className="bg-white text-blue-600 font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors transform hover:scale-105">
                Şimdi Arayın
              </button>
              <button className="bg-blue-800 text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-900 transition-colors transform hover:scale-105">
                Bilgi Alın
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LicenseDetailPage;
