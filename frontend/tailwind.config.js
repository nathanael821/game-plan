module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bgform: 'rgb(240, 240, 240)',
        bginput: 'rgb(250, 250, 250)',
        bgsubmit: 'rgb(1, 191, 166)',
        bgbtn: 'rgb(225, 244, 242)',
        bgbtnactive: 'rgb(0, 191, 166)',
        bgredbtn: 'rgb(255, 101, 132)',
        bgyellowbtn: 'rgb(255, 208, 55)',
        dropdown: 'rgb(174, 222, 216)',
        link: 'rgb(116, 163, 157)',
      },
      width: {
        formcontainer: '32rem',
        modal: '48rem',
        teammodal: '72rem',
      },
      minHeight: {
        bodyheight: 'calc(100vh - 10.25rem)',
        mainbodyheight: 'calc(100vh - 13rem)',
      },
      zIndex: {
        100: 100,
      },
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require("@tailwindcss/forms")]
};