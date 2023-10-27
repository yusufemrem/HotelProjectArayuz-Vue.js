<template>
  <div>
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Hotel Project</title>
        <link rel="stylesheet" href="/fontawesome/css/all.min.css" />
        <!-- https://fontawesome.com/ -->
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap"
          rel="stylesheet"
        />
        <!-- https://fonts.google.com/ -->
        <link href="/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/css/templatemo-xtra-blog.css" rel="stylesheet" />
        <!--
      
  TemplateMo 553 Xtra Blog
  
  https://templatemo.com/tm-553-xtra-blog
  
  -->
      </head>
      <body>
        <header class="tm-header" id="tm-header">
          <div class="tm-header-wrapper">
            <button
              class="navbar-toggler"
              type="button"
              aria-label="Toggle navigation"
            >
              <i class="fas fa-bars"></i>
            </button>
            <div class="tm-site-header">
              <div class="mb-3 mx-auto tm-site-logo">
                <i class="fas fa-snowflake fa-2x"></i>
              </div>

              <h1 class="text-center">Hotel Project</h1>
              <h3>{{ UserName }}</h3>
            </div>
            <nav class="tm-nav" id="tm-nav">
              <ul>
                <li class="tm-nav-item active">
                  <router-link exact to="/src/Components/Home/homepage.vue">
                    <button class="mb-2 tm-btn tm-btn-primary tm-prev-next">
                      Ana Sayfa
                    </button></router-link
                  >
                </li>
                <li class="tm-nav-item">
                  <button
                    class="mb-2 tm-btn tm-btn-primary tm-prev-next"
                    @click="getComments"
                  >
                    Öne Çıkan Yorumlar
                  </button>
                </li>
                <li class="tm-nav-item">
                  <router-link to="/src/Components/Staff/staff.vue">
                    <button class="mb-2 tm-btn tm-btn-primary tm-prev-next">
                      Hakkımızda
                    </button></router-link
                  >
                </li>
                <li class="tm-nav-item">
                  <router-link to="/src/Components/Services/services.vue">
                    <button class="mb-2 tm-btn tm-btn-primary tm-prev-next">
                      Hizmetlerimiz
                    </button></router-link
                  >
                </li>
                <li class="tm-nav-item">
                  <router-link to="/src/Components/Booking/booking.vue">
                    <button class="mb-2 tm-btn tm-btn-primary tm-prev-next">
                      Rezervasyon Yap
                    </button></router-link
                  >
                </li>

                <li class="tm-nav-item">
                  <router-link to="/src/Components/Contact/mailContact.vue">
                    <button class="mb-2 tm-btn tm-btn-primary tm-prev-next">
                      İletişim
                    </button></router-link
                  >
                </li>
              </ul>
            </nav>
            <p class="tm-mb-80 pr-5 text-white">
              Beğendiğiniz Tatil İçin Rezervasyon Yapmayı Unutmayın. Birbirinden
              Harika Otel Odalarımız İçin Aşağıdaki Butona Tıklayarak Bilgi
              Alabirsiniz.
              <br />
              <br />
              <router-link to="/src/Components/Rooms/roomDetail.vue">
                <button class=" tm-social-icon">
                  <h1>Otel Oda Detay</h1>
                </button>
              </router-link>
            </p>
            <div class="tm-mb-65">
              <a
                rel="nofollow"
                href="https://fb.com/templatemo"
                class="tm-social-link"
              >
                <i class="fab fa-facebook tm-social-icon"></i>
              </a>
              <a href="https://twitter.com" class="tm-social-link">
                <i class="fab fa-twitter tm-social-icon"></i>
              </a>
              <a href="https://instagram.com" class="tm-social-link">
                <i class="fab fa-instagram tm-social-icon"></i>
              </a>
              <a href="https://linkedin.com" class="tm-social-link">
                <i class="fab fa-linkedin tm-social-icon"></i>
              </a>
            </div>
          </div>
        </header>
        <div class="container-fluid">
          <main class="tm-main">
            <!-- Search form -->

            <h1 class="text-success">Tatil Lokasyonlarımız</h1>
            <div class="row tm-row">
              <article class="col-12 col-md-6 tm-post">
                <hr class="tm-hr-primary" />
                <router-link to="/src/Components/Booking/booking.vue">
                  <a href="post.html" class="effect-lily tm-post-link tm-pt-60">
                    <div class="tm-post-link-inner">
                      <img src="/img/tatil1.jpg" class="img-fluid" />
                    </div>
                    <span class="position-absolute tm-new-badge"
                      >Rezervasyon Yap</span
                    >
                    <h2 class="tm-pt-30 tm-color-primary tm-post-title">
                      Uludağ'da Harika Bir Tatil Sizi Bekliyor
                    </h2>
                  </a>
                </router-link>
                <p class="tm-pt-30">
                  Türkiye’nin en popüler lokasyonlarından biri olan Uludağ,
                  Türkiye’nin en büyük şehirlerinden biri olan Bursa’nın
                  sınırları içerisindedir. Bursa’nın en önemli simgeleri
                  arasında bulunan Uludağ, özellikle kış aylarındaki mükemmel
                  manzarasıyla bilinir.
                </p>
              </article>
              <article class="col-12 col-md-6 tm-post">
                <hr class="tm-hr-primary" />
                <router-link to="/src/Components/Booking/booking.vue">
                  <a href="post.html" class="effect-lily tm-post-link tm-pt-60">
                    <div class=" tm-post-link-inner">
                      <img
                        src="/img/tatil2.jpg"
                        alt="Image"
                        class="img-fluid"
                      />
                    </div>
                    <span class="position-absolute tm-new-badge"
                      >Rezervasyon Yap</span
                    >
                    <h2 class="tm-pt-30 tm-color-primary tm-post-title">
                      Singapur'da Eşsiz Bir Tatile Bekliyoruz
                    </h2>
                  </a>
                </router-link>
                <p class="tm-pt-30">
                  <a
                    rel="nofollow"
                    href="https://templatemo.com/tm-553-xtra-blog"
                    target="_blank"
                  ></a>
                  Singapur turu ile dilediğiniz gibi tur fırsatlarından
                  yararlanabilir ve en güzel noktalarını gezebilirsiniz.
                  Singapur başkenti aynı ismi taşıyan Singapurdur.
                </p>
              </article>
              <article class="col-12 col-md-6 tm-post">
                <hr class="tm-hr-primary" />
                <a href="post.html" class="effect-lily tm-post-link tm-pt-20">
                  <div class="tm-post-link-inner">
                    <img src="/img/tatil3.jpg" alt="Image" class="img-fluid" />
                  </div>

                  <h2 class="tm-pt-30 tm-color-primary tm-post-title">
                    Londra'da Harika Bir Hafta Geçirmek İster Misiniz
                  </h2>
                </a>
                <p class="tm-pt-30">
                  Londra, İngiltere'nin ve Birleşik Krallık'ın başkenti ve en
                  kalabalık şehridir. Büyük Britanya adasının güneydoğusundaki
                  Thames Nehri üzerinde duran Londra, iki bin yıldır büyük bir
                  yerleşim yeri olmuştur.
                </p>
              </article>
              <article class="col-12 col-md-6 tm-post">
                <hr class="tm-hr-primary" />
                <a href="post.html" class="effect-lily tm-post-link tm-pt-20">
                  <div class="tm-post-link-inner">
                    <img src="/img/tatil4.jpg" alt="Image" class="img-fluid" />
                  </div>
                  <h2 class="tm-pt-30 tm-color-primary tm-post-title">
                    Bodrum'da Harika Bir Hafta Geçirmek İster Misiniz
                  </h2>
                </a>
                <p class="tm-pt-30">
                  Bodrum yarımadasında en popüler ve tatilciler tarafından en
                  çok tercih edilen tatil beldeleri arasında Gümbet, Bitez,
                  Yalıkavak, Turgutreis, Türkbükü, Göltürkbükü, Gündoğan,
                  Ortakent, Gümüşlük ve Akyarlar başta geliyor.
                </p>
              </article>
              <article class="col-12 col-md-6 tm-post">
                <hr class="tm-hr-primary" />
                <a href="post.html" class="effect-lily tm-post-link tm-pt-20">
                  <div class="tm-post-link-inner">
                    <img src="/img/tatil5.jpg" alt="Image" class="img-fluid" />
                  </div>
                  <h2 class="tm-pt-30 tm-color-primary tm-post-title">
                    Çeşme'de Harika Bir Hafta Geçirmek İster Misiniz
                  </h2>
                </a>
                <p class="tm-pt-30">
                  Mavi bayraklı plajları, bembeyaz kumsalları, sınırsız eğlence
                  hayatı ile Çeşme sadece yerli değil yabancı turistlerin de
                  favori tatil adresleri arasındadır. Sakız Adası'na feribotla
                  yarım saat uzaklıkta olan Çeşme yıl boyu devam eden
                  festivalleri ile daima ilgi görmektedir.
                </p>
              </article>
              <article class="col-12 col-md-6 tm-post">
                <hr class="tm-hr-primary" />
                <a href="post.html" class="effect-lily tm-post-link tm-pt-20">
                  <div class="tm-post-link-inner">
                    <img src="/img/tatil6.jpg" alt="Image" class="img-fluid" />
                  </div>
                  <h2 class="tm-pt-30 tm-color-primary tm-post-title">
                    Kartalkaya'da Harika Bir Hafta Geçirmek İster Misiniz
                  </h2>
                </a>
                <p class="tm-pt-30">
                  Kartalkaya, Bolu ilinin doğu tarafında Köroğlu Dağları'nda bir
                  kayak merkezidir. Türkiye'nin sayılı kayak merkezlerindendir.
                  Grand Kartal Otel, Kartal Otel, Dorukkaya Otel ve Golden Key
                  Kartalkaya her kış kayakseverleri ağırlamaktadır. Kayak, kızak
                  ve snowboard kiralama hizmeti de vardır.
                </p>
              </article>
            </div>
            <div class="row tm-row tm-mt-100 tm-mb-75">
              <div class="tm-prev-next-wrapper">
                <!-- <router-link to="/Register">
                    <button class="mb-2 tm-btn tm-btn-primary tm-prev-next">
                      Rezervasyon Yap
                    </button></router-link
                  > -->
              </div>
            </div>
            <footer class="row tm-row">
              <div class="col-md-6 col-12 tm-color-gray tm-copyright">
                <router-link to="/src/Components/Login/login.vue">
                  <button>admin</button>
                </router-link>
              </div>
            </footer>
          </main>
        </div>
      </body>
    </html>
  </div>
