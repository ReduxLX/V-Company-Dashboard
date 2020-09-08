<template>
  <div class="calculator">
    <div class="calculator-screen">
      {{displayNumber()}}
      <br />
      <p
        :class="equation.length <= 20 ? 'med-text': 'small-text'"
      >{{displayEquation() || "equation"}}</p>
    </div>
    <div class="calculator-row">
      <b-button class="calculator-button" @click="clearDisplay" squared>CE</b-button>
      <b-button class="calculator-button" @click="deleteDisplay" squared>DEL</b-button>
      <b-button class="calculator-button" @click="clearMemory" squared>C</b-button>
      <b-button
        class="calculator-button large-text"
        @click="inputOperator('x')"
        variant="warning"
        squared
      >x</b-button>
    </div>
    <div class="calculator-row">
      <b-button class="calculator-button" @click="inputDigit('7')" block squared>7</b-button>
      <b-button class="calculator-button" @click="inputDigit('8')" squared>8</b-button>
      <b-button class="calculator-button" @click="inputDigit('9')" squared>9</b-button>
      <b-button
        class="calculator-button large-text"
        @click="inputOperator('/')"
        variant="warning"
        squared
      >/</b-button>
    </div>
    <div class="calculator-row">
      <b-button class="calculator-button" @click="inputDigit('4')" squared>4</b-button>
      <b-button class="calculator-button" @click="inputDigit('5')" squared>5</b-button>
      <b-button class="calculator-button" @click="inputDigit('6')" squared>6</b-button>
      <b-button
        class="calculator-button large-text"
        @click="inputOperator('-')"
        variant="warning"
        squared
      >-</b-button>
    </div>
    <div class="calculator-row">
      <b-button class="calculator-button" @click="inputDigit('1')" squared>1</b-button>
      <b-button class="calculator-button" @click="inputDigit('2')" squared>2</b-button>
      <b-button class="calculator-button" @click="inputDigit('3')" squared>3</b-button>
      <b-button
        class="calculator-button large-text"
        @click="inputOperator('+')"
        variant="warning"
        squared
      >+</b-button>
    </div>
    <div class="calculator-row">
      <b-button class="calculator-button" @click="inputDigit(0)" squared>0</b-button>
      <b-button class="calculator-wide-button large-text" @click="inputDot" squared>.</b-button>
      <b-button class="calculator-button large-text" @click="inputEqual" variant="warning" squared>=</b-button>
    </div>
  </div>
</template>

<script>
import analytics from '@/functions/generalFunctions';
export default {
  data() {
    return {
      firstOperand: '',
      secondOperand: '',
      equation: '',
      operator: null,
      operatorSelected: false,
      finishOperation: false,
      buttonClass: 'button-class',
      operatorTextClass: 'operator-text'
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
      return displayNum || '0';
    },
    displayEquation() {
      return this.equation;
    },
    inputDigit(digit) {
      analytics.incrementLocalStorageParam('digits');
      this.operatorSelected = false;
      let currentOperand = this.operator ? 'secondOperand' : 'firstOperand';
      if (
        this[currentOperand] === '0' ||
        isNaN(parseFloat(this[currentOperand]))
      ) {
        this[currentOperand] = '' + digit;
      } else {
        this[currentOperand] += digit;
      }
    },
    inputOperator(nextOperator) {
      analytics.incrementLocalStorageParam('operators');
      if (this.finishOperation) {
        this.equation = '';
        this.finishOperation = false;
      }
      if (this.operatorSelected) {
        this.equation = this.equation.slice(0, -1);
        this.equation += nextOperator.toString();
      } else if (this.operator) {
        this.secondOperand = this.secondOperand ? this.secondOperand : '0';
        this.equation += this.secondOperand + nextOperator.toString();
      } else {
        this.firstOperand = this.firstOperand ? this.firstOperand : '0';
        this.equation += this.firstOperand + nextOperator.toString();
      }

      if (this.operator && !this.operatorSelected) {
        this.compute();
      }
      this.operatorSelected = true;
      this.operator = nextOperator;
    },
    inputEqual() {
      if (this.operator && !this.operatorSelected) {
        this.equation += this.secondOperand + '=';
        this.compute(this.operator, this.result, this.value);
        this.operator = null;
        this.finishOperation = true;
        analytics.incrementLocalStorageParam('equations');
      }
    },
    inputDot() {
      if (this.operator && !this.secondOperand.includes('.')) {
        this.secondOperand += this.secondOperand ? '.' : '0.';
      } else if (!this.firstOperand.includes('.')) {
        console.log('h');
        this.firstOperand += this.firstOperand ? '.' : '0.';
      }
    },
    compute() {
      let num1 = parseFloat(this.firstOperand) || 0,
        num2 = parseFloat(this.secondOperand) || 0;
      if (this.operator == '+') {
        this.firstOperand = '' + (num1 + num2);
      } else if (this.operator == '-') {
        this.firstOperand = '' + (num1 - num2);
      } else if (this.operator == 'x') {
        this.firstOperand = '' + num1 * num2;
      } else if (this.operator == '/') {
        this.firstOperand = '' + num1 / num2;
      }
      this.secondOperand = '';
    },
    clearDisplay() {
      if (this.operator) {
        this.secondOperand = '';
      } else {
        this.firstOperand = '';
      }
    },
    clearMemory() {
      analytics.incrementLocalStorageParam('clearMemory');
      this.firstOperand = '';
      this.secondOperand = '';
      this.equation = '';
      this.operator = null;
      this.operatorSelected = false;
      this.finishOperation = false;
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
  text-align: center;
}
.calculator-screen {
  height: 60px;
  width: 100%;
  color: white;
  font-size: 18px;
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
  border: 1px solid black;
}
.calculator-wide-button {
  width: 213px;
  height: 60px;
  border: 1px solid black;
}
.large-text {
  font-size: 20px;
}
.med-text {
  font-size: 15px;
}
.small-text {
  font-size: 13px;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  /* display: none; <- Crashes Chrome on hover */
  -webkit-appearance: none;
  margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}

input[type='number'] {
  -moz-appearance: textfield; /* Firefox */
}
</style>