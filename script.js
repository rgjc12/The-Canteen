gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

let t=gsap.timeline();
t.from("#loader h3",{
  opacity:0,
  x:60,
  stagger:0.2,
  duration:1.1
})
t.to("#loader h3",{
  opacity:0,
  x:-25,
  stagger:-0.1,
  duration:1
})
t.to("#loader",{
  opacity:0,
  display:"none",
  duration:0.6,
  ease: "elastic.out(1,0.1)",

 })


function page1image(){
gsap.from("#img1",{
  delay:3.5,
  opacity:0,
  duration:1.6,
  y:100,
  
  ease: "expo.out",
})
gsap.from("#img2",{
  delay:3.5,
  opacity:0,
  duration:1.6,
   x:60,
  
  ease: "expo.out",
})
  
}
page1image();
function canteenanimation(){
  gsap.from("#p1",{
    opacity:0,
      x:-26,
    duration:1.6,
    delay:3.5,
  })
  gsap.from("#p3",{
    opacity:0,
      x:26,
    duration:1.6,
    delay:3.5,
  })
  Shery.textAnimate("#text #p2", {
    //Parameters are optional.
    style: 1,
    y:20,
    delay: 0.39,
    duration: 3,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });
/*let v=document.querySelectorAll("#p2")[0];
  let text=v.textContent;
let splittedtext=text.split("");
var clutter="";
splittedtext.forEach((e)=>{
  clutter+=`<span>${e}</span>`;
})
v.innerHTML=clutter;
gsap.from("#p2 span",{
  y:80,
  opacity:0,
  duration:0.1,
  delay:3.5,
  stagger:0.1
})*/
}
canteenanimation();
gsap.from("#part2 .an",{
  opacity:0,
  y:20,
  duration:0.3,
  delay:3.7,
  stagger:0.1
})
gsap.from("#page2 h5,#page2 h1,#page2 #about",{
  opacity:0,
  y:15,
  duration:0.3,
  stagger:0.6,
    ease: "expo.out",
    scrollTrigger:{
      trigger:"#page2 h5",
      scroller:"#main",
      start:"top 78%",
      end:"top 35%",
      scrub:2      
    }
})

function scrollingtext(){
  
  document.addEventListener("wheel",(event)=>{
    if(event.deltaY>0)
    {
      gsap.to(".marque",{
        transform: "translateX(-200%)",
        duration:2.5,
        ease: "none",
        repeat:-1
      })
      gsap.to(".marque img",{
        rotate:0
      })
    }
    else{
      gsap.to(".marque",{
        transform: "translateX(0%)",
        duration:2.5,
        ease: "none",
        repeat:-1

      })
      gsap.to(".marque img",{
        rotate:180
      })
    }
  })
}
  scrollingtext();

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  }
});
function page3ani(){
  
gsap.from("#page3 #page3-elem",{
  opacity:0,
  y:60,
    stagger:0.6,
      scrollTrigger:{
        trigger:"#page3 #page3-elem",
        scroller:"#main",
        start:"top 78%",
        end:"top 35%",
        scrub:2,
        

      }
})
gsap.from("#page3 #page3-text",{
  opacity:0,
    y:10,
      stagger:0.1,
        scrollTrigger:{
          trigger:"#page3 #page3-text",
          scroller:"#main",
          start:"top 78%",
          end:"top 35%",
          scrub:2,
          

        }
})
}
page3ani();
function page4ani(){
gsap.from("#page4-swiper #swipertext",{
  opacity:0,
    x:-30,
      stagger:0.1,
        scrollTrigger:{
          trigger:"#page4-swiper #swipertext",
          scroller:"#main",
          start:"top 78%",
          end:"top 35%",
          scrub:2,
          

        }
})
gsap.from("#page4-swiper #swiperdiv",{
  opacity:0,
    y:60,
      stagger:0.1,
        scrollTrigger:{
          trigger:"#page4-swiper #swipertext",
          scroller:"#main",
          start:"top 78%",
          end:"top 35%",
          scrub:2,
          

        }
})
gsap.from("#page4-bottom #xx",{
  height:0,
  width:0,
  duration:1,
  scrollTrigger:{
    trigger:"#page4-bottom #xx",
    scroller:"#main",
    start:"top 78%",
    end:"top 35%",
    scrub:2,
    

  }
})
}
page4ani();
function page5ani(){
gsap.from("#page5-left #te h2,#page5-right h2",{
  opacity:0,
    y:60,
      stagger:0.2,
        scrollTrigger:{
          trigger:"#page5-top",
          scroller:"#main",
          start:"top 78%",
          end:"top 35%",
          scrub:2,
          
}
})
gsap.from("#page5-bottom h4,#page5-bottom #con",{
  opacity:0,
    y:60,
  delay:1.6,
      stagger:0.2,
        scrollTrigger:{
          trigger:"#page5-bottom",
          scroller:"#main",
          start:"top 90%",
          end:"top 80%",
          scrub:2,
          
}
})
}
page5ani();