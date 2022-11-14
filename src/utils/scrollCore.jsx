import React, { useState, useRef, useLayoutEffect, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'

gsap.registerPlugin(ScrollTrigger, TextPlugin)

export default function ScrollCore () {
  const homePage = gsap.timeline({
    scrollTrigger: {
      trigger: '.bannerGsap',
      //   markers: true,
      start: 'top top',
      // end: 'bottom bottom',
      pin: true,
      scrub: true,
      duration: 2
    }
  })
  homePage
    .fromTo('.bg_decorateH',
      {
        opacity: 1,
        autoAlpha: 1
      },
      {
        opacity: 0,
        autoAlpha: 0,
        duration: 2
      })
    .to('.bannerGsap',
      {
        opacity: 0,
        autoAlpha: 0,
        transformOrigin: 'center center'
      }, '<')
    .to('.readyFrameGsap',
      {
        opacity: 0,
        autoAlpha: 0,
        transformOrigin: 'center center'
      }, '<')
    .to('.decorateGsap',
      {
        scale: 0.3,
        opacity: 0,
        autoAlpha: 0,
        duration: 2,
        transformOrigin: 'center center'
      })
    .to('.roadDoorGsap',
      {
        opacity: 0,
        autoAlpha: 0,
        transformOrigin: 'top center'
      })
    .to('.characterRun',
      {
        scale: 0.5,
        opacity: 1,
        duration: 2,
        transformOrigin: 'bottom center'
      })
    .to('.headerGsap',
      {
        autoAlpha: 1,
        opacity: 1,
        duration: 1
      }, '<')

  const question = gsap.timeline({
    scrollTrigger: {
      trigger: '.questionGsap',
      //   markers: true,
      start: 'top top',
      //   end: 'bottom bottom',
      pin: true,
      scrub: true,
      duration: 2
    }
  })

  question
    .to('.redDoGsap',
      {
        position: 'absolute',
        top: -1,
        left: 34
      })
    .fromTo('.titleTextGsap-question',
      {
        autoAlpha: 0
      },
      {
        autoAlpha: 1,
        duration: 2
      }, '<')
    .fromTo('.questionContent_item',
      {
        autoAlpha: 0
      },
      {
        autoAlpha: 1,
        duration: 2
      })
    .fromTo('.bg_decorateH',
      {
        opacity: 0,
        autoAlpha: 0
      },
      {
        y: '-50px',
        autoAlpha: 1,
        opacity: 1,
        duration: 2
      })
    .fromTo('.titleTextGsap-question',
      {
        autoAlpha: 1
      },
      {
        autoAlpha: 0,
        duration: 2
      })
    .fromTo('.questionContent_item',
      {
        autoAlpha: 1
      },
      {
        autoAlpha: 0,
        duration: 2
      })

  const responsive = gsap.timeline({
    scrollTrigger: {
      trigger: '.responsiveGsap',
      //   markers: true,
      start: 'top top',
      pin: true,
      scrub: true,
      duration: 2
    }
  })

  responsive
    .to('.redDoGsap',
      {
        position: 'absolute',
        top: 8,
        left: 93
      })
    .fromTo('.titleTextGsap-responsive',
      {
        autoAlpha: 0
      },
      {
        autoAlpha: 1,
        duration: 2
      }, '<')
    .to('.characterRun',
      {
        scale: 0.8,
        opacity: 1,
        duration: 2,
        transformOrigin: 'bottom center'
      }, '<')
    .fromTo('.responsiveTxtGsap',
      {
        autoAlpha: 0
      },
      {
        autoAlpha: 1,
        duration: 2
      })
    .fromTo('.responsiveContent_item',
      {
        autoAlpha: 0
      },
      {
        autoAlpha: 1,
        duration: 2
      }, '<')
    .fromTo('.titleTextGsap-responsive',
      {
        autoAlpha: 1
      },
      {
        autoAlpha: 0,
        duration: 2
      })
    .fromTo('.responsiveTxtGsap',
      {
        autoAlpha: 1
      },
      {
        autoAlpha: 0,
        duration: 2
      }, '<')
    .fromTo('.responsiveContent_item',
      {
        autoAlpha: 1
      },
      {
        autoAlpha: 0,
        duration: 2
      }, '<')
    .fromTo('.bg_decorateH',
      {
        opacity: 1,
        autoAlpha: 1
      },
      {
        opacity: 0,
        autoAlpha: 0,
        duration: 2
      }, '<')

  const theme = gsap.timeline({
    scrollTrigger: {
      trigger: '.themeGsap',
      //   markers: true,
      start: 'top top',
      //   end: '200% 200%',
      pin: true,
      scrub: true,
      duration: 2
    }
  })

  theme
    .to('.redDoGsap',
      {
        position: 'absolute',
        top: 7,
        left: 160
      })
    .fromTo('.titleTextGsap-theme',
      {
        autoAlpha: 0
      },
      {
        autoAlpha: 1
      }, '<')
    .to('.characterRun',
      {
        scale: 0.4,
        opacity: 1,
        transformOrigin: 'bottom center'
      }, '<')
    .fromTo('.themeTxtGsap',
      {
        autoAlpha: 0
      },
      {
        autoAlpha: 1
      })
    .from('.themeItemA',
      {
        x: -500,
        opacity: 0,
        duration: 0.3
      })
    .from('.themeItemB',
      {
        x: 500,
        opacity: 0,
        duration: 0.3
      }, '<')
    .from('.themeItemC',
      {
        x: -500,
        opacity: 0,
        duration: 0.3
      }, '<')

  const imoprtantTime = gsap.timeline({
    scrollTrigger: {
      trigger: '.imoprtantTimeGsap',
      //   markers: true,
      start: 'top 80px',
      pin: true,
      scrub: true,
      duration: 2
    }
  })

  imoprtantTime
    .to('.redDoGsap',
      {
        position: 'absolute',
        top: 50,
        left: 153
      })
    .to('.characterRun',
      {
        scale: 0.6,
        opacity: 1,
        transformOrigin: 'bottom center'
      }, '<')
    .fromTo('.imoprtantTimeLineGsap',
      {
        autoAlpha: 0
      },
      {
        autoAlpha: 1
      }, '<')
    .fromTo('.imoprtantTimeContent_item',
      {
        autoAlpha: 0
      },
      {
        autoAlpha: 1
      })
    .fromTo('.imoprtantTimeLineGsap',
      {
        autoAlpha: 1
      },
      {
        autoAlpha: 0
      })
    .fromTo('.imoprtantTimeContent_item',
      {
        autoAlpha: 1
      },
      {
        autoAlpha: 0
      }, '<')

  const satisfy = gsap.timeline({
    scrollTrigger: {
      trigger: '.satisfyGsap',
      //   markers: true,
      start: 'top 20%',
      pin: true,
      scrub: true,
      duration: 2
    }
  })

  satisfy
    .to('.redDoGsap',
      {
        position: 'absolute',
        top: 70,
        left: 107
      })
    .to('.characterRun',
      {
        scale: 0.8,
        opacity: 1,
        transformOrigin: 'bottom center'
      }, '<')
    .fromTo('.satisfyGsap',
      {
        autoAlpha: 0
      },
      {
        autoAlpha: 1
      })
    .fromTo('.bg_decorateThree',
      {
        autoAlpha: 0,
        scale: 0.3
      },
      {
        autoAlpha: 1,
        scale: 0.8
      }, '<')
    .fromTo('.bg_decorateS',
      {
        autoAlpha: 0,
        scale: 0.3
      },
      {
        autoAlpha: 1,
        scale: 0.8
      }, '<')
    .fromTo('.satisfyGsap',
      {
        autoAlpha: 1
      },
      {
        autoAlpha: 0
      })
    .fromTo('.bg_decorateThree',
      {
        autoAlpha: 1
      },
      {
        autoAlpha: 0
      }, '<')
    .fromTo('.bg_decorateS',
      {
        autoAlpha: 1
      },
      {
        autoAlpha: 0
      }, '<')

  const wait = gsap.timeline({
    scrollTrigger: {
      trigger: '.waitGsap',
      //   markers: true,
      start: 'top top',
      pin: true,
      scrub: true,
      duration: 2
    }
  })

  wait
    .to('.redDoGsap',
      {
        position: 'absolute',
        top: 100,
        left: 68
      })
    .fromTo('.titleTextGsap-wait',
      {
        autoAlpha: 0
      },
      {
        autoAlpha: 1
      }, '<')
    .to('.characterRun',
      {
        scale: 0.4,
        opacity: 1,
        transformOrigin: 'bottom center'
      }, '<')
    .fromTo('.waitAwardLight',
      {
        autoAlpha: 0
      },
      {
        autoAlpha: 1
      })
    .fromTo('.waitItemGsap',
      {
        autoAlpha: 0
      },
      {
        autoAlpha: 1
      }, '<')
    .fromTo('.titleTextGsap-wait',
      {
        autoAlpha: 1
      },
      {
        autoAlpha: 0
      })
    .fromTo('.waitAwardLight',
      {
        autoAlpha: 1
      },
      {
        autoAlpha: 0
      }, '<')
    .fromTo('.waitItemGsap',
      {
        autoAlpha: 1
      },
      {
        autoAlpha: 0
      }, '<')

  const sponsor = gsap.timeline({
    scrollTrigger: {
      trigger: '.sponsorGsap',
      //   markers: true,
      start: 'top top',
      pin: true,
      scrub: true,
      duration: 2
    }
  })

  sponsor
    .fromTo('.titleTextGsap-sponsor',
      {
        autoAlpha: 0
      },
      {
        autoAlpha: 1
      })
    .to('.characterRun',
      {
        scale: 0.6,
        opacity: 1,
        transformOrigin: 'bottom center'
      }, '<')
    .from('.blockstudio',
      {
        x: -500,
        opacity: 0,
        duration: 0.3
      })
    .from('.titansoft',
      {
        y: 500,
        opacity: 0,
        duration: 0.3
      }, '<')
    .from('.kdanmobile',
      {
        x: 500,
        opacity: 0,
        duration: 0.3
      }, '<')
    .fromTo('.titleTextGsap-sponsor',
      {
        autoAlpha: 1
      },
      {
        autoAlpha: 0
      })
    .fromTo('.blockstudio',
      {
        autoAlpha: 1
      },
      {
        autoAlpha: 0
      }, '<')
    .fromTo('.titansoft',
      {
        autoAlpha: 1
      },
      {
        autoAlpha: 0
      }, '<')
    .fromTo('.kdanmobile',
      {
        autoAlpha: 1
      },
      {
        autoAlpha: 0
      }, '<')

  const finishLine = gsap.timeline({
    scrollTrigger: {
      trigger: '.finishLineGsap',
      //   markers: true,
      start: 'top top',
      pin: true,
      scrub: true,
      duration: 2
    }
  })

  finishLine
    .to('.redDofin',
      {
        autoAlpha: 1,
        opacity: 1
      }, '<')
    .to('.redDo',
      {
        opacity: 0
      }, '<')
    .to('.characterRun',
      {
        scale: 1,
        opacity: 1,
        transformOrigin: 'bottom center'
      }, '<')
    .to('.finishLineGsap',
      {
        scale: 1,
        opacity: 1,
        transformOrigin: 'bottom center'
      }, '<')
    .fromTo('.finishRedLineGsap',
      {
        autoAlpha: 0,
        opacity: 0,
        scale: 0.5
      },
      {
        autoAlpha: 1,
        opacity: 1,
        scale: 1
      }, '<')
    .to('.finishLineGsap',
      {
        scale: 0.3,
        opacity: 0,
        transformOrigin: 'bottom center'
      })
    .fromTo('.finishRedLineGsap',
      {
        autoAlpha: 1,
        opacity: 1,
        scale: 1
      },
      {
        autoAlpha: 0,
        opacity: 0,
        scale: 0.5
      }, '<')

  const finish = gsap.timeline({
    scrollTrigger: {
      trigger: '.finishGsap',
      //   markers: true,
      start: 'top top',
      pin: true,
      scrub: true,
      duration: 2
    }
  })

  finish
    .to('.characterRun',
      {
        scale: 0.5,
        opacity: 1,
        transformOrigin: 'bottom center'
      })
    .fromTo('.finishGsap',
      {
        autoAlpha: 0
      },
      {
        autoAlpha: 1
      }, '<')
}
