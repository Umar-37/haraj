import adapter from '@sveltejs/adapter-auto';
//import adapter from '@sveltejs/adapter-static';
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
  kit: {
    adapter: adapter(),
    // prerender: {
    //   concurrency: 1,
    //   crawl: true,
    //   default: true,
    //   enabled: true
    // }
  }
};

export default config;
