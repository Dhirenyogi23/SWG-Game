console.log("the javascript code is running.");

let user = prompt("enter S, W or G ");
let cpuR = Math.floor(Math.random() * 3);
let cpu = ["S", "W", "G"][cpuR];


const match = (cpu, user)=>{

    if(cpu === user){
        return "Match is Tie";
    }

    else if(cpu==="S" && user==="W"){
        return "Computer";
    }

    else if(cpu==="S" && user==="G"){
        return "You";
    }
    
    else if(cpu==="G" && user==="W"){
        return "You";
    }
    else if(cpu==="G" && user==="S"){
        return "Computer";
    }

    else if(cpu==="W" && user==="S"){
        return "You"
    }

    else if(cpu==="W" && user==="G"){
        return "Computer";
    }
}

let result = match(cpu, user);
console.log(`CPU : ${cpu} \n USER : ${user} \n The winner is: ${result}`);
document.write(` USER : <b> ${user}</b> <br> CPU : <b> ${cpu}</b>  <br> <br>  <b> The winner is: ${result.toUpperCase()} </b>`);