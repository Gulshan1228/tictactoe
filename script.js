let boxs = document.querySelectorAll(".box")
let btns = document.querySelectorAll(".btn")
let body = document.querySelector("body")
let player1 = true
let Winnner = document.querySelector(".winner")

boxs.forEach ((box) => {
    box.addEventListener("click", () =>{
        if(player1 == true){
            box.innerHTML="O"
            player1=false
            box.setAttribute("id","red-color")              // Id have more priority than class 
        } else {
            box.innerHTML="X"
            player1=true
            box.setAttribute("id","santra-color")           // Id have more priority than class
        }
        box.disabled = true
        checkWinner();
    })
})

//DRAW Match
let count = 0
boxs.forEach((box) => {
    box.addEventListener("click" , () => {
        if(box.innerText != '' && Winnner.innerHTML == '' ){
            count++
            if(count == 9){
                Winnner.innerHTML="Match Draw , Click on Play Again"
                body.style.height="115vh"
            }
        }
        // console.log(count)
        let dis = 0
        if( Winnner.innerHTML != "" ){
            dis++
        }
        for(let i of boxs){
            if(dis !=0 ){
                i.disabled=true;
            }
        }
    })
})




let checkWinner=() => {
    if( boxs[0].innerHTML!='' && boxs[1].innerHTML!='' && boxs[2].innerHTML!='' ){
        if( boxs[0].innerHTML === boxs[1].innerHTML && boxs[2].innerHTML == boxs[0].innerHTML){
            console.log(` ${boxs[0].innerHTML} is The Winnner `)
            Winnner.innerHTML=`Congratulations , ${boxs[0].innerHTML} is Winner`
            body.style.height="115vh"
            boxs.disabled=true
        }
    }

    if ( boxs[3].innerHTML!='' && boxs[4].innerHTML!='' && boxs[5].innerHTML!='' ){
        if( boxs[3].innerHTML === boxs[4].innerHTML && boxs[5].innerHTML == boxs[3].innerHTML){
            console.log(` ${boxs[3].innerHTML} is The Winnner `)
            Winnner.innerHTML=`Congratulations , ${boxs[3].innerHTML} is Winner`
            body.style.height="115vh"
            boxs.disabled=true
        }
    } 

    if ( boxs[6].innerHTML!='' && boxs[7].innerHTML!='' && boxs[8].innerHTML!='' ){
        if( boxs[6].innerHTML === boxs[7].innerHTML && boxs[8].innerHTML == boxs[6].innerHTML){
            console.log(` ${boxs[6].innerHTML} is The Winnner `)
            Winnner.innerHTML=`Congratulations , ${boxs[6].innerHTML} is Winner`
            body.style.height="115vh"
            boxs.disabled=true
        }
    }

    if ( boxs[0].innerHTML!='' && boxs[3].innerHTML!='' && boxs[6].innerHTML!='' ){
        if( boxs[0].innerHTML === boxs[3].innerHTML && boxs[6].innerHTML == boxs[0].innerHTML){
            console.log(` ${boxs[3].innerHTML} is The Winnner `)
            Winnner.innerHTML=`Congratulations , ${boxs[3].innerHTML} is Winner`
            body.style.height="115vh"
            boxs.disabled=true
        }
    }

    if ( boxs[1].innerHTML!='' && boxs[4].innerHTML!='' && boxs[7].innerHTML!='' ){
        if( boxs[1].innerHTML === boxs[4].innerHTML && boxs[7].innerHTML == boxs[1].innerHTML){
            console.log(` ${boxs[4].innerHTML} is The Winnner `)
            Winnner.innerHTML=`Congratulations , ${boxs[4].innerHTML} is Winner`
            body.style.height="115vh"
            boxs.disabled=true
        }
    }
    
    if ( boxs[2].innerHTML!='' && boxs[5].innerHTML!='' && boxs[8].innerHTML!='' ){
        if( boxs[2].innerHTML === boxs[5].innerHTML && boxs[8].innerHTML == boxs[2].innerHTML){
            console.log(` ${boxs[2].innerHTML} is The Winnner `)
            Winnner.innerHTML=`Congratulations , ${boxs[2].innerHTML} is Winner`
            body.style.height="115vh"
            boxs.disabled=true
        }
    }
     if ( boxs[2].innerHTML!='' && boxs[4].innerHTML!='' && boxs[6].innerHTML!='' ){
        if( boxs[2].innerHTML === boxs[4].innerHTML && boxs[6].innerHTML == boxs[2].innerHTML){
            console.log(` ${boxs[2].innerHTML} is The Winnner `)
            Winnner.innerHTML=`Congratulations , ${boxs[2].innerHTML} is Winner`
            body.style.height="115vh"
            boxs.disabled=true

        }
    }
    if ( boxs[0].innerHTML!='' && boxs[4].innerHTML!='' && boxs[8].innerHTML!='' ){
        if( boxs[0].innerHTML === boxs[4].innerHTML && boxs[8].innerHTML == boxs[0].innerHTML){
            console.log(` ${boxs[4].innerHTML} is The Winnner `)
            Winnner.innerHTML=`Congratulations , ${boxs[4].innerHTML} is Winner`
            body.style.height="115vh"
            boxs.disabled=true
        }
    }

    Winnner.classList.remove('hide')
} 




// for buttons

let reset= document.querySelector("#reset")
let restart= document.querySelector("#restart")

reset.addEventListener( "click" , () => {
    for (let i of boxs){
        i.innerHTML='';
        i.disabled=false;
        player1=true
        Winnner.innerHTML=''
        count=0;
    }
})
restart.addEventListener( "click" , () => {
    for (let i of boxs){
        i.innerHTML='';
        player1=true
        i.disabled=false;
        Winnner.innerHTML=''
        count=0;
    }
})



// x and o different color
