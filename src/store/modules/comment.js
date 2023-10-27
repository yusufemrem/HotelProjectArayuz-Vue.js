import Vue from "vue";
const state = {
  comments: [],
};

const getters = {
  getProducts(state) {
    return state.comments;
  },
  getListComment(state) {},
};

const mutations = {
  // ürün güncelleme
  updateProductList(state, product) {
    state.comments.push(comment);
  },
};

const actions = {
  // actions lar asenkron mutations lar senkron çalışır. actions lar ile dış servislere (veri tabanına) bağlanabiliriz ve
  //   dış servislerden dönen cevaba göre mutationsları çalıştırırız sonrasında mutationslarda gidip state i güncelliyordu
  initApp({ commit }) {
    // güncelleme üstteki mutationsa bağlı olarak yapar
    //Vue Resource İşlemleri...
  },
  saveComment({ commit }, payload) {
    // kaydeder
    //Vue Resource İşlemleri... altta httpdenn önce $ işaretinin olmamasının sebebi js olduğu için vue de yazmalıyız
    Vue.http
      .post("http://localhost:35837/api/Comment", payload)
      .then((response) => {
        console.log(response); // product list üsttekini kastediyor
        //***** Alış , Satış , Bakiye Bilgilerinin güncellenmesi ****/
      });
  },
  sellComment({ commit }, payload) {
    //Vue Resource İşlemleri...
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
