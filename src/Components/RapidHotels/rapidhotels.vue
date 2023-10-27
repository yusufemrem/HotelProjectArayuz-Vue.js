<template>
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Xtra Blog</title>
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
              <i class="fas fa-times fa-2x"></i>
            </div>
            <h1 class="text-center">Hotel Project</h1>
          </div>
          <nav class="tm-nav" id="tm-nav">
            <ul>
              <li class="tm-nav-item ">
                <router-link to="/">
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
              <li class="tm-nav-item ">
                <router-link to="/src/Components/Booking/booking.vue">
                  <button class="mb-2 tm-btn tm-btn-primary tm-prev-next">
                    Rezervasyon Yap
                  </button></router-link
                >
              </li>
              <li class="tm-nav-item active">
                <router-link to="/src/Components/RapidHotels/rapidhotels.vue">
                  <button class="mb-2 tm-btn tm-btn-primary tm-prev-next">
                    Diğer Otellerimiz
                  </button></router-link
                >
              </li>
              <li class="tm-nav-item">
                <router-link to="/src/Components/RapidMovie/movietop.vue">
                  <button class="mb-2 tm-btn tm-btn-primary tm-prev-next">
                    Sinema Film Listesi
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
          <p class="tm-mb-80 pr-5 text-white">
            Beğendiğiniz Tatil İçin Rezervasyon Yapmayı Unutmayın. Birbirinden
            Harika Otel Odalarımız İçin Aşağıdaki Butona Tıklayarak Bilgi
            Alabirsiniz.
            <br />
            <br />
            <router-link to="/src/Components/Rooms/room.vue">
              <button class=" tm-social-icon">
                <h1>Otel Oda Detay</h1>
              </button>
            </router-link>
          </p>
        </div>
      </header>

      <main class="tm-main">
        <!-- Search form -->

        <hr />
        <div>
          <table class="table table-bordered">
            <tr>
              <th>#</th>
              <th>Otel Adı</th>
              <th>Otel Adıa</th>
            </tr>

            <tr v-for="(item, index) in hotels" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ item.hotel_name }} p</td>
              <td>{{ item }}</td>

              <td>
                <a href="" class="btn mb-1 btn-rounded btn-outline-success"
                  >Güncelle</a
                >
              </td>
            </tr>
          </table>
        </div>
      </main>
    </body>
  </html>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      hotels: [],
    };
  },
  created() {
    this.rapidHotels();
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
  },
  mounted() {
    // API'den verileri almak için Axios kullanın
    axios
      .get("http://localhost:35837/api/HotelSearch/Index")
      .then((response) => {
        this.hotels = response.data; // API'den gelen verileri hotels verisine atayın
      })
      .catch((error) => {
        console.error("API Hatası:", error);
      });
  },
};
</script>
