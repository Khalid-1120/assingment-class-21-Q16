"use strict";
let guestList = ["khalid", "shahid", "zeb"];
guestList.unshift("hameed");
guestList.splice(Math.floor(guestList.length / 2), 0, "azhar");
guestList.push("qadeer");
guestList.forEach(guest => {
    console.log(`Dear ${guest} , you are invited for the dinner from depth of my heart.`);
});
