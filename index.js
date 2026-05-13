"use strict";
// 1. Add Types to a Function
function fullName(first, last) {
    return first + " " + last;
}
console.log(fullName("Zakir", "Ali"));
// 2. Optional and Default Parameters
function registerUser(username, isAdmin, language = "en") {
    console.log("Username:", username);
    console.log("Admin:", isAdmin);
    console.log("Language:", language);
}
registerUser("zakir");
registerUser("ali", true);
registerUser("fatima", false, "so");
// 3. Safe Rest Function
function average(...scores) {
    let total = 0;
    for (let score of scores) {
        total += score;
    }
    return total / scores.length;
}
console.log(average(80, 90, 100));
console.log(average(70, 85));
