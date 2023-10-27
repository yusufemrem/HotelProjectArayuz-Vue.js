import Vue from "vue";
export const getTradeResult = ({ commit }) => {
  Vue.http.get("http://localhost:35837/api/Comment").then((response) => {
    console.log(response);
  });
};
