module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: '#020617', // slate-950
                foreground: '#f8fafc', // slate-50
                primary: {
                    DEFAULT: '#3b82f6', // blue-500
                    foreground: '#ffffff',
                },
                secondary: {
                    DEFAULT: '#1e293b', // slate-800
                    foreground: '#f8fafc',
                },
                accent: {
                    DEFAULT: '#0ea5e9', // sky-500
                    foreground: '#ffffff',
                },
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
                    'from': { boxShadow: '0 0 10px #3b82f6, 0 0 20px #3b82f6' },
                    'to': { boxShadow: '0 0 20px #0ea5e9, 0 0 30px #0ea5e9' },
                },
            },
        },
    },
    plugins: [],
}
