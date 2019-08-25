<template>
  <div class="card shadow border-0">
    <router-link :to="`/${blog.id}/`">
      <img class="card-img-top" :src="blog.image" :alt="blog.title" />
    </router-link>
    <div class="card-body">
      <router-link :to="`/${blog.id}/`" class="text-dark">
        <h5 class="card-title">{{blog.title}}</h5>
      </router-link>
      <p
        class="card-text"
      >This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <div class="text-right">
        <router-link :to="`/${blog.id}/edit`" class="btn btn-secondary mr-2">
          <i class="fas fa-pencil-alt mr-1" />
          Edit
        </router-link>
        <button class="btn btn-dark" @click="deleteBlog(blog.id)">
          <i class="fas fa-trash mr-1" />
          Delete
        </button>
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
