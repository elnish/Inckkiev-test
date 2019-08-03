<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Lato', sans-serif;
  color: rgb(255, 255, 255);
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
}

a {
  text-decoration: none;
}

</style>
