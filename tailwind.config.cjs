/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

module.exports = {
	mode: 'jit',
	content:  [
		"./index.html",
    	"./src/**/*.{js,ts,jsx,tsx}", 
		'./safelist.txt'
	],
	darkMode: 'class',
		theme: {
			fontFamily: {
				sans: [
					'Inter',
					'ui-sans-serif',
					'system-ui',
					'-apple-system',
					'BlinkMacSystemFont',
					'"Segoe UI"',
					'Roboto',
					'"Helvetica Neue"',
					'Arial',
					'"Noto Sans"',
					'sans-serif',
					'"Apple Color Emoji"',
					'"Segoe UI Emoji"',
					'"Segoe UI Symbol"',
					'"Noto Color Emoji"',
				],
				serif: [
					'ui-serif',
					'Georgia',
					'Cambria',
					'"Times New Roman"',
					'Times',
					'serif',
				],
				mono: [
					'ui-monospace',
					'SFMono-Regular',
					'Menlo',
					'Monaco',
					'Consolas',
					'"Liberation Mono"',
					'"Courier New"',
					'monospace',
				],
			},
			screens: {
				xs: '576px',
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1536px',
			},
			extend: {
				colors: {
					'primary': {
						DEFAULT: '#0ea5e9',
						50: '#f0f9ff',
						100: '#e0f2fe',
						200: '#bae6fd',
						300: '#7dd3fc',
						400: '#38bdf8',
						500: '#0ea5e9',
						600: '#0284c7',
						700: '#0369a1',
						800: '#075985',
						900: '#0c4a6e',
					},
					'primary-deep': '#0369a1',
					'primary-mild': '#38bdf8',
					'primary-subtle': '#e0f2fe',
					'error': 'var(--error)',
					'error-subtle': 'var(--error-subtle)',
					'success': 'var(--success)',
					'success-subtle': 'var(--success-subtle)',
					'info': 'var(--info)',
					'info-subtle': 'var(--info-subtle)',
					'warning': 'var(--warning)',
					'warning-subtle': 'var(--warning-subtle)',
					'neutral': 'var(--neutral)',
					'gray-50': 'var(--gray-50)',
					'gray-100': 'var(--gray-100)',
					'gray-200': 'var(--gray-200)',
					'gray-300': 'var(--gray-300)',
					'gray-400': 'var(--gray-400)',
					'gray-500': 'var(--gray-500)',
					'gray-600': 'var(--gray-600)',
					'gray-700': 'var(--gray-700)',
					'gray-800': 'var(--gray-800)',
					'gray-900': 'var(--gray-900)',
					'gray-950': 'var(--gray-950)',
				},
				typography: (theme) => ({
					DEFAULT: {
						css: {
							color: theme('colors.gray.500'),
							maxWidth: '65ch',
						},
					},
					invert: {
						css: {
							color: theme('colors.gray.400'),
						},
					},
				}),
				animation: {
					blob: "blob 7s infinite",
				},
				keyframes: {
					blob: {
						"0%": {
							transform: "translate(0px, 0px) scale(1)",
						},
						"33%": {
							transform: "translate(30px, -50px) scale(1.1)",
						},
						"66%": {
							transform: "translate(-20px, 20px) scale(0.9)",
						},
						"100%": {
							transform: "translate(0px, 0px) scale(1)",
						},
					},
				},
				textColor: {
					'primary': '#0ea5e9',
				},
				backgroundColor: {
					'primary': '#0ea5e9',
					'primary-subtle': '#e0f2fe',
				},
				borderColor: {
					'primary': '#0ea5e9',
				},
				ringColor: {
					'primary': '#0ea5e9',
				},
			},
		},
	plugins: [
        require('@tailwindcss/typography'),
	],
};
