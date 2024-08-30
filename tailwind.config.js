/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./app.vue',
		'./error.vue',
	],
	theme: {
		extend: {
			spacing: {
				18: '4.5rem', // 72px
			},
			maxWidth: ({ theme }) => ({
				...theme('spacing'),
			}),
			minWidth: ({ theme }) => ({
				...theme('spacing'),
			}),
			maxHeight: ({ theme }) => ({
				...theme('spacing'),
			}),
			minHeight: ({ theme }) => ({
				...theme('spacing'),
			}),
			borderRadius: ({ theme }) => ({
				...theme('spacing'),
			}),
			fontSize: ({ theme }) => ({
				...theme('spacing'),
			}),
			lineHeight: ({ theme }) => ({
				...theme('spacing'),
			}),
		},
	},
	plugins: [],
};
