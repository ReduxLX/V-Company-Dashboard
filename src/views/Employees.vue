<template>
  <div>
    <h1>The Workforce</h1>
    <p v-if="fetchingAPI">
      Fetching from API...
      <br />Please refresh if fetching takes too long
    </p>
    <b-table striped hover :items="employees" :fields="fields" v-else>
      <template v-slot:cell(name)="data">
        <router-link :to="`/employee/${data.id}`">{{ data.employee_name }}</router-link>
      </template>
    </b-table>
  </div>
</template>

<script>
// import { mapState } from "vuex";
export default {
  data() {
    return {
      employees: {},
      fields: [
        { key: "id", label: "ID", sortable: true },
        { key: "employee_name", label: "Full Name", sortable: true },
        { key: "employee_salary", label: "Salary ($)", sortable: true },
        { key: "employee_age", label: "Age", sortable: true }
      ],
      fetchingAPI: null
    };
  },
  mounted: function() {
    // Fetch Employee Records from external API
    this.fetchingAPI = true;
    fetch("http://dummy.restapiexample.com/api/v1/employees", {
      method: "get"
    })
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        this.employees = responseJson.data;
        this.fetchingAPI = false;
      });
  }
};
</script>