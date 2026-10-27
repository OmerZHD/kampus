# Kampüs Kulübü — Üç sayfalık statik site

## DEĞİŞİKLİKLER

1- Öncelikle temel kampus projesinin üzerine daha spesifik bir konu başlığı altında yeniden düzenleyip hem tasarımını hem de içerisine yeni birkaç dosya eklenilerekten yeniden düzenlendi ve kaydedildi.

2- Projenin etkinlikler kısmına yeni card yapıları ve görseller eklenilerekten proje üzerinde değişiklik yapıldı. Ayrıca card yapılarına hover efekti eklenilerekten dahaa dinamik bir görümüm elde edildi.

3- Projeye yeni bir script.js isimli bir dosya ile etkinlik kısmına yeni bir arama çubuğu eklendi.

4- Eklenen arama çubuğu mobil cihazlar üzerinde de daha iyi çalışabilmesi için taşma vs. gibi durumları engellenip yeniden düzenlendi.



## Dosyalar
- İMG Klasörü
- AI_NOTLARI.md
- etkinlikler.html
- hakkimizda.html
- index.html
- style.css
- README.md
- TEST_NOTLARI.md
- script.js

## KULLANILAN PROMPTLAR
> Yapmış olduğun web sitesinde yeni framework ler eklemeden site tasarımını FRP tarzına uygun bir stil, font ve renk paletini kullanaraktan yeniden tasarla.

- Burada temel web site mimarisini değiştirmeden sadece stil ve tasarım odaklı bir değişim yapmasını amaçladım ve istediğim sonuca ulaştım.

>Ana sayfa ve etkinlikler kısmında bulunan card yapılarının içerisinde yazının en üstüne görsel eklenilebileccek bir şekilde bir görsel koyma kısmı oluştur başka hiçbir şeye dokunma. Css kısmından görselleri card yapısının içerisine tam olarak uyacak bir biçimde boyutlarını yeniden düzenle.

- Bu promp ile de web sitesi içerisindeki card yapılarının iç kısmına görsel eklemek için uygun bir alan oluşturmasını istedim. Sonrasında resimleri ekledim fakat ilk eklediğimde resimlerin boyutları fazla büyüktü. Bu nedenle son kısımdaki prompt ile de bu resimlerin yeniden boyutlandırmasını yaptım.

> Şu anki mevcut kodda bulunan etkinlikler kısmında bulunnan card yapısında toplamda en az 5 card yapısı olacak şekilde yeniden bir ekleme yapılacak. Mevcut tasarımı bozmadan aynı şekilde bu eklemeleri yap ve hangi değişikler yapıldığını bana göster.

- Burada ise web sitesinde var olan card sayısını arttırdım ve tasarımda herhangi bir bozulma olmasını önlemek için aynı şekilde eklediğinden emin olup kontrollerini yaptım.

> Projeye script.js isimli yeni bir dosya oluşturup eklenilecek ve etkinlik başlıklarını filtreleyen
bir arama özelliği oluşturulacak.
Arama özelliği özellikle şu başlıklar dikkate alınaraktan oluşturulacak;
• Kullanıcı yazdıkça eşleşen etkinlik kartları gösterilmelidir.
• Büyük/küçük harf farkı ile baştaki ve sondaki boşluklar sonucu etkilememelidir.
• Görünen etkinlik sayısı yazılmalı; eşleşme yoksa açıklayıcı mesaj gösterilmelidir.
• “Temizle” düğmesi aramayı sıfırlamalı ve tüm etkinlikleri göstermelidir.
• Arama alanının açıklayıcı bir label öğesi bulunmalıdır. Site, dar ekranda yatay taşma olmadan
kullanılabilmelidir.
Bu değişiklikler eklenirken projenin sahip olduğu tasarım vb gibi şeylere dikkate alınaraktan uygun bir biçimde olacak.

- Bu prompta ise web sitesi içerisinde kullanmak üzere bir filtreleme sistemine sahip arama çubuğu ekledim. Testlerinde de hiçbir sıkıntı olmadan çalıştı.

>Eklemiş olduğumuz arama çubuğunu mobil cihazlarda da kullanmak üzere taşma vs gibi olası durumlarını önlemek için yeniden düzenleyelim.

- Son olarakta arama çubuğunu ve siteyi mobil cihazlara uyumlu bir şekilde çalışması için yeniden düzenledim.

> (Birkaç prompt ile de site içerisnde daha çok tasarım odaklı işler de yapıldı.)