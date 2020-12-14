import {
  useState, 
  useEffect 
} from 'react'
import {
  divideScale, 
  sinify 
} from './util'

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

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
        }
    })
    return {
        w, 
        h
    }
}

export const useStyle = (scale, w, h) => {
    const size = Math.min(w, h) / 9 
    const background = 'green'
    const lineWidth = Math.min(w, h) / 90
    const position = 'absolute'
    const y = h / 2 - lineWidth / 2 
    const x = w / 2 - size / 2
    const n = 3 
    const gap = size / (2 * n + 1) 
    return {
        mainStyle() {
            const width = `${size * scale}px`
            const height = `${lineWidth}px`
            const left = `${x}px`
            const top = `${y}px`
            return {
                position, 
                background, 
                width, 
                height, 
                left,
                top
            }
        },
        lineStyle(i) {
            const sf = sinify(divideScale(scale, i, parts))
            const left = `${x + i * gap - lineWidth / 2}px`
            const top = `${y - (gap) * sf}px`
            const width = `${lineWidth}px`
            const height = `${gap * sf}px`
            return {
                position, 
                left, 
                top, 
                width, 
                height,
                background 
            }
        }
    }

}