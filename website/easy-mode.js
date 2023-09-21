// KÖNNYŰ JÁTÉK
// 3 üzenet(nagyobb vagy kisebb, tippek száma, korábbi tippek)
var msg1 = document.getElementById("message1");
var msg2 = document.getElementById("message2");
var msg3 = document.getElementById("message3");

// véletlen szám generálása 1 és 10 között
var answer = Math.floor(Math.random()*10) + 1;
//tippek és tippek számának tárolása
var guessed_nums = [];
var no_of_guesses = 0;

//maga a játékmenet
function play(){
    var user_guess = document.getElementById("guess").value;            //játékos tippjének beolvasása
    if(user_guess < 1 || user_guess > 10){                             //játékos figyelmeztetése, ha az adott intervallumon kívül tippel
        alert("Kérlek 1-től 10-ig tippelj.");
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
            document.getElementById("my_btn").disabled = true;          //játék vége
        }
    }
}
