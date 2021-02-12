import { useEffect, useState } from 'react'

const useMedia = (media) => {
  const [match, setMatch] = useState(null)

  useEffect(() => {
    const changeMedia = () => {
      const { matches } = window.matchMedia(media)
      setMatch(matches)
    }
    window.addEventListener('resize', changeMedia)
    return () => {
      window.removeEventListener('resize', changeMedia)
    }
  }, [media])
  return match
}

export default useMedia
