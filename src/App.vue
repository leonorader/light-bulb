<template>
  <main id="app">
    <h1></h1>
    <div :style="{'background-color': lightBulbColour, display: 'block'}">
      <img alt="bulb" src="./assets/bulb-input-dark.png">
    </div>
  </main>
</template>

<script>

  export default {
    name: 'app',
    data() {
      return {
        colour: 'yellow'
      }
    },
    computed: {
      lightBulbColour() {
        return this.colour
      }
    },
    created() {
      this.$api.get('/bulb/colour')
        .then(function(response) {
          this.colour = response.data
        }.bind(this))
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
