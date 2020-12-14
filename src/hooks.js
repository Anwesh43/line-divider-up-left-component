import {
  useState, 
  useEffect 
} from 'react'

export const useAnimatedScale = (scGap = 0.02, delay = 20) => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)
    return {
        scale, 
        start() {
            if (!this.animated) {
                this.animated = true 
                let currScale = 0 
                this.interval = setInterval(() => {
                    currScale += scGap 
                    setScale(currScale)
                    if (currScale > 1) {
                        setScale(currScale)
                        setAnimated(false)
                        clearInterval(interval)
                    }
                }, delay)
            }
        }
    }
}
