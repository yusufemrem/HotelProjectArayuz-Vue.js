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

            <h1>Otel Tanıtım Videomuz</h1>
            <div class="row tm-row">
              <div class="col-12">
                <hr class="tm-hr-primary tm-mb-55" />
                <!-- Video player 1422x800 -->
                <video width="954" height="535" controls class="tm-mb-40">
                  <source
                    src="/img/Pine Bay Holiday Resort Hotel.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div class="row tm-row">
              <div class="col-lg-8 tm-post-col">
                <div class="tm-post-full">
                  <div class="mb-4">
                    <h2 class="pt-2 tm-color-primary tm-post-title">
                      Hotel Project
                    </h2>
                    <p class="tm-mb-40">27 Temmuz 2023 Tarihine Kurulmuştur</p>
                    <p>
                      Şirket kuruluşundan önce HOTEL PROJECT aracılığı ile
                      girişimcilik eğitim programlarına katılmanız ve gerekli
                      süreci tamamlamanız durumunda şirket kuruluşu
                      giderlerinizi devlet desteği olarak geri ödemesiz geri
                      alabilirsiniz. Kuruluş sonrası yapacağınız bazı harcamalar
                      devlet destek ve teşvikleri kapsamında olacak. Bu teşvik
                      ve destekleri HOTEL PROJECT Ekonomi Bakanlığı üzerinden
                      kullanabilmektesiniz. Konu hakkında ayrıntılı bilgi almak
                      için lütfen bizimle iletişime geçiniz. Yukarıda genel
                      anlamda kuruluş aşaması için bilgiler vermeye çalıştık.
                      Unutulmaması gereken nokta her girişim bazı farklılar
                      gösterebilmektedir ve bu girişimin daha başlangıç
                      aşamasında iyi incelenmesi ve buna göre yol haritası
                      çizilmesi gerekiyor. Sermaye tutarı, ortaklık yapısı,
                      kuruluş yöntemi gibi önem arz eden konularda uzman mali
                      müşavir çözüm ortaklarımız size bu süreçte talep etmeniz
                      durumunda yardımcı olacaklardır.
                    </p>
                  </div>

                  <!-- Comments -->
                  <div>
                    <br />
                    <h2 class="tm-color-primary tm-post-title">Yorumlar</h2>
                    <hr class="tm-hr-primary tm-mb-45" />
                    <div class="tm-comment tm-mb-45">
                      <figure class="tm-comment-figure">
                        <img
                          src="/img/comment-1.jpg"
                          alt="Image"
                          class="mb-2 rounded-circle img-thumbnail"
                        />
                        <figcaption class="tm-color-primary text-center">
                          {{ getComment.commentUser }}
                        </figcaption>
                      </figure>
                      <div>
                        <p>
                          {{ getComment.commentContent }}
                        </p>
                        <div class="d-flex justify-content-between">
                          <span class="tm-color-primary">{{
                            getComment.commentDate | formatCommentDate
                          }}</span>
                        </div>
                      </div>
                    </div>
                    <div class="tm-comment-reply tm-mb-45">
                      <hr />
                      <div class="tm-comment">
                        <figure class="tm-comment-figure">
                          <img
                            src="/img/comment-2.jpg"
                            alt="Image"
                            class="mb-2 rounded-circle img-thumbnail"
                          />
                          <figcaption class="tm-color-primary text-center">
                            {{ getComment2.commentUser }}
                          </figcaption>
                        </figure>
                        <p>
                          {{ getComment2.commentContent }}
                        </p>
                      </div>
                      <span class="d-block text-right tm-color-primary">{{
                        getComment2.commentDate | formatCommentDate
                      }}</span>
                      <router-link
                        to="/src/Components/Comments/allComments.vue"
                      >
                        <button
                          class="tm-btn tm-btn-primary tm-btn-small"
                          type="button"
                        >
                          Tüm Yorumları Görüntüle
                        </button>
                      </router-link>
                    </div>
                    <form class="mb-5 tm-comment-form">
                      <h2 class="tm-color-primary tm-post-title mb-4">
                        Yorum Yap
                      </h2>
                      <div class="mb-4">
                        <h3>İsminiz</h3>
                        <input
                          @input="$v.comment.commentUser.$touch()"
                          v-model="comment.commentUser"
                          class="form-control"
                          name="İsminiz"
                          type="text"
                        />
                        <small
                          v-if="!$v.comment.commentUser.required"
                          class="form-text text-danger"
                          >Bu alan zorunludur.</small
                        >
                        <small
                          v-if="!$v.comment.commentUser.minLength"
                          class="form-text text-muted"
                          >İsim En Az
                          {{ $v.comment.commentUser.$params.minLength.min }}
                          Karakterden Oluşmalıdır.</small
                        >
                      </div>

                      <div class="mb-4">
                        <h3>Yorumunuz</h3>
                        <input
                          @input="$v.comment.commentContent.$touch()"
                          v-model="comment.commentContent"
                          class="form-control"
                          name="True or False"
                          type="text"
                        />
                        <small
                          v-if="!$v.comment.commentContent.required"
                          class="form-text text-danger"
                          >Bu alan zorunludur.</small
                        >
                        <small
                          v-if="!$v.comment.commentContent.minLength"
                          class="form-text text-muted"
                          >Yorum En Az
                          {{ $v.comment.commentContent.$params.minLength.min }}
                          Karakterden Oluşmalıdır.</small
                        >
                      </div>
                      <div class="text-right">
                        <button
                          :disabled="$v.$invalid"
                          onclick="alert('Yorum Yapma İşleminiz Başarılı')"
                          @click="saveComment"
                          class="tm-btn tm-btn-primary tm-btn-small"
                          type="button"
                        >
                          Yorum Yap
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <aside class="col-lg-4 tm-aside-col">
                <div class="tm-post-sidebar">
                  <hr class="mb-3 tm-hr-primary" />
                  <h2 class="mb-4 tm-post-title tm-color-primary">
                    Sayfa İçeriği
                  </h2>
                  <ul class="tm-mb-75 pl-5 tm-category-list">
                    <li>
                      <a href="#" class="tm-color-primary">Otel Video</a>
                    </li>
                    <li>
                      <a href="#" class="tm-color-primary">Otelin Kuruluşu</a>
                    </li>
                    <li>
                      <a href="#" class="tm-color-primary"
                        >Yorumlar ve Yorum Yapma</a
                      >
                    </li>
                  </ul>
                </div>
              </aside>
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
import { minLength, maxLength, required } from "vuelidate/lib/validators";

