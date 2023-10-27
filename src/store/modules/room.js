import Vue from "vue";
const state = {
  rooms: [],
};

const getters = {
  getrooms(state) {
    return state.rooms;
  },
  getListstaffs(state) {},
};

const mutations = {
  // ürün güncelleme
  updateRoomList(state, rooms) {
    state.rooms.push(rooms);
  },
};

const actions = {
  // actions lar asenkron mutations lar senkron çalışır. actions lar ile dış servislere (veri tabanına) bağlanabiliriz ve
  //   dış servislerden dönen cevaba göre mutationsları çalıştırırız sonrasında mutationslarda gidip state i güncelliyordu
  initApp({ commit }) {
    // güncelleme üstteki mutationsa bağlı olarak yapar
    //Vue Resource İşlemleri...
  },
  saveroom({ commit }, payload) {
    // kaydeder
    //Vue Resource İşlemleri... altta httpdenn önce $ işaretinin olmamasının sebebi js olduğu için vue de yazmalıyız
    Vue.http
      .post("http://localhost:35837/api/Room/AddRoom", payload)
      .then((response) => {
        console.log(response); // product list üsttekini kastediyor
        //***** Alış , Satış , Bakiye Bilgilerinin güncellenmesi ****/
      });
  },
  sellRoom({ commit }, payload) {
    //Vue Resource İşlemleri...
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
