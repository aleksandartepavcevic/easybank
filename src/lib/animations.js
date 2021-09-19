import gsap from "gsap"

export const headerAnimation = (el1, headerContent, tl) => {
  const mockup = gsap.utils.selector(el1.current.children[0])
  const headerEls = gsap.utils.selector(headerContent)

  tl.current = gsap
    .timeline()
    .from(headerEls(".test"), {
      opacity: 0,
      translateY: -100,
      stagger: 0.2,
      ease: "ease-in-out",
      delay: 1.5,
    })
    .from(headerEls(".a-button.-main"), {
      scale: 0,
      opacity: 0,
      ease: "back",
    })
    .from(
      el1.current.children[0],
      {
        translateX: 400,
        opacity: 0,
        duration: 0.8,
      },
      "-=0.3"
    )
    .from(mockup("#total-checking"), {
      opacity: 0,
      scale: 0,
      transformOrigin: "center",
      duration: 0.4,
      ease: "back",
    })
    .from(mockup("#tab"), {
      opacity: 0,
      translateY: "-100%",
      transformOrigin: "center",
      duration: 0.4,
      stagger: 0.2,
    })
    .from(mockup("#button"), {
      opacity: 0,
      y: 100,
    })
    .to(mockup("#mockup"), {
      y: 10,
      duration: 1,
      delay: 1,
      yoyo: true,
      yoyoEase: "ease-in-out",
      repeat: -1,
    })
}

export const navAnimation = (nav, tl) => {
  const navEls = gsap.utils.selector(nav)

  tl.current = gsap
    .timeline()
    .from(navEls(".logo"), {
      translateX: -100,
      opacity: 0,
      duration: 0.5,
      ease: "ease",
      delay: 0.5,
    })
    .from(navEls(".link"), {
      opacity: 0,
      translateX: -100,
      stagger: 0.1,
      ease: "ease",
    })
    .from(navEls(".a-button"), {
      opacity: 0,
      scale: 0,
      ease: "back",
    })
}
