<template>
  <div>
    <h1>Die Arithmetik Maschine</h1>
    <div class="calculator">
      <div class="calculator-screen">{{displayNumber()}}</div>
      <div class="calculator-row">
        <b-button class="calculator-button" @click="clearDisplay" squared>CE</b-button>
        <b-button class="calculator-button" @click="deleteDisplay" squared>DEL</b-button>
        <b-button class="calculator-button" @click="clearMemory" squared>C</b-button>
        <b-button
          class="calculator-opbutton"
          @click="inputOperator('x')"
          :disabled="waitingForSecondNum"
          variant="warning"
          squared
        >X</b-button>
      </div>
      <div class="calculator-row">
        <b-button class="calculator-button" @click="inputDigit('7')" block squared>7</b-button>
        <b-button class="calculator-button" @click="inputDigit('8')" squared>8</b-button>
        <b-button class="calculator-button" @click="inputDigit('9')" squared>9</b-button>
        <b-button
          class="calculator-opbutton"
          @click="inputOperator('/')"
          :disabled="waitingForSecondNum"
          variant="warning"
          squared
        >/</b-button>
      </div>
      <div class="calculator-row">
        <b-button class="calculator-button" @click="inputDigit('4')" squared>4</b-button>
        <b-button class="calculator-button" @click="inputDigit('5')" squared>5</b-button>
        <b-button class="calculator-button" @click="inputDigit('6')" squared>6</b-button>
        <b-button
          class="calculator-opbutton"
          @click="inputOperator('-')"
          :disabled="waitingForSecondNum"
          variant="warning"
          squared
        >-</b-button>
      </div>
      <div class="calculator-row">
        <b-button class="calculator-button" @click="inputDigit('1')" squared>1</b-button>
        <b-button class="calculator-button" @click="inputDigit('2')" squared>2</b-button>
        <b-button class="calculator-button" @click="inputDigit('3')" squared>3</b-button>
        <b-button
          class="calculator-opbutton"
          @click="inputOperator('+')"
          :disabled="waitingForSecondNum"
          variant="warning"
          squared
        >+</b-button>
      </div>
      <div class="calculator-row">
        <b-button class="calculator-button" @click="inputDigit(0)" squared>0</b-button>
        <b-button class="calculator-wide-button" @click="inputDot" squared>.</b-button>
        <b-button class="calculator-button" @click="inputEqual" variant="warning" squared>=</b-button>
      </div>
    </div>
  </div>
  <!-- Calculator -->
</template>

<script>
export default {
  data() {
    return {
      firstOperand: "",
      secondOperand: "",
      operator: null
    };
  },
  methods: {
    // Intercept all keypresses and check if key is number, dot or backspace
    // If not, we prevent the key press from firing
    isNumber($event) {
      console.log($event);
      let legalChar =
        ($event.charCode != 8 && $event.charCode == 0) ||
        $event.charCode == 46 ||
        ($event.charCode >= 48 && $event.charCode <= 57);
      if (legalChar) {
        return true;
      } else {
        $event.preventDefault();
      }
    },
    displayNumber() {
      let displayNum = this.operator ? this.secondOperand : this.firstOperand;
      return displayNum || 0;
    },
    inputDigit(digit) {
      let currentOperand = this.operator ? "secondOperand" : "firstOperand";
      if (this[currentOperand] === 0) {
        this[currentOperand] = digit;
      } else {
        this[currentOperand] += digit;
      }
    },
    inputOperator(nextOperator) {
      if (this.operator) {
        this.compute();
      }
      this.operator = nextOperator;
    },
    inputEqual() {
      if (this.operator) {
        this.compute(this.operator, this.result, this.value);
        this.operator = null;
      }
    },
    inputDot() {
      if (this.operator && !this.secondOperand.includes(".")) {
        this.secondOperand += ".";
      } else if (!this.firstOperand.includes(".")) {
        this.firstOperand += "0.";
      }
    },
    compute() {
      let num1 = parseFloat(this.firstOperand) || 0,
        num2 = parseFloat(this.secondOperand) || 0;
      if (this.operator == "+") {
        this.firstOperand = "" + (num1 + num2);
      } else if (this.operator == "-") {
        this.firstOperand = "" + (num1 - num2);
      } else if (this.operator == "x") {
        this.firstOperand = "" + num1 * num2;
      } else if (this.operator == "/") {
        this.firstOperand = "" + num1 / num2;
      }
      this.secondOperand = "";
      this.operator = "";
    },
    clearDisplay() {
      if (this.operator) {
        this.secondOperand = "";
      } else {
        this.firstOperand = "";
      }
    },
    clearMemory() {
      this.firstOperand = "";
      this.secondOperand = "";
      this.operator = null;
    },
    deleteDisplay() {
      if (this.operator) {
        this.secondOperand = this.secondOperand.slice(0, -1);
      } else {
        this.firstOperand = this.firstOperand.slice(0, -1);
      }
    }
  }
};
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
  color: white;
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
.calculator-button:hover {
  color: white;
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
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  /* display: none; <- Crashes Chrome on hover */
  -webkit-appearance: none;
  margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}

input[type="number"] {
  -moz-appearance: textfield; /* Firefox */
}
</style>