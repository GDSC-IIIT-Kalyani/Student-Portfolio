gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();

tl.to("#element-1", {
  opacity: 0,
  duration: 1,
})

tl.to("#elementPurgatory", {
  opacity: 0,
  duration: 1,
})

tl.from("#element0", {
  opacity: 0,
  duration: 1,
})

tl.from("#element1", {
  y: '-30vh',
  opacity: 0,
  duration: 1,
})

tl.from("#element2", {
  y: '30vh',
  opacity: 0,
  duration: 1,
});

ScrollTrigger.create({
  animation: tl,
  trigger: ".page1",
  scrub: true,
  pin: true
})

tl.to(".page2", {
  y: '-100vh',
  duration: 10
})

tl.from("#element3", {
  x: '-1vw',
  opacity: 0
})

tl.from("#element4", {
  x: '-1vw',
  opacity: 0
})

tl.from("#element5", {
  x: '1vw',
  opacity: 0
})
