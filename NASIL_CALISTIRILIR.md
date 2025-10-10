# Sürücü Akademi Web Sitesi - Kurulum ve Çalıştırma Kılavuzu

Bu doküman, Sürücü Akademi web sitesini yerel ortamınızda nasıl kurulup çalıştıracağınızı açıklamaktadır.

## 📋 Gereksinimler

Başlamadan önce sisteminizde aşağıdaki yazılımların yüklü olduğundan emin olun:

- **Node.js** (v18 veya üzeri) - [nodejs.org](https://nodejs.org/) adresinden indirebilirsiniz
- **npm** (Node.js ile birlikte gelir) veya **yarn**
- **Git** (opsiyonel, projeyi klonlamak için)

## 🚀 Kurulum Adımları

### 1. Projeyi İndirin
Proje dosyalarını bilgisayarınıza indirin veya klonlayın.

### 2. Proje Dizinine Gidin
Terminal/Komut İstemi'ni açın ve proje klasörüne gidin:
```bash
cd "sürücü kursu"
```

### 3. Bağımlılıkları Yükleyin
Aşağıdaki komutu çalıştırarak gerekli paketleri yükleyin:
```bash
npm install
```

Bu komut `package.json` dosyasında belirtilen tüm bağımlılıkları otomatik olarak indirecektir.

### 4. Geliştirme Sunucusunu Başlatın
Kurulum tamamlandıktan sonra, aşağıdaki komut ile geliştirme sunucusunu başlatın:
```bash
npm run dev
```

### 5. Web Sitesini Görüntüleyin
Komut çalıştıktan sonra terminalde bir adres gösterilecektir (genellikle `http://localhost:5173`).
Bu adresi web tarayıcınızda açarak web sitesini görüntüleyebilirsiniz.

## 🛠️ Mevcut Komutlar

Projede kullanabileceğiniz komutlar:

- `npm run dev` - Geliştirme sunucusunu başlatır
- `npm run build` - Projeyi production için derler
- `npm run preview` - Build edilmiş projeyi önizler
- `npm run lint` - Kod kalitesi kontrolü yapar

## 📁 Proje Yapısı

```
sürücü kursu/
├── src/
│   ├── components/     # React bileşenleri
│   │   ├── Header.tsx  # Site başlığı
│   │   └── Footer.tsx  # Site alt kısmı
│   ├── pages/          # Sayfa bileşenleri
│   │   ├── HomePage.tsx      # Ana sayfa
│   │   ├── AboutPage.tsx     # Hakkımızda
│   │   ├── ContactPage.tsx   # İletişim
│   │   ├── CoursesPage.tsx   # Kurslar
│   │   ├── LicenseTypesPage.tsx # Ehliyet Tipleri
│   │   └── PricingPage.tsx   # Fiyatlar
│   ├── contexts/       # React context'leri
│   ├── App.tsx         # Ana uygulama bileşeni
│   └── main.tsx        # Giriş noktası
├── public/             # Statik dosyalar
├── package.json        # Proje bağımlılıkları
└── index.html          # Ana HTML dosyası
```

## 🎨 Özellikler

- **Modern Tasarım**: Tailwind CSS ile responsive tasarım
- **Dark/Light Mode**: Tema değiştirme özelliği
- **Türkçe İçerik**: Tamamen Türkçe arayüz
- **Mobil Uyumlu**: Tüm cihazlarda mükemmel görünüm
- **Hızlı**: Vite ile optimize edilmiş performans
- **Ehliyet Detay Sayfaları**: Her ehliyet türü için ayrıntılı bilgi sayfaları
- **Dinamik İçerik**: URL tabanlı ehliyet detay sistemi

## 🔧 Özelleştirme

### Renkleri Değiştirmek
- `tailwind.config.js` dosyasından renk paletini değiştirebilirsiniz
- CSS dosyalarını düzenleyerek özel stiller ekleyebilirsiniz

### İçeriği Değiştirmek
- `src/pages/` klasöründeki dosyaları düzenleyerek sayfa içeriklerini değiştirebilirsiniz
- `src/components/` klasöründeki Header ve Footer bileşenlerini güncelleyebilirsiniz

### İletişim Bilgileri
- Telefon numaraları, e-posta adresleri ve adres bilgilerini ilgili sayfalarda bulabilir ve güncelleyebilirsiniz

## 📦 Production İçin Derleme

Web sitesini yayınlamaya hazır hale getirmek için:

```bash
npm run build
```

Bu komut `dist/` klasöründe optimize edilmiş dosyalar oluşturacaktır.

## 🆘 Sorun Giderme

### Port Zaten Kullanımda Hatası
Eğer 5173 portu kullanımdaysa, farklı bir port otomatik olarak seçilecektir. Terminal çıktısında doğru portu kontrol edin.

### Bağımlılık Sorunları
Eğer `npm install` sırasında hata alırsanız:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Dosya İzinleri (Linux/Mac)
Eğer izin hatası alırsanız:
```bash
sudo chown -R $USER:$GROUP ~/.npm
```

## 📞 Destek

Herhangi bir sorun yaşarsanız veya yardıma ihtiyacınız olursa:
- **E-posta**: info@surucu-akademi.com
- **Telefon**: (312) 123-4567

## 📝 Notlar

- Bu proje React + TypeScript + Vite teknolojileri kullanılarak geliştirilmiştir
- Tailwind CSS framework'ü ile stil verilmiştir
- Responsive tasarım ile tüm cihazlarda uyumlu çalışır
- Modern web tarayıcılarını destekler

---

✅ **Tebrikler!** Sürücü Akademi web sitesi artık çalışır durumda. Güvenli sürüş eğitimi yolculuğunuza başlamaya hazırsınız!
