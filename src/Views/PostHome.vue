<template>
  <section class="w-full max-w-300 m-auto lg:py-8 px-4">
    <div class="pl-5">
      <button
        @click="refetch()"
        class="flex mb-5 bg-blue-500 text-white py-3 px-6 border-0 rounded-lg font-semibold cursor-pointer transition duration-200 hover:text-blue-700"
      >
        <Icon icon="ic:baseline-refresh" width="24" height="24" /> Refresh
      </button>
    </div>
    <div
      v-if="loading"
      class="w-full min-h-100 h-full flex flex-col gap-5 justify-center items-center text-4xl"
    >
      <p>Loading post...</p>
      <Icon icon="eos-icons:loading" class="size-20" />
    </div>

    <div v-else-if="error" class="text-center px-4 py-12 rounded-xl shadow-md">
      <Icon
        icon="mdi:error"
        class="w-full max-w-5xl h-16 m-auto text-red-500"
      />
      <h3 class="text-2xl font-bold text-[#1f2937] mb-2">
        Failed to load posts
      </h3>
      <p class="text-[#6b7280] mb-6">{{ error }}</p>
      <button
        @click="refetch"
        class="bg-blue-500 text-white py-3 px-6 border-0 rounded-lg font-semibold cursor-pointer transition duration-200 hover:text-blue-700"
      >
        Try Again
      </button>
    </div>
    <div v-else-if="!data || data.length === 0" class="">
      <Icon
        icon="iconoir:page"
        class="w-full max-w-5xl h-16 m-auto text-gray-400"
      />
      <h3 class="text-2xl font-bold text-[#1f2937] mb-2">No posts found</h3>
      <p class="text-[#6b7280] mb-6">Check back later for new content!</p>
    </div>

    <div v-else class="lg:mt-10 text-center px-4 py-12 rounded-xl shadow-md">
      <PostCard />
    </div>
  </section>
</template>

<script setup>
import { defineAsyncComponent } from "vue";
import useFetch from "@/Composables/useFetch";
import { Icon } from "@iconify/vue";

const { data, loading, error, meta, refetch } = useFetch(
  "https://api.oluwasetemi.dev/posts",
);
const PostCard = defineAsyncComponent(
  () => import("@/Components/PostCard.vue"),
);
</script>
