<template>
  <div>
    <div class="">
      <h1 class="">404</h1>
      <h2>Page Not Found</h2>
      <p>The page you're looking for doesn't exist or has been moved.</p>
      <div class="">
        <router-link to="/" class="btn-primary">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          Go Home
        </router-link>
        <button @click="goBack" class="">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Go Back
        </button>
      </div>
    </div>
    <svg
      class="background-svg"
      viewBox="0 0 1200 800"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0,400 Q300,200 600,400 T1200,400 L1200,800 L0,800 Z"
        fill="rgba(59, 130, 246, 0.05)"
      />
      <path
        d="M0,500 Q300,300 600,500 T1200,500 L1200,800 L0,800 Z"
        fill="rgba(147, 51, 234, 0.05)"
      />
    </svg>
  </div>
</template>

<script setup>
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
