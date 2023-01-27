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

const tl2 = gsap.timeline();

ScrollTrigger.create({
  animation: tl2,
  trigger: ".page2",
  start: "top top",
  scrub: true,
  pin: true
})

tl2.from("#element3", {
  x: '-30px',
  opacity: 0
})

tl2.from("#element4", {
  x: '-30px',
  opacity: 0
})

tl2.from("#element5", {
  x: '30px',
  opacity: 0
})
