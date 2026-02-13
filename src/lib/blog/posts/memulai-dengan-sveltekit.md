---
title: Memulai dengan SvelteKit - Framework Modern untuk Web Development
date: 2024-02-15
author: Revaldo Steven
excerpt: Panduan lengkap untuk memulai development dengan SvelteKit, framework full-stack modern dari Svelte yang powerful dan mudah digunakan.
tags:
  - SvelteKit
  - Tutorial
  - JavaScript
---

# Memulai dengan SvelteKit

SvelteKit adalah framework full-stack yang dibangun di atas Svelte, memberikan pengalaman development yang luar biasa dengan performa yang optimal. Jika Anda familiar dengan Next.js atau Nuxt.js, SvelteKit adalah equivalent-nya untuk ekosistem Svelte.

## Mengapa Memilih SvelteKit?

Setelah menggunakan berbagai framework selama bertahun-tahun, saya menemukan bahwa SvelteKit menawarkan kombinasi terbaik antara developer experience dan performance.

### 1. Performance yang Luar Biasa

SvelteKit tidak menggunakan Virtual DOM seperti React atau Vue. Sebaliknya, Svelte melakukan compile-time optimization yang menghasilkan vanilla JavaScript yang sangat efisien.

**Hasilnya:**
- Bundle size yang lebih kecil
- Runtime yang lebih cepat
- Initial load yang cepat
- Perfect untuk SEO

### 2. Developer Experience yang Excellent
```javascript
// Counter component di Svelte - sangat simple!
<script>
  let count = 0;
</script>

<button on:click={() => count += 1}>
  Clicked {count} {count === 1 ? 'time' : 'times'}
</button>
```

Lihat betapa simple dan intuitif-nya? Tidak perlu `useState`, `useEffect`, atau hooks lainnya.

### 3. Built-in Features yang Lengkap

- **File-based routing** - Seperti Next.js, sangat intuitif
- **API routes** - Build backend di dalam project yang sama
- **SSR & SSG** - Server-Side Rendering dan Static Site Generation
- **Code splitting** - Automatic dan optimal
- **Hot Module Replacement** - Development experience yang smooth

## Setup Project SvelteKit

Mari kita mulai dengan membuat project baru:
```bash
npm create svelte@latest my-awesome-app
cd my-awesome-app
npm install
npm run dev
```

## Struktur Folder SvelteKit
```
my-awesome-app/
├── src/
│   ├── lib/
│   │   └── components/
│   └── routes/
│       ├── +page.svelte      # Homepage (/)
│       ├── about/
│       │   └── +page.svelte  # About page (/about)
│       └── blog/
│           ├── +page.svelte  # Blog listing (/blog)
│           └── [slug]/
│               └── +page.svelte  # Blog post (/blog/my-post)
├── static/
│   └── favicon.png
├── svelte.config.js
└── vite.config.js
```

### File-based Routing

SvelteKit menggunakan file-based routing yang sangat intuitif:

- `src/routes/+page.svelte` → `/`
- `src/routes/about/+page.svelte` → `/about`
- `src/routes/blog/+page.svelte` → `/blog`
- `src/routes/blog/[slug]/+page.svelte` → `/blog/:slug`

## Loading Data di SvelteKit

Gunakan file `+page.js` untuk load data:
```javascript
// src/routes/blog/[slug]/+page.js
export async function load({ params, fetch }) {
  const response = await fetch(`/api/posts/${params.slug}`);
  const post = await response.json();
  
  return {
    post
  };
}
```

Kemudian di component:
```svelte
<!-- src/routes/blog/[slug]/+page.svelte -->
<script>
  export let data;
</script>

<article>
  <h1>{data.post.title}</h1>
  <div>{@html data.post.content}</div>
</article>
```

## Server-Side Rendering (SSR)

SvelteKit melakukan SSR secara default. Ini berarti:

1. **SEO-friendly** - Search engines dapat crawl konten
2. **Fast initial load** - User melihat konten lebih cepat
3. **Progressive enhancement** - Bekerja bahkan tanpa JavaScript

## API Routes

Membuat API di SvelteKit sangat mudah:
```javascript
// src/routes/api/posts/+server.js
import { json } from '@sveltejs/kit';

export async function GET() {
  const posts = await db.getPosts();
  return json(posts);
}

export async function POST({ request }) {
  const data = await request.json();
  const post = await db.createPost(data);
  return json(post, { status: 201 });
}
```

## Form Actions

SvelteKit memiliki fitur form actions yang powerful:
```javascript
// src/routes/contact/+page.server.js
export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const email = data.get('email');
    const message = data.get('message');
    
    await sendEmail(email, message);
    
    return { success: true };
  }
};
```

## Deployment

SvelteKit sangat flexible dalam deployment:

- **Vercel** - Zero config
- **Netlify** - Excellent untuk static sites
- **Node.js server** - Full control
- **Cloudflare Pages** - Edge computing

Untuk Vercel:
```bash
npm i -D @sveltejs/adapter-vercel
```

Update `svelte.config.js`:
```javascript
import adapter from '@sveltejs/adapter-vercel';

export default {
  kit: {
    adapter: adapter()
  }
};
```

## Tips & Best Practices

### 1. Gunakan `$lib` Alias
```javascript
import Header from '$lib/components/Header.svelte';
// Instead of: import Header from '../../lib/components/Header.svelte';
```

### 2. Leverage Stores untuk State Management
```javascript
// src/lib/stores/user.js
import { writable } from 'svelte/store';

export const user = writable(null);
```

### 3. Use Layout Files
```svelte
<!-- src/routes/+layout.svelte -->
<script>
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<Header />
<main>
  <slot />
</main>
<Footer />
```

## Kesimpulan

SvelteKit adalah framework yang powerful, modern, dan mudah digunakan. Dengan kombinasi antara developer experience yang excellent dan performance yang luar biasa, SvelteKit adalah pilihan yang perfect untuk project web modern.

**Key takeaways:**
- ✅ Simple dan intuitif
- ✅ Performance yang excellent
- ✅ Built-in SSR/SSG
- ✅ File-based routing
- ✅ Flexible deployment options

Saya sangat merekomendasikan untuk mencoba SvelteKit di project Anda berikutnya!

**Happy coding!** 🚀

---

*Punya pertanyaan tentang SvelteKit? Silakan hubungi saya di [contact page](/contact)!*