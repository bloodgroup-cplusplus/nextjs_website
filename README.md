This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.




//Data Fetching 
// Next js provides three ways for data fetching 
// 1. SSR (Server Side Rendering)
// 2. SSG (Static Site Generation)
// 3 . ISR(Incremental Static Generation)


// to do an SSR 
// we use the cache no store fuction 

async function Page( {params})
{
    const rees = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`,
    {cache:'no store'}
    );

    const data = await res.json()
}

// if we don't use cache no store than by default it uses ssr 
// ISR looks like this 
const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`,
    {next:{revalidate:10}}
)
const data= await res.json()

//Next.js supports the following http methods 
// 1 . GET: Retrives data or resources from the server 
// 2 . POST: Submits data to the server to create a new resource. 
// 3. PUT: Updates or replaces an existing resource to the server. 
// 4. DELETE
// 5. HEAD 
// 6. OPTIONS
// PATCH 

// We can define Metadata in two ways: Static and Dynamic 
//1 Static Modification 
//2 Dynamic Modification 

// This is an example of static metadata

export const metadata = {
    title:"Home",
};


// this is an example of dynamic metadata 

export async function generateMetaData({params, searchParams})
{
    const product = await getProduct(params.id);
    return {title:product.title};
}

