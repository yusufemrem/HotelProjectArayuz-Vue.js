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
              <li class="tm-nav-item active">
                <router-link to="/src/Components/Admin/adminStaff.vue">
                  <a href="post.html" class="tm-nav-link">
                    <i class="fas fa-pen"></i>
                    Personeller
                  </a>
                </router-link>
              </li>

              <li class="tm-nav-item"></li>
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
        <input
          v-model="searchText"
          class="form-control tm-search-input"
          name="query"
          type="text"
          placeholder="Personel Arayın"
          aria-label="Search"
        />
        <br />
        <div>
          <table class="table table-bordered">
            <tr>
              <th>#</th>
              <th>Personel Adı</th>
              <th>Personel Ünvan</th>
              <th>Sil</th>
              <th>Güncelle</th>
            </tr>

            <tr v-for="staff in filtered" :key="staff.id">
              <th>{{ staff.staffID }}</th>
              <th>{{ staff.name }}</th>
              <td>{{ staff.title }}</td>

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
            @click="toggleAddStaffForm"
            class="tm-btn tm-btn-primary tm-btn-small"
            type="button"
          >
            Yeni Personel Girişi
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
          <form class="" v-if="showAddStaffForm" @submit.prevent="onSubmit">
            <h2 class="tm-color-primary tm-post-title mb-4">
              Personel Ekleme Formu
            </h2>
            <div class="mb-4">
              <h3>Personel İsim Soyisim</h3>

              <input
                @input="$v.staffs.name.$touch()"
                v-model="staffs.name"
                class="form-control"
                name="İsminiz"
                type="text"
              />
              <small
                v-if="!$v.staffs.name.required"
                class="form-text text-danger"
                >Bu alan zorunludur.</small
              >
              <small
                v-if="!$v.staffs.name.minLength"
                class="form-text text-muted"
                >İsim En Az
                {{ $v.staffs.name.$params.minLength.min }} Karakterden
                Oluşmalıdır.</small
              >
            </div>

            <h3>Personel Mesleği</h3>

            <div class="mb-4">
              <input
                @input="$v.staffs.title.$touch()"
                v-model="staffs.title"
                class="form-control"
                name="True or False"
                type="text"
              />
              <small
                v-if="!$v.staffs.title.required"
                class="form-text text-danger"
                >Bu alan zorunludur.</small
              >
              <small
                v-if="!$v.staffs.title.minLength"
                class="form-text text-muted"
                >Personel Mesleği En Az
                {{ $v.staffs.title.$params.minLength.min }} Karakterden
                Oluşmalıdır.</small
              >
            </div>

            <div class="text-right">
              <button
                onclick="alert('Kaydetme işlemi başarılı')"
                @click="savestaffs"
                class="tm-btn tm-btn-primary tm-btn-small "
                type="button"
                :disabled="$v.$invalid"
              >
                Kaydet
              </button>
            </div>
          </form>

          <div class="card p-4 mt-3 shadow" style="width: 400px;">
            <p>{{ $v }} a</p>
          </div>
        </div>
      </main>
    </body>
  </html>
</template>
<script>
import Vue from "vue";
import VueResource from "vue-resource";

import { minLength, maxLength, required } from "vuelidate/lib/validators";

Vue.use(VueResource);
export default {
  data() {
    return {
      staffs: {
        name: null,
        title: null,
      },

      staffList: [],
      searchText: "",
      showAddStaffForm: false,
    };
  },
  validations: {
    staffs: {
      name: { required, minLength: minLength(3) },
      title: { required, minLength: minLength(3) },
    },
  },
  created() {
    this.fetchStaffList();
  },
  methods: {
    toggleAddStaffForm() {
      this.showAddStaffForm = !this.showAddStaffForm;
    },
    onSubmit() {
      let form = {
        name: this.staffs.name,
        title: this.staffs.title,
      };
      console.log(form);
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
    savestaffs() {
      this.$store.dispatch("savestaffs", this.staffs);
      this.staffs.name = null;
      this.staffs.title = null;
      this.showAddStaffForm = true;
    },

    async fetchStaffList() {
      // try {
      //   const response = await this.$store.dispatch("getListstaffs");
      //   this.staffList = response.data; // Alınan veriyi staffList dizisine atar
      // } catch (error) {
      //   console.error("Hata:", error);
      // }
      // await this.$store.dispatch("getListstaffs");

      this.$http
        .get("http://localhost:35837/api/Staff/getListStaff") // API'den staff verilerini al
        .then((response) => {
          this.staffList = response.body; // Alınan veriyi staffList dizisine atar
        })
        .catch((error) => {
          console.error("Hata:", error);
        });
    },
    deleteStaff(id) {
      // Make a DELETE request to your API endpoint to delete the staff member with the given ID
      console.log("Deleting staff with ID:", id);
      this.$http
        .delete("http://localhost:35837/api/Staff/DeleteStaff/" + id)
        .then(() => {
          // Remove the deleted staff member from the staffList array
          this.staffList = this.staffList.filter(
            (staff) => staff.staffID !== id
          );
        })
        .catch((error) => {
          console.error("Error deleting staff:", error);
        });
    },
  },

  computed: {
    filtered() {
      if (!this.searchText) return this.staffList; // Eğer searchText boşsa, tüm staffList'i göster

      return this.staffList.filter((staff) => {
        if (!staff.name || !staff.title) return false; // staff.name veya staff.title null veya tanımsızsa false döndür

        const lowercaseSearch = this.searchText.toLowerCase();
        const lowercaseName = staff.name.toLowerCase();
        const lowercaseTitle = staff.title.toLowerCase();

        return (
          lowercaseName.includes(lowercaseSearch) ||
          lowercaseTitle.includes(lowercaseSearch)
        );
      });
    },
  },
};
</script>
