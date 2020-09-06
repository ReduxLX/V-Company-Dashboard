<template>
  <div>
    <h1>Die Arithmetik Maschine</h1>
    <div class="calculator">
      <input type="text" class="calculator-screen" disabled />
      <div class="calculator-row">
        <b-button class="calculator-button" squared>CE</b-button>
        <b-button class="calculator-button" squared>DEL</b-button>
        <b-button class="calculator-button" squared>C</b-button>
        <b-button class="calculator-opbutton" variant="warning" squared>X</b-button>
      </div>
      <div class="calculator-row">
        <b-button class="calculator-button" squared>7</b-button>
        <b-button class="calculator-button" squared>8</b-button>
        <b-button class="calculator-button" squared>9</b-button>
        <b-button class="calculator-opbutton" variant="warning" squared>/</b-button>
      </div>
      <div class="calculator-row">
        <b-button class="calculator-button" squared>4</b-button>
        <b-button class="calculator-button" squared>5</b-button>
        <b-button class="calculator-button" squared>6</b-button>
        <b-button class="calculator-opbutton" variant="warning" squared>-</b-button>
      </div>
      <div class="calculator-row">
        <b-button class="calculator-button" squared>1</b-button>
        <b-button class="calculator-button" squared>2</b-button>
        <b-button class="calculator-button" squared>3</b-button>
        <b-button class="calculator-opbutton" variant="warning" squared>+</b-button>
      </div>
      <div class="calculator-row">
        <b-button class="calculator-button" squared>0</b-button>
        <b-button class="calculator-wide-button" squared>.</b-button>
        <b-button class="calculator-button" variant="warning" squared>=</b-button>
      </div>
    </div>
  </div>
  <!-- Calculator -->
</template>

<script>
// import { mapState } from "vuex";
export default {};
</script>

<style scoped>
.calculator {
  width: 300px;
  margin: 0 auto;
  text-align: center;
}
.calculator-screen {
  height: 60px;
  width: 100%;
  background: #1e1e1e;
  border: none;
  text-align: right;
}
.calculator-row {
  display: flex;
}
.calculator-button {
  width: 100px;
  height: 60px;
}
.calculator-opbutton {
  width: 100px;
  height: 60px;
  border: none;
}

.calculator-wide-button {
  width: 215px;
  height: 60px;
}
</style>