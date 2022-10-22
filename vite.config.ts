import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import Unocss from 'unocss/vite';
import { extractorSvelte } from '@unocss/core';
import presetIcons from '@unocss/preset-icons';
import presetUno from '@unocss/preset-uno';
import presetTypography from '@unocss/preset-typography';

const config: UserConfig = {
	plugins: [sveltekit(), Unocss({ extractors: [extractorSvelte], presets: [presetUno(), presetIcons(), presetTypography()] })]
};

export default config;
