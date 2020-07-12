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
    computed: {
      lightBulbColor() {
        return 'yellow'
      }
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
