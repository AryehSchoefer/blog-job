<h1 style="text-align: center;">🐝 Blog</h1>

This is very small project dedicated to a technical interview. The task involved creating a simple blog in Next.js 13 with ChakraUI in no more than 3 hrs. One should be able to see all posts and click on one to see more of that post. The data is being provided by [JSONPlaceholder](https://jsonplaceholder.typicode.com/). It was bootstrapped with bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Features

- Initial page load on server, as well as dynamically rendered post detail page
- Infinite Scrolling
- Error handling 🙃

## Tech Used

- Next.js 13 (app router)
- ChakraUI
- Zod (for data validation)

## Getting Started

First, install all dependencies:

```bash
npm i
# or
yarn install
# or
pnpm i
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see a very cool blog.
