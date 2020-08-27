import React, { useRef, useState, useEffect } from "react"
import "./Carousel.css"
import { backWhite, nextWhite } from "../../icons"
import { Button } from "../Button"
import { TweenMax, Expo } from "gsap"
import { Swipeable } from "react-swipeable"

const Carousel = ({ children }) => {
  const itemsRef = useRef()
  const [count, setCount] = useState(0)
  const [itemsCount, setItemsCount] = useState(0)

  useEffect(() => {
    const { current: { children } } = itemsRef
    const { length } = children

    for (var i in children) {
      TweenMax.set(children[i], {
        zIndex: 20 - i
      })
    }

    setItemsCount(length)
  }, [])

  const onBack = (event) => {
    const { current: { children } } = itemsRef

    if (count > 0) {
      TweenMax.to(
        children[count - 1],
        0.3, {
          x: "+=" + children[0].offsetWidth,
          ease: Expo.out,
        }
      )

      setCount(count => count - 1)
    }
  }

  const onNext = (event) => {
    const { current: { children } } = itemsRef

    if (count < itemsCount - 1) {
      TweenMax.to(
        children[count],
        0.3, {
          x: "-=" + children[0].offsetWidth,
          ease: Expo.out,
        }
      )

      setCount(count => count + 1)
    }
  }

  return (
    <Swipeable
      onSwipedLeft={onNext}
      onSwipedRight={onBack}
    >
      <div className="carousel">
        <div className="carousel-buttons">
          <div className="layout--columns layout--columns-2">
            <Button
              variant="text"
              size="large"
              withIcon={backWhite}
              className={`back back--padding ${count === 0 && "button--hide"}`}
              onClick={onBack}
            />
            <Button
              variant="text"
              size="large"
              withIcon={nextWhite}
              className={`next next--padding ${count === itemsCount - 1 && "button--hide"}`}
              onClick={onNext}
            />
          </div>
        </div>
        <div className="carousel-items" ref={itemsRef}>
          {children}
        </div>
      </div>
    </Swipeable>
  )
}

const CarouselItem = ({children}) => (
  <div className="carousel-item">
    {children}
  </div>
)

export {
  Carousel,
  CarouselItem
}
