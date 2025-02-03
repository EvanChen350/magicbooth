/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  prefix: '',
  theme: {
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
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
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },

        // custom
        shape: '#F3E7DB'
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        // imported by shadcn
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },

        // custom
        'code-1': {
          '0%': { opacity: 0 },
          '2.5%': { opacity: 1 },
          '97.5%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        'code-2': {
          '16.2%': { opacity: 0 },
          '18.75%': { opacity: 1 },
          '97.5%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        'code-3': {
          '32.5%': { opacity: 0 },
          '35%': { opacity: 1 },
          '97.5%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        'code-4': {
          '48.75%': { opacity: 0 },
          '51.25%': { opacity: 1 },
          '97.5%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        'code-5': {
          '65%': { opacity: 0 },
          '72.5%': { opacity: 1 },
          '97.5%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        'code-6': {
          '81.25%': { opacity: 0 },
          '83.75%': { opacity: 1 },
          '97.5%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        breath: {
          '0%, 100%': { transform: 'scale(0.95)' },
          '50%': { transform: 'scale(1.1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5%)' },
        },
        line: {
          '0%, 100%': { left: 0, opacity: 0 },
          '50%': { left: '100%', transform: 'translateX(-100%)' },
          '10%, 40%, 60%, 90%': { opacity: 0 },
          '25%, 75%': { opacity: 1 },
        },
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },

      // custom
      fontFamily: {
        bodoniModa: ['var(--font-bodoniModa)'],
        bodoniMT: ['var(--font-bodoniMT)'],
        calibri: ['var(--font-calibri)'],
        inter: ['Inter', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
        solway: ['var(--font-solway)']
      },
      gridTemplateAreas: {
        'layout': [
          'bignum bignum bignum bignum',
          'img    img    desc    .',
          'img    img    shape   .',
          '.      shape  shape   .'
        ],
      },
      gridTemplateColumns: {
        'layout': '24rem 1fr 2rem',
      },
      gridTemplateRows: {
        '12': 'repeat(12, minmax(0, 1fr))',
        'layout': '6rem 3rem 1fr auto',
      },
      gridRowStart: {
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
        '13': '13',
      },
      gridRow: {
        'span-7': 'span 7 / span 7',
      },
      maxWidth: {
        '8xl': '1536px',
      }
      // fontSize: {
      //   xs: ["0.75rem", { lineHeight: "1.5" }],
      //   sm: ["0.875rem", { lineHeight: "1.5715" }],
      //   base: ["1rem", { lineHeight: "1.5", letterSpacing: "-0.017em" }],
      //   lg: ["1.125rem", { lineHeight: "1.5", letterSpacing: "-0.017em" }],
      //   xl: ["1.25rem", { lineHeight: "1.5", letterSpacing: "-0.017em" }],
      //   "2xl": ["1.5rem", { lineHeight: "1.415", letterSpacing: "-0.037em" }],
      //   "3xl": [
      //     "1.875rem",
      //     { lineHeight: "1.3333", letterSpacing: "-0.037em" },
      //   ],
      //   "4xl": ["2.25rem", { lineHeight: "1.2777", letterSpacing: "-0.037em" }],
      //   "5xl": ["3rem", { lineHeight: "1", letterSpacing: "-0.037em" }],
      //   "6xl": ["4rem", { lineHeight: "1", letterSpacing: "-0.037em" }],
      //   "7xl": ["4.5rem", { lineHeight: "1", letterSpacing: "-0.037em" }],
      // },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/forms'), require('@savvywombat/tailwindcss-grid-areas')],
};
