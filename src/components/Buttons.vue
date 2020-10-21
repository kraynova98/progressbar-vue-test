<template>
    <button @click="setElement" :disabled="disabled">{{ name }}</button>
</template>

<script>

  export default {
    name: 'Buttons',
    props: {
      disabled: {
        type: Boolean
      },
      name: {
        type: String
      },
      someFunction: {
        type: Function
      }
    },

    methods: {
      setElement() {
        this.$emit("setEl")
        console.log('cat');
      }
    }
  }

</script>
