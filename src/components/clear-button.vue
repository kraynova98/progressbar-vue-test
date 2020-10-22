<template>
  <button @click="clear()" class="button is-danger is-light">{{ name }}</button>
</template>

<script>

  export default {
    name: 'clearButton',
    props: {
      name: {
        type: String
      }
    },

    methods: {
      clear: function() {
        this.$emit("clearEl")
      }
    }
  }

</script>
