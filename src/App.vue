<template>
  <div class="bg-gray-900 w-full h-full min-h-screen text-white lg:p-10">
    <Navigation />
    <router-view></router-view>
  </div>
</template>

<script setup>

import { defineAsyncComponent } from "vue";
const Navigation = defineAsyncComponent(
  () => import("@/Components/Navigation.vue"),
);
</script>
