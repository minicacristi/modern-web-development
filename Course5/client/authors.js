const authorsComp = Vue.component('authors', {
  mounted: function () {
    // get authors
    axios('/author').then((resp) => {
      this.authors = resp.data;
    });
  },
  data: function () {
    return {
      authors: [
      ]
    };
  },
  template: `
      <article>
        <h5> Authors list: </h5>
        <ol>
          <li v-for="author in authors">
            {{author}}
          </li>
        </ol>
      </article>
      `
});