# 🗃️ Sürücü Akademi - Veritabanısız Veri Yönetimi Rehberi

## 🎯 Genel Bakış

Bu sistem, veritabanı kullanmadan sitenizin verilerini (fiyatlar, iletişim bilgileri) kolayca yönetmenizi sağlar. Tüm veriler JSON dosyalarında saklanır ve site otomatik olarak bu dosyaları okur.

## 📁 Dosya Yapısı

```
public/
├── data/
│   ├── pricing.json     # Fiyat bilgileri
│   └── contact.json     # İletişim bilgileri
├── admin.html          # Yönetim paneli
└── ...

src/
├── hooks/
│   └── useData.ts      # Veri okuma hook'ları
└── ...
```

## 🚀 Veri Güncelleme Yöntemleri

### Yöntem 1: Admin Panel (Önerilen) ⭐

1. **Admin paneline erişin:**
   - Tarayıcınızda `https://siteniz.com/admin.html` adresini açın

2. **Veri düzenleme:**
   - "Fiyatları Düzenle" veya "İletişim Bilgilerini Düzenle" butonuna tıklayın
   - JSON verilerini düzenleyin
   - "Değişiklikleri Kaydet" butonuna basın
   - İndirilen dosyayı sunucunuza yükleyin

3. **Dosya yükleme:**
   - FTP/cPanel ile `public/data/` klasörüne dosyayı yükleyin
   - Site otomatik olarak yeni verileri kullanacaktır

### Yöntem 2: Doğrudan JSON Düzenleme

1. **Dosyaları indirin:**
   ```bash
   # Mevcut dosyaları yedeğin
   wget https://siteniz.com/data/pricing.json
   wget https://siteniz.com/data/contact.json
   ```

2. **Düzenleyin:**
   - Herhangi bir metin editöründe JSON dosyalarını açın
   - Değişiklikleri yapın
   - `lastUpdated` alanını güncelleyin

3. **Yükleyin:**
   - Düzenlenen dosyaları `public/data/` klasörüne yükleyin

### Yöntem 3: Otomatik Güncelleme (Gelişmiş)

Bir cron job veya GitHub Actions ile otomatik güncelleme yapabilirsiniz:

```bash
# Örnek cron job - her gün 06:00'da güncelle
0 6 * * * curl -o /path/to/public/data/pricing.json https://api.example.com/pricing
```

## 📝 JSON Dosya Formatları

### pricing.json

```json
{
  "lastUpdated": "2024-01-15T10:30:00Z",
  "pricing": {
    "licenses": [
      {
        "type": "B",
        "category": "ehliyet",
        "price": "17.500,00"
      }
    ],
    "upgrades": [
      {
        "from": "B",
        "to": "A1",
        "price": "10.000,00"
      }
    ],
    "exams": {
      "teorik": "900,00",
      "direksiyon": "1.350,00"
    },
    "taxes": {
      "B": "7.438,60"
    },
    "services": {
      "ozelDers": "1.000,00"
    }
  }
}
```

### contact.json

```json
{
  "lastUpdated": "2024-01-15T10:30:00Z",
  "contact": {
    "companyName": "Sürücü Akademi",
    "phone": "(312) 123-4567",
    "email": "info@surucu-akademi.com",
    "address": {
      "street": "123 Sürücü Akademi Caddesi",
      "district": "Çankaya",
      "city": "Ankara"
    },
    "branches": [
      {
        "name": "Merkez Şube",
        "address": "123 Sürücü Akademi Cad.",
        "phone": "(312) 123-4567"
      }
    ]
  }
}
```

## 🛠️ Teknik Detaylar

### Veri Okuma Mekanizması

```typescript
// Site otomatik olarak bu hook'ları kullanır
const { data, loading, error } = usePricingData();
const { data: contactData } = useContactData();
```

### Cache Yönetimi

- Veriler tarayıcı cache'inde saklanır
- `lastUpdated` alanı değiştiğinde cache yenilenir
- Hard refresh (Ctrl+F5) ile cache temizlenebilir

### Hata Yönetimi

- JSON formatı hatalıysa site varsayılan değerleri kullanır
- Dosya bulunamazsa loading durumu gösterilir
- Network hataları için retry mekanizması vardır

## 🔧 Gelişmiş Özellikler

### 1. Çoklu Dil Desteği

```json
{
  "pricing": {
    "tr": { /* Türkçe veriler */ },
    "en": { /* İngilizce veriler */ }
  }
}
```

### 2. Zamanlı Güncellemeler

```json
{
  "scheduledUpdates": {
    "2024-02-01": { /* Yeni fiyatlar */ }
  }
}
```

### 3. A/B Testing

```json
{
  "variants": {
    "default": { /* Varsayılan */ },
    "campaign": { /* Kampanya */ }
  }
}
```

## 📊 İzleme ve Analitik

### Güncelleme Takibi

```javascript
// Console'da güncelleme zamanını kontrol edin
console.log('Son güncelleme:', pricingData?.lastUpdated);
```

### Performans Optimizasyonu

- JSON dosyaları gzip ile sıkıştırılır
- CDN kullanımı önerilir
- Dosya boyutu 1MB'ı geçmemelidir

## 🚨 Güvenlik Notları

1. **Admin paneli güvenliği:**
   - `admin.html` dosyasını password koruması altına alın
   - HTTPS kullanın

2. **JSON dosya güvenliği:**
   - Sadece güvenilir kaynaklardan JSON yükleyin
   - Dosya izinlerini kontrol edin (644)

3. **Backup:**
   - Düzenli olarak JSON dosyalarını yedekleyin
   - Versiyon kontrolü kullanın (Git)

## 🆘 Sorun Giderme

### Yaygın Problemler

1. **Veriler güncellenmiyor:**
   - Tarayıcı cache'ini temizleyin
   - JSON formatını kontrol edin
   - Dosya yolunu doğrulayın

2. **JSON formatı hatası:**
   - Online JSON validator kullanın
   - Virgül ve tırnak işaretlerini kontrol edin

3. **Dosya yükleme sorunu:**
   - FTP bağlantısını kontrol edin
   - Dosya izinlerini kontrol edin

### Destek

Sorun yaşarsanız:
1. Browser console'da hataları kontrol edin
2. Network sekmesinde dosya yüklemelerini izleyin
3. JSON dosyalarının erişilebilir olduğunu doğrulayın

## 🎉 Sonuç

Bu sistem sayesinde:
- ✅ Veritabanı olmadan veri yönetimi
- ✅ Kolay güncelleme süreci
- ✅ Gerçek zamanlı değişiklikler
- ✅ Minimal teknik bilgi gereksinimi
- ✅ Maliyet etkin çözüm

**Admin paneli:** `https://siteniz.com/admin.html`
**Veri klasörü:** `public/data/`
