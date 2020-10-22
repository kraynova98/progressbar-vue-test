<template>
  <label>
    <input class="input is-primary" :input="getMaxCount()" v-model.number="val" type="number" min="0" placeholder="Введите число">
  </label>
</template>

<script>

  export default {
    name: 'maxCount',

    data() {
      return {
        val: ''
      }
    },

    methods: {
      getMaxCount() {
        this.$emit( 'changeValue', this.val)
      }
    }

  }

</script>
