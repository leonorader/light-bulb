<template>
  <main id="app">
    <h1></h1>
    <div :style="{'background-color': lightBulbColor}">
      <img alt="bulb" src="./assets/bulb-input-dark.png">
    </div>
  </main>
</template>

<script>

  export default {
    name: 'app',
    data() {
      return {
        lightBulbColor: 'yellow'
      }
    },
    created() {
      this.$api
        .get('/bulb/color')
        .then(response => (this.lightBulbColor = response))
    }
  }
</script>

<style>

  #app {
    background-color: #303030;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>
