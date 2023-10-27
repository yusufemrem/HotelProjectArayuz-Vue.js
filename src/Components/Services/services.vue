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
            </div>
            <nav class="tm-nav" id="tm-nav">
              <ul>
                <li class="tm-nav-item ">
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
                <li class="tm-nav-item">
                  <router-link to="/src/Components/Staff/staff.vue">
                    <button class="mb-2 tm-btn tm-btn-primary tm-prev-next">
                      Hakkımızda
                    </button></router-link
                  >
                </li>
                <li class="tm-nav-item active">
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
          
            <h1>Servislerimiz</h1>
            <div class="row tm-row">
              <article class="col-12 col-md-6 tm-post">
                <hr class="tm-hr-primary" />
                <router-link to="/Register">
                  <a href="post.html" class="effect-lily tm-post-link tm-pt-60">
                    <div class="tm-post-link-inner">
                      <img src="/img/havuz.jpg" class="img-fluid" />
                    </div>

                    <h2 class="tm-pt-30 tm-color-primary tm-post-title">
                      {{ getServices.title }}
                    </h2>
                  </a>
                </router-link>
                <p class="tm-pt-30">{{ getServices.description }}</p>
              </article>
              <article class="col-12 col-md-6 tm-post">
                <hr class="tm-hr-primary" />
                <a href="post.html" class="effect-lily tm-post-link tm-pt-60">
                  <div class=" tm-post-link-inner">
                    <img src="/img/fitness.jpg" alt="Image" class="img-fluid" />
                  </div>

                  <h2 class="tm-pt-30 tm-color-primary tm-post-title">
                    {{ getServices2.title }}
                  </h2>
                </a>
                <p class="tm-pt-30">
                  <a
                    rel="nofollow"
                    href="https://templatemo.com/tm-553-xtra-blog"
                    target="_blank"
                  ></a>
                  {{ getServices2.description }}
                </p>
              </article>
              <article class="col-12 col-md-6 tm-post">
                <hr class="tm-hr-primary" />
                <a href="post.html" class="effect-lily tm-post-link tm-pt-20">
                  <div class="tm-post-link-inner">
                    <img src="/img/oyun1.jpg" alt="Image" class="img-fluid" />
                  </div>
                  <h1 class="tm-pt-30 tm-color-primary tm-post-title">
                    {{ getServices3.title }}
                  </h1>
                </a>
                <p class="tm-pt-30">
                  {{ getServices3.description }}
                </p>
              </article>
              <article class="col-12 col-md-6 tm-post">
                <hr class="tm-hr-primary" />
                <a href="post.html" class="effect-lily tm-post-link tm-pt-20">
                  <div class="tm-post-link-inner">
                    <img src="/img/eğlence.jpg" alt="Image" class="img-fluid" />
                  </div>
                  <h2 class="tm-pt-30 tm-color-primary tm-post-title">
                    {{ getServices4.title }}
                  </h2>
                </a>
                <p class="tm-pt-30">
                  {{ getServices4.description }}
                </p>
              </article>
              <article class="col-12 col-md-6 tm-post">
                <hr class="tm-hr-primary" />
                <a href="post.html" class="effect-lily tm-post-link tm-pt-20">
                  <div class="tm-post-link-inner">
                    <img src="/img/Yoga.jpg" alt="Image" class="img-fluid" />
                  </div>
                  <h2 class="tm-pt-30 tm-color-primary tm-post-title">
                    {{ getServices5.title }}
                  </h2>
                </a>
                <p class="tm-pt-30">
                  {{ getServices5.description }}
                </p>
              </article>
              <article class="col-12 col-md-6 tm-post">
                <hr class="tm-hr-primary" />
                <a href="post.html" class="effect-lily tm-post-link tm-pt-20">
                  <div class="tm-post-link-inner">
                    <img
                      src="/img/restoran1.jpg"
                      alt="Image"
                      class="img-fluid"
                    />
                  </div>
                  <h2 class="tm-pt-30 tm-color-primary tm-post-title">
                    {{ getServices6.title }}
                  </h2>
                </a>
                <p class="tm-pt-30">
                  {{ getServices6.description }}
                </p>
              </article>
              <article class="col-12 col-md-6 tm-post">
                <hr class="tm-hr-primary" />
                <a href="post.html" class="effect-lily tm-post-link tm-pt-20">
                  <div class="tm-post-link-inner">
                    <img src="/img/cinema.jpg" alt="Image" class="img-fluid" />
                  </div>
                  <h2 class="tm-pt-30 tm-color-primary tm-post-title">
                    {{ getServices7.title }}
                  </h2>
                </a>
                <p class="tm-pt-30">
                  {{ getServices7.description }}
                  <hr>
                  <router-link to="/src/Components/RapidMovie/movietop.vue">
                    <button class="tm-btn tm-btn-primary tm-btn-small">
                      Film Listesi İçin Tıklayın.
                    </button>
                  </router-link>
                </p>
              </article>
            </div>

            <footer class="row tm-row"></footer>
          </main>
        </div>
      </body>
    </html>
  </div>
