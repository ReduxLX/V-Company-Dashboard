# V-Dashboard Web

## About The Project

V-Dashboard is a mock web application which simulates a solutions company website.
Currently it has the following pages:

- Home/Overview Page
- Table of Employees fetched from API
- Calculator with Equation Log
- About Page
- Members Page

The web app also implements a mock Login/Logout although this is just to demonstrate
the Guard route of the Members Page. This means if the web app is refreshed, the user is logged out
and will be kicked out of the Members only page.

## Built With

- [Vue.js (2.x)](https://vuejs.org)
- [BootstrapVue](https://bootstrap-vue.org/)
- [HTML + CSS](https://html.com/)
- [JavaScript](https://www.javascript.com/)
- [Employee API](http://dummy.restapiexample.com/)

## Known Bugs

- Clearing Activity in Members Page refreshes the page which causes the user to be logged out
- Trying to access the Employee Database multiple times will cause it to load forever, this is because of
  too many requests error from the API source
- The Calculator component for some reason takes up all the height below it. This is not visible
  in the current web app but can be problematic for future additions.
- Sometimes the Login toast can appear twice, whether this is a Bootstrap bug I'm not sure.
