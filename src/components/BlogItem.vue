<template>
  <div class="card">
    <img class="card-img-top" :src="blog.image" :alt="blog.title" />
    <div class="card-body">
      <h5 class="card-title">{{blog.title}}</h5>
      <p
        class="card-text"
      >This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <router-link :to="`/${blog.id}/edit`" class="btn btn-info mr-2">Edit</router-link>
      <button class="btn btn-danger" @click="deleteBlog(blog.id)">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogItem",
  props: ["blog", "deleteBlog"]
};
</script>

<style scoped>
</style>
