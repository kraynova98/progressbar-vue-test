<template>
    <button @click="setElement" class="button is-primary" :disabled="disabled">{{ name }}</button>
</template>

<script>

  export default {
    name: 'addButton',
    props: {
      disabled: {
        type: Boolean
      },
      name: {
        type: String
      }
    },

    methods: {
      setElement() {
        this.$emit("setEl");
      }
    }
  }

</script>
