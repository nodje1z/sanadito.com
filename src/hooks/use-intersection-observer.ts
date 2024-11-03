'use client'

import { useEffect } from 'react'

export function useIntersectionObserver() {
  useEffect(() => {
    const sections = document.querySelectorAll('.section-animate')
    const sectionsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate')
        }
      })
    }, {
      threshold: 0.15,
      rootMargin: '-50px 0px'
    })

    sections.forEach(section => {
      sectionsObserver.observe(section)
    })

    const numbers = document.querySelectorAll('.number-animate')
    const numbersObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          numbers.forEach((number, index) => {
            number.classList.add('animate', `animate-${index + 1}`)
          })
          numbersObserver.disconnect()
        }
      })
    }, {
      threshold: 0.8,
      rootMargin: '-10% 0px'
    })

    const numbersContainer = document.querySelector('.numbers-container')
    if (numbersContainer) {
      numbersObserver.observe(numbersContainer)
    }

    return () => {
      sectionsObserver.disconnect()
      numbersObserver.disconnect()
    }
  }, [])
} 