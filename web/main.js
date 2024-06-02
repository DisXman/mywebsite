document.getElementById('aboutid').addEventListener('click' ,function(){
    document.getElementById("aboutme").scrollIntoView({
        behavior:"smooth",
        block: "start"
    });  
});

document.getElementById('mediaid').addEventListener('click',function(){
    document.getElementById('socialmedia').scrollIntoView({
        behavior:"smooth",
        block:"start"
    })
})