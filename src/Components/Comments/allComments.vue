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
                <i class="fas fa-times fa-2x"></i>
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
                <li class="tm-nav-item active">
                  <router-link to="/Comments">
                    <button class="mb-2 tm-btn tm-btn-primary tm-prev-next">
                      Öne Çıkan Yorumlar
                    </button></router-link
                  >
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

            <div class="row tm-row">
              <div class="col-lg-10 tm-post-col">
                <div class="tm-post-full">
                  <!-- Comments -->
                  <div>
                    <div class="tm-comment-reply tm-mb-45">
                      <h1 class="text-success">
                        Otelimiz Hakkında Yapılan Yorumlar
                      </h1>
                    </div>
                    <div class="table-container">
                      <table class="table table-bordered">
                        <tr>
                          <th>#</th>
                          <th>İsim Soyisim</th>
                          <th>Yorum</th>
                          <th>Yorum Tarihi</th>
                        </tr>

                        <tr v-for="comment in allComments" :key="comment.id">
                          <th>{{ comment.commentID }}</th>
                          <th>{{ comment.commentUser }}</th>
                          <td>{{ comment.commentContent }}</td>
                          <td>{{ comment.commentDate | formatCommentDate }}</td>
                        </tr>
                      </table>

                      <router-link to="/src/Components/Comments/comments.vue">
                        <button class="tm-btn tm-btn-primary tm-btn-small">
                          Önceki Sayfaya Dön
                        </button>
                      </router-link>
                    </div>
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
      allComments: [],
    };
  },
  created() {
    this.fetchCommentList();
  },
  methods: {
    fetchCommentList() {
      this.$http
        .get("http://localhost:35837/api/Comment/getListCommnent") // API'den staff verilerini al
        .then((response) => {
          this.allComments = response.body; // Alınan veriyi staffList dizisine atar
        })
        .catch((error) => {
          console.error("Hata:", error);
        });
    },
  },
  filters: {
    formatCommentDate(value) {
      if (typeof value === "string") {
        // Önce "T" karakterini boşlukla değiştirin
        value = value.replace("T", " ");
        // Daha sonra tarihi uygun bir şekilde formatlayın
        return new Date(value).toLocaleDateString("tr-TR", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
      }
      return value;
    },
  },
};
</script>
<style></style>
<!-- <div class="table-container">
          <table class="table table-bordered">
            <tr>
              <th>#</th>
              <th>İsim Soyisim</th>
              <th>Yorum</th>
            </tr>

            <tr v-for="comment in allComments" :key="comment.id">
              <th>{{ comment.commentID }}</th>
              <th>{{ comment.commentUser }}</th>
              <td>{{ comment.commentContent }}</td>
            </tr>
          </table>

          <router-link to="/src/Components/Comments/comments.vue">
            <button class="tm-btn tm-btn-primary tm-btn-small">
              Önceki Sayfaya Dön
            </button>
          </router-link>
        </div> -->
