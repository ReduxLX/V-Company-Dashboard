<template>
  <div>
    <h1>The Workforce</h1>
    <div class="spinner-border" role="status" v-if="fetchingAPI">
      <span class="sr-only">Loading...</span>
    </div>
    <p v-if="fetchingAPI">
      Fetching from API...
      <br />Please refresh if fetching takes too long
    </p>
    <!------------------ Table Controls ------------------>
    <div>
      <b-container fluid>
        <b-row align-h="around">
          <b-col sm="3">
            <b-pagination
              v-model="currentPage"
              :total-rows="totalRows"
              :per-page="perPage"
              align="fill"
              size="sm"
            ></b-pagination>
          </b-col>
          <b-col sm="3">
            <b-form-group
              label="Per page"
              label-cols-sm="7"
              label-size="sm"
              label-for="perPageSelect"
            >
              <b-form-select id="perPageSelect" v-model="perPage" size="sm" :options="pageOptions" />
            </b-form-group>
          </b-col>
        </b-row>
      </b-container>
      <!------------------ Employee Table ------------------>
      <b-table
        striped
        hover
        :items="employees"
        :fields="fields"
        :current-page="currentPage"
        :per-page="perPage"
        v-if="fetchingAPI === false"
      >
        <template v-slot:cell(name)="data">
          <router-link :to="`/employee/${data.id}`">{{ data.employee_name }}</router-link>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
// import { mapState } from "vuex";
import employeesJSON from '@/data/employees';
import analytics from '@/functions/generalFunctions';
export default {
  data() {
    return {
      employees: employeesJSON[0].data,
      fields: [
        { key: 'id', label: 'ID', sortable: true },
        { key: 'employee_name', label: 'Full Name', sortable: true },
        { key: 'employee_salary', label: 'Salary ($)', sortable: true },
        { key: 'employee_age', label: 'Age', sortable: true }
      ],
      fetchingAPI: false,
      pageOptions: [3, 5, 10, 100],
      perPage: 10,
      totalRows: 1,
      currentPage: 1
    };
  },
  mounted: function() {
    this.totalRows = this.employees.length;
    analytics.incrementLocalStorageParam('visited_employees');
    //     // Fetch Employee Records from external API
    //     this.fetchingAPI = true;
    //     fetch("http://dummy.restapiexample.com/api/v1/employees", {
    //       method: "get"
    //     })
    //       .then(response => {
    //         return response.json();
    //       })
    //       .then(responseJson => {
    //         this.employees = responseJson.data;
    //         this.fetchingAPI = false;
    //       });
  }
};
</script>
