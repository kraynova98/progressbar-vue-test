<template>
  <progress class="progress is-warning" :value="value" :max="max"></progress>
</template>

<script>

  export default {
    name: 'Progress',
    props: {
      value: {
        type: Number
      },
      max: {
        type: Number
      }
    },

    // computed: {
    //   maxValue: {
    //     get() {
    //       return this.max;
    //     }
    //   }
    // }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.progress::-webkit-progress-value {
  transition: width 0.5s ease;
}
</style>
