<script>
export default {
  props: {
    count: {
      type: Number,
      required: true
    }
  },
  computed: {
    countColor() {
      return {
        color: '#FFCC01',
        fontFamily: 'Bangers',
        backgroundColor: 'white'
      }
    },
    countTextColor() {
      return {
        color: '#385CA9',
        fontFamily: 'Bangers',
        fontSize: '20px'
      }
    }
  }
}
</script>
<template>
  <div class="col-6 rounded p-2 d-flex align-items-center justify-content-center">
    <p :style="countTextColor" class="fs-3">
      Pokemones descubiertos:<span :style="countColor" class="ms-3 px-3 py-2 rounded-circle">{{
        count
      }}</span>
    </p>
  </div>
</template>
