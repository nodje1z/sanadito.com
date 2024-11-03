import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			"irish-grover": ["var(--font-irish-grover)"],
  			"bebas-neue": ["var(--font-bebas-neue)"],
  		},
  		colors: {
  			background: "var(--background)",
  			foreground: "var(--foreground)",
  			border: "hsl(var(--border))",
  			input: "hsl(var(--input))",
  			ring: "hsl(var(--ring))",
  			destructive: {
  				DEFAULT: "hsl(var(--destructive))",
  				foreground: "hsl(var(--destructive-foreground))",
  			},
  		},
  		keyframes: {
  			'tiktok-heart': {
  				'0%': { 
  					transform: 'scale(0) translateY(0) rotate(0deg)',
  					opacity: '0.7'
  				},
  				'15%': {
  					transform: 'scale(1.4) translateY(-5px) rotate(-5deg)',
  					opacity: '0.8'
  				},
  				'30%': {
  					transform: 'scale(1) translateY(-15px) rotate(5deg)',
  					opacity: '0.9'
  				},
  				'45%': {
  					transform: 'scale(1.3) translateY(-25px) rotate(-3deg)',
  					opacity: '0.8'
  				},
  				'60%': {
  					transform: 'scale(1) translateY(-50px) rotate(3deg)',
  					opacity: '0.6'
  				},
  				'100%': { 
  					transform: 'scale(0.5) translateY(-100px) rotate(0deg)',
  					opacity: '0'
  				}
  			}
  		},
  		animation: {
  			'tiktok-heart': 'tiktok-heart 1.5s cubic-bezier(0.215, 0.61, 0.355, 1) forwards'
  		}
  	}
  },
  plugins: [animate],
};
export default config;
