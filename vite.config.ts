import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import Unocss from 'unocss/vite';
import presetIcons from '@unocss/preset-icons';
import presetUno from '@unocss/preset-uno';

const config: UserConfig = {
	plugins: [sveltekit(), Unocss({ presets: [presetUno(), presetIcons()] })]
};

export default config;
