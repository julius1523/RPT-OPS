<template>
  <v-container>
    <v-img contain eager aspect-ratio="1.5" src="/img/not_found.svg" max-height="400px"></v-img>
    <v-card-title class="d-flex align-center justify-center">Page Not Found!</v-card-title>
  </v-container>
</template>

<script>
export default {
  metaInfo() {
    return { title: "Error" };
  },
}
</script>