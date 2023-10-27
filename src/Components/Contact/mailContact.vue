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
              <h1 class="text-center">Xtra Blog</h1>
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
            <h1>Otel Lokasyonu</h1>
            <div class="row tm-row tm-mb-45">
              <div class="col-12">
                <hr class="tm-hr-primary tm-mb-55" />
                <div class="gmap_canvas">
                  <!-- Google Map -->
                  <iframe
                    width="100%"
                    height="477"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                  ></iframe>
                </div>
              </div>
            </div>
            <div class="row tm-row tm-mb-120">
              <div class="col-12">
                <h1 class="tm-color-success tm-post-title tm-mb-60">
                  İstek, Şikayet veya İletişim İçin Bize Mail Gönderin
                </h1>
              </div>
              <div class="col-lg-7 tm-contact-left">
                <form class="mb-5 ml-auto mr-0 tm-contact-form">
                  <!-- <div class="form-group row mb-4">
                    <label
                      for="name"
                      class="col-sm-3 col-form-label text-right tm-color-primary"
                      >İsim</label
                    >
                    <div class="col-sm-9">
                      <input
                        v-model="name"
                        class="form-control mr-0 ml-auto"
                        name="name"
                        id="name"
                        type="text"
                        required
                      />
                    </div>
                  </div> -->
                  <div class="form-group row mb-4">
                    <label
                      for="email"
                      class="col-sm-3 col-form-label text-right tm-color-primary"
                      >Mail Adresi</label
                    >
                    <div class="col-sm-9">
                      <input
                        @input="$v.receiverMail.$touch()"
                        v-model="receiverMail"
                        class="form-control mr-0 ml-auto"
                        name="email"
                        id="email"
                        type="email"
                        required
                      />
                      <small
                        v-if="!$v.receiverMail.required"
                        class="form-text text-danger"
                        >Bu Alan Zorunludur.</small
                      >
                      <small
                        v-if="!$v.receiverMail.email"
                        class="form-text text-muted"
                        >Lütfen geçerli bir e-posta adresi giriniz.</small
                      >
                    </div>
                  </div>
                  <div class="form-group row mb-4">
                    <label
                      for="subject"
                      class="col-sm-3 col-form-label text-right tm-color-primary"
                      >Mesaj</label
                    >
                    <div class="col-sm-9">
                      <input
                        @input="$v.subject.$touch()"
                        v-model="subject"
                        class="form-control mr-0 ml-auto"
                        name="subject"
                        id="subject"
                        type="text"
                        required
                      />
                      <small
                        v-if="!$v.subject.required"
                        class="form-text text-danger"
                        >Bu alan zorunludur.</small
                      >
                      <small
                        v-if="!$v.subject.minLength"
                        class="form-text text-muted"
                        >Konu En Az
                        {{ $v.subject.$params.minLength.min }}
                        Karakterden Oluşmalıdır.</small
                      >
                    </div>
                  </div>

                  <div class="form-group row text-right">
                    <div class="col-12">
                      <button
                        :disabled="$v.$invalid"
                        @click="sendEmail"
                        class="tm-btn tm-btn-primary tm-btn-small"
                        type="button"
                      >
                        E Posta Gönder
                      </button>
                    </div>
                  </div>
                </form>
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
import {
  minLength,
  maxLength,
  required,
  email,
} from "vuelidate/lib/validators";

Vue.use(VueResource);
export default {
  data() {
    return {
      name: "",
      receiverMail: "emrem.yusuf1@gmail.com",
      subject: "",
    };
  },
  validations: {
    receiverMail: {
      required,
      minLength: minLength(3),
      email,
    },
    subject: {
      required,
      minLength: minLength(3),
    },
  },
  created() {
    this.fetchSingleComment();
  },
  methods: {
    onSubmit() {
      let form = {
        name: this.receiverMail,
        subject: this.subject,
      };
      console.log(form);
    },

    sendEmail() {
      const emailData = {
        name: this.name,
        receiverMail: this.receiverMail,
        subject: this.subject,
      };

      this.$http
        .post("http://localhost:35837/api/Mail/Index", emailData)
        .then((response) => {
          console.log("girdi");
          console.log("E-posta gönderildi:", response.body);
          // Burada gerekirse kullanıcıya bir bildirim gösterebilirsiniz.
        })
        .catch((error) => {
          console.error("E-posta gönderilemedi:", error);
          // Burada gerekirse kullanıcıya bir hata bildirimi gösterebilirsiniz.
        });
      //   this.$http
      //     .get(`http://localhost:35837/api/AdminMail`)
      //     .then((response) => {
      //       this.getComment = response.data; // response.data'ya dizi harmanlaması yapma
      //       console.log("girdii");
      //     })
      //     .catch((error) => {
      //       console.error("Error fetching comment:", error);
      //     });
    },

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
