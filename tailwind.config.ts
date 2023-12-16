import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        ethLightBlue: {
          50: "#E0F5FF",
          100: "#C2EBFF",
          200: "#8AD8FF",
          300: "#4DC3FF",
          400: "#0FAFFF",
          500: "#008FD5",
          600: "#0070A8",
          700: "#005580",
          800: "#003A57",
          900: "#001B29",
          950: "#000E14"
        },
        ethDeepBlue: {
          50: "#E0F3FF",
          100: "#BDE4FF",
          200: "#80CCFF",
          300: "#3DB1FF",
          400: "#0099FF",
          500: "#0072BC",
          600: "#005C99",
          700: "#004370",
          800: "#002E4D",
          900: "#001524",
          950: "#000C14"
        },
        ethRed: {
          50: "#FDE7E8",
          100: "#FBD0D1",
          200: "#F8A5A8",
          300: "#F4767A",
          400: "#F14B51",
          500: "#ED1C24",
          600: "#C61016",
          700: "#920C10",
          800: "#63080B",
          900: "#2F0405",
          950: "#180203"
        },
        ethGray: {
          50: "#FCFCFC",
          100: "#FCFCFC",
          200: "#F7F7F7",
          300: "#F5F5F5",
          400: "#F2F2F2",
          500: "#EEEEEE",
          600: "#BFBFBF",
          700: "#8F8F8F",
          800: "#5E5E5E",
          900: "#303030",
          950: "#171717"
        },
        ethLime: {
          50: "#F3F9EB",
          100: "#E8F3D8",
          200: "#D1E8B0",
          300: "#BCDD8D",
          400: "#A5D166",
          500: "#8DC63F",
          600: "#72A130",
          700: "#567A24",
          800: "#384F17",
          900: "#1C270C",
          950: "#0E1406"
        },
        ethGreen: {
          50: "#DBFFEB",
          100: "#BDFFDB",
          200: "#75FFB3",
          300: "#33FF8F",
          400: "#00F06C",
          500: "#00AB4E",
          600: "#008A3E",
          700: "#00662E",
          800: "#00421E",
          900: "#002410",
          950: "#000F07"
        },
        ethYellow: {
          50: "#FFF9E5",
          100: "#FFF4D1",
          200: "#FFE79E",
          300: "#FFDB70",
          400: "#FFCF3D",
          500: "#FFC20E",
          600: "#D6A100",
          700: "#A37A00",
          800: "#6B5000",
          900: "#382A00",
          950: "#191300"
        },
        ethBlack:  {
          50: "#EBEBEB",
          100: "#D6D6D6",
          200: "#ADADAD",
          300: "#858585",
          400: "#5C5C5C",
          500: "#333333",
          600: "#292929",
          700: "#1F1F1F",
          800: "#141414",
          900: "#0A0A0A",
          950: "#050505"
        },
    }
    },
  },
  plugins: [],
}
export default config
