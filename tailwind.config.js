import { primaryColorLight, primaryForegroundColor } from '@/constants/Colors';
const plugin = require("tailwindcss/plugin");
const { transform } = require("typescript");

module.exports = {
  theme: {
    extend: {
      colors: {
        border: '#E4E4E7',
        input: '#E4E4E7',
        ring: '#50072488',
        background: '#F2F2F2',
        foreground: '#09090B',
        primary: {
          DEFAULT:primaryColorLight,
          foreground: primaryForegroundColor,
        },
        secondary: {
          DEFAULT: '#F4F4F5',
          foreground: '#18181B',
        },
        destructive: {
          DEFAULT: '#EF4444',
          foreground: '#FAFAFA',
        },
        muted: {
          DEFAULT: '#F4F4F5',
          foreground: '#71717A',
        },
        accent: {
          DEFAULT: '#F4F4F5',
          foreground: '240,5.9%,10%',
        },
        popover: {
          DEFAULT: '#FFFFFF',
          foreground: '#09090B',
        },
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#09090B',
        },
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        ".resize-repeat": {
          resizeMode: `repeat`,
        },
        "container-center": {
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        },
      });
    }),
  ],
};
