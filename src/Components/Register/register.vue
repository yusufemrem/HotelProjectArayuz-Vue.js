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
    <form>
      <div class="row g-3">
        <div class="col-md-6">
          <div class="form-floating">
            <label for="name">İsminiz</label>
            <input
              v-model="user.name"
              type="text"
              class="form-control"
              id="name"
              placeholder="İsminiz"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-floating">
            <label for="name">Soyisminiz</label>
            <input
              v-model="user.surname"
              type="text"
              class="form-control"
              id="name"
              placeholder="Soyisminiz"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-floating">
            <label for="name">Kullanıcı Adınız</label>
            <input
              v-model="user.username"
              type="text"
              class="form-control"
              id="name"
              placeholder="Kullanıcı Adınız"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-floating">
            <label for="email">Mail Adresiniz</label>
            <input
              v-model="user.mail"
              type="email"
              class="form-control"
              id="name"
              placeholder="Mail Adresiniz"
            />
          </div>
        </div>
        <div class="col-12">
          <div class="form-floating">
            <label for="subject">Şifreniz</label>
            <input
              v-model="user.password"
              type="Password"
              class="form-control"
              id="subject"
              placeholder="Şifreniz"
            />
          </div>
        </div>
        <div class="col-12">
          <div class="form-floating">
            <label for="subject">Şifre Tekrar</label>
            <input
              v-model="user.confirmpassword"
              type="Password"
              class="form-control"
              id="subject"
              placeholder="Şifre Tekrar"
            />
          </div>
        </div>

        <div class="col-12">
          <button
            @click="saveRegister"
            class="btn btn-primary w-100 py-3"
            type="button"
          >
            Kayıt Ol
          </button>
        </div>
      </div>
    </form>
    <br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: null,
        surname: null,
        username: null,
        mail: null,
        password: null,
        confirmpassword: null,
      },
    };
  },
  methods: {
    saveRegister() {
      console.log("girdi");
      this.$store.dispatch("saveRegister", this.user);
      this.$router.push("/login");
    },
  },
};
</script>