</template>

<script>
export default {
  methods: {
    navigateHome() {
      //   this.$router.push("/Register");
      // this.$router.push({path: '/'});
      this.$router.push({ name: "rezervasyonyap" });
    },
    getComments() {
      this.$router.push({ name: "yorumyap" });
    },
  },
};
</script>
<script>
import Vue from "vue";
import VueResource from "vue-resource";

Vue.use(VueResource);
export default {
  data() {
    return {
      getServices: {},
      getServices2: {},
      getServices3: {},
      getServices4: {},
      getServices5: {},
      getServices6: {},
      getServices7: {},
    };
  },

  created() {
    this.fetchSingleServices();
    this.fetchSingleServices2();
    this.fetchSingleServices3();
    this.fetchSingleServices4();
    this.fetchSingleServices5();
    this.fetchSingleServices6();
    this.fetchSingleServices7();
  },
  methods: {
    getComments() {
      this.$router.push({ name: "yorumyap" });
    },
    fetchSingleServices() {
      console.log("gg");

      const id = 1; // İstediğiniz yorumun ID'si
      this.$http
        .get(`http://localhost:35837/api/Service/${id}`)
        .then((response) => {
          console.log("gg");
          this.getServices = response.data; // response.data'ya dizi harmanlaması yapma
          console.log("gg");
        })
        .catch((error) => {
          console.error("Error fetching staff:", error);
        });
    },
    fetchSingleServices2() {
      const id = 2; // İstediğiniz yorumun ID'si
      this.$http
        .get(`http://localhost:35837/api/Service/${id}`)
        .then((response) => {
          this.getServices2 = response.data; // response.data'ya dizi harmanlaması yapma
          console.log("girdii");
        })
        .catch((error) => {
          console.error("Error fetching staff:", error);
        });
    },
    fetchSingleServices3() {
      const id = 3; // İstediğiniz yorumun ID'si
      this.$http
        .get(`http://localhost:35837/api/Service/${id}`)
        .then((response) => {
          this.getServices3 = response.data; // response.data'ya dizi harmanlaması yapma
          console.log("girdii");
        })
        .catch((error) => {
          console.error("Error fetching staff:", error);
        });
    },
    fetchSingleServices4() {
      const id = 4; // İstediğiniz yorumun ID'si
      this.$http
        .get(`http://localhost:35837/api/Service/${id}`)
        .then((response) => {
          this.getServices4 = response.data; // response.data'ya dizi harmanlaması yapma
          console.log("girdii");
        })
        .catch((error) => {
          console.error("Error fetching staff:", error);
        });
    },
    fetchSingleServices5() {
      const id = 5; // İstediğiniz yorumun ID'si
      this.$http
        .get(`http://localhost:35837/api/Service/${id}`)
        .then((response) => {
          this.getServices5 = response.data; // response.data'ya dizi harmanlaması yapma
          console.log("girdii");
        })
        .catch((error) => {
          console.error("Error fetching staff:", error);
        });
    },
    fetchSingleServices6() {
      const id = 6; // İstediğiniz yorumun ID'si
      this.$http
        .get(`http://localhost:35837/api/Service/${id}`)
        .then((response) => {
          this.getServices6 = response.data; // response.data'ya dizi harmanlaması yapma
          console.log("girdii");
        })
        .catch((error) => {
          console.error("Error fetching staff:", error);
        });
    },
    fetchSingleServices7() {
      const id = 7; // İstediğiniz yorumun ID'si
      this.$http
        .get(`http://localhost:35837/api/Service/${id}`)
        .then((response) => {
          this.getServices7 = response.data; // response.data'ya dizi harmanlaması yapma
          console.log("girdii");
        })
        .catch((error) => {
          console.error("Error fetching staff:", error);
        });
    },
  },
};
</script>
