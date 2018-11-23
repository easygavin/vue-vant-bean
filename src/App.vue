<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    // HTML 字体设置
    this.setHtmlFont();
    window.addEventListener('orientationchange', () => {
      // HTML 字体设置
      this.setHtmlFont();
    });
    window.addEventListener('resize', () => {
      // HTML 字体设置
      this.setHtmlFont();
    });

  },
  methods: {
    /**
     * HTML 字体设置
     */
    setHtmlFont() {
      let fontSize = document.documentElement.clientWidth / 10;
      document.documentElement.style.fontSize = fontSize > 75 ? '75px' : fontSize + 'px';
    }
  }
}
</script>
