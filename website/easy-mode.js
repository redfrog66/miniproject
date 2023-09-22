
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
            document.getElementById("my_btn").disabled = true;
            document.getElementById("scorescreen").style.visibility="visible";      //játék vége
        }
    }
}
function convert() {
           
    // Sample JSON data
    let jsonData = [
       {
          name: "Saurabh",
          age: "20",
          city: "Prayagraj"
       },
       {
          name: "Vipin",
          age: 23,
          city: "Lucknow",
       },
       {
          name: "Saksham",
          age: 21,
          city: "Noida"
       }
    ];
    
    // Get the container element where the table will be inserted
    let container = document.getElementById("container");
    
    // Create the table element
    let table = document.createElement("table");
    
    // Get the keys (column names) of the first object in the JSON data
    let cols = Object.keys(jsonData[0]);
    
    // Create the header element
    let thead = document.createElement("thead");
    let tr = document.createElement("tr");
    
    // Loop through the column names and create header cells
    cols.forEach((item) => {
       let th = document.createElement("th");
       th.innerText = item; // Set the column name as the text of the header cell
       tr.appendChild(th); // Append the header cell to the header row
    });
    thead.appendChild(tr); // Append the header row to the header
    table.append(tr) // Append the header to the table
    
    // Loop through the JSON data and create table rows
    jsonData.forEach((item) => {
       let tr = document.createElement("tr");
       
       // Get the values of the current object in the JSON data
       let vals = Object.values(item);
       
       // Loop through the values and create table cells
       vals.forEach((elem) => {
          let td = document.createElement("td");
          td.innerText = elem; // Set the value as the text of the table cell
          tr.appendChild(td); // Append the table cell to the table row
       });
       table.appendChild(tr); // Append the table row to the table
    });
    container.appendChild(table) // Append the table to the container element
 }
