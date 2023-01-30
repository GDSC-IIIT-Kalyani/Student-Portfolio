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
  scrub: true,
  pin: true
})

tl2.from("#element3", {
  x: '-1vw',
  opacity: 0
})

tl2.from("#element4", {
  x: '-1vw',
  opacity: 0
})

tl2.from("#element5", {
  x: '1vw',
  opacity: 0
})

function github() {
  location.href = "https://github.com/ImanKalyanChakraborty"
}

function twitter() {
  location.href = "https://twitter.com/ikc1975"
}

function linkedin() {
  location.href = "https://in.linkedin.com/in/iman-kalyan-chakraborty-33822b260?trk=people-guest_people_search-card"
}

const tl3 = gsap.timeline();

ScrollTrigger.create({
  animation: tl3,
  trigger: ".page3",
  scrub: true,
  pin: true
})

tl3.from("#element6", {
  y: '1vh',
  opacity: 0
})

tl3.from("#element7", {
  y: '1vh',
  opacity: 0
})

tl3.from("#element8", {
  y: '1vh',
  opacity: 0
})

tl3.from("#element9", {
  y: '1vh',
  opacity: 0
})

tl3.from("#element10", {
  y: '1vh',
  opacity: 0
})

tl3.from("#element11", {
  y: '1vh',
  opacity: 0
})