Vue.use(VueResource);
export default {
  data() {
    return {
      comment: {
        commentUser: null,
        commentContent: null,
        commentState: true,
      },
      getComment: {},
      getComment2: {},
    };
  },
  validations: {
    comment: {
      commentUser: {
        required,
        minLength: minLength(3),
      },
      commentContent: {
        required,
        minLength: minLength(3),
      },
    },
  },
  created() {
    this.fetchSingleComment();
    this.fetchSingleComment2();
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
  methods: {
    onSubmit() {
      let form = {
        commentUser: this.comment.commentUser,
        commentContent: this.comment.commentContent,
      };
      console.log(form);
    },
    fetchSingleComment() {
      const id = 1; // İstediğiniz yorumun ID'si
      this.$http
        .get(`http://localhost:35837/api/Comment/${id}`)
        .then((response) => {
          this.getComment = response.data; // response.data'ya dizi harmanlaması yapma
          console.log("girdii");
        })
        .catch((error) => {
          console.error("Error fetching comment:", error);
        });
    },
    fetchSingleComment2() {
      const id = 2; // İstediğiniz yorumun ID'si
      this.$http
        .get(`http://localhost:35837/api/Comment/${id}`)
        .then((response) => {
          this.getComment2 = response.data; // response.data'ya dizi harmanlaması yapma
          console.log("girdii");
        })
        .catch((error) => {
          console.error("Error fetching comment:", error);
        });
    },
    saveComment() {
      this.$store.dispatch("saveComment", this.comment);
      this.comment.commentUser = null;
      this.comment.commentContent = null;
    },
  },
};
</script>
