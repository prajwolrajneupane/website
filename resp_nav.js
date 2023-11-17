

const tl = gsap.timeline();


tl.from("#page1 .para h1, .container", {
    delay: 1,
    opacity: 0,
    stagger: 0.2,

})
tl.from(".nav h2,.nav-part2 a, .nav-part3",
    {
        delay: 0.5,
        opacity: 0,
        y: -100,
        stagger: 0.3,
        once: true

    })



tl.to(".container img", {
    scrollTrigger: {
        trigger: ".container",
        start: "top 72%",
        end: "bottom 100%",

        scrub: 1
        ,


        onToggle: self => {
            if (self.isActive) {
                // Change z-index when the trigger element is scrolled into view
                gsap.set(".container img", { zIndex: 1 }); // Change the z-index value as needed
            } else {
                // Change back the z-index when the trigger element is out of view
                gsap.set(".container img", { zIndex: 0 }); // Reset the z-index value
            }

        },


    }





}),

    tl.to(".container img", {
        scrollTrigger: {
            trigger: ".container",
            start: "top 15%",
            end: "bottom 100%",

            scrub: 1





        }

        ,
        opacity: 0


    }),


    tl.from("#page2 .heading", {

        scrollTrigger: {
            trigger: "#page2 .heading ",
            scroller: "body",
            scrub: 1,

        },
        opacity: 0,

    }),

    tl.from("#page2 img", {

        scrollTrigger: {
            trigger: "#page2 .heading ",
            scroller: "body",
            end: "top 20%",

            scrub: 1,

        },
        opacity: 0,
        x: -300,

        scale: 0.7

    }),

    tl.from(".text h2,.text p", {

        scrollTrigger: {
            trigger: "#page2 .heading ",
            scroller: "body",
            scrub: 1,
            end: "top 20%",


        },

        opacity: 0,
        x: 200,
        stagger: 0.1,
        scale: 0.7

    }),


    tl.from("#page3 .heading", {

        scrollTrigger: {
            trigger: "#page3 .heading ",
            scroller: "body",
            scrub: 1,

        },
        opacity: 0,

    })



tl.from("#page4", {

    scrollTrigger: {
        trigger: "#page4 .heading ",
        scroller: "body",
        scrub: 1,
        start: "top 90%",
    },
    opacity: 0,

}, "suii")



tl.from("#page4 .messages,#page4 .messages h2,#page4 .messages h3", {

    scrollTrigger: {
        trigger: "#page4 .heading ",
        scroller: "body",
        scrub: 1,
        stagger: 1,
        start: "top 35%",
        end: "bottom 100%",


    },

    opacity: 0,
    x: -200
}, "suii")



tl.from(".fields,.field,.field-email,.field-name,.field-textarea,.button-area", {



    scrollTrigger: {
        trigger: "#page4 .heading ",
        scroller: "body",
        scrub: 1,
        stagger: 1,
        start: "top 35%",
        end: "bottom 100%",


    },

    opacity: 0,
    x: 200
})