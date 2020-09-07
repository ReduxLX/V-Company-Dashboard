<template>
  <div class="calculator">
    <h1>Die Arithmetik Maschine</h1>
    <Calculator />
  </div>
  <!-- Calculator -->
</template>

<script>
import Calculator from '@/components/Calculator';
import analytics from '@/functions/generalFunctions';
export default {
  components: {
    Calculator
  },
  mounted() {
    analytics.incrementLocalStorageParam('visited_calculator');
  }
};
</script>

<style scoped>
.calculator {
  margin: 20px auto;
}
</style>