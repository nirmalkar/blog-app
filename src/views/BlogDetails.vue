<template>
  <div class="container">
    <div class="card">
      <div class="card-body">
        <h3>{{blog.title}}</h3>
        <p>{{blog.body}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "BlogDetails",
  data() {
    return {
      blog: {}
    };
  },
  created() {
    axios
      .get(
        `https://my-json-server.typicode.com/hemantkumar2/blog-app-db/posts/${this.$router.history.current.params.id}`
      )
      .then(res => {
        this.blog = res.data;
      })
      .catch(error => console.log(error));
  }
};
</script>

<style>
</style>