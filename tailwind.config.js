/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./blog-components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
    "./frontComponents/**/*.{js,ts,jsx,tsx}",
    "./chatbot-components/**/*.{js,ts,jsx,tsx}",
    "./servicesComponents/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '300px',
      md: '1100px', //868 -- //1000
      lg: '1406px',
      xl: '1750px',
    },
    minWidth: {
      '1/2': '50%',
    },
    extend: {
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(223, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
        gray300:'hsl(210, 40%, 96.1%)',
        logoBlue:'hsl(196,98%,19%)',
        graydark:'hsl(0,0%,85%)',
       
      },
 backgroundImage: {
          'hero': "url('/assets/herobg.png')",
          'parallax': 'url("public/assets/img-cityatl.jpeg")',
          'piSmall':  'url("public/assets/lawbg1.png")',
          'groupbg': 'url("public/assets/profile-group.jpg")',
          'carAccident': 'url("public/assets/card-car-accident.jpeg")',
          'truck' : 'url("public/assets/card-truck.jpg")',
          'slip': 'url("public/assets/card-slip-and-falls.jpg")',
          'death': 'url("public/assets/card-wrongful-death.jpg")',
          'worker':'url("public/assets/card-workComp.jpg")',
          'atlanta':'url("public/assets/img-atl1.svg")',
          'atlsky': 'url("public/assets/img-atlsky1.svg")',
        },

      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      keyframes: {
        "accordion-down": {
         // from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
         // to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    //require("flowbite/plugin")
    require('@tailwindcss/container-queries'),
  ],
}
