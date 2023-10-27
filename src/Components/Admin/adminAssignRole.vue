<<template>
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
        <div>
          <table class="table table-bordered">
            <tr>
              <th>Personel Adı</th>
              <th>Rol Ata</th>
            </tr>
            <tr v-for="staff in staffList" :key="staff.id">
              <th>{{ staff.name }}</th>

              <td>
                <a href="" class="btn mb-1 btn-rounded btn-outline-success"
                  >Rol Ata</a
                >
              </td>
            </tr>
          </table>
        </div>
        <form>
          <div class="form-check">
            <input type="hidden" v-model="roles.Id" />
            <input type="hidden" v-model="roles.Name" />
            <input type="checkbox" v-model="roles.exist" />
          </div>
        </form>
        <br />

        <hr />
        <div></div>
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
      roleList: [],
      staffList: [],
      roles: [],
      userId: 0,
    };
  },
  mounted() {
    this.fetchRoles();
    this.fetchStaffList();
  },

  methods: {
    async fetchRoles() {
      try {
        // API isteği yap ve rolleri al
        const response = await fetch(`http://localhost:35837/api/Role/Index`);
        if (!response.ok) {
          throw new Error("API isteği başarısız oldu");
        }
        const data = await response.json();
        this.roles = data;
      } catch (error) {
        console.error(error);
      }
    },
    async toggleRole(roleId) {
      // Kullanıcı rollerini güncellemek için API isteği yapabilirsiniz
      // Örneğin, role.Id'yi API'ye gönderip rolleri güncelleyebilirsiniz
      // API'de güncelleme işlemini gerçekleştirmeniz gerekecektir.
    },
    async fetchStaffList() {
      this.$http
        .get("http://localhost:35837/api/Staff/getListStaff") // API'den staff verilerini al
        .then((response) => {
          this.staffList = response.body; // Alınan veriyi staffList dizisine atar
        })
        .catch((error) => {
          console.error("Hata:", error);
        });
    },
  },
};
</script>
