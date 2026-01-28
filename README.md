# 📝 Blog Application

A modern blog application built with Vue 3, Vue Router, and Composition API.

## 🚀 Features

- View list of blog posts
- Read full post details
- Responsive design
- Error handling with 404 page
- Loading states with Suspense
- Lazy loading components

## 🛠️ Technologies

- Vue 3 (Composition API)
- Vue Router 4
- iconify
- Vite
- Tailwind CSS
- REST API

## ⚡ Quick Start

1. **Create a vue new project folder**

```bash
pnpm create vite@latest blog-application
cd blog-application
```

2. **Install dependencies**

```bash
pnpm install
```

3. **Run the app**

```bash
pnpm dev
```

4. **Install Vue-router@4, iconify and Tailwindcss**

```bash
pnpm add vue-router@4
pnpm install tailwindcss @tailwindcss/vite
pnpm i @iconify/vue
```

5. **Open browser**

```
http://localhost:5173
```

## 📁 Project Structure

```
src/
├── components/       # Reusable components
├── composables/      # Composition functions (useFetch)
├── router/          # Route configuration
├── views/           # Page components
├── App.vue          # Root component
└── main.js          # Entry point
```

## 🔌 API

**Endpoint**: `https://api.oluwasetemi.dev/posts`

## 📦 Build

```bash
pnpm build
```

## 👨‍💻 Author

Your Name - [@Josseun](https://github.com/Josseun)

## 📄 License

MIT License

---

⭐ Star this repo if you found it helpful!
