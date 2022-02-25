module.exports = {
	content: ['./pages/*/**.{ts,tsx}', './components/**.{ts,tsx}'],
	darkMode: 'media', // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				Sora: ['Sora'],
			},
			backgroundImage: {
				'tshirt-img':
					"url('https://images.pexels.com/photos/8290293/pexels-photo-8290293.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
				'shirts-img':
					"url('https://images.pexels.com/photos/4904563/pexels-photo-4904563.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
				'accessories-img':
					"url('https://images.pexels.com/photos/7972028/pexels-photo-7972028.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
				'pants-img':
					"url('https://images.pexels.com/photos/7203747/pexels-photo-7203747.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
				'shoes-img':
					"url('https://images.pexels.com/photos/9999187/pexels-photo-9999187.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
			},
		},
		screens: {
			sm: { max: '640px' },
			// => @media (min-width: 640px) { ... }

			md: '768px',
			// => @media (min-width: 768px) { ... }

			lg: '1024px',
			// => @media (min-width: 1024px) { ... }

			xl: '1280px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }
		},
	},

	variants: {
		extend: {
			fontWeight: ['focus', 'hover'],
			textColor: ['focus', 'hover'],
			backgroundColor: ['focus', 'hover'],
			backgroundImage: ['hover'],
			borderColor: ['active', 'focus', 'hover'],
			ringColor: ['active', 'focus', 'hover'],
			animation: {
				'scale-up-center':
					'scale-up-center 2s cubic-bezier(0.190, 1.000, 0.220, 1.000)  infinite  both',
			},
			keyframes: {
				'scale-up-center': {
					'0%': {
						transform: 'scale(.5)',
					},
					to: {
						transform: 'scale(1)',
					},
				},
			},
		},
	},

	plugins: [],
}
