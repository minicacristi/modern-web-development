const routes = [
  { path: '/', component: booksComp },
  { path: '/authors', component: authorsComp },
];

const router = new VueRouter({
  routes // short for `routes: routes`
});