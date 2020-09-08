<template>
  <div class="calculator">
    <br />
    <h1>Die Arithmetik Maschine</h1>
    <Calculator />
  </div>
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
  margin: 0px auto;
  min-height: 100vh;
  background-color: #eaeaea;
}
</style>