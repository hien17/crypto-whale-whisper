
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
				crypto: {
					blue: '#1EAEDB',
					cyan: '#33C3F0',
					teal: '#2DD4BF',
					green: '#4ADE80',
					positive: '#22c55e',
					negative: '#ef4444',
				}
			},
			backgroundImage: {
				'gradient-cards': 'linear-gradient(225deg, rgba(0, 169, 188, 0.15) 0%, rgba(0, 169, 188, 0) 100%)',
				'glass-gradient': 'linear-gradient(108.9deg, rgba(32, 33, 36, 0.74) -6.2%, rgba(32, 33, 36, 0.5) 85.9%)',
				'blue-green-gradient': 'linear-gradient(90deg, #1EAEDB 0%, #2DD4BF 100%)',
				'top-trader-card': 'linear-gradient(225deg, rgba(30, 174, 219, 0.15) 0%, rgba(45, 212, 191, 0.05) 100%)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'pulse-slow': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-slow': 'pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'
			},
			boxShadow: {
				'glow-blue': '0 0 8px rgba(30, 174, 219, 0.4)',
				'glow-card': '0 4px 12px -2px rgba(0, 0, 0, 0.4)'
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
