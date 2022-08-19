# Display deleted posts from haraj website using their api

[`Haraj`](https://haraj.com.sa/)'s front-end by nature won't show deleted posts, but their api exposes some  information that might be useful for others.

You may see that this project doesn't have good quality code since I wasn't intending to publish it to the public and it was only to test [`SvelteKit`](https://kit.svelte.dev/) capability, but I publish it anyway.
## How to use it

Go to the [demo page](https://haraj-history.netlify.app/) and paste the url for the deleted post.


## Developing

Once you've cloned this repo install the dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
