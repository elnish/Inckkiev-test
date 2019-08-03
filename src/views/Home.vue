<template>
  <div class="home">
    <div class="home__ellipse">
      <p class="home__text">Добро пожаловать в игру</p>
      <p class="home__text home__text_middle">Помоги</p>
      <p class="home__text home__text_middle home__text_uppercase">Фармацевту</p>
      <router-link to="/main"><Btn msg="Начать" class="btn btn_hover"/></router-link>
    </div> 
  </div>
</template>

<script>
import Btn from '@/components/Btn.vue'

export default {
  name: 'home',
  components: {
    Btn
  }
}
</script>

<style lang="scss" scoped>
  .home {
    position: relative;
    width: 1440px;
    height: 1024px;
    background: linear-gradient(54.9deg, rgba(45, 133, 80, 0.35) 16.62%, rgba(94, 110, 194, 0.35) 83.38%), url('../assets/shutterstock_111500834.jpg') no-repeat;
    background-size: cover;
    &__ellipse {
      position: absolute;
      width: 860px;
      height: 860px;
      left: 110px;
      top: -30px;
      background: linear-gradient(63.53deg, #2D8550 16.62%, #5E6EC2 83.38%);
      border-radius: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 180px;
    }
    &__text {
      font-size: 35px;
      line-height: 41px;
      letter-spacing: 0.02em;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      font-weight: 100;
      padding-bottom: 30px;
      &_middle {
        font-size: 60px;
        line-height: 66px;
        letter-spacing: 0.02em;
        font-weight: 700;
        padding-bottom: 0;
      }
      &_uppercase {
        text-transform: uppercase;
        font-weight: 900;
      }
    }
  }
</style>
