<template>
  <div class="final">
    <router-link to="/" class="final__btn-home final__btn-home_hover"><img src="../assets/home-icon.png" alt="home" class="final__home-icon"></router-link>
    <img src="../assets/image.jpg" class="final__picture">
    <div class="final__results-container">
      <div class="final__results">
        <div class="final__result-item">
          <p class="final__text">{{firstPercent}}%</p>
          <p class="final__text final__text_small">Препарат 1</p>
        </div>
        <div class="final__result-item">
          <p class="final__text">{{secondPercent}}%</p>
          <p class="final__text final__text_small">Препарат 2</p>
        </div>
        <div class="final__result-item">
          <p class="final__text">{{thirdPercent}}%</p>
          <p class="final__text final__text_small">Препарат 3</p>
        </div>
      </div>
      <hr class="final__line">
      <div class="final__text-block">
        <p class="final__text__middle">Ваш результат:</p>
        <h6 class="final__header">«Что я здесь делаю?»</h6>
        <p class="final__par">Это тестовое задание, так что не будем углубляться в глубины проблем фармацевтов.</p>
      </div>
    </div>
    <router-link to="/main" v-on:click="reload()" ><Btn msg="Попробовать еще" class="btn btn_grey" /></router-link>
  </div>
</template>

<script>
import Btn from '@/components/Btn.vue'
import {mapGetters} from "vuex";
import {mapActions} from "vuex";

export default {
  name: 'final_easy',
      components: {
      Btn
  },
  computed: {
      ...mapGetters([
        "firstPercent",
        "secondPercent",
        "thirdPercent"
      ])
  },
  methods: {
      ...mapActions([
        "reload"
      ])
    }
}
</script>

<style lang="scss" scoped>
  .final {
    position: relative;
    width: 1440px;
    height: 1024px;
    background-color: #fff;
    &__btn-home {
      position: absolute;
      width: 70px;
      height: 70px;
      left: 50px;
      top: 70px;
      background: linear-gradient(63.53deg, #2D8550 16.62%, #5E6EC2 83.38%);
      border-radius: 50%;
      z-index: 1;
      transition: all .5s ease-in-out;
      cursor: pointer;
      opacity: .8;
      &_hover {
        &:hover {
          transform: scale(1.1);
          opacity: 1;
        }     
      }
    }
    &__home-icon {
      width: 35px;
      height: 32px;
      margin: 17px;
    }
    &__picture {
      position: absolute;
      right: -10.42%;
      top: -9.77%;
    }
    &__results-container {
        position: absolute;
        left: 130px;
        top: 260px;
    }
    &__results {
      width: 600px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      margin-bottom: 50px;
    }
    &__text {
      font-size: 48px;
      line-height: 59px;
      color: rgb(66, 66, 66);
      &__middle {
        font-size: 30px;
        font-weight: 500;
      }
      &_small {
        font-size: 16px;
        line-height: 20px;
        text-align: center;
      }
    }
    &__line {
      border: none;
      border-top: 2px solid rgb(217, 217, 217);
      width: 580px;
    }
    &__text-block {
      font-family: inherit;
      width: 580px;
      color: rgb(142, 154, 213);
      margin-top: 40px;
    }
    &__header {
      font-size: 32px;
      line-height: 35px;
      letter-spacing: 0.02em;
      font-weight: 900;
    }
    &__par {
      font-size: 24px;
      line-height: 29px;
      color: rgb(66, 66, 66);
      margin-top: 20px;
    }
  }
</style>
