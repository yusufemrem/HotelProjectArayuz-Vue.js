import Vue from "vue";
const state = {
  staffs: [],
};

const getters = {
  getstaffs(state) {
    return state.staffs;
  },
};

const mutations = {
  // ürün güncelleme
  updateProductList(state, product) {
    state.staffs.push(staffs);
  },
};

const actions = {
  // async getListstaffs(context) {
  //   try {
  //     const response = await Vue.http.get(
  //       "http://localhost:35837/api/Staff/getListStaff"
  //     );
  //     context.commit("setStaffList", response.body);
  //   } catch (error) {
  //     console.error("Hata:", error);
  //   }
  // },
  // actions lar asenkron mutations lar senkron çalışır. actions lar ile dış servislere (veri tabanına) bağlanabiliriz ve
  //   dış servislerden dönen cevaba göre mutationsları çalıştırırız sonrasında mutationslarda gidip state i güncelliyordu
  initApp({ commit }) {
    // güncelleme üstteki mutationsa bağlı olarak yapar
    //Vue Resource İşlemleri...
  },
  savestaffs({ commit }, payload) {
    // kaydeder
    //Vue Resource İşlemleri... altta httpdenn önce $ işaretinin olmamasının sebebi js olduğu için vue de yazmalıyız
    Vue.http
      .post("http://localhost:35837/api/Staff/AddStaff", payload)
      .then((response) => {
        console.log(response); // product list üsttekini kastediyor
        //***** Alış , Satış , Bakiye Bilgilerinin güncellenmesi ****/
      });
  },
  sellStaff({ commit }, payload) {
    //Vue Resource İşlemleri...
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
