<template>
  <div class="list-group-item">
    <div class="row">
      <div class="col-lg-10">
        <router-link :to="`/${blog.id}`">
          <p>{{blog.title}}</p>
        </router-link>
      </div>
      <div class="col-lg-2">
        <router-link :to="`/${blog.id}/edit`" class="btn btn-info mr-2">Edit</router-link>
        <button class="btn btn-danger" @click="deleteBlog(blog.id)">Delete</button>
      </div>
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
