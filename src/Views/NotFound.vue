<template>
  <div class="w-full h-full min-h-100 justify-center flex items-center">
    <div class="flex flex-col gap-2 items-center justify-center">
      <h1 class="text-8xl font-black font-sans">404</h1>
      <h2 class="text-red-600 text-xl">Page Not Found</h2>
      <p class="text-lg">The page you're looking for doesn't exist or has been moved.</p>
      <div class="flex gap-4 justify-center items-center">
        <router-link to="/" class="flex items-center hover:underline hover:text-blue-700">
       <Icon icon="material-symbols-light:home-rounded" width="24" height="24" />
          Go Home
        </router-link>
        <button @click="goBack" class="flex items-center hover:underline hover:text-blue-700">
         
          Go Back
        </button>
      </div>
    </div>
    
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { useRouter } from "vue-router";

const router = useRouter();

const goBack = () => {
  if (window.history.length > 1) {
    router.go(-1);
  } else {
    router.push("/");
  }
};
</script>
