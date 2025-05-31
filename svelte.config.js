import vercel from '@sveltejs/adapter-vercel';
import node from '@sveltejs/adapter-node';
import staticAdapter from '@sveltejs/adapter-static';

const dockerBuild = process.env.DOCKER_BUILD

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: dockerBuild ? node() : staticAdapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html'
		}),
	}
};

export default config;
