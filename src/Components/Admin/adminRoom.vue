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

              <li class="tm-nav-item ">
                <router-link to="/src/Components/Admin/adminReservation.vue">
                  <a href="post.html" class="tm-nav-link">
                    <i class="fas fa-pen"></i>
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
              <li class="tm-nav-item active">
                <router-link to="/src/Components/Admin/adminRoom.vue">
                  <a href="post.html" class="tm-nav-link">
                    <i class="fas fa-pen"></i>
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
              <th>Oda Fiyatı / Günlük</th>
              <th>Başlık</th>
              <th>Yatak Sayısı</th>
              <th>wifi</th>
              <th>Sil</th>
              <th>Güncelle</th>
            </tr>

            <tr v-for="rooms in roomList" :key="rooms.id">
              <th>{{ rooms.roomNumber }}</th>
              <th>{{ rooms.price }}</th>
              <td>{{ rooms.title }}</td>
              <td>{{ rooms.bedCount }}</td>
              <td>{{ rooms.wifi }}</td>

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
            @click="toggleAddRoomForm"
            class="tm-btn tm-btn-primary tm-btn-small"
            type="button"
          >
            Yeni Oda Girişi
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
          <form class="" v-if="showAddRoomForm">
            <h2 class="tm-color-primary tm-post-title mb-4">
              Oda Ekleme Formu
            </h2>

            <h3>Oda Numarası</h3>

            <div class="mb-4">
              <input
                @input="$v.rooms.roomNumber.$touch()"
                v-model="rooms.roomNumber"
                class="form-control"
                type="text"
              />
              <small
                v-if="!$v.rooms.roomNumber.numeric"
                class="form-text text-muted"
                >Lütfen Oda Numarası rakamlardan oluşsun.</small
              >
              <small
                v-if="!$v.rooms.roomNumber.required"
                class="form-text text-danger"
                >Bu alan zorunludur.</small
              >
            </div>
            <h3>Oda Ücreti / Günlük</h3>

            <div class="mb-4">
              <input
                @input="$v.rooms.price.$touch()"
                v-model="rooms.price"
                class="form-control"
                type="text"
              />
              <small v-if="!$v.rooms.price.numeric" class="form-text text-muted"
                >Lütfen Oda Fiyatı Rakamlardan oluşsun.</small
              >
              <small
                v-if="!$v.rooms.price.required"
                class="form-text text-danger"
                >Bu alan zorunludur.</small
              >
            </div>
            <h3>Başlık</h3>
            <div class="mb-4">
              <input
                @input="$v.rooms.title.$touch()"
                v-model="rooms.title"
                class="form-control"
                type="text"
              />
              <small
                v-if="!$v.rooms.title.required"
                class="form-text text-danger"
                >Bu alan zorunludur.</small
              >
              <small
                v-if="!$v.rooms.title.minLength"
                class="form-text text-muted"
                >İsim En Az
                {{ $v.rooms.title.$params.minLength.min }} Karakterden
                Oluşmalıdır.</small
              >
            </div>
            <h3>Yatak Sayısı</h3>

            <div class="mb-4">
              <input
                @input="$v.rooms.bedCount.$touch()"
                v-model="rooms.bedCount"
                class="form-control"
                type="text"
              />
              <small
                v-if="!$v.rooms.bedCount.numeric"
                class="form-text text-muted"
                >Lütfen Yatak Sayısı Rakamlardan oluşsun.</small
              >
              <small
                v-if="!$v.rooms.bedCount.required"
                class="form-text text-danger"
                >Bu alan zorunludur.</small
              >
            </div>
            <h3>Wifi</h3>

            <div class="mb-4">
              <input
                @input="$v.rooms.wifi.$touch()"
                v-model="rooms.wifi"
                class="form-control"
                type="text"
              />
              <small
                v-if="!$v.rooms.wifi.required"
                class="form-text text-danger"
                >Bu alan zorunludur.</small
              >
              <small
                v-if="!$v.rooms.wifi.minLength"
                class="form-text text-muted"
                >İsim En Az
                {{ $v.rooms.wifi.$params.minLength.min }} Karakterden
                Oluşmalıdır.</small
              >
            </div>
            <div class="text-right">
              <button
                :disabled="$v.$invalid"
                onclick="alert('Kaydetme işlemi başarılı')"
                @click="saveroom"
                class="tm-btn tm-btn-primary tm-btn-small "
                type="button"
              >
                Kaydet
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
import {
  minLength,
  maxLength,
  required,
  numeric,
} from "vuelidate/lib/validators";

Vue.use(VueResource);
export default {
  data() {
    return {
      rooms: {
        roomNumber: null,
        price: null,
        title: null,
        bedCount: null,
        wifi: null,
      },
      roomList: [],
      showAddRoomForm: false,
    };
  },
  validations: {
    rooms: {
      roomNumber: {
        required,
        numeric,
      },
      price: { required, numeric },
      title: { required, minLength: minLength(3) },
      bedCount: { required, numeric },
      wifi: { required, minLength: minLength(3) },
    },
  },
  created() {
    this.fetchRoomList();
  },
  methods: {
    toggleAddRoomForm() {
      this.showAddRoomForm = !this.showAddRoomForm;
    },
    onSubmit() {
      let form = {
        roomNumber: this.rooms.roomNumber,
        price: this.rooms.price,
        title: this.rooms.title,
        bedCount: this.rooms.bedCount,
        wifi: this.rooms.wifi,
      };
      console.log(form);
    },
    getComments() {
      this.$router.push({ name: "yorumyap" });
    },
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
    saveroom() {
      this.$store.dispatch("saveroom", this.rooms);
      this.rooms.roomNumber = null;
      this.rooms.price = null;
      this.rooms.title = null;
      this.rooms.bedCount = null;
      this.rooms.wifi = null;
    },

    fetchRoomList() {
      this.$http
        .get("http://localhost:35837/api/AdminRoom/getListRoom") // API'den staff verilerini al
        .then((response) => {
          this.roomList = response.body; // Alınan veriyi staffList dizisine atar
        })
        .catch((error) => {
          console.error("Hata:", error);
        });
    },
    //   deleteStaff(id) {
    //     // Make a DELETE request to your API endpoint to delete the staff member with the given ID
    //     console.log("Deleting staff with ID:", id);
    //     this.$http
    //       .delete(`http://localhost:35837/api/Staff/${id}`)
    //       .then(() => {
    //         // Remove the deleted staff member from the staffList array
    //         this.staffList = this.staffList.filter(
    //           (staff) => staff.staffID !== id
    //         );
    //       })
    //       .catch((error) => {
    //         console.error("Error deleting staff:", error);
    //       });
    //   },
  },
};
</script>
