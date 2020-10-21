<template>
  <div id="app">
    <div class="container">
      <Progress :value="progress.array.length" :max="progress.max"></Progress>
    </div>
    <div class="columns">
      <div class="column">
        <Buttons @setEl="setEl" class="button is-primary" name="Добавить"></Buttons>
      </div>
<!--      <div class="column">-->
<!--        <Buttons class="button is-danger is-light" name="Очистить"></Buttons>-->
<!--      </div>-->
    </div>
    <p>{{ progress.array }}</p>
  </div>
</template>

<script>
  import Progress from "@/components/Progress";
  import Buttons from "@/components/Buttons";

  export default {
    name: 'App',
    components:{ Progress, Buttons },

    data () {
      return {
        progress: {
          array: [],
          // value: this.array.length,
          max: 10
        }
      }
    },

    methods: {
      setEl() {
        this.progress.array.push('cat');
      }
    }
  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
