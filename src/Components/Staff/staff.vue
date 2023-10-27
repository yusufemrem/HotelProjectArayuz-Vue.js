<template>
  <div>
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Xtra Blog</title>
        <link rel="stylesheet" href="/fontawesome/css/all.min.css" />
        <!-- https://fontawesome.com/ -->
        <link
          href="/https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap"
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
            </div>
            <nav class="tm-nav" id="tm-nav">
              <ul>
                <li class="tm-nav-item">
                  <router-link to="/src/Components/Home/homepage.vue">
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
                <li class="tm-nav-item active">
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
                <li class="tm-nav-item ">
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
              <a href="https://facebook.com" class="tm-social-link">
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
            <div class="row tm-row">
              <div class="col-12">
                <form
                  method="GET"
                  class="form-inline tm-mb-80 tm-search-form"
                ></form>
              </div>
            </div>
            <div class="row tm-row tm-mb-45">
              <div class="col-12">
                <hr class="tm-hr-primary tm-mb-55" />
                <img
                  src="/img/otel.webp"
                  width="100%"
                  alt="Image"
                  class="img-fluid"
                />
              </div>
            </div>
            <div class="row tm-row tm-mb-40">
              <div class="col-12">
                <div class="mb-4">
                  <h2 class="pt-2 tm-mb-40 tm-color-primary tm-post-title">
                    Otelimiz Hakkında
                  </h2>
                  <p>
                    Hizmet kaliteniz ve müşteri memnuniyetinizin arkasındaki
                    gizli güç, iyi planlanmış ve kusursuza yakın işleyen
                    operasyonunuzdur. Tablonun genelini en iy gören, tabloya
                    dışarıdan bakabilmeyi bilendir. Operasyonunuzu uzman
                    danışmanların gözünden, objektif bir biçimde görün.Açılış
                    öncesi dönemde bir otelin gidiş hattını belirleyecek, büyük
                    bir yatırımın doğru şekilde sağlandığı çok kritik bir
                    süreçtir. Projenin büyüklüğüne göre planlanan açılış
                    tarihinden 6 ila 15 ay önce açılış öncesi ofisi açılır ve
                    çalışmalarına başlar. Bu süreçte otel inşaatının optimal
                    şekilde projelendirilmesi, açılacak otelin pazardaki
                    konumunun tespiti, organizasyon şemasının belirlenip işe
                    alım ve eğitim uygulamalarının hayata geçirilmesi, otelin
                    bakanlık standartlarında uygun kategorizasyon çalışmasının
                    yapılması gibi hayati önem taşıyan çalışmaların yapılması
                    gerekmektedir . Bu aşamalarda profesyonel destek
                    verilmektedir .
                  </p>
                </div>
              </div>
            </div>

            <h1 class="mb-3 tm-color-primary tm-post-title  ">
              Kadromuz
            </h1>
            <div class="row tm-row tm-mb-60">
              <div class="col-12">
                <hr class="tm-hr-primary  tm-mb-55" />
              </div>
              <div class="col-lg-6 tm-mb-60 tm-person-col">
                <div class="media tm-person">
                  <img
                    src="/img/about-02.jpg"
                    alt="Image"
                    class="img-fluid mr-4"
                  />
                  <div class="media-body">
                    <h2 class="tm-color-primary tm-post-title mb-2">
                      {{ getStaff.name }}
                    </h2>
                    <h3 class="tm-h3 mb-3">{{ getStaff.title }}</h3>
                    <p class="mb-0 tm-line-height-short">
                      {{ getStaff.socialMedia1 }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 tm-mb-60 tm-person-col">
                <div class="media tm-person">
                  <img
                    src="/img/about-03.jpg"
                    alt="Image"
                    class="img-fluid mr-4"
                  />
                  <div class="media-body">
                    <h2 class="tm-color-primary tm-post-title mb-2">
                      {{ getStaff2.name }}
                    </h2>
                    <h3 class="tm-h3 mb-3">{{ getStaff2.title }}</h3>
                    <p class="mb-0 tm-line-height-short">
                      {{ getStaff2.socialMedia1 }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 tm-mb-60 tm-person-col">
                <div class="media tm-person">
                  <img
                    src="/img/about-04.jpg"
                    alt="Image"
                    class="img-fluid mr-4"
                  />
                  <div class="media-body">
                    <h2 class="tm-color-primary tm-post-title mb-2">
                      {{ getStaff3.name }}
                    </h2>
                    <h3 class="tm-h3 mb-3">{{ getStaff3.title }}</h3>
                    <p class="mb-0 tm-line-height-short">
                      {{ getStaff3.socialMedia1 }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 tm-mb-60 tm-person-col">
                <div class="media tm-person">
                  <img
                    src="/img/about-05.jpg"
                    alt="Image"
                    class="img-fluid mr-4"
                  />
                  <div class="media-body">
                    <h2 class="tm-color-primary tm-post-title mb-2">
                      {{ getStaff4.name }}
                    </h2>
                    <h3 class="tm-h3 mb-3">{{ getStaff4.title }}</h3>
                    <p class="mb-0 tm-line-height-short">
                      {{ getStaff4.socialMedia1 }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </body>
    </html>
  </div>
</template>
<script>
import Vue from "vue";
import VueResource from "vue-resource";

Vue.use(VueResource);
export default {
  data() {
    return {
      getStaff: {},
      getStaff2: {},
      getStaff3: {},
      getStaff4: {},
    };
  },

  created() {
    this.fetchSingleStaff();
    this.fetchSingleStaff2();
    this.fetchSingleStaff3();
    this.fetchSingleStaff4();
  },
  methods: {
    getComments() {
      this.$router.push({ name: "yorumyap" });
    },
    fetchSingleStaff() {
      const id = 1; // İstediğiniz yorumun ID'si
      this.$http
        .get(`http://localhost:35837/api/Staff/${id}`)
        .then((response) => {
          this.getStaff = response.data; // response.data'ya dizi harmanlaması yapma
          console.log("girdii");
        })
        .catch((error) => {
          console.error("Error fetching staff:", error);
        });
    },
    fetchSingleStaff2() {
      const id = 2; // İstediğiniz yorumun ID'si
      this.$http
        .get(`http://localhost:35837/api/Staff/${id}`)
        .then((response) => {
          this.getStaff2 = response.data; // response.data'ya dizi harmanlaması yapma
          console.log("girdii");
        })
        .catch((error) => {
          console.error("Error fetching staff:", error);
        });
    },
    fetchSingleStaff3() {
      const id = 3; // İstediğiniz yorumun ID'si
      this.$http
        .get(`http://localhost:35837/api/Staff/${id}`)
        .then((response) => {
          this.getStaff3 = response.data; // response.data'ya dizi harmanlaması yapma
          console.log("girdii");
        })
        .catch((error) => {
          console.error("Error fetching staff:", error);
        });
    },
    fetchSingleStaff4() {
      const id = 4; // İstediğiniz yorumun ID'si
      this.$http
        .get(`http://localhost:35837/api/Staff/${id}`)
        .then((response) => {
          this.getStaff4 = response.data; // response.data'ya dizi harmanlaması yapma
          console.log("girdii");
        })
        .catch((error) => {
          console.error("Error fetching staff:", error);
        });
    },
  },
};
</script>
