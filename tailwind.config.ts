import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				elsol: {
					black: '#000000',
					sage: '#53852c',
					'sage-light': '#6ca93b',
					'sage-dark': '#3e6420',
					gray: '#f8f9fa',
					'gray-dark': '#343a40'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-out': {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(10px)' }
				},
				'slide-in': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'zoom-in': {
					'0%': { transform: 'scale(1.05)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'carousel': {
					'0%, 16.66%': { opacity: '1' },
					'33.33%, 83.33%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'carousel-2': {
					'0%, 16.66%': { opacity: '0' },
					'33.33%, 49.99%': { opacity: '1' },
					'66.66%, 100%': { opacity: '0' }
				},
				'carousel-3': {
					'0%, 49.99%': { opacity: '0' },
					'66.66%, 83.32%': { opacity: '1' },
					'100%': { opacity: '0' }
				},
				'glow-pulse': {
					'0%': { opacity: '0.3' },
					'50%': { opacity: '0.6' },
					'100%': { opacity: '0.3' }
				},
				'glow-move': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100%)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'fade-out': 'fade-out 0.6s ease-out',
				'slide-in': 'slide-in 0.6s ease-out',
				'zoom-in': 'zoom-in 0.6s ease-out',
				'carousel': 'carousel 18s infinite',
				'carousel-2': 'carousel-2 18s infinite',
				'carousel-3': 'carousel-3 18s infinite',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
				'glow-move': 'glow-move 8s ease-in-out infinite'
			},
			fontFamily: {
				sans: ['SF Pro Display', 'Inter', 'sans-serif']
			},
			transitionProperty: {
				'height': 'height',
				'spacing': 'margin, padding'
			},
			boxShadow: {
				'glow-sm': '0 0 5px 0 rgba(83, 133, 44, 0.3), 0 0 10px 0 rgba(83, 133, 44, 0.2)',
				'glow': '0 0 10px 0 rgba(83, 133, 44, 0.4), 0 0 20px 0 rgba(83, 133, 44, 0.2)',
				'glow-lg': '0 0 15px 0 rgba(83, 133, 44, 0.5), 0 0 30px 0 rgba(83, 133, 44, 0.3)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
