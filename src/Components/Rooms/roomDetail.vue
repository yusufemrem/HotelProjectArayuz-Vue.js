<template>
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Catalog-Z Bootstrap 5.0 HTML Template</title>
      <link rel="stylesheet" href="/html2/css/bootstrap.min.css" />
      <link rel="stylesheet" href="/html2/fontawesome/css/all.min.css" />
      <link rel="stylesheet" href="/html2/css/templatemo-style.css" />
      <!--
    
TemplateMo 556 Catalog-Z

https://templatemo.com/tm-556-catalog-z

-->
    </head>
    <body>
      <!-- Page Loader -->
      <div id="loader-wrapper">
        <div id="loader"></div>

        <div class="loader-section section-left"></div>
        <div class="loader-section section-right"></div>
      </div>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <i class="fas fa-film mr-2"></i>
            Hotel Project
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a
                  class="nav-link nav-link-1 active"
                  aria-current="page"
                  href="index.html"
                  >Hotel</a
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div>
        <!-- <input
            class="form-control tm-search-input"
            type="search"
            placeholder="Search"
            aria-label="Search"
          /> -->
        <!-- <button class="btn btn-outline-success tm-search-btn" type="submit">
            <i class="fas fa-search"></i>
          </button> -->

        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Oda Numarası</th>
              <th>Fiyat</th>
              <th>Oda Başlığı</th>
              <th>Wifi</th>
              <th>Yatak Sayısı</th>

              <th>Yorum</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="selectedRoom">
              <th>{{ selectedRoom.roomNumber }}</th>
              <td>{{ selectedRoom.price }} ₺</td>
              <td>{{ selectedRoom.title }}</td>
              <td>{{ selectedRoom.wifi }}</td>
              <td>{{ selectedRoom.bedCount }}</td>

              <td>{{ selectedRoom.description }}</td>
            </tr>
          </tbody>
        </table>

        <!-- <input
            class="form-control tm-search-input"
            type="search"
            placeholder="Search"
            aria-label="Search"
          /> -->
        <!-- <button class="btn btn-outline-success tm-search-btn" type="submit">
            <i class="fas fa-search"></i>
          </button> -->
        <hr />
        <!-- <table class="table table-striped font-size : 0px">
          <thead>
            <tr>
              <th>#</th>
              <th>Oda Numarası</th>
              <th>Fiyat</th>
              <th>Wifi</th>
              <th>Yorum</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>{{ getRoom2.roomNumber }}</th>
              <td>{{ getRoom2.price }} ₺</td>
              <td>{{ getRoom2.title }}</td>
              <td>{{ getRoom2.wifi }}</td>
              <td>{{ getRoom2.description }}</td>
            </tr>
          </tbody>
        </table>
        <table class="table table-striped font-size : 0px">
          <thead>
            <tr>
              <th>#</th>
              <th>Oda Numarası</th>
              <th>Fiyat</th>
              <th>Wifi</th>
              <th>Yorum</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>{{ getRoom3.roomNumber }}</th>
              <td>{{ getRoom3.price }} ₺</td>
              <td>{{ getRoom3.title }}</td>
              <td>{{ getRoom3.wifi }}</td>
              <td>{{ getRoom3.description }}</td>
            </tr>
          </tbody>
        </table> -->
      </div>

      <div class="container-fluid tm-container-content tm-mt-60">
        <div class="row mb-4">
          <h2 class="col-6 tm-text-primary">
            Otel Odalarımız
          </h2>
        </div>

        <div class="row tm-mb-90 tm-gallery">
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
            <router-link to="/src/Components/Rooms/roomDetail.vue">
              <figure class="effect-ming tm-video-item">
                <img
                  src="/img/oda1.jpg"
                  width="100%"
                  alt="Image"
                  class="img-fluid"
                />
                <figcaption
                  class="d-flex align-items-center justify-content-center"
                >
                  <h2>Clocks</h2>
                </figcaption>
              </figure>
              <button
                @click="showRoomDetails(getRoom)"
                class="tm-text-success-light"
              >
                Oda Detayı
              </button>
            </router-link>
            <div class="d-flex justify-content-between tm-text-gray"></div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
            <figure class="effect-ming tm-video-item">
              <img
                src="/img/oda2.jpg"
                width="100%"
                alt="Image"
                class="img-fluid"
              />
              <figcaption
                class="d-flex align-items-center justify-content-center"
              >
                <h2>Plants</h2>
              </figcaption>
            </figure>
            <div class="d-flex justify-content-between tm-text-gray">
              <button
                @click="showRoomDetails(getRoom2)"
                class="tm-text-success-light"
              >
                Oda Detayı
              </button>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
            <figure class="effect-ming tm-video-item">
              <img
                src="/img/oda13.jpg"
                width="100%"
                alt="Image"
                class="img-fluid"
              />
              <figcaption
                class="d-flex align-items-center justify-content-center"
              >
                <h2>Morning</h2>
                <a href="photo-detail.html">View more</a>
              </figcaption>
            </figure>
            <button
              @click="showRoomDetails(getRoom3)"
              class="tm-text-success-light"
            >
              Oda Detayı
            </button>
            <div class="d-flex justify-content-between tm-text-gray"></div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
            <figure class="effect-ming tm-video-item">
              <img
                src="/img/oda9.jpg"
                width="100%"
                alt="Image"
                class="img-fluid"
              />
              <figcaption
                class="d-flex align-items-center justify-content-center"
              >
                <h2>Pinky</h2>
              </figcaption>
            </figure>
            <button
              @click="showRoomDetails(getRoom3)"
              class="tm-text-success-light"
            >
              Oda Detayı
            </button>
            <div class="d-flex justify-content-between tm-text-gray"></div>
          </div>

          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
            <figure class="effect-ming tm-video-item">
              <img
                src="/img/oda5.jpg"
                width="100%"
                alt="Image"
                class="img-fluid"
              />
              <figcaption
                class="d-flex align-items-center justify-content-center"
              >
                <h2>Hangers</h2>
                <a href="photo-detail.html">View more</a>
              </figcaption>
            </figure>
            <div class="d-flex justify-content-between tm-text-gray">
              <span class="tm-text-gray-light">24 Sep 2020</span>
              <span>16,008 views</span>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
            <figure class="effect-ming tm-video-item">
              <img
                src="/img/oda6.jpg"
                width="100%"
                alt="Image"
                class="img-fluid"
              />
              <figcaption
                class="d-flex align-items-center justify-content-center"
              >
                <h2>Perfumes</h2>
                <a href="photo-detail.html">View more</a>
              </figcaption>
            </figure>
            <div class="d-flex justify-content-between tm-text-gray">
              <span class="tm-text-gray-light">20 Sep 2020</span>
              <span>12,860 views</span>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
            <figure class="effect-ming tm-video-item">
              <img
                src="/img/oda7.jpg"
                width="100%"
                alt="Image"
                class="img-fluid"
              />
              <figcaption
                class="d-flex align-items-center justify-content-center"
              >
                <h2>Bus</h2>
                <a href="photo-detail.html">View more</a>
              </figcaption>
            </figure>
            <div class="d-flex justify-content-between tm-text-gray">
              <span class="tm-text-gray-light">16 Sep 2020</span>
              <span>10,900 views</span>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
            <figure class="effect-ming tm-video-item">
              <img
                src="/img/oda8.jpg"
                width="100%"
                alt="Image"
                class="img-fluid"
              />
              <figcaption
                class="d-flex align-items-center justify-content-center"
              >
                <h2>New York</h2>
                <a href="photo-detail.html">View more</a>
              </figcaption>
            </figure>
            <div class="d-flex justify-content-between tm-text-gray">
              <span class="tm-text-gray-light">12 Sep 2020</span>
              <span>11,300 views</span>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
            <figure class="effect-ming tm-video-item">
              <img
                src="/img/oda9.jpg"
                width="100%"
                alt="Image"
                class="img-fluid"
              />
              <figcaption
                class="d-flex align-items-center justify-content-center"
              >
                <h2>Abstract</h2>
                <a href="photo-detail.html">View more</a>
              </figcaption>
            </figure>
            <div class="d-flex justify-content-between tm-text-gray">
              <span class="tm-text-gray-light">10 Sep 2020</span>
              <span>42,700 views</span>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
            <figure class="effect-ming tm-video-item">
              <img
                src="/img/oda10.jpg"
                width="100%"
                alt="Image"
                class="img-fluid"
              />
              <figcaption
                class="d-flex align-items-center justify-content-center"
              >
                <h2>Flowers</h2>
                <a href="photo-detail.html">View more</a>
              </figcaption>
            </figure>
            <div class="d-flex justify-content-between tm-text-gray">
              <span class="tm-text-gray-light">8 Sep 2020</span>
              <span>11,402 views</span>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
            <figure class="effect-ming tm-video-item">
              <img
                src="/img/oda11.jpg"
                width="100%"
                alt="Image"
                class="img-fluid"
              />
              <figcaption
                class="d-flex align-items-center justify-content-center"
              >
                <h2>Rosy</h2>
                <a href="photo-detail.html">View more</a>
              </figcaption>
            </figure>
            <div class="d-flex justify-content-between tm-text-gray">
              <span class="tm-text-gray-light">4 Sep 2020</span>
              <span>32,906 views</span>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
            <figure class="effect-ming tm-video-item">
              <img
                src="/img/oda12.jpg"
                width="100%"
                alt="Image"
                class="img-fluid"
              />
              <figcaption
                class="d-flex align-items-center justify-content-center"
              >
                <h2>Rocki</h2>
                <a href="photo-detail.html">View more</a>
              </figcaption>
            </figure>
            <div class="d-flex justify-content-between tm-text-gray">
              <span class="tm-text-gray-light">28 Aug 2020</span>
              <span>50,700 views</span>
            </div>
          </div>
        </div>
        <!-- row -->
      </div>
      <!-- container-fluid, tm-container-content -->

      <footer class="tm-bg-gray pt-5 pb-3 tm-text-gray tm-footer">
        <div class="container-fluid tm-container-small">
          <div class="row">
            <div class="col-lg-6 col-md-12 col-12 px-5 mb-5">
              <h3 class="tm-text-primary mb-4 tm-footer-title">
                About Catalog-Z
              </h3>
              <p>
                Catalog-Z is free
                <a rel="sponsored" href="https://v5.getbootstrap.com/"
                  >Bootstrap 5</a
                >
                Alpha 2 HTML Template for video and photo websites. You can
                freely use this TemplateMo layout for a front-end integration
                with any kind of CMS website.
              </p>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 col-12 px-5 mb-5">
              <h3 class="tm-text-primary mb-4 tm-footer-title">Our Links</h3>
              <ul class="tm-footer-links pl-0">
                <li><a href="#">Advertise</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Our Company</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 col-12 px-5 mb-5">
              <ul class="tm-social-links d-flex justify-content-end pl-0 mb-5">
                <li class="mb-2">
                  <a href="https://facebook.com"
                    ><i class="fab fa-facebook"></i
                  ></a>
                </li>
                <li class="mb-2">
                  <a href="https://twitter.com"
                    ><i class="fab fa-twitter"></i
                  ></a>
                </li>
                <li class="mb-2">
                  <a href="https://instagram.com"
                    ><i class="fab fa-instagram"></i
                  ></a>
                </li>
                <li class="mb-2">
                  <a href="https://pinterest.com"
                    ><i class="fab fa-pinterest"></i
                  ></a>
                </li>
              </ul>
              <a href="#" class="tm-text-gray text-right d-block mb-2"
                >Terms of Use</a
              >
              <a href="#" class="tm-text-gray text-right d-block"
                >Privacy Policy</a
              >
            </div>
          </div>
          <div class="row">
            <div class="col-lg-8 col-md-7 col-12 px-5 mb-3">
              Copyright 2020 Catalog-Z Company. All rights reserved.
            </div>
            <div class="col-lg-4 col-md-5 col-12 px-5 text-right">
              Designed by
              <a
                href="https://templatemo.com"
                class="tm-text-gray"
                rel="sponsored"
                target="_parent"
                >TemplateMo</a
              >
            </div>
          </div>
        </div>
      </footer>
    </body>
  </html>
