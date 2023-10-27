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
      <link href="/html3/css/bootstrap.min.css" rel="stylesheet" />
      <link href="/html3/css/templatemo-xtra-blog.css" rel="stylesheet" />
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
            <h1 class="text-center">Hotel Project</h1>
          </div>
          <nav class="tm-nav" id="tm-nav">
            <ul>
              <li class="tm-nav-item">
                <router-link to="/src/Components/Home/homepage.vue">
                  <a href="index.html" class="tm-nav-link">
                    <i class="fas fa-home"></i>
                    Siteye Git
                  </a>
                </router-link>
              </li>
              <li class="tm-nav-item ">
                <router-link to="/src/Components/Admin/index.vue">
                  <a href="about.html" class="tm-nav-link">
                    <i class="fas fa-users"></i>
                    Dashboard
                  </a>
                </router-link>
              </li>
              <li class="tm-nav-item ">
                <router-link to="/src/Components/Admin/adminStaff.vue">
                  <a href="post.html" class="tm-nav-link">
                    <i class="fas fa-pen"></i>
                    Personeller
                  </a>
                </router-link>
              </li>

              <li class="tm-nav-item active">
                <router-link to="/src/Components/Admin/adminReservation.vue">
                  <a href="contact.html" class="tm-nav-link">
                    <i class="far fa-comments"></i>
                    Rezervasyonlar
                  </a>
                </router-link>
              </li>
              <li class="tm-nav-item ">
                <router-link to="/src/Components/Admin/adminRole.vue">
                  <a href="index.html" class="tm-nav-link">
                    <i class="fas fa-home"></i>
                    Roller
                  </a>
                </router-link>
              </li>
              <li class="tm-nav-item">
                <router-link to="/src/Components/Admin/adminRoom.vue">
                  <a href="index.html" class="tm-nav-link">
                    <i class="fas fa-home"></i>
                    Odalar
                  </a>
                </router-link>
              </li>

              <li class="tm-nav-item">
                <router-link to="/src/Components/Guest/guest.vue">
                  <a href="index.html" class="tm-nav-link">
                    <i class="fas fa-home"></i>
                    Misafirler
                  </a>
                </router-link>
              </li>
              <li class="tm-nav-item">
                <router-link to="/src/Components/ExcelReport/excelreport.vue">
                  <a href="index.html" class="tm-nav-link">
                    <i class="fas fa-home"></i>
                    Excel Raporları
                  </a>
                </router-link>
              </li>
              <li class="tm-nav-item">
                <router-link to="/src/Components/PdfReport/pdfreport.vue">
                  <a href="index.html" class="tm-nav-link">
                    <i class="fas fa-home"></i>
                    Pdf Raporları
                  </a>
                </router-link>
              </li>
              <li class="tm-nav-item">
                <router-link to="/src/Components/Login/login.vue">
                  <a href="index.html" class="tm-nav-link">
                    <i class="fas fa-sign"></i>
                    Çıkış Yap
                  </a>
                </router-link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main class="tm-main">
        <!-- Search form -->

        <div>
          <table class="table table-bordered">
            <tr>
              <th>Oda Numarası</th>
              <th>İsim Soyisim</th>
              <th>Rezervasyon Başlaangıç Tarihi</th>
              <th>Rezervasyon Bitiş Tarihi</th>
              <th>Müşteri Adres</th>
              <th>Yetişkin Sayısı</th>
              <th>Çocuk Sayısı</th>
              <th>Oda Sayısı</th>
              <th>Özel İstek</th>
              <th>Sil</th>
              <th>Güncelle</th>
            </tr>

            <tr v-for="bookings in bookingList" :key="bookings.id">
              <th>{{ bookings.bookingID }}</th>
              <th>{{ bookings.name }}</th>
              <th>{{ bookings.ceckin | formatReservationDate }}</th>
              <td>{{ bookings.checkOut | formatReservationDate }}</td>
              <td>{{ bookings.city }}</td>
              <td>{{ bookings.adultCount }}</td>
              <td>{{ bookings.childCount }}</td>
              <td>{{ bookings.roomCount }}</td>
              <td>{{ bookings.specialRequest }}</td>

              <td>
                <button
                  @click="deleteStaff(staff.staffID)"
                  class="btn mb-1 btn-rounded btn-outline-danger"
                >
                  Sil
                </button>
                <!-- <a
                    @click="deleteStaff(staff.id)"
                    class="btn mb-1 btn-rounded btn-outline-danger"
                    >Sil</a
                  > -->
              </td>
              <td>
                <a href="" class="btn mb-1 btn-rounded btn-outline-success"
                  >Güncelle</a
                >
              </td>
            </tr>
          </table>

          <button
            @click="toggleAddReservationForm"
            class="tm-btn tm-btn-primary tm-btn-small"
            type="button"
          >
            Yeni Rezervasyon Girişi
          </button>
          <!-- <h2 class="tm-color-primary tm-post-title mb-4">
              Personel Listesi
            </h2>
            <ul>
              <li v-for="staff in staffList" :key="staff.id">
                {{ staff.name }} - {{ staff.title }}
              </li>
            </ul> -->
        </div>
        <hr />
        <div>
          <form class="" v-if="showAddReservationForm">
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
            <h3>Rezervasyon Başlangıç Tarihi</h3>

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
            <h3>Rezervasyon Bitiş Tarihi</h3>

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
            <h3>Lokasyon</h3>

            <div class="mb-4">
              <input
                v-model="bookings.city"
                class="form-control"
                name="True or False"
                type="text"
              />
              <small
                v-if="!$v.bookings.city.required"
                class="form-text text-danger"
                >Bu alan zorunludur.</small
              >
              <small
                v-if="!$v.bookings.city.minLength"
                class="form-text text-muted"
                >Şehir En Az
                {{ $v.bookings.city.$params.minLength.min }} Karakterden
                Oluşmalıdır.</small
              >
            </div>

            <div class="text-right">
              <button
                :disabled="$v.$invalid"
                onclick="alert('Kaydetme işlemi başarılı')"
                @click="savereservation"
                class="tm-btn tm-btn-primary tm-btn-small "
                type="button"
              >
                Kaydet
              </button>
            </div>
          </form>
          <button @click="sortBookingsByCheckInDate">
            Rezervasyonları En Yeni Tarihe Göre Sırala
          </button>
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
        bookingID: null,
        name: null,
        ceckin: null,
        checkOut: null,
        city: null,
        adultCount: null,
        childCount: null,
        roomCount: null,
        specialRequest: null,
      },
      bookingList: [],
      showAddReservationForm: false,
    };
  },
  filters: {
    formatReservationDate(value) {
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
  validations: {
    bookings: {
      name: { required, minLength: minLength(2) },
      ceckin: { required },
      checkOut: { required },
      city: { required, minLength: minLength(2) },
    },
  },
  created() {
    this.fetchBookingList();
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
        adultCount: this.bookings.roomCount,
        specialRequest: this.bookings.specialRequest,
      };
      console.log(form);
    },
    toggleAddReservationForm() {
      this.showAddReservationForm = !this.showAddReservationForm;
    },
    // getComments() {
    //   this.$router.push({ name: "yorumyap" });
    // },
    // fetchSingleStaff4() {
    //   const id = 1003; // İstediğiniz yorumun ID'si
    //   this.$http
    //     .get(`http://localhost:35837/api/Staff/${id}`)
    //     .then((response) => {
    //       this.getStaff4 = response.data; // response.data'ya dizi harmanlaması yapma
    //       console.log("girdii");
    //     })
    //     .catch((error) => {
    //       console.error("Error fetching staff:", error);
    //     });
    // },
    savereservation() {
      this.$store.dispatch("savereservation", this.bookings);
      console.log("kayıttt");
      this.bookings.name = null;
      this.bookings.ceckin = null;
      this.bookings.checkOut = null;
      this.bookings.city = null;
      console.log("kayıt işelemi");
    },

    fetchBookingList() {
      this.$http
        .get("http://localhost:35837/api/AdminBooking/BookingList") // API'den staff verilerini al
        .then((response) => {
          this.bookingList = response.body; // Alınan veriyi staffList dizisine atar
        })
        .catch((error) => {
          console.error("Hata:", error);
        });
    },
    // deleteStaff(id) {
    //   // Make a DELETE request to your API endpoint to delete the staff member with the given ID
    //   console.log("Deleting staff with ID:", id);
    //   this.$http
    //     .delete(`http://localhost:35837/api/Staff/${id}`)
    //     .then(() => {
    //       // Remove the deleted staff member from the staffList array
    //       this.staffList = this.staffList.filter(
    //         (staff) => staff.staffID !== id
    //       );
    //     })
    //     .catch((error) => {
    //       console.error("Error deleting staff:", error);
    //     });
    // },

    // Rezervasyonları rezervasyon bitiş tarihine göre sırala
    sortBookingsByCheckInDate() {
      this.bookingList.sort((a, b) => {
        // Verileri rezervasyon bitiş tarihine göre sırala
        const dateA = new Date(a.ceckin);
        const dateB = new Date(b.ceckin);

        if (dateA > dateB) {
          return -1;
        } else if (dateA < dateB) {
          return 1;
        } else {
          return 0;
        }
      });
    },
  },
};
</script>
