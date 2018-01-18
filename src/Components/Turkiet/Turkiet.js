import React from 'react';
import './Turkiet.css';
import iconTurkey from '../../Assests/iconTurkey.png';
import turkiet2 from '../../Assests/Turkiet/turkiet2.png';
import turkiet3 from '../../Assests/Turkiet/turkiet3.png';
import turkiet4 from '../../Assests/Turkiet/turkiet4.png';

const Turkiet = () => (
  <div className="container">
    <div className="turkiet">
      <h1>Vizyon Merkezi Türkiye</h1>
      <h3 className="text-muted">Dürüstlük, Dayanışma ve Gelecek</h3>
      <br />
      <h5>Bagimlilikla Mücadele ve Mahkumların Rehabilitasyon Derneği</h5>
      <br />

      <div className="col-md-6 img-fluid float-right">
        <div id="myCarousel" className="shadow-box carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active" />
            <li data-target="#myCarousel" data-slide-to="1" />
            <li data-target="#myCarousel" data-slide-to="2" />
            <li data-target="#myCarousel" data-slide-to="3" />
            <li data-target="#myCarousel" data-slide-to="4" />
          </ol>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="img-fluid first-slide" src={iconTurkey} alt="First slide" />
            </div>
            <div className="carousel-item">
              <img
                className="img-fluid fourth-slide"
                src="https://ak4.picdn.net/shutterstock/videos/6651734/thumb/1.jpg"
                alt="Fourth slide"
              />
            </div>
            <div className="carousel-item">
              <img className="img-fluid second-slide" src={turkiet4} alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="img-fluid third-slide" src={turkiet3} alt="Third slide" />
            </div>
            <div className="carousel-item">
              <img className="img-fluid fourth-slide" src={turkiet2} alt="Fourth slide" />
            </div>
          </div>

          <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      <h5>VIZYON MERKEZİ KURUCUSU DERVİŞ DENNIS AKSAY</h5>
      <p>
        Derviş Dennis Aksay, Nevşehir ilinin, Hacıbektaş ilçesinin, Mikail köyünde ailenin beşinci
        ve ilk erkek çocuğu olarak dünyaya geldi. Babası Almanya’da bir gurbet işçisiydi. Bu yüzden
        on iki yaşından beri evin hem oğlu, hem de babası olmuştur. Çocukluk hayalleri ve idealleri
        traktör sürüp, çiftçilik yaparak, aynı anda okuyup evi geçindirmek zorunda kaldığı için
        maalesef hayata geçmemiştir. Oysa ki o üniforma özentisi ve sevgisi yüzden hep polis ya da
        asker olmak istemiştir. Hayatın bütün zorluklarına rağmen öğrenimini bırakmayan Derviş
        AKSAY, Kırşehir- Mucur lisesi mezunudur.
      </p>
      <p>
        Daha on sekiz yaşındayken, İsveç’de yaşayan bir kızla tanışan Derviş AKSAY, İsveç
        Stockholm’e gelerek, kızın ailesinin baskısı ve zorlamasıyla evlendirilmiştir. AKSAY’IN bu
        evlilikten iki çocuğu olmuştur.
      </p>
      <p>
        İsveç’te dil ve kültür çatışması nedeniyle kendisini çok yalnız hisseden Derviş AKSAY güzel
        bir hayat hayali kurmasına rağmen, tam aksi yönde bir yaşamla karşı karşıya kalır.
        Stockholm’de, pizza, restorant ve kuaför salonu işletmiştir. Derviş AKSAY ilk eşinden
        ayrılırken büyük sıkıntılar ve bunalımlar yaşamıştır. Yanında sorunlarını paylaşabilecek
        birilerinin olmaması nedeniyle, bu duygularla baş edebilmek için kumar oynamaya ve gece
        kulüplerine gidip gelmeye başlar. İşte tam da bu sıralarda hayat iyice çıkmazlara sokar
        Derviş AKSAY’I. Birbiri ardına gelen olumsuzluklar onun hiç istememesine rağmen yakasından
        düşmez. Önce kumar sonrasinda uyuşturucuya başlar. Kolay yoldan para kazanmayi keşfeder ve
        uyuşturucu ticaretine başlar. Yasa dışı işlere bulaşır. Daha yirmibeş yaşındadır ama
        defalarca hapse girmiş çıkmıştır. Uyuşturucu, kumar batağında, tefecilik, gasp ve soygun
        gibi ağır suçlar işlemek zorunda kalmıştır.
      </p>
      <p>
        Stockholm’de, pizza, restorant ve kuaför salonu işletmiştir. Derviş AKSAY ilk eşinden
        ayrılırken büyük sıkıntılar ve bunalımlar yaşamıştır. Yanında sorunlarını paylaşabilecek
        birilerinin olmaması nedeniyle, bu duygularla baş edebilmek için kumar oynamaya ve gece
        kulüplerine gidip gelmeye başlar. İşte tam da bu sıralarda hayat iyice çıkmazlara sokar
        Derviş AKSAY’I. Birbiri ardına gelen olumsuzluklar onun hiç istememesine rağmen yakasından
        düşmez. Önce kumar sonrasinda uyuşturucuya başlar. Kolay yoldan para kazanmayi keşfeder ve
        uyuşturucu ticaretine başlar. Yasa dışı işlere bulaşır. Daha yirmibeş yaşındadır ama
        defalarca hapse girmiş çıkmıştır. Uyuşturucu, kumar batağında, tefecilik, gasp ve soygun
        gibi ağır suçlar işlemek zorunda kalmıştır.
      </p>
      <p>
        Derviş AKSAY çok büyük paralar kazanmasına rağmen, çocuklarından, ailesinden ve güzel ülkesi
        Türkiye’sinden uzak kaldığı vakitlerde paramparçadır. Yüreği başıboşluklarda savrulurken ve
        her defasın da canı daha da çok yanarken, kendini sürekli uyuşturucunun pençesinde bulur
        öyle ki hastanelere kaldırılır, tedaviler görür, diğer taraftan hayatın gel gitlerinde
        silahla yaralanma, araba kazaları yaşar, hastanelere düşer ki defalarca ölümden döner Derviş
        AKSAY.
      </p>
      <p>
        Derviş AKSAY ilk defa 2005 yılında hayatını tamamen değiştirme kararını verir ve bir tedavi
        merkezine başvurur fakat burada ne kadar hayatını değiştirmek istese de başaramaz, çünkü
        eski hayatını o bıraksa, eski hayatı onu bırakmamaktadır.
      </p>
      <p>
        Yirmi sekiz yaşında ikinci evliliğini yapan Derviş AKSAY, evlendikten bir hafta sonra
        yakalanıp hapse girer. Bu evliliginden de iki cocuğu olan Dervis Aksay`in 2008 yılında yani
        en son hapse girişinde, hapishane yetkililerinden izin alarak onüç yaşında ki kızıyla bir
        telefon görüşmesi yapar. Bu görüşme onu öyle derinden etkiler ki hayatını yeni baştan
        maddeler halinde yazmaya, ölçüp tartmaya ve yeniden bütün yaşamını değiştirme kararını
        aldırmaya kadar götürür. İşte o konuşma aynen şöyledir;
      </p>
      <ul>
        <li>
          Babacığım ben şimdi hapisteyim, yanınıza gelemeyeceğim, size para gönderdim, bunun
          yarısını kardeşine ver, yarısı da sende dursun.
        </li>
        <li>
          Baba sen ne zannediyorsun kendini? Neredeyse kırk yaşına geldin . Hiç mi utanmıyorsun? Sen
          kendini ne mafyası zannediyorsun? Babalık senin zannettiğin gibi, bizleri beş dakika
          görmek ve harçlık verip ortadan kaybolmak değildir! Biz böyle bir baba istemiyoruz!
        </li>
      </ul>
      <p>
        <strong>
          <em>
            ´Kızı ile arasında geçen konuşmadan sonra Derviş AKSAY çok ağlamış ve hayatın
            muhasebesini yaparak, suçlu hayatında kazandıklarını ve kaybettiklerini eğer dürüst bir
            yaşam yaşasaydı ne kazanıp, ne kaybedeceklerini hafızasında canlandırmış sonra maddeler
            halinde yazmıştır ve her şeyi değiştirme zamanı da evladıyla az önce ki konuşması
            sonrası olmuştu´.
          </em>
        </strong>
      </p>
      <p>
        2008 İle 2009 yılları arasında ikinci defa (tedavi-rehabilitasyon merkezinde) tedavi gören
        AKSAY, burada aldığı destek ile hayatını ve bütün çevresini değiştirir. Derviş AKSAY
        tedavinin ardından, kötü geçmişinde edindiği tecrübeleri, kendisiyle ayni kaderi paylasan
        insanlara faydali olmak adina kullanir. 2009 Yılının Ağustos ayında X-CONS HANİNGE’Yİ kurar.
        “Amacım başkalarına yardım ederken, kendime de yardım etmekti.” Diyen AKSAY, kendisini
        sosyal islere vererek, on yıllık mesafeyi, üç yılda alır. Çok güzel bir ekiple İsveç’te
        büyük başarılar göstererek, uyuşturucu kullanan ve suç işleyen gençlere, insanlara yardım
        elini uzatıyor ki bu konuda çok başarılı olmuştur.
      </p>
      <p>
        Ayrıca Derviş AKSAY ( Alkol ve madde bağımlılığı tedavi uzmani olarak 2012 yilinda Upsalla
        üniversitesini bitirdi ), film, müzik ve kitap yazarlığıyla uğraşmaktadır. Çok güzel saz
        çalan AKSAY, önce İsveç daha sonra da Türkiye’de çıkacak olan bir kitabı yazmaktadır. “HER
        HANGİ BİRİNİN YAŞAMI” adlı belgesel filmde oynayan AKSAY, başrolü Sagra Clara Nazhadilan ile
        paylaşmıştır.
      </p>
      <p>
        İsveç’te ki X-CONS modelini Türkiye’ye getirme kararını vererek faaliyete geçiren Derviş
        AKSAY,kurucu başkan olarak VISION CENTER İSTANBUL/TURKEY olarak, “Bağımlılıkla Mücadele Ve
        Mahkûmların Rehabilitasyon Derneği” adıyla Türkiye’de de bir adim atmistir.
      </p>
      <p>
        Türkiye’de bir tedavi merkezi açmak ve bütün Avrupa ülkeleri ile beraber ortak çalışmaktir
        hedefi. Dünya ülkelerinde yaşayan sorunlu Türk ve Dünya gençlerini Türkiye’ye göndermek,
        tedavilerini üstlenip topluma kazandırmak ve bazı ihtiyacı olan gençlerimizi İsveç’e
        gönderip tedavilerini gerçekleştirmeyi düşünen Derviş AKSAY,
      </p>
      <p>
        VISION CENTER uyguladığı tüm projelerinde gençler ile bireysel olarak ilgilenmektedir.
        Onları is alanlarına yönlendirmek, profesyonel hayata hazırlamak, ekonomik olarak
        kalkınmalarını sağlamak ve toplumda saygın bir yer edinmelerini hedeflemektedir.
      </p>
      <h5>VISION CENTER NEDIR VE AMACLARI NELERDIR? </h5>
      <p>
        VISION CENTER, geçmiş yaşantılarında suç işlemiş ve madde bağımlılığı yaşamış kişilerin bir
        araya gelerek oluşturdukları; suça yatkın olan ve madde bağımlılığı olan gençlerin meslek
        edinmeleri ve topluma kazandırılmalarına yönelik çalışmalar yürüten devlet destekli bir
        organizasyondur. Toplum içinde suç işleyen ve madde bağımlılığı yaşayan veya suça yatkın
        olan gençlerin tespit edilmesi ve organizasyon bünyesinde rehabilite edilerek tekrar topluma
        kazandırılması Vision Center´un başlıca görevleri arasındadır . Vision Center´ un bir diğer
        amacı, hapis cezasina mahkum olmus bireylerin tekrar topluma kazandırılmaları icin bu
        kisilere özel tasarlanmis projeler ile onların dürüst bir yaşama kavuşmalarını sağlamaktır.
        Geçmiş yaşantılarında suç işleyen veya madde bağımlısı olan Vision Center üyeleri, bu kötü
        alışkanlıklarla savaşma konusunda başvurulabilecek en önemli kaynaklardır. Kendileri de
        böyle bir sorun yaşadıkları ve kurtuldukları için bu eğilimlerin nedenlerini, insanları suça
        teşvik eden ortamları, fizyolojik ve psikolojik nedenlerini ve etkilerini, ve bunlardan
        kurtulma yollarını bilmektedirler. Vision Center derneklerini diğerlerinden farklı yapan en
        önemli özellik de budur.
      </p>
      <h5>KILAVUZLUK</h5>
      <p>
        VISION Center´ın deneyimli yöneticileri, gençlerin, kendi yaşamlarına benzer bir yaşamın
        içine düşmemeleri için onlara rehberlik, ağabeylik, arkadaşlık etmek, kendi deneyimlerinden
        yararlanarak onlara yol gösterici bir rol edinmişlerdir. X -CONS Haninge madde bağımlısı
        veya suça bulaşmış gençlerle düzenli olarak görüşmektedir. Gençler yaptığımız çalışmalara
        çok güven duymaktalar ve genel olarak onlar bizi aramaktadir. Bu durum onların mevcut bakım
        programına olumlu tavır göstermelerine motive olmalarını kolaylaştırmaktadır. VISION CENTER
        personelinin bazı durumlarda kılavuzlukla birlikte görevleri vardır. VISION CENTER´ın
        belediyeyle çerçeve anlaşması mevcuttur.
      </p>
      <h5>13-26 Yaş arasındaki gençlere yönelik önleyici çalışmalar:</h5>
      <p>
        Belediyenin dar gelirli bölgelerinde oturan gençler akranlarıyla buluşmak için VISION CENTER
        lokaline uğrarlar .Bu gençler dernek etkinliklerine çok güvenmekte olup insancıl, demokratik
        ve eşitlikçi değerlerden etkilenmeye açıktırlar. Açık etkinliklerde madde bağımlılığı,
        sigara, kumar, namus ve daha bir dizi sorunları düzenli olarak ele almaktayız.
      </p>
      <p>
        VISION CENTER´ın, hedef gurubundaki gençlere ulaşılması ve yaşadıkları bölgelerde bu
        çocukların belirlenmesi ve onlarla iletişime geçerek madde bağımlılığı ve suç teşkil
        edececek nedenler ve sonuçları üzerine konuşulması, gençlerin sorunlarının dinlenerek onlara
        çözüm önerileri ile birlikte VISION CENTER bünyesinde yer alan sosyal aktivitelerle madde ve
        suç ortamından uzaklaştırılması amaçlanmaktadır
      </p>
      <p>
        VISION CENTER´ın hedef grubu öncelikle suç işleme ve bağımlılık tehlikesi içinde olan
        gençlerdir. Bu çocuklar organizasyon içinde sosyal aktiviteler ile kendilerine olan
        güvenleri geliştirilip, farklı alanlarda oluşturulan etkinliklerle boş zamanlarını
        değerlendirerek kötü alışkanlıklardan uzak tutulması sağlanmaktadır.
      </p>
      <h5>İş piyasası projesinde başta çevre işleri olmak üzere ´ilk iş´: </h5>
      <p>
        Eğitim ve iş hayatında başarılı olamayan bir çok gençle karşılaşıyoruz. Bu gençlere işe
        alınmanin nasil olmasi gerektigini ögretmek için bir iş alani yaratmak çalışma ve deneme
        ortami sağlarız. Böylece toplumda başarılı olabilme şansları artar. VISION CENTER
        belediyeler ve diger sivil toplum kuruluslari ile organik bir bag icinde calismaktadir.{' '}
      </p>
      <p>
        Eğitim ve iş hayatında başarılı olamayan gencler, bünyemizde bulunan bir cok is dalinda
        gerekli imkanlar saglanarak, toplum icinde sayginlik kazanmak ve kendilerine olan
        özguvenlerini gelistirmeleri amaclanmaktadir. Dürüst yollardan bir gelir elde etmek ve bu
        gencleri tekrar topluma kazandirmak hedeflenmektedir. Katılımcı olabilmeleri eğitimlerini
        yeniden deneme motivasyonlarını kuvvetlendirir.
      </p>
      <p>
        VISION CENTER, Kaynakta ayırma/Çevre işleri ile çalışmaktadır. Örneğin bazi sorunlu
        bölgelerdeki gençler kendi semtlerinde iyi bir çevre işi yaptıkları için işe alındılar.
        Özellikle hedef grubunun konut bölgelerinde görev çeşitlerini artırarak yapabilecekleri aynı
        tipdeki yerleşik iş imkanlarinin saglanmasini istiyoruz.{' '}
      </p>
      <p>
        VISION CENTER´ın uyguladığı tüm projelerdeki amaci, gençler ile bireysel olarak
        ilgilenelerek onları iş ve eğtim alanlarına yönlendirmek, profesyonel hayata hazırlamak,
        ekonomik olarak kalkınmalarını sağlamak ve yeniden toplum içinde saygın bir konum
        edinmelerini sağlamaktır.
      </p>
      <h5>İsveç´te başarıyla uygulanan modeli Türkiye´ye taşımak: </h5>
      <p>
        VISION CENTER modelinin en etkin biçimde Türkiye´de de uygulanması ve buradan başka ülkelere
        yayılması amacımızdir. Türkiye`de bir rehabilitasyon- merkezinin acilmasini hedeflemekteyiz,
        fakat bu merkez sadece konut fonksiyonu ile sinirlanmis olmamak üzere „bir tatil köyü“ gibi
        spor ve aktivite alanlarinada sahip olmalidir. Bu merkezde tedavinin yani sira topluma
        kazandirmak amacinin gerceklesebilmesi açısından eğitici, eğlendirici ve bilinclendirici
        bölümler olacaktır. Amacimiz bütün dünya ülkeleriyle beraber genis kapsamda bir ortak
        calışma, rehabilitasyon tedavisinin baska bir ülkedede gerceklesme ihtimali dahil,
        gerceklestirmekdir.
      </p>
    </div>
  </div>
);

export default Turkiet;
