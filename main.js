"use strict";
// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
let mountains = [
    "Mount Everest",
    "K2",
    "Cho Oyo",
    "Kangchenjunga",
    "Lhotse",
    "Makalu",
    "Dhaulagiri",
    "Manaslu",
    "Nanga parbat",
    "Annapurna"
];
console.log("List of famous mountains:");
mountains.forEach((mountain, index) => {
    console.log(`${index + 1}. ${mountain}`);
});
