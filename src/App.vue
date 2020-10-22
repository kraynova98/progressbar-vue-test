<template>
  <div id="app">
    <div class="container mt-6">
      <Progress :value="array.length" :max="maxCountValue"></Progress>
      <div class="columns mt-6">
        <div class="column">
          <addButton @setEl="setEl" name="Добавить" :disabled="isFull"></addButton>
        </div>
        <div class="column">
          <clearButton @clearEl="clearEl" name="Очистить"></clearButton>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <maxCount @changeValue = "setMaxCount"></maxCount>
        </div>
      </div>
      <h5 class="title is-5" v-if="maxCountValue && isFull">Вы не можете нажать на кнопку более {{ maxCountValue + " " + wordType }}</h5>
    </div>
  </div>
</template>

<script>
  import Progress from "@/components/Progress";
  import addButton from "@/components/add-button";
  import clearButton from "@/components/clear-button";
  import maxCount from "@/components/max-count";

  export default {
    name: 'App',
    components:{ Progress, addButton, clearButton, maxCount },

    data () {
      return {
          array: [],
          maxCountValue: 0
      }
    },

    computed: {
      isFull: function() {
        return this.array.length >= (this.maxCountValue || 0);
      },

      wordType: function() {
        return this.maxCountValue !== 1 ? 'раз' : 'раза'
      }
    },

    methods: {
      setEl() {
        if (!this.isFull) {
          this.array.push('cat');
        }
      },

      clearEl() {
        this.array = [];
      },

      setMaxCount(val) {
        this.maxCountValue = val;
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
