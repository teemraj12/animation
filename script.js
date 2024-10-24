gsap.to(".image",{
    ease:Expo.easeInOut,
    width:"100%",
    duration:5,
    Stagger:4


})
// document.querySelectorAll(".image")
// .forEach(function(elem){
//     gsap.to(elem,{
//         ease:Expo.easeInOut,
//         width:"100%",
//         duration:2,
//         Stagger:2
    
    
//     })
// })

gsap.to(".text h1",{
   
    ease:Expo.easeInOut,
    
    Stagger:4,
top:0

})
gsap.to(".text h1",{
    ease:Expo.easeInOut,
   delay:5,
    
    Stagger:4,
top:"-100%"
})