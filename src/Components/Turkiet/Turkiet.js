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
      <br />
      <h3>Dürüstlük, Dayanışma ve Gelecek</h3>
      <br />
      <h5>Bagimlilikla Mücadele ve Mahkumların Rehabilitasyon Derneği</h5>

      <div className="col-md-6 img-fluid float-right">
        <div id="myCarousel" className="shadow-box carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active" />
            <li data-target="#myCarousel" data-slide-to="1" />
            <li data-target="#myCarousel" data-slide-to="2" />
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
              <img className="img-fluid second-slide" src={turkiet2} alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="img-fluid third-slide" src={turkiet3} alt="Third slide" />
            </div>
            <div className="carousel-item">
              <img className="img-fluid fourth-slide" src={turkiet4} alt="Fourth slide" />
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
        2008 İle 2009 yılları arasında ikinci defe (tedavi-rehabilitasyon merkezinde) tedavi gören
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
        paylaşmıştır. İsveç’te ki Vision Center modelini Türkiye’ye getirme kararını vererek
        faaliyete geçiren Derviş AKSAY,kurucu başkan olarak Vision Center İSTANBUL/TURKEY olarak,
        “Bağımlılıkla Mücadele Ve Mahkûmların Rehabilitasyon Derneği” adıyla Türkiye’de de bir adim
        atmistir. Türkiye’de bir tedavi merkezi açmak ve bütün Avrupa ülkeleri ile beraber ortak
        çalışmaktir hedefi. Dünya ülkelerinde yaşayan sorunlu Türk ve Dünya gençlerini Türkiye’ye
        göndermek, tedavilerini üstlenip topluma kazandırmak ve bazı ihtiyacı olan gençlerimizi
        İsveç’e gönderip tedavilerini gerçekleştirmeyi düşünen Derviş AKSAY, Vision Center’ın
        uyguladığı tüm projelerinde gençler ile bireysel olarak ilgilenmektedir. Onları is
        alanlarına yönlendirmek, profesyonel hayata hazırlamak, ekonomik olarak kalkınmalarını
        sağlamak ve toplumda saygın bir yer edinmelerini hedeflemektedir.
      </p>
      <h3>VISION CENTER NEDIR VE AMACLARI NELERDIR? </h3>
      <p>
        VISION CENTER, geçmiş yaşantılarında suç işlemiş ve madde bağımlılığı yaşamış kişilerin bir
        araya gelerek oluşturdukları; suça yatkın olan ve madde bağımlılığı olan gençlerin meslek
        edinmeleri ve topluma kazandırılmalarına yönelik çalışmalar yürüten devlet destekli bir
        organizasyondur. Toplum içinde suç işleyen ve madde bağımlılığı yaşayan veya suça yatkın
        olan gençlerin tespit edilmesi ve organizasyon bünyesinde rehabilite edilerek tekrar topluma
        kazandırılması Vision Center´un başlıca görevleri arasındadır . Vision Center' un bir diğer
        amacı, hapis cezasina mahkum olmus bireylerin tekrar topluma kazandırılmaları icin bu
        kisilere özel tasarlanmis projeler ile onların dürüst bir yaşama kavuşmalarını sağlamaktır.
        Geçmiş yaşantılarında suç işleyen veya madde bağımlısı olan Vision Center üyeleri, bu kötü
        alışkanlıklarla savaşma konusunda başvurulabilecek en önemli kaynaklardır. Kendileri de
        böyle bir sorun yaşadıkları ve kurtuldukları için bu eğilimlerin nedenlerini, insanları suça
        teşvik eden ortamları, fizyolojik ve psikolojik nedenlerini ve etkilerini, ve bunlardan
        kurtulma yollarını bilmektedirler. Vision Center derneklerini diğerlerinden farklı yapan en
        önemli özellik de budur.
      </p>
    </div>
  </div>
);

export default Turkiet;
