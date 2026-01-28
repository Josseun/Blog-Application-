<template>
  <div class="w-full flex flex-col items-center max-w-300 m-auto lg:py-8 px-4">
    <div class="w-full flex justify-end max-w-210 mb-5">
      <button>
        <router-link
          class="flex justify-center items-center gap-1 bg-white text-gray-800 rounded-full px-3 font-bold"
          to="/"
          ><Icon icon="icon-park-solid:back" width="20" height="20" />
          back</router-link
        >
      </button>
    </div>
    <div class="p-8 bg-white rounded-xl text-gray-900">
      <h1 class="text-2xl font-bold">{{ post.title }}</h1>
      <div class="flex items-center text-xs pt-4 text-[#9ca3af] font-medium">
        <span v-if="post.author" class="post-author">
          By {{ post.author }}
        </span>
        <p v-if="post.publishedAt">
          Posted Date: {{ formatDate(post.publishedAt) }}
        </p>
      </div>
      <img
        class="w-full h-70 overflow-hidden bg-[#f3f4f6] my-5"
        v-if="post.featuredImage"
        :src="post.featuredImage"
        :alt="post.title"
      />
      <div class="flex justify-between items-center">
        <span
          class="flex gap-2 items-center text-sm font-semibold rounded-full w-full max-w-20 mb-3 text-red-700 bg-blue-200 py-1 px-3"
        >
          <Icon icon="carbon:view-filled" width="32" height="32" />
          {{ post.viewCount }}
        </span>
        <div class="gap-3 lg:flex hidden">
          <div
            v-if="post.category"
            class="inline-block text-sm font-semibold rounded-full mb-3 text-blue-700 bg-blue-200 py-1 px-3"
          >
            Category: {{ post.category }}
          </div>
          <span
            v-if="post.tags"
            class="inline-block text-sm font-semibold rounded-full mb-3 text-blue-700 bg-blue-200 py-1 px-3"
            >tags: {{ post.tags }}</span
          >
        </div>
      </div>

      <div v-if="post.content" class="w-full max-w-200 text-justify mb-4">
        {{ post.content }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import useFetch from "@/Composables/useFetch";
import useFormatDate from "@/Composables/useFormatDate";
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const postId = computed(() => route.params.id);

const apiUrl = computed(
  () => `https://api.oluwasetemi.dev/posts/${postId.value}`,
);

const formatDate = useFormatDate();

const { data: post, loading, error, meta, refetch } = useFetch(apiUrl.value);
</script>
