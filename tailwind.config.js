module.exports = {
  content: [
      './pages/*/**.{ts,tsx}',
      './components/**.{ts,tsx}'
      ],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
      extend: {
          fontFamily: {
              Sora: ["Sora"]
          },
          backgroundImage: {
              'tshirt-img': "url('https://images.pexels.com/photos/8290293/pexels-photo-8290293.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
  
          }
      },
      screens: {
          'sm': {'max' : '640px'},
          // => @media (min-width: 640px) { ... }
  
          'md': '768px',
          // => @media (min-width: 768px) { ... }
  
          'lg': '1024px',
          // => @media (min-width: 1024px) { ... }
  
          'xl': '1280px',
          // => @media (min-width: 1280px) { ... }
  
          '2xl': '1536px',
          // => @media (min-width: 1536px) { ... }
        }
    },
  
    variants: {
      extend: {
          fontWeight: ["focus", "hover"],
          textColor: ["focus", "hover"],
          backgroundColor: ["focus", "hover"],
          backgroundImage: ["hover"],
          borderColor: ["focus", "active"]
      }
    },
  
    plugins: []
  }