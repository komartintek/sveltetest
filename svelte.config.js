import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
			fallback: '200.html' // may differ from host to host
		}),
    paths: {
      base: dev ? '' : '/sveltetest', // använd repo-namn här
    },
    prerender: {
      entries: ['*']
    }
  }
};

export default config;