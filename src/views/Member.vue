<template>
  <div class="member">
    <b-jumbotron bg-variant="dark" text-variant="white">
      <template v-slot:header>Your Activity</template>
      <template v-slot:lead>The amount of times you visited the routes in this webapp</template>
      <div class="deck">
        <b-card-group deck class="deck">
          <b-card
            v-for="route in routes"
            :key="route.title"
            :header="route.title"
            style="max-width: 15rem;"
          >
            <h1>{{route.count || 0}}</h1>
          </b-card>
        </b-card-group>
      </div>

      <b-button variant="warning" @click="clearRoutes">Delete Activity</b-button>
    </b-jumbotron>
    <b-jumbotron bg-variant="danger" text-variant="white">
      <template v-slot:header>Calculator Activity</template>
      <template v-slot:lead>The amount of times you used different parts of the calculator</template>
      <div class="deck">
        <b-card-group deck class="deck">
          <b-card
            v-for="item in calculator"
            :key="item.title"
            :header="item.title"
            style="max-width: 15rem;"
          >
            <h1>{{item.count || 0}}</h1>
          </b-card>
        </b-card-group>
      </div>

      <b-button variant="warning" @click="clearCalculator">Delete Activity</b-button>
    </b-jumbotron>
  </div>
</template>

<script>
import analytics from '@/functions/generalFunctions';
export default {
  data() {
    return {
      routeItems: [
        { key: 'visited_home', title: 'Home Page' },
        { key: 'visited_employees', title: 'Employee Page' },
        { key: 'visited_calculator', title: 'Calculator Page' },
        { key: 'visited_about', title: 'About Page' },
        { key: 'visited_member', title: 'Members Page' }
      ],
      calcItems: [
        { key: 'digits', title: 'Digits Pressed' },
        { key: 'operators', title: 'Operators Used' },
        { key: 'equations', title: 'Equations Generated' },
        { key: 'clearMemory', title: 'Displays Cleared' }
      ],
      routes: [],
      calculator: []
    };
  },
  methods: {
    clearRoutes() {
      this.routeItems.forEach(item => localStorage.removeItem(item.key, 0));
      this.$router.go();
    },
    clearCalculator() {
      this.calcItems.forEach(item => localStorage.removeItem(item.key, 0));
      this.$router.go();
    }
  },
  mounted() {
    analytics.incrementLocalStorageParam('visited_member');
    this.routeItems.map(route => {
      let count = localStorage.getItem(route.key);
      this.routes.push({ title: route.title, count });
    });
    this.calcItems.map(calc => {
      let count = localStorage.getItem(calc.key);
      this.calculator.push({ title: calc.title, count });
    });
  }
};
</script>

<style scoped>
.member {
  min-height: 100vh;
  background-color: #343a40;
}
.card {
  color: black;
}
.deck {
  width: 100%;
  justify-content: center;
}
.btn {
  margin-top: 20px;
}
</style>