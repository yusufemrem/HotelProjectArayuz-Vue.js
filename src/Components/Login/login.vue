<template>
  <div>
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
    <form id="container" class="col-6" @submit.prevent="submitForm">
      <h1 class="h3 mb-3 fw-normal">Lütfen Giriş Yapın</h1>

      <input
        v-model="data.username"
        type="text"
        class="form-control"
        placeholder="UserName"
        required
      />

      <input
        v-model="data.password"
        type="password"
        class="form-control"
        placeholder="Password"
        required
      />
      <br />
      <button class="w-100 btn btn-lg btn-primary" type="submit">
        Giriş Yap
      </button>
    </form>
    <div>
      <hr />
      <router-link to="/src/Components/ForgetPassword/forgetPassword.vue">
        <button>Şifreni Mi Unuttun</button>
      </router-link>
    </div>
    <div>
      <hr />
      <router-link to="/src/Components/Register/register.vue">
        <button>Üye Değil Misin ?</button>
      </router-link>
    </div>
    <router-link to="/src/Components/Home/homepage.vue">
      <button class="w- btn btn-lg btn-primary">Üye Olmadan Devam Et</button>
    </router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      data: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    submitForm() {
      axios
        .post("http://localhost:35837/api/Login/Index", {
          username: this.data.username,
          password: this.data.password,
        })
        .then((response) => {
          // Başarılı giriş durumunda yapılacak işlemler
          // Örneğin, yönlendirme yapabilirsiniz: this.$router.push("/home");
          alert("Giriş İşlemi Başarılı Ana Sayfaya Yönlendiriliyorsunuz");
          this.$router.push("/src/Components/Admin/index.vue");
        })
        .catch((error) => {
          console.error("Giriş hatası:", error);
          alert("kullanıcı adı veya şifre yanlış");
        });
    },
  },
};
</script>
<style>
#container {
  align-items: center;
  justify-content: center;
}
</style>
