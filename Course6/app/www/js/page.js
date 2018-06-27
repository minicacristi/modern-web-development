// Define a new component called navigation
Vue.component('navigation', {
  template: `
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="https://installeranalytics.com">
        <img width="32" height="32" 
          src="https://installeranalytics.com/common/images/Installer_Analytics_Logo_No_Text.svg"/>
      </a>
      <div class="nav justify-content-end">
        <router-link class="nav-item nav-link" to="/authors">Authors</router-link>
        <router-link class="nav-item nav-link" to="/">Books</router-link>
      </div>
    </nav>
    `
});

// Define a new component called footer
Vue.component('copyright', {
  template: '<footer class="text-center m-5"> Caphyon 2018 </footer>'
});