<template>
  <div>
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

    <div v-else-if="!post" class="text-center px-4 py-12 rounded-xl shadow-md">
      <Icon
        icon="mdi:error"
        class="w-full max-w-5xl h-16 m-auto text-red-500"
      />
      <p>This post doesn't have any content yet.</p>
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

    <div v-else class="">
      <PostDetail />
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { defineAsyncComponent } from "vue";

import useFetch from "@/Composables/useFetch";
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const postId = computed(() => route.params.id);

const apiUrl = computed(
  () => `https://api.oluwasetemi.dev/posts/${postId.value}`,
);
const { data: post, loading, error, meta, refetch } = useFetch(apiUrl.value);

const PostDetail = defineAsyncComponent(
  () => import("@/Components/postDetail.vue"),
);
</script>
