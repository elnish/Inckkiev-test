<template>
  <div>
    <a>{{ msg }}</a>    
  </div>
</template>

<script>
export default {
  name: 'Btn',
  props: {
    msg: String,
  },

}
</script>

<style lang="scss">
  .btn {
      width: 380px;
      height: 90px;
      border-radius: 100px;
      border: none;
      cursor: pointer;
      outline: none;
      background-color: rgb(255, 255, 255);
      font-family: 'Montserrat', sans-serif;
      font-weight: bold;
      font-size: 36px;
      line-height: 44px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: rgb(142, 154, 213);
      transition: all .7s ease-in-out;
      margin-top: 120px;
      margin-left: 50px;
      &_grey {
        font-family: 'Lato', sans-serif;
        width: 270px;
        height: 60px;
        font-size: 24px;
        line-height: 29px;
        color: rgb(255, 255, 255);
        background: linear-gradient(90deg, #D9D9D9 0%, #A1A1A1 100%);
        margin: 0;
        position: absolute;
        left: 130px;
        bottom: 85px;
        &:hover {
          background: linear-gradient(63.53deg, #2D8550 16.62%, #5E6EC2 83.38%);
        }
      }
      &_small {
        width: 280px;
        height: 90px;
        color: #fff;
        font-size: 28px;
        line-height: 34px;
        background-color: #2D8550;
        margin: 0 0 0 40px;
        opacity: .8;
        transition: all .7 ease-in-out;
        &:hover {
          opacity: 1;
          transform: scale(1.03);
        }
      }
      &_first {
        background: linear-gradient(258.29deg, #8049C7 0%, #CA57FD 100%);
      }
      &_second {
        background: linear-gradient(258.29deg, #169AE4 0%, #0CC4FA 100%);
      }
      &_third {
        background: linear-gradient(90deg, #FFD748 0.02%, rgba(195, 199, 11, 0.96) 99.97%, #CAC6AB 99.98%, #D3E9E1 99.99%);
      }
      &_hover {
        &:hover {
            color: #fff;
            background: linear-gradient(258.29deg, #169AE4 0%, #0CC4FA 100%);
        }
      }
  }
</style>
