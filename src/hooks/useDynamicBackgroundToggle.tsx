import { useState, useEffect } from 'react'

// Define the structure for your background URLs
interface BackgroundUrl {
  desktop: string
  mobile: string
}

// Define the structure for the possible categories
export interface BackgroundUrls {
  sports: BackgroundUrl
  events: BackgroundUrl // Add your URLs for 'events'
  news: BackgroundUrl // Add your URLs for 'news'
}

// Define the structure for the background style
interface BackgroundStyle {
  backgroundImage: string
  backgroundSize: string
  backgroundRepeat: string
  backgroundPosition: string
  height: string
}

// Define your background URLs for different categories and screen sizes
const backgroundUrls: BackgroundUrls = {
  sports: {
    desktop:
      'https://cnbl-cdn.bamgrid.com/assets/3ab6ce86baaf4225b072c58fa9497ec949c0c9e284b3958ecda1429b7f3744f9/original',
    mobile:
      'https://cnbl-cdn.bamgrid.com/assets/7a93b953315e186a518a4aa6dcd3792ecb007b8a5c5b1d540828e8bdfb2614f3/original',
  },
  events: {
    // Provide your URLs for 'events'
    desktop: 'your-desktop-url-for-events',
    mobile: 'your-mobile-url-for-events',
  },
  news: {
    // Provide your URLs for 'news'
    desktop: 'your-desktop-url-for-news',
    mobile: 'your-mobile-url-for-news',
  },
}

function useDynamicBackgroundToggle(category: keyof BackgroundUrls): BackgroundStyle {
  const [backgroundStyle, setBackgroundStyle] = useState<BackgroundStyle>({
    backgroundImage: '',
    backgroundSize: '',
    backgroundRepeat: '',
    backgroundPosition: '',
    height: '',
  })

  useEffect(() => {
    const updateBackground = () => {
      const screenWidth = window.innerWidth
      let backgroundHeight: string

      if (screenWidth <= 600) {
        // Mobile view
        backgroundHeight = '100vh' // Full screen height
      } else {
        // Desktop view
        const backgroundHeightVh = Math.max(
          70,
          Math.min(90, ((screenWidth * 0.8) / window.innerHeight) * 100)
        )
        backgroundHeight = `${backgroundHeightVh}vh`
      }

      const imageUrl =
        screenWidth <= 600 ? backgroundUrls[category].mobile : backgroundUrls[category].desktop

      const style: BackgroundStyle = {
        backgroundImage: `url("${imageUrl}")`,
        backgroundSize: screenWidth <= 600 ? 'object-contain' : 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        height: backgroundHeight,
      }
      setBackgroundStyle(style)
    }

    window.addEventListener('resize', updateBackground)
    updateBackground() // Initialize on first render

    return () => window.removeEventListener('resize', updateBackground)
  }, [category])

  return backgroundStyle
}

export default useDynamicBackgroundToggle
