import { useState, useEffect } from 'react'

interface BackgroundStyle {
  backgroundImage: string
  backgroundSize: string
  backgroundRepeat: string
  backgroundPosition: string
  height: string
}

function useDynamicBackground(imageUrl: string): BackgroundStyle {
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
        // Determine height based on width
        const backgroundHeightVh = Math.max(
          70,
          Math.min(90, ((screenWidth * 0.8) / window.innerHeight) * 100)
        )
        backgroundHeight = `${backgroundHeightVh}vh`
      }

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
  }, [imageUrl])

  return backgroundStyle
}

export default useDynamicBackground
