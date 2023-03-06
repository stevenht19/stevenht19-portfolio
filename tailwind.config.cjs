/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			gridTemplateColumns: {
				'fluid': 'repeat(auto-fit, minmax(20rem, 1fr))',
			},
			keyframes: {
				fadeIn: {
					'0%': {
						opacity: 0
					},
					'55%': {
						opacity: 0
					},
					'100%': {
						opacity: 1
					}
				},
				scale: {
					'to': {
						transform: 'scale(1)',
						opacity: 1
					}
				}
			}
		},
	},
	plugins: [],
}
