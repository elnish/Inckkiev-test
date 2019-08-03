<template>
  <div class="main">
    <div class="main__aside">
        <div class="main__aside__menu">
            <router-link to="/" class="main__btn-aside main__btn-aside_hover"><img src="../assets/Union.png" alt="home" class="main__aside-icon"></router-link>
            <router-link to="/main" class="main__btn-aside main__btn-aside main__btn-aside_hover"><img src="../assets/Group.png" alt="home" class="main__aside-icon main__aside-icon_big"></router-link>
        </div>
        <div class="main__param-container">
            <p class="main__param-text">Параметры:</p>
            <div class="main__params">
                <div class="main__param-item">
                <img src="../assets/sad_icon.png" alt="icon" class="main__param-img">
                <span class="main__count">{{ a }}</span>
                </div>
                <div class="main__param-item">
                    <img src="../assets/happy_icon.png" alt="icon" class="main__param-img">
                    <span class="main__count">{{ b }}</span>
                </div>
                <div class="main__param-item">
                    <img src="../assets/heart_icon.png" alt="icon" class="main__param-img">
                    <span class="main__count">{{ c }}</span>
                </div>
            </div>
        </div>
        <div class="main__aside-footer">
            <p class="main__aside-text">Осталось в очереди: <br/> <span class="main__aside-text main__aside-text_bold">{{ d }}</span>/15</p>
        </div>
    </div>
    <div class="main__contant">
        <div class="main__card">
            <img src="../assets/image1.png" alt="photo" class="main__photo">
            <h6 class="main__card-header">Валентина, 75 років</h6>
            <p class="main__card-text">Дитя, дай бабусі ліки від тиску за цим рецептом, але не дорогих, тих, що дешевші!</p>
        </div>
         <div class="main__btn-container">
            <a class="btn btn_small btn_first" v-on:click="a++, d--">Препарат 1</a>
            <a class="btn btn_small btn_second" v-on:click="b++, d--">Препарат 2</a>
            <a class="btn btn_small btn_third" v-on:click="c++, d--">Препарат 3</a>
            <!-- <Btn msg="Препарат 1" class="btn btn_small btn_first"></Btn>
            <Btn msg="Препарат 1" class="btn btn_small btn_second"></Btn>
            <Btn msg="Препарат 1" class="btn btn_small btn_third" v-on:click="a++" v-bind:a="a"></Btn> -->
        </div>
    </div>
   
  </div>
</template>

<script>
// import Btn from '@/components/Btn.vue'

export default {
    name: 'main',
    components: {
        // Btn
    },
    data(){
        return {
            a: 0,
            b: 0, 
            c: 0,
            d: 15
        }
    },
}
</script>

<style lang="scss" scoped>
  .main {
    position: relative;
    width: 1440px;
    height: 1024px;
    display: flex;
    flex-direction: row;
    &__aside {
        width: 470px;
        height: 100%;
        background: linear-gradient(77.12deg, rgba(45, 133, 80, .7) 16.62%, rgba(94, 110, 194, .7) 83.38%);
    }
    &__aside__menu {
        display: flex;
        flex-direction: row;
        padding: 70px 0 0 50px;
    }

    &__btn-aside {
        display: block;
        width: 70px;
        height: 70px;
        background: rgb(255, 255, 255);
        border-radius: 50px;
        margin-right: 38px;
        transition: transform .5s ease-in-out, opacity .5s ease-in-out;
        opacity: .7;
        &_hover {
            &:hover {
                transform: scale(1.1);
                opacity: 1;
            }     
      }
    }
    &__aside-icon {
        width: 35px;
        height: 35px;
        margin: 17px;
        &_big {
            width: 55px;
            height: 45px;
            margin: 14px 9px;
        }
    }
    &__param-container {
        margin: 290px 0 0 50px; 
    }
    &__param-text {
        font-size: 36px;
        font-weight: 700;
        line-height: 44px;
        color: rgb(255, 255, 255);
    }
    &__params {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    &__param-item {
        width: 190px;
        height: 80px;
        background-color: rgb(255, 255, 255);
        box-shadow: 0px 0px 50px rgba(131, 42, 64, 0.4);
        border-radius: 40px;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 30px 20px 0 0;
        &:last-child {
            margin: 40px auto;
        }
    }
    &__param-img {
        width: 60px;
        height: 60px;
        margin: 0 45px 0 10px;
    }
    &__count {
        font-size: 48px;
        line-height: 59px;
        color: rgb(66, 66, 66);
    }
    &__aside-footer {
        position: absolute;
        width: 470px;
        height: 134px;
        background: rgba(255, 255, 255, .15);
        left: 0;
        bottom: 0;
    }
    &__aside-text {
        font-size: 36px;
        line-height: 50px;
        text-align: center;
        letter-spacing: 0.02em;
        font-weight: 100;
        padding-top: 20px;
        &_bold {
            font-weight: 900;
            font-size: 38px;
        }
    }
    &__card {
        position: relative;
        width: 540px;
        height: 590px;
        background: #FFFFFF;
        box-shadow: 0px 0px 40px rgba(127, 127, 127, 0.4);
        margin: 130px auto 170px;
        border-radius: 40px;
    }
    &__card-header {
        font-size: 32px;
        line-height: 39px;
        color: #8E9AD5;
        padding: 25px 60px;
    }
    &__card-text {
        width: 420px;
        color: rgb(127, 127, 127);
        font-size: 22px;
        padding-left: 60px;
    }
    &__btn-container {
        display: flex;
    }
  }
</style>
