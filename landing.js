$("#button1,#button2,#button3,#button4").on("click",(event)=>{
    localStorage.setItem("packageName",JSON.stringify(event.target.id))
    if(!JSON.parse(localStorage.getItem("userAuthToken"))){
        event.preventDefault();
        console.log("sufbfbofbesf");
        return window.location.href = 'userlogin.html';
    }else{
    $("#button1").on("click",()=>{
        window.location.href = 'regular.html';
        // localStorage.setItem("packageName",JSON.stringify("regular"))
    })
    $("#button2").on("click",()=>{MidlevelPackage
        window.location.href = 'MidlevelPackage.html';
        // localStorage.setItem("packageName",JSON.stringify("mid"))
    })
    $("#button3").on("click",()=>{
        window.location.href = 'Luxury.html';
        // localStorage.setItem("packageName",JSON.stringify("luxury"))
    })
    $("#button4").on("click",()=>{
        window.location.href = 'SuperLuxuryPackage.html';
        // localStorage.setItem("packageName",JSON.stringify("superLux"))
    })

    }
})

$("#button1").on("click",()=>{
    window.location.href = 'regular.html';
    // localStorage.setItem("packageName",JSON.stringify("regular.html"))
})
$("#button2").on("click",()=>{
    window.location.href = 'MidlevelPackage.html';
    // localStorage.setItem("packageName",JSON.stringify("mid"))
})
$("#button3").on("click",()=>{
    window.location.href = 'Luxury.html';
    // localStorage.setItem("packageName",JSON.stringify("luxury"))
})
$("#button4").on("click",()=>{
    window.location.href = 'SuperLuxuryPackage.html';
    // localStorage.setItem("packageName",JSON.stringify("superLux"))
})