</template>

<script>
import axios from "axios";
import Vue from "vue";
import VueResource from "vue-resource";
export default {
  data() {
    return {
      UserName: "",
    };
  },
  methods: {
    navigateHome() {
      //   this.$router.push("/Register");
      // this.$router.push({path: '/'});
      this.$router.push({ name: "rezervasyonyapma" });
    },
    getComments() {
      this.$router.push({ name: "yorumyap" });
    },
    logout() {
      try {
        // Oturumu sonlandırma işlemi için bir API çağrısı yapabilirsiniz.
        // Örnek olarak, "/api/logout" gibi bir URL kullanabilirsiniz.
        axios.post("http://localhost:35837/api/Login/LogOut", null, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log(response);
        // Oturumu başarıyla sonlandırdıktan sonra kullanıcıyı giriş sayfasına yönlendirin.
        this.$router.push("/login");
        return Promise.resolve("Çıkış başarılı");
      } catch (error) {
        console.error("Çıkış hatası:", error);
        return Promise.reject("Çıkış sırasında bir hata oluştu");
        // Çıkış işlemi sırasında hata oluştuysa burada işlem yapabilirsiniz.
        // Örneğin, bir hata iletileri gösterebilirsiniz.
      }
    },
    async getUserInfo() {
      try {
        const response = await axios.get(
          "http://localhost:35837/api/Login/getUserInfo"
        );
        this.UserName = response.data.UserName; // Kul
        localStorage.setItem("UserName", this.UserName);
      } catch (error) {
        console.error("Kullanıcı adını alma hatası:", error);
      }
    },
  },
  mounted() {
    //this.getUserInfo(); // Bileşen oluşturulduğunda kullanıcı adını alın
    const storedUserName = localStorage.getItem("UserName");
    if (storedUserName) {
      this.UserName = storedUserName;
    } else {
      // Local storage'da kullanıcı adı yoksa API'den alın
      this.getUserInfo();
    }
  },
};
</script>
