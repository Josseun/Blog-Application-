<template>
  <div class="grid gap-8 lg:grid-cols-3 grid-cols-1 w-full">
    <div v-for="post in data" :key="post.id">
      <router-link :to="{ name: 'post.view', params: { id: post.id } }">
        <div
          class="w-full bg-white rounded-xl overflow-hidden transition-all duration-300 ease-in shadow-md decoration-0 text-inherit hover:transform hover:-translate-y-2 hover:shadow-xl group"
        >
          <div
            v-if="post.featuredImage"
            class="w-full h-50 overflow-hidden bg-[#f3f4f6] group-hover:scale-105 group-hover:transform"
          >
            <img
              class="w-full h-full object-cover transition-transform duration-300 ease-in"
              :src="post.featuredImage"
              :alt="post.title"
            />
          </div>
          <div class="p-6">
            <div
              v-if="post.category"
              class="inline-block text-sm font-semibold rounded-full mb-3 text-blue-700 bg-blue-200 py-1 px-3"
            >
              {{ post.category }}
            </div>
            <h1
              class="text-[1.25rem] font-bold text-[#1f2937] mb-2 leading-[1.4] group-hover:text-blue-500"
            >
              {{ post.title }}
            </h1>
            <p
              v-if="post.excerpt"
              class="text-[#6b7280] text-sm leading-[1.6] mb-4 line-clamp-3"
            >
              {{ post.excerpt }}
            </p>
            <div
              class="flex items-center text-xs text-[#9ca3af] pt-4 border-t border-t-[#e5e7eb] font-medium"
            >
              <span v-if="post.author" class="post-author">
                By {{ post.author }}
              </span>
              <p v-if="post.publishedAt">{{ formatDate(post.publishedAt) }}</p>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import useFetch from "@/Composables/useFetch";
import useFormatDate from "@/Composables/useFormatDate";

const formatDate = useFormatDate();
const { data } = useFetch("https://api.oluwasetemi.dev/posts");
</script>
