<template>
  <div class="employees">
    <h1>The Workforce</h1>
    <!-- Loading Spinner -->
    <div class="spinner-border" role="status" v-if="fetchingAPI">
      <span class="sr-only">Loading...</span>
    </div>
    <p v-if="fetchingAPI">
      Fetching from API...
      <br />Please refresh if fetching takes too long
    </p>
    <!------------------ Table Controls ------------------>
    <div>
      <b-container fluid v-if="fetchingAPI === false">
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
        class="table"
        striped
        hover
        :items="employees"
        :fields="fields"
        :current-page="currentPage"
        :per-page="perPage"
        v-if="fetchingAPI === false"
      ></b-table>
    </div>
    <a href="https://reqres.in/api/users?page=1">Source API</a>
  </div>
</template>

<script>
import analytics from '@/functions/generalFunctions';
export default {
  data() {
    return {
      employees: [],
      fields: [
        { key: 'id', label: 'ID', sortable: true },
        { key: 'first_name', label: 'Full Name', sortable: true },
        { key: 'last_name', label: 'Last Name', sortable: true },
        { key: 'email', label: 'Email', sortable: true }
      ],
      fetchingAPI: false,
      pageOptions: [3, 5, 10, 100],
      perPage: 10,
      totalRows: 1,
      currentPage: 1
    };
  },
  mounted: function() {
    analytics.incrementLocalStorageParam('visited_employees');
    // Fetch Employee Records from external API
    this.fetchingAPI = true;
    fetch('https://reqres.in/api/users?page=1', {
      method: 'get'
    })
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        this.employees = responseJson.data;
      });
    fetch('https://reqres.in/api/users?page=2', {
      method: 'get'
    })
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        responseJson.data.forEach(element => {
          this.employees.push(element);
        });
        this.fetchingAPI = false;
        this.totalRows = this.employees.length;
      });
  }
};
</script>

<style scoped>
.employees {
  min-height: 100vh;
  background-color: #eaeaea;
  padding: 20px 0px;
}
.table {
  margin: 20px auto;
  width: 75%;
}
</style>
