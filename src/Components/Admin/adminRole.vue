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

              <li class="tm-nav-item"></li>
              <li class="tm-nav-item ">
                <router-link to="/src/Components/Admin/adminReservation.vue">
                  <a href="post.html" class="tm-nav-link">
                    <i class="fas fa-pen"></i>
                    Rezervasyonlar
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
              <li class="tm-nav-item active">
                <router-link to="/src/Components/Admin/adminRole.vue">
                  <a href="index.html" class="tm-nav-link">
                    <i class="fas fa-home"></i>
                    Roller
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
        <h2 class="tm-color-primary tm-post-title mb-4">
          Rol Listesi
        </h2>

        <div>
          <table class="table table-bordered">
            <tr>
              <th>#</th>
              <th>Rol Adı</th>
              <th>Sil</th>
              <th>Güncelle</th>
            </tr>

            <tr v-for="role in roleList" :key="role.id">
              <th>{{ role.id }}</th>
              <th>{{ role.name }}</th>

              <td>
                <button
                  @click="deleteStaff(role.roleID)"
                  class="btn mb-1 btn-rounded btn-outline-danger"
                >
                  Sil
                </button>
              </td>
              <td>
                <a href="" class="btn mb-1 btn-rounded btn-outline-success"
                  >Güncelle</a
                >
              </td>
            </tr>
          </table>

          <button
            @click="toggleAddRoleForm"
            class="tm-btn tm-btn-primary tm-btn-small"
            type="button"
          >
            Yeni Rol Girişi
          </button>
        </div>

        <hr />
        <div>
          <form class="" v-if="showAddRoleForm" @submit.prevent="onSubmit">
            <h2 class="tm-color-primary tm-post-title mb-4">
              Rol Ekleme Formu
            </h2>
            <div class="mb-4">
              <h3>Rol İsim</h3>

              <input
                v-model="roles.name"
                class="form-control"
                name="İsminiz"
                type="text"
              />
            </div>

            <div class="text-right">
              <button
                onclick="alert('Kaydetme işlemi başarılı')"
                @click="saverole"
                class="tm-btn tm-btn-primary tm-btn-small "
                type="button"
              >
                Kaydet
              </button>
            </div>
          </form>
          <div class="text-right">
            <router-link to="/src/Components/Admin/adminAssignRole.vue">
              <button class="tm-btn tm-btn-primary tm-btn-small " type="button">
                Rol Atama
              </button>
            </router-link>
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
      roles: {
        name: null,
      },

      roleList: [],
      showAddRoleForm: false,
    };
  },

  created() {
    this.fetchRoleList();
  },
  methods: {
    toggleAddRoleForm() {
      this.showAddRoleForm = !this.showAddRoleForm;
    },
    onSubmit() {
      let form = {
        name: this.roles.name,
      };
      console.log(form);
    },

    saverole() {
      this.$store.dispatch("saverole", this.roles);
      this.roles.name = null;
      location.reload();
      this.showAddRoleForm = true;
    },

    async fetchRoleList() {
      // try {
      //   const response = await this.$store.dispatch("getListstaffs");
      //   this.staffList = response.data; // Alınan veriyi staffList dizisine atar
      // } catch (error) {
      //   console.error("Hata:", error);
      // }
      // await this.$store.dispatch("getListstaffs");

      this.$http
        .get("http://localhost:35837/api/Role/Index") // API'den staff verilerini al
        .then((response) => {
          this.roleList = response.body; // Alınan veriyi staffList dizisine atar
        })
        .catch((error) => {
          console.error("Hata:", error);
        });
    },
    //   deleteStaff(id) {
    //     // Make a DELETE request to your API endpoint to delete the staff member with the given ID
    //     console.log("Deleting staff with ID:", id);
    //     this.$http
    //       .delete("http://localhost:35837/api/Staff/DeleteStaff/" + id)
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
