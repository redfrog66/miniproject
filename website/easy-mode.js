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
