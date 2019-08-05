<template>
  <div class="main">
    <div class="main__aside">
        <div class="main__aside__menu">
            <router-link to="/" class="main__btn-aside main__btn-aside_hover"><img src="../assets/Union.png" alt="home" class="main__aside-icon"></router-link>
            <div v-on:click="reload()" class="main__btn-aside main__btn-aside main__btn-aside_hover"><img src="../assets/Group.png" alt="home" class="main__aside-icon main__aside-icon_big"></div>
        </div>
        <div class="main__param-container">
            <p class="main__param-text">Параметры:</p>
            <div class="main__params">
                <div class="main__param-item">
                <img src="../assets/sad_icon.png" alt="icon" class="main__param-img">
                <span class="main__count">{{ firstDrug }}</span>
                </div>
                <div class="main__param-item">
                    <img src="../assets/happy_icon.png" alt="icon" class="main__param-img">
                    <span class="main__count">{{ secondDrug }}</span>
                </div>
                <div class="main__param-item">
                    <img src="../assets/heart_icon.png" alt="icon" class="main__param-img">
                    <span class="main__count">{{ thirdDrug }}</span>
                </div>
            </div>
        </div>
        <div class="main__aside-footer">
            <p class="main__aside-text">Осталось в очереди: <br/> <span class="main__aside-text main__aside-text_bold">{{ max }}</span>/15</p>
        </div>
    </div>
    <!-- <div class="main__contant"> -->

        <!-- <div v-for="patient in patients" v-bind:key="patient.id" v-show="patient.show" class="main__card">
            <img :src="patient.srcImage" alt="photo" class="main__photo">
            <h6 class="main__card-header">{{ patient.title }}</h6>
            <p class="main__card-text">{{ patient.text }}</p>
        </div> -->

        <div v-cloak>
            <tinder
                ref="tinder"
                :queue.sync="queue"
                @submit="submit" class="main__contant">
                <template slot-scope="{data}" class="main__card">
                    <img class="main__photo" :src="data.key">
                    <h6 class="main__card-header">{{ data.key1 }}</h6>
                    <p class="main__card-text">{{ data.key2 }}</p>
                </template>
                <img class="like-pointer" slot="nope" src="../assets/cheap1.png">
                <img class="nope-pointer" slot="super" src="../assets/brand.png">
                <img class="super-pointer" slot="like" src="../assets/teva.png">

            </tinder>
            <div class="main__btn-container">
                <a class="btn btn_small btn_first" v-on:click="firstInc(), decide('nope'), next()">Препарат 1</a>
                <a class="btn btn_small btn_second" v-on:click="secondInc(), decide('super'), next()">Препарат 2</a>
                <a class="btn btn_small btn_third" v-on:click="thirdInc(), decide('like'), next()">Препарат 3</a>
            </div>
        </div>
<!--       
    </div> -->
   
  </div>
</template>

<script>
import tinder from 'vue-tinder';

import {mapGetters} from "vuex";
import {mapActions} from "vuex";

export default {
    name: 'main',
    components: {
      tinder
    },
    data(){
        return {
            queue: [],
            patients: [
                {
                    id: 0,
                    title: "Валентина, 75 років",
                    text: "Дитя, дай бабусі ліки від тиску за цим рецептом, але не дорогих, тих, що дешевші!",
                    srcImage: require("../assets/p1.jpg"),
                    show: true
                },
                {   
                    id: 1,
                    title: "Марія, 19 років",
                    text: "Бабуся приймає брендовий препарат від болю в суглобах, він допомагає, але занадто дорогий. У Вас є якісний аналог з нижчою ціною? Якщо ні — давайте бренд.",
                    srcImage: require("../assets/p2.jpg"),
                    show: false
                },
                {
                    id: 2,
                    title: "Степан, 61 рік",
                    text: "Спросоння відсунув гарячий чайник рукою та обпікся. У Вас всі ліки від опіків такі дорогі? Можна хороший препарат недорого?",
                    srcImage: require("../assets/p3.jpg"),
                    show: false
                },
                {
                    id: 3,
                    title: "Любов, 58 років",
                    text: "Лікар призначив препарат від артеріальної гіпертензії, а бренд дорого коштує. Тому мені потрібен аналог з хорошою ефективністю та приємною ціною.",
                    srcImage: require("../assets/p4.jpg"),
                    show: false
                },
                {
                    id: 4,
                    title: "Олександр, 20 років",
                    text: "Порекомендуйте ефективний препарат від болю в горлі за розумну ціну.",
                    srcImage: require("../assets/p5.jpg"),
                    show: false
                },
                {
                    id: 5,
                    title: "Ірина, 55 років",
                    text: "У мене часто невралгії, лікар призначив вітаміни групи В. Мені потрібен якісний аналог за прийнятною ціною.",
                    srcImage: require("../assets/p6.jpg"),
                    show: false 
                }
            ]
            
        }
    },
    created () {
        this.getData()
    },
    computed: {
      ...mapGetters([
        "firstDrug",
        "secondDrug",
        "thirdDrug",
        "max"
      ])
    },
    methods: {
        ...mapActions([
            "firstInc",
            "secondInc",
            "thirdInc",
            "reload"
        ]),
        next: function() {
            if(this.max == 9) {
                this.$router.push({ path: 'final' })
            }
        },
         getData: function () {
            const list = []
            for (let i = 0; i < 6; i++) {
                list.push({
                    key: this.patients[i].srcImage,
                    key1: this.patients[i].title,
                    key2: this.patients[i].text
                })
            }
            this.queue = this.queue.concat(list)
        },
        decide: function (choice) {
            this.$refs.tinder.decide(choice)
        },
         submit: function (choice) {
            switch (choice) {
                case 'nope': 
                break;
                case 'like': 
                break;
                case 'super': 
                break;
            }
            if (this.queue.length < 2) {
                this.getData()
            }
        }
    }
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
    &__card-header {
        font-size: 32px;
        line-height: 39px;
        color: #8E9AD5;
        padding: 25px 60px;
    }
    &__card-text {
        width: 420px;
        color: rgb(127, 127, 127);
        font-size: 20px;
        padding-left: 60px;
    }
    &__btn-container {
        display: flex;
    }
  }

// vue-tinder
[v-cloak] { display: none; }

.vue-tinder {
    z-index: 1;
    position: relative;
    width: 540px;
    height: 590px;
    background: #FFFFFF;
    box-shadow: 0px 0px 40px rgba(127, 127, 127, 0.4);
    margin: 130px auto 170px;
    border-radius: 40px;
}

.nope-pointer { right: 10px; }
.like-pointer { left: 10px; }
.nope-pointer,
.like-pointer {
    position: absolute;
    z-index: 2;
    top: 200px;
    width: 360px;
    height: 120px;
 
}
.super-pointer {
    position: absolute;
    z-index: 2;
    top: 200px;
    left: 0;
    right: 0;
    margin: auto;
    width: 360px;
    height: 120px;
}


</style>
