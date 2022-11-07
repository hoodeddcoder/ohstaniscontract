const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.tsx',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        // General
        page: {
          from_bg: colors.slate[100],
          to_bg: colors.slate[200],
        },
        titles: "#CB28F7",
        links: {
          txt: "#CB28F7",
          hover_txt: "#CB28F7",
        },
        loading_spinner: "#CB28F7",
        popups: {
          bg: colors.neutral[900],
          txt: colors.white,
          internal_border: colors.black,
        },
        warning: {
          txt: colors.slate[800],
          bg: "#CB28F7",
          border: colors.neutral[900],
        },
        error: {
          txt: colors.red[500],
          bg: colors.red[50],
          border: colors.red[200],
        },

        // Inputs
        btn: {
          txt: "#CB28F7",
          bg: colors.neutral[900],
          border: colors.slate[200],
          hover_txt: colors.slate[800],
          hover_bg: colors.slate[100],
          hover_border: colors.slate[200],
        },
        btn_primary: {
          txt: colors.black,
          bg: "#CB28F7",
          border: "#CB28F7",
          hover_txt: colors.white,
          hover_bg: "#CB28F7",
          hover_border: "#CB28F7",
        },
        btn_error: {
          txt: colors.white,
          bg: colors.red[500],
          border: colors.red[500],
          hover_txt: colors.white,
          hover_bg: colors.red[600],
          hover_border: colors.red[600],
        },
        label: "#CB28F7",
        txt_input: {
          txt: "#CB28F7",
          bg: colors.white,
          border: colors.slate[200],
          focus_txt: "#CB28F7",
          focus_bg: colors.slate[50],
          focus_border: "#CB28F7",
          placeholder_txt: "#CB28F7",
        },
        
        // Whitelist proof widget
        wl_message: {
          txt: colors.slate[800],
          bg: "#CB28F7",
        },

        // Mint widget
        token_preview: colors.neutral[900],
      },
    },
  },
  variants: {},
  plugins: [],
};
