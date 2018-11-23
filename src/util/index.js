export default {
  toLogin() {
    if (this.vue.$route.path !== '/login') {
      location.href = '/#/login';
    }
  },
};
