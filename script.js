
//# sourceMappingURL=index.min.js.map
window.onload = function() {
    Particles.init({
        // normal options
        selector: '.background',
        maxParticles: 100,
        color:'#F6F6F6',
        connectParticles: true,
        // options for breakpoints
        responsive: [
          {
            breakpoint: 768,
            options: {
              maxParticles: 10,
              color: '#ffffff',
              connectParticles: false
            }
          }, {
            breakpoint: 425,
            options: {
              maxParticles: 10,
              connectParticles: false
            }
          }, {
            breakpoint: 320,
            options: {
              maxParticles: 0 // disables particles.js
            }
          }
        ]
      }); 
}; 