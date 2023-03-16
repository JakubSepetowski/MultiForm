/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			xsm: '330px',
			md: '768px',
		},
		extend: {
			colors: {
				'my-blue-100': '#eef5ff',
				'my-blue-200': ' hsl(206, 94%, 87%)',
				'my-blue-300': 'hsl(228, 100%, 84%)',
				'my-blu-400': 'hsl(213, 96%, 18%)',
				'my-red': 'hsl(354, 84%, 57%)',
			},
		},
	},
	plugins: [],
};
