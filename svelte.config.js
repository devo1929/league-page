import node from '@sveltejs/adapter-node';
import azure from 'svelte-adapter-azure-swa';

const dockerBuild = process.env.DOCKER_BUILD

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: dockerBuild ? node() : azure({
			allowReservedSwaRoutes: true
		}),
	}
};

export default config;
