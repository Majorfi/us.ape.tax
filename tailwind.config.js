const colors = require('tailwindcss/colors');

module.exports = {
	purge: ['./pages/**/*.js'],
	darkMode: false,
	corePlugins: {
		ringColor: false,
	},
	theme: {
		colors: {
			gray: colors.coolGray,
		},
	}
};
