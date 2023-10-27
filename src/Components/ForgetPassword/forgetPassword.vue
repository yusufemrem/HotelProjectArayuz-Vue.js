<template>
  <from>
    <label>Mail Adresinizi Giriniz</label>
    <input class="form-control" v-model="mail" />
    <br />
    <button @click="sendEmail" class="btn btn-primary">
      Şifre Yenileme Linki Gönder
    </button>
  </from>
</template>
<script>
import Vue from "vue";
import VueResource from "vue-resource";
import { email } from "vuelidate/lib/validators";

Vue.use(VueResource);
export default {
  data() {
    return {
      mail: "",
    };
  },
  validations: {
    receiverMail: {
      email,
    },
  },

  methods: {
    sendEmail() {
      const emailData = {
        mail: this.mail,
      };

      this.$http
        .post(
          "http://localhost:35837/api/PasswordChange/ForgetPasasword",
          emailData
        )
        .then((response) => {
          console.log("girdi");
          console.log("E-posta gönderildi:", response.body);
          // Burada gerekirse kullanıcıya bir bildirim gösterebilirsiniz.
        })
        .catch((error) => {
          console.error("E-posta gönderilemedi:", error);
          // Burada gerekirse kullanıcıya bir hata bildirimi gösterebilirsiniz.
        });
    },
  },
};
</script>
