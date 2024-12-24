const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
});

window.addEventListener('load', () => {
    scroll.update(); // Force recalculation
});


let tl = gsap.timeline();

tl
.to("#page1", {
    y: "100vh",
    duration: 0,
    ease: Expo.easeInOut,
    scale: .6,
})
.to("#page1", {
    y: "30vh",
    duration: 1,
    delay: 1,
    ease: Expo.easeInOut,
})
.to("#page1", {
    y: "0vh",
    duration: 1,
    ease: Expo.easeInOut,
    rotate: 360,
    scale: 1
})