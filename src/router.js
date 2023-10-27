import Vue from "vue";
import Home from "./Components/Home/homepage.vue";
import register from "./Components/Register/register.vue";
import comments from "./Components/Comments/comments.vue";
import staff from "./Components/Staff/staff.vue";
import mailContact from "./Components/Contact/mailContact.vue";
import room from "./Components/Rooms/room.vue";
import roomDetail from "./Components/Rooms/roomDetail.vue";
import services from "./Components/Services/services.vue";
import booking from "./Components/Booking/booking.vue";
import index from "./Components/Admin/index.vue";
import adminStaff from "./Components/Admin/adminStaff.vue";
import adminReservation from "./Components/Admin/adminReservation.vue";
import adminRoom from "./Components/Admin/adminRoom.vue";
import excelreport from "./Components/ExcelReport/excelreport.vue";
import pdfreport from "./Components/PdfReport/pdfreport.vue";
import login from "./Components/Login/login.vue";

import movietop from "./Components/RapidMovie/movietop.vue";
import guest from "./Components/Guest/guest.vue";
import allComments from "./Components/Comments/allComments.vue";
import forgetPassword from "./Components/ForgetPassword/forgetPassword.vue";
import adminRole from "./Components/Admin/adminRole.vue";
import adminAssignRole from "./Components/Admin/adminAssignRole.vue";

import VueRouter from "vue-router";

Vue.use(VueRouter);

export const routes = [
  {
    path: "/src/Components/Home/homepage.vue",
    component: Home,
    name: "anaSayfa",
  },
  {
    path: "/src/Components/Home/homepage.vue",
    component: Home,
    name: "anaSayfa",
  },
  {
    path: "/src/Components/Admin/adminRole.vue",
    component: adminRole,
    name: "roller",
  },
  {
    path: "/src/Components/Admin/adminAssignRole.vue",
    component: adminAssignRole,
    name: "roller",
  },
  {
    path: "/src/Components/ForgetPassword/forgetPassword.vue",
    component: forgetPassword,
    name: "sifremiunuttum",
  },
  { path: "/Register", component: register, name: "rezervasyonyap" }, //register / /Register/:id //
  {
    path: "/src/Components/Guest/guest.vue",
    component: guest,
    name: "misafir",
  },

  {
    path: "/src/Components/Booking/booking.vue",
    component: booking,
    name: "rezervasyonyapma",
  }, //register / /Register/:id //

  { path: "/src/Components/Rooms/room.vue", component: room, name: "odalar" },
  {
    path: "/src/Components/ExcelReport/excelreport.vue",
    component: excelreport,
    name: "excel",
  },
  {
    path: "/src/Components/PdfReport/pdfreport.vue",
    component: pdfreport,
    name: "pdf",
  },
  {
    path: "",
    component: login,
    name: "girisyap",
  },
  {
    path: "/src/Components/Register/register.vue",
    component: register,
    name: "kayitol",
  },
  {
    path: "/src/Components/RapidMovie/movietop.vue",
    component: movietop,
    name: "topmovie",
  },
  {
    path: "/src/Components/Rooms/roomDetail.vue",
    component: roomDetail,
    name: "odadetay",
  },

  {
    path: "/src/Components/Admin/index.vue",
    component: index,
    name: "indexx",
  },
  {
    path: "/src/Components/Admin/adminStaff.vue",
    component: adminStaff,
    name: "adminStafff",
  },
  {
    path: "/src/Components/Admin/adminReservation.vue",
    component: adminReservation,
    name: "adminReservation",
  },
  {
    path: "/src/Components/Admin/adminRoom.vue",
    component: adminRoom,
    name: "adminRoom",
  },
  {
    path: "/src/Components/Contact/mailContact.vue",
    component: mailContact,
    name: "mailgöder",
  },
  {
    path: "/src/Components/Comments/comments.vue",
    component: comments,
    name: "yorumyap",
  },
  {
    path: "/src/Components/Staff/staff.vue",
    component: staff,
    name: "kadromuz",
  },
  {
    path: "/src/Components/Services/services.vue",
    component: services,
    name: "servisler",
  },
  {
    path: "/src/Components/Comments/allComments.vue",
    component: allComments,
    name: "tümyorumlar",
  },
  { path: "*", redirect: "/" },
];

export const router = new VueRouter({
  mode: "history",
  routes,
});
