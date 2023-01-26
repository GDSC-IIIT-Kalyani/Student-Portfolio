gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();

tl.from("#element0", {
  opacity: 0,
  duration: 1,
})

tl.from("#element1", {
  y: '-100vh',
  opacity: 0,
  duration: 1,
})

tl.from("#element2", {
  y: '100vh',
  opacity: 0,
  duration: 1,
});

ScrollTrigger.create({
  animation: tl,
  trigger: ".page1",
  scrub: true,
  pin: true
})
