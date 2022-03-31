<template>
  <div v-if="job">
    <h1>{{ job.title }}</h1>
    <p>The job id is {{ id }}</p>
    <p>{{ job.details }}</p>
  </div>
  <div v-else>
    <p>Loading in the details...</p>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      job: null
    }
  },
  async mounted() {
    const res = await fetch("http://localhost:5000/jobs/" + this.id)
    const data = await res.json()
    this.job = data
  }
  // data() {
  //   return {
  //     id: this.$route.params.id
  //   }
  // }
}
</script>

<style></style>
