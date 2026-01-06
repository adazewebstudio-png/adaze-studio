module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: '#ffffff', // White background
                foreground: '#0f172a', // Dark Navy text (matches logo background)
                primary: {
                    DEFAULT: '#f5a623', // Golden amber
                    foreground: '#ffffff',
                },
                secondary: {
                    DEFAULT: '#0f172a', // Dark Navy
                    foreground: '#f8fafc',
                },
                accent: {
                    DEFAULT: '#eab308', // Yellow-500
                    foreground: '#0f172a',
                },
                navy: {
                    DEFAULT: '#0f172a', // Explicit Name for Logo Navy
                    light: '#1e293b',
                }
            },
            fontFamily: {
                sans: ['var(--font-inter)'],
                display: ['var(--font-outfit)'],
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'slide-up': 'slideUp 0.5s ease-out',
                'glow': 'glow 2s ease-in-out infinite alternate',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                glow: {
                    'from': { boxShadow: '0 0 10px #f5a623, 0 0 20px #f5a623' },
                    'to': { boxShadow: '0 0 20px #eab308, 0 0 30px #eab308' },
                },
            },
        },
    },
    plugins: [],
}
