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
              <li class="tm-nav-item">
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
                <router-link to="/src/Components/Guest/guest.vue">
                  <a href="post.html" class="tm-nav-link">
                    <i class="fas fa-pen"></i>
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
          placeholder="Misafir Arayın"
          aria-label="Search"
        />
        <hr />
        <table class="table table-bordered">
          <tr>
            <th>#</th>
            <th>İsim</th>
            <th>Soyisim</th>
            <th>Müşteri Adres</th>
          </tr>
          <tr v-for="(item, index) in testItems" :key="index">
            <th>{{ index + 1 }}</th>
            <th>{{ item.name }}</th>
            <th>{{ item.surname }}</th>
            <td>{{ item.city }}</td>

            <td>
              <!-- <button
                @click="deleteStaff(staff.staffID)"
                class="btn mb-1 btn-rounded btn-outline-danger"
              >
                Sil
              </button> -->
              <!-- <a
                  @click="deleteStaff(staff.id)"
                  class="btn mb-1 btn-rounded btn-outline-danger"
                  >Sil</a
                > -->
            </td>
          </tr>
        </table>

        <button
          @click="toggleAddGuestForm"
          class="tm-btn tm-btn-primary tm-btn-small"
          type="button"
        >
          Yeni Misafir Girişi
        </button>
        <!-- <div>
          <li v-for="item in testItems" :key="item.id">{{ item.name }}</li>
        </div> -->
        <br />

        <div>
          <form v-if="showAddGuestForm" @submit.prevent="submitForm">
            <div class="mb-4">
              <label for="name">Name:</label>
              <input
                class="form-control"
                name="İsminiz"
                type="text"
                v-model="newTest.Name"
              />
            </div>
            <div class="mb-4">
              <label for="name">Soyisim:</label>
              <input
                class="form-control"
                name="İsminiz"
                type="text"
                v-model="newTest.Surname"
              />
            </div>
            <div class="mb-4">
              <label for="name">Adres:</label>
              <input
                class="form-control"
                name="İsminiz"
                type="text"
                v-model="newTest.City"
              />
            </div>
            <button class="tm-btn tm-btn-primary tm-btn-small" type="submit">
              Misafir Ekle
            </button>
          </form>
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
      newTest: {},
      testItems: [],
      searchText: "",

      showAddGuestForm: false,
    };
  },
  mounted() {
    this.fetchTestItems();
  },
  methods: {
    toggleAddGuestForm() {
      this.showAddGuestForm = !this.showAddGuestForm;
    },
    submitForm() {
      // Vue bileşenindeki form gönderildiğinde bu işlev tetiklenir.
      // Verileri MongoDB'ye göndermek için bir HTTP isteği yapabilirsiniz.
      fetch("http://localhost:35837/api/Guest/Index", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.newTest),
      })
        .then((response) => {
          if (response.ok) {
            // İşlem başarılı ise formu temizle
            this.newTest.Name = "";
            alert("Test başarıyla eklendi.");
          } else {
            alert("Test eklenirken bir hata oluştu.");
          }
        })
        .catch((error) => {
          console.error(error);
          alert("Test eklenirken bir hata oluştu.");
        });
    },
    async fetchTestItems() {
      try {
        const response = await axios.get(
          "http://localhost:35837/api/Guest/GetAll"
        ); // API'den verileri çekin
        this.testItems = response.data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
  computed: {
    filtered() {
      if (!this.searchText) return this.testItems; // Eğer searchText boşsa, tüm staffList'i göster

      return this.testItems.filter((guest) => {
        if (!guest.name || !guest.surname || !guest.city) return false; // staff.name veya staff.title null veya tanımsızsa false döndür

        const lowercaseSearch = this.searchText.toLowerCase();
        const lowercaseName = guest.name.toLowerCase();
        const lowercaseSurname = guest.surname.toLowerCase();
        const lowercaseCity = guest.city.toLowerCase();
        return (
          lowercaseName.includes(lowercaseSearch) ||
          lowercaseSurname.includes(lowercaseSearch) ||
          lowercaseCity.includes(lowercaseSearch)
        );
      });
    },
  },
};
</script>
