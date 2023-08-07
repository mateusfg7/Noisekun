/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{html,ts,tsx}'],
  theme: {
    screens: {
      xs: '350px',
      '2xs': '500px',
      ...defaultTheme.screens
    },
    extend: {
      fontFamily: {
        sans: 'var(--font-nunito)'
      },
      colors: {
        main: '#0485B4',
        'dark-background': colors.gray[950],
        'dark-foreground': colors.gray[100],
        'light-background': colors.gray[100],
        'light-foreground': colors.gray[950],
        'blue-room': colors.blue[200],
        train: colors.green[200],
        waterfall: colors.lime[200],
        'camping-fire': colors.orange[200]
      },
      boxShadow: {
        header: '0px 1px 30px rgba(0, 0, 0, 0.09)',
        sound: '0px 0px 30px rgba(0, 0, 0, 0.09)'
      },
      backgroundImage: {
        'blue-room-gif': 'url("/bg/blue-room.gif")',
        'train-gif': 'url("/bg/train.gif")',
        'waterfall-gif': 'url("/bg/waterfall.gif")',
        'camping-fire-gif': 'url("/bg/camping-fire.gif")'
      },
      animation: {
        'background-change': 'background-change 300s 0s infinite',
        'background-change-sm': 'background-change 20s 0s infinite'
      },
      keyframes: {
        'background-change': {
          '0%': {
            background: '#0485B4'
          },
          '5.2631%': {
            background: '#0D7AB5'
          },
          '10.5262%': {
            background: '#16528E'
          },
          '15.7893%': {
            background: '#004761'
          },
          '21.0524%': {
            background: '#0A615C'
          },
          '26.3155%': {
            background: '#147B57'
          },
          '31.5786%': {
            background: '#226D6C'
          },
          '36.8417%': {
            background: '#2F5E81'
          },
          '42.1048%': {
            background: '#4940AA'
          },
          '47.3679%': {
            background: '#5A3080'
          },
          '52.6310%': {
            background: '#5A3080'
          },
          '57.8941%': {
            background: '#4940AA'
          },
          '63.1572%': {
            background: '#2F5E81'
          },
          '68.4204%': {
            background: '#226D6C'
          },
          '73.6835%': {
            background: '#147B57'
          },
          '78.9466%': {
            background: '#0A615C'
          },
          '84.2097%': {
            background: '#004761'
          },
          '89.4728%': {
            background: '#16528E'
          },
          '94.7359%': {
            background: '#0D7AB5'
          },
          '100%': {
            background: '#0485B4'
          }
        }
      }
    }
  },
  plugins: [require('tailwind-scrollbar-hide')]
}
