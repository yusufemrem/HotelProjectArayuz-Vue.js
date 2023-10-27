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
              <li class="tm-nav-item active">
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

        <hr />
        <div>
          <html lang="en">
            <head>
              <meta charset="UTF-8" />
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
              />
              <title>Excel Download</title>
            </head>
            <body>
              <div id="app">
                <button @click="downloadExcel">
                  Excel Personel Raporunu İndir
                </button>
              </div>
            </body>
          </html>
        </div>
      </main>
    </body>
  </html>
</template>
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
<script>
export default {
  methods: {
    downloadExcel() {
      // Excel dosyasının indirme linkini oluştur
      const excelDownloadLink =
        "http://localhost:35837/api/Excel/StaffExcelReport"; // API rotasını uygun şekilde güncelleyin
      window.location.href = excelDownloadLink;
    },
  },
};
</script>
