
// KÖNNYŰ JÁTÉK
// 3 üzenet(nagyobb vagy kisebb, tippek száma, korábbi tippek)
var msg1 = document.getElementById("message1");
var msg2 = document.getElementById("message2");
var msg3 = document.getElementById("message3");

// véletlen szám generálása 1 és 10/50/100 között
let max;
difficulty=localStorage.getItem("localDiff");
switch(difficulty){
    case 'easy':
        var answer = Math.floor(Math.random()*10) + 1;
        console.log(answer);
        document.getElementById("between").innerHTML="Gondoltam egy számra 1 és 10 között, ki tudod találni?";
        max=10;
        break;
    case 'medium':
        var answer = Math.floor(Math.random()*50) + 1;
        console.log(answer);
        document.getElementById("between").innerHTML="Gondoltam egy számra 1 és 50 között, ki tudod találni?";
        max=50;
        break;
    case 'hard':
        var answer = Math.floor(Math.random()*100) + 1;
        console.log(answer);
        document.getElementById("between").innerHTML="Gondoltam egy számra 1 és 100 között, ki tudod találni?";
        max=100;
        break;
    
}



//tippek és tippek számának tárolása
var guessed_nums = [];
var no_of_guesses = 0;

//maga a játékmenet
function play(){
    var user_guess = document.getElementById("guess").value;            //játékos tippjének beolvasása
    if(user_guess < 1 || user_guess > max){                             //játékos figyelmeztetése, ha az adott intervallumon kívül tippel
        alert("Kérlek 1-től "+max+"-ig tippelj.");
    }
    else{
        guessed_nums.push(user_guess);
        no_of_guesses+= 1;                           

        if(user_guess < answer){                                        //játékos informálása alacsony tippről
            msg1.textContent = "Túl alacsony.";
            msg2.textContent = "Tippek száma: " + no_of_guesses;
            msg3.textContent = "Korábban tippelt számok " +
            guessed_nums;
        }
       else if(user_guess > answer){                                   //játékos informálása magas tippről
            msg1.textContent = "Túl magas.";
            msg2.textContent = "Tippek száma: " + no_of_guesses;
            msg3.textContent = "Korábban tippelt számok " +
            guessed_nums;
        }
       else if(user_guess == answer){                                  //játékos informálása megfelelő tippről, 
            msg1.textContent = "Nyertél!";
            msg2.textContent = "A szám " + answer + " volt.";
            msg3.textContent =  no_of_guesses + " tipp által találtad ki.";
            localStorage.setItem("localGuess", no_of_guesses);
            document.getElementById("my_btn").disabled = true;
            document.getElementById("scorescreen").style.visibility="visible";
            
            //játék vége
        }
    }
}

function give_up() {
    document.getElementById("my_btn").disabled = true;
    msg1.textContent = "A helyes szám " + answer + " volt.";
    msg2.textContent = " ";
    msg3.textContent = " ";
    document.getElementById("playagain").style.visibility="visible"; 
}


