// TODO
collH2 = document.querySelectorAll("h2")
NodeList(3) [h2, h2, h2]
collH2.forEach((elm)=>{
    elm.addEventListener('click',(evt)=>{ console.log(evt.target)})
   
   
 collH2.forEach((elm)=>{
    elm.addEventListener('click',(evt)=>{ console.log(evt.target)})
        evt.target.style.color="red";
    });
});