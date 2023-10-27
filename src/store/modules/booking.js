import Vue from "vue";
const state = {
  reservations: [],
};

const getters = {
  getreservations(state) {
    return state.reservations;
  },
  getListstaffs(state) {},
};

const mutations = {
  // ürün güncelleme
  updateProductList(state, product) {
    state.reservations.push(reservations);
  },
};

const actions = {
  // actions lar asenkron mutations lar senkron çalışır. actions lar ile dış servislere (veri tabanına) bağlanabiliriz ve
  //   dış servislerden dönen cevaba göre mutationsları çalıştırırız sonrasında mutationslarda gidip state i güncelliyordu
  initApp({ commit }) {
    // güncelleme üstteki mutationsa bağlı olarak yapar
    //Vue Resource İşlemleri...
  },
  savebooking({ commit }, payload) {
    // kaydeder
    //Vue Resource İşlemleri... altta httpdenn önce $ işaretinin olmamasının sebebi js olduğu için vue de yazmalıyız
    Vue.http
      .post("http://localhost:35837/api/Booking/AddBooking", payload)
      .then((response) => {
        console.log(response); // product list üsttekini kastediyor
        //***** Alış , Satış , Bakiye Bilgilerinin güncellenmesi ****/
      });
  },
  sellReservation({ commit }, payload) {
    //Vue Resource İşlemleri...
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
