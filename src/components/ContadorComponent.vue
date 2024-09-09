<template>
  <div>
    <p>Pokemones descubiertos: {{ count }}</p>
  </div>
</template>

<script>
export default {
  props: {
    count: Number
  }
}
</script>
