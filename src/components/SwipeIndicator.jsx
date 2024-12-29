import { motion, useAnimation } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'

const SwipeIndicator = () => {
  const controls = useAnimation()
  const [isExpanded, setIsExpanded] = useState(false)
  const isOpen = useSelector(state => state.sidebar.isOpen)
  const indicatorRef = useRef(null)

  useEffect(() => {
      setIsExpanded(false)
      controls.start({ width: '8px' })
  }, [isOpen, controls])

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (indicatorRef.current && !indicatorRef.current.contains(event.target)) {
        setIsExpanded(false)
        controls.start({ width: '8px' })
      }
    }

    const handleScroll = () => {
      setIsExpanded(false)
      controls.start({ width: '8px' })
    }

    document.addEventListener('mousedown', handleOutsideClick)
    document.addEventListener('touchstart', handleOutsideClick)
    window.addEventListener('scroll', handleScroll)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
      document.removeEventListener('touchstart', handleOutsideClick)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [controls])

  const handleClick = () => {
    setIsExpanded(!isExpanded)
    controls.start({
      width: isExpanded ? '8px' : '16px',
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    })
  }

  return (
    <motion.div
      ref={indicatorRef}
      className="fixed left-0 top-[30%] flex items-center cursor-pointer"
      onClick={handleClick}
    >
      <motion.div 
        className="h-[72px] rounded-r shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] bg-primary-700"
        initial={{ width: '8px' }}
        animate={controls}
      />
    </motion.div>
  )
}

export default SwipeIndicator

