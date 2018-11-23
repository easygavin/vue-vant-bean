<template>
  <div class="container">
    <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"/>

    <van-button @click="show = true" type="default">选择日期</van-button>
    
    <van-popup
        v-model="show"
        position="bottom">
      <van-datetime-picker
        v-model="dateTime"
        type="datetime"
        @confirm="hideDateTime"
        @cancel="hideDateTime"/>
      </van-popup>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import util from "@/util"

export default {
  data() {
    return {
      show: false,
      dateTime: new Date()
    };
  },
  /**
   * 初始加载
   */
  mounted() {
    
  },
  computed: {
    ...mapGetters(["userInfo"])
  },
  methods: {
    ...mapActions(["logout"]),
    hideDateTime() {
      console.log(this.dateTime);
      this.show = false;
    },
    onClickLeft() {
      this.$toast('返回');
    },
    onClickRight() {
      this.$toast('按钮');
    }
  }
};
</script>
<style lang="scss" scoped>
  @import './main.scss';
</style>

