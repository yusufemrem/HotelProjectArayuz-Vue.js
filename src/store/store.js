import Vue from "vue";
import Vuex from "vuex";
import register from "./modules/register";
import comment from "./modules/comment";
import staff from "./modules/staff";
import reservation from "./modules/reservation";
import room from "./modules/room";
import booking from "./modules/booking";
import adminRole from "./modules/role";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {},
  modules: {
    register,
    comment,
    staff,
    reservation,
    room,
    booking,
    adminRole,
  },
});
