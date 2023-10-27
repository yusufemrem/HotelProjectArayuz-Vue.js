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
    
    --></head>
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
              <li class="tm-nav-item">
                <router-link to="/src/Components/Services/services.vue">
                  <button class="mb-2 tm-btn tm-btn-primary tm-prev-next">
                    Hizmetlerimiz
                  </button></router-link
                >
              </li>
              <li class="tm-nav-item active">
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

      <main class="tm-main">
        <!-- Search form -->

        <hr />
        <div>
          <form class="">
            <h2 class="tm-color-primary tm-post-title mb-4">
              Rezervasyon Ekleme Formu
            </h2>
            <div class="mb-4">
              <h3>İsim Soyisim</h3>
              <input
                @input="$v.bookings.name.$touch()"
                v-model="bookings.name"
                class="form-control"
                name="İsminiz"
                type="text"
              />
              <small
                v-if="!$v.bookings.name.required"
                class="form-text text-danger"
                >Bu alan zorunludur.</small
              >
              <small
                v-if="!$v.bookings.name.minLength"
                class="form-text text-muted"
                >İsim En Az
                {{ $v.bookings.name.$params.minLength.min }} Karakterden
                Oluşmalıdır.</small
              >
            </div>
            <h3>Rezervasyon Başlangıç Tarihi (yıl-ay-gün)</h3>

            <div class="mb-4">
              <input
                @input="$v.bookings.ceckin.$touch()"
                v-model="bookings.ceckin"
                class="form-control"
                name="True or False"
                type="text"
              />

              <small
                v-if="!$v.bookings.ceckin.required"
                class="form-text text-danger"
                >Bu alan zorunludur.</small
              >
            </div>
            <h3>Rezervasyon Bitiş Tarihi (yıl-ay-gün)</h3>

            <div class="mb-4">
              <input
                v-model="bookings.checkOut"
                class="form-control"
                name="True or False"
                type="text"
              />

              <small
                v-if="!$v.bookings.checkOut.required"
                class="form-text text-danger"
                >Bu alan zorunludur.</small
              >
            </div>
            <h3>Hangi Lokasyondaki Otel İçin Rezervasyon Yapmak İstersiniz</h3>

            <div class="mb-4">
              <div class="form-floating">
                <select
                  class="form-control"
                  id="select1"
                  v-model="bookings.city"
                >
                  <option value="Uludağ">Uludağ</option>
                  <option value="Singapur">Singapur</option>
                  <option value="London">London</option>
                  <option value="Bodrum">Bodrum</option>
                  <option value="Çeşme">Çeşme</option>
                  <option value="Kartalkaya">Kartalkaya</option>
                </select>
              </div>
              <!-- <input
                v-model="bookings.city"
                class="form-control"
                name="True or False"
                type="text"
              /> -->
              <small
                v-if="!$v.bookings.city.required"
                class="form-text text-danger"
                >Bu alan zorunludur.</small
              >
            </div>
            <h3>Yetişkin Sayısı</h3>

            <div class="mb-4">
              <div class="form-floating">
                <select
                  class="form-control"
                  id="select1"
                  v-model="bookings.adultCount"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <!-- <input
    v-model="bookings.city"
    class="form-control"
    name="True or False"
    type="text"
  /> -->
              <!-- <small
                v-if="!$v.bookings.city.required"
                class="form-text text-danger"
                >Bu alan zorunludur.</small
              > -->
            </div>
            <h3>Çocuk Sayısı (0-7 Yaş Aralığı)</h3>

            <div class="mb-4">
              <div class="form-floating">
                <select
                  class="form-control"
                  id="select1"
                  v-model="bookings.childCount"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <!-- <input
    v-model="bookings.city"
    class="form-control"
    name="True or False"
    type="text"
  /> -->
              <!-- <small
                v-if="!$v.bookings.city.required"
                class="form-text text-danger"
                >Bu alan zorunludur.</small
              > -->
            </div>
            <h3>Oda Sayısı</h3>

            <div class="mb-4">
              <div class="form-floating">
                <select
                  class="form-control"
                  id="select1"
                  v-model="bookings.roomCount"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </div>
            <h3>Özel İstekler</h3>

            <div class="col-12">
              <div class="form-floating">
                <textarea
                  class="form-control"
                  placeholder="Özel İstekler"
                  v-model="bookings.specialRequest"
                  id="message"
                  style="height: 100px"
                ></textarea>
              </div>
            </div>
            <br />
            <div class="text-right">
              <button
                :disabled="$v.$invalid"
                onclick="alert('Kaydetme işlemi başarılı')"
                @click="savebooking"
                class="tm-btn tm-btn-primary col-12 "
                type="button"
              >
                Rezervasyon Yap
              </button>
            </div>
          </form>
        </div>
      </main>
    </body>
  </html>
</template>
<script>
import Vue from "vue";
import VueResource from "vue-resource";
Vue.use(VueResource);
import {
  minLength,
  maxLength,
  required,
  numeric,
} from "vuelidate/lib/validators";
export default {
  data() {
    return {
      bookings: {
        name: null,
        ceckin: null,
        checkOut: null,
        city: null,
        adultCount: null,
        childCount: null,
        roomCount: null,
        specialRequest: null,
      },
    };
  },
  validations: {
    bookings: {
      name: { required, minLength: minLength(2) },
      ceckin: { required },
      checkOut: { required },
      city: { required },
      // adultCount: { required },
      // childCount: { required },
      // roomCount: { required },
      // specialRequest: { required },
    },
  },

  methods: {
    onSubmit() {
      let form = {
        name: this.bookings.name,
        ceckin: this.bookings.ceckin,
        checkOut: this.bookings.checkOut,
        city: this.bookings.city,
        adultCount: this.bookings.adultCount,
        childCount: this.bookings.childCount,
        roomCount: this.bookings.roomCount,
        specialRequest: this.bookings.specialRequest,
      };
      console.log(form);
    },
    savebooking() {
      this.$store.dispatch("savebooking", this.bookings);
      console.log("kayıttt");
      this.bookings.name = null;
      this.bookings.ceckin = null;
      this.bookings.checkOut = null;
      this.bookings.city = null;
      this.bookings.adultCount = null;
      this.bookings.childCount = null;
      this.bookings.roomCount = null;
      this.bookings.specialRequest = null;

      console.log("kayıt işelemi");
    },
    navigateHome() {
      //   this.$router.push("/Register");
      // this.$router.push({path: '/'});
      this.$router.push({ name: "rezervasyonyapma" });
    },
    getComments() {
      this.$router.push({ name: "yorumyap" });
    },
  },
};
</script>
