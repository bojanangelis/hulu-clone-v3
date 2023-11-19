import { useState, useEffect } from 'react'
import { eventsLogos, newsLogos, sportsLogos } from '../assets/logos'

interface BackgroundUrl {
  desktop: string
  mobile: string
}

export interface BackgroundUrls {
  sports: BackgroundUrl
  events: BackgroundUrl
  news: BackgroundUrl
}

interface BackgroundStyle {
  backgroundImage: string
  backgroundSize: string
  backgroundRepeat: string
  backgroundPosition: string
  height: string
}

// Additional interfaces for category details
interface CategoryDetails {
  title: string
  description: string
  images: Array<{ src: string; alt: string }>
}

// Define the details for each category
const categoryDetails: Record<keyof BackgroundUrls, CategoryDetails> = {
  sports: {
    title: 'Live Sports',
    description:
      'Catch your games at home or on the go. Stream live games from major college and pro leagues including the NCAA®, NBA, NHL, NFL, and more.',
    images: sportsLogos,
  },
  events: {
    title: 'Breaking News',
    description:
      'Keep pace with whats going on locally and globally with trusted opinions from all the top news networks.',
    images: newsLogos,
  },
  news: {
    title: 'Biggest Events',
    description:
      'Spectacular, cant-miss moments like the Olympics, Grammys®, Oscars®, Emmys®, and more.',
    images: eventsLogos,
  },
}

const backgroundUrls: BackgroundUrls = {
  sports: {
    desktop:
      'https://cnbl-cdn.bamgrid.com/assets/3ab6ce86baaf4225b072c58fa9497ec949c0c9e284b3958ecda1429b7f3744f9/original',
    mobile:
      'https://cnbl-cdn.bamgrid.com/assets/7a93b953315e186a518a4aa6dcd3792ecb007b8a5c5b1d540828e8bdfb2614f3/original',
  },
  events: {
    desktop:
      'https://cnbl-cdn.bamgrid.com/assets/1cfd5743e36004288a408e977a0a9e44b57668b2bfdc525956772ce9d8769288/original',
    mobile:
      'https://cnbl-cdn.bamgrid.com/assets/b90378ca30a4e9211208e665bdd0f585405cdee3c98776c0c574f7243edb77a5/original',
  },
  news: {
    desktop:
      'https://cnbl-cdn.bamgrid.com/assets/4a3aa8e2de730150aba6be81a274da9d447c513fbb0a788dad007b5fe1e0877a/original',
    mobile:
      'https://cnbl-cdn.bamgrid.com/assets/ec577557f24e2e08f9c0977d1ce40e24fe39392d5960787418887b6d539b8d6a/original',
  },
}

function useDynamicBackgroundToggle(category: keyof BackgroundUrls) {
  const [categoryInfo, setCategoryInfo] = useState<CategoryDetails>(categoryDetails[category])

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
      setCategoryInfo(categoryDetails[category])
    }

    window.addEventListener('resize', updateBackground)
    updateBackground() // Initialize on first render

    return () => window.removeEventListener('resize', updateBackground)
  }, [category])

  return { backgroundStyle, categoryInfo }
}

export default useDynamicBackgroundToggle
