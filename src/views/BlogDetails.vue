<template>
  <div class="container mt-5 pt-5">
    <div class="card mb-5">
      <img class="card-img-top" :src="blog.image" :alt="blog.title" />
      <div class="card-body">
        <h3 class="card-title">{{blog.title}}</h3>
        <p class="card-text">{{blog.body}}</p>
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