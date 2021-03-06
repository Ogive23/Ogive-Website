
import React, { useState } from 'react'
import { useSprings, animated, interpolate } from 'react-spring'
import { useGesture } from 'react-use-gesture'
import './../CSS/projects images.css';

const cards = [
    'https://upload.wikimedia.org/wikipedia/en/f/f5/RWS_Tarot_08_Strength.jpg',
    'https://upload.wikimedia.org/wikipedia/en/5/53/RWS_Tarot_16_Tower.jpg',
    'https://upload.wikimedia.org/wikipedia/en/9/9b/RWS_Tarot_07_Chariot.jpg',
    'https://upload.wikimedia.org/wikipedia/en/thumb/8/88/RWS_Tarot_02_High_Priestess.jpg/690px-RWS_Tarot_02_High_Priestess.jpg',
    'https://upload.wikimedia.org/wikipedia/en/d/de/RWS_Tarot_01_Magician.jpg'
]

const to = i => ({ x: 0, y: i * -4, scale: 1, display: 'block', rot: -10 + Math.random() * 20, delay: i * 100 })
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) => `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

export const AnimatedProjectImages = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
    const [props, set] = useSprings(cards.length, i => ({ ...to(i) })) // Create a bunch of springs using the helpers above
    // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
    const bind = useGesture(({ args: [index], down, delta: [xDelta], direction: [xDir], velocity }) => {

        const trigger = velocity > 0.2 // If you flick hard enough it should trigger the card to fly out
        // const dir = xDir < 0 ? -1 : 1 // Direction should either point left or right
        const dir = 1;
        if (!down && trigger) gone.add(index) // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
        set(i => {
            if (index !== i) return // We're only interested in changing spring-data for the current spring
            const isGone = gone.has(index)
            const x = isGone ? (width / 2) * dir : down ? xDelta : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
            const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0) // How much the card tilts, flicking it harder makes it rotate faster
            const scale = down ? 1.1 : 1 // Active cards lift up a bit
            const display = isGone ? 'none' : 'block'
            return { x, rot, scale, display, delay: undefined, config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 } }
        })
        if (gone.size === cards.length) setTimeout(() => gone.clear() || set(i => to(i)), 600)
    })


    React.useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize)
        return _ => {
            window.removeEventListener('resize', handleResize)
        }
    });

    // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
    return props.map(({ x, y, rot, scale, display }, i) => {
        return (
            <animated.div className="parent" key={i} style={{ transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`) }}>
                {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
                <animated.div className="child" {...bind(i)} style={{
                    display: display,
                    transform: interpolate([rot, scale], trans),
                    backgroundImage: `url(${cards[i]})`
                }} />
            </animated.div>
        );
    });
}