</template>
<script>
import Vue from "vue";
import VueResource from "vue-resource";

Vue.use(VueResource);
export default {
  data() {
    return {
      getRoom: {},
      getRoom2: {},
      getRoom3: {},
      selectedRoom: {},
    };
  },
  created() {
    this.fetchSingleRoom();
    this.fetchSingleRoom2();
    this.fetchSingleRoom3();
  },
  methods: {
    showRoomDetails(room) {
      this.selectedRoom = room;
    },
    getRoom() {
      this.$router.push({ name: "odadetay" });
    },
    fetchSingleRoom() {
      const id = 1; // İstediğiniz yorumun ID'si
      this.$http
        .get(`http://localhost:35837/api/Room/${id}`)
        .then((response) => {
          this.getRoom = response.data; // response.data'ya dizi harmanlaması yapma
          console.log("girdii");
        })
        .catch((error) => {
          console.error("Error fetching staff:", error);
        });
    },
    fetchSingleRoom2() {
      const id = 2; // İstediğiniz yorumun ID'si
      this.$http
        .get(`http://localhost:35837/api/Room/${id}`)
        .then((response) => {
          this.getRoom2 = response.data; // response.data'ya dizi harmanlaması yapma
          console.log("girdii");
        })
        .catch((error) => {
          console.error("Error fetching staff:", error);
        });
    },
    fetchSingleRoom3() {
      const id = 3; // İstediğiniz yorumun ID'si
      this.$http
        .get(`http://localhost:35837/api/Room/${id}`)
        .then((response) => {
          this.getRoom3 = response.data; // response.data'ya dizi harmanlaması yapma
          console.log("girdii");
        })
        .catch((error) => {
          console.error("Error fetching staff:", error);
        });
    },
  },
};
</script>
