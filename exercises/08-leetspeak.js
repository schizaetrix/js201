// Write a function "leetspeak" which is given a string, and returns the
// leetspeak equivalent of the string.
// To convert text to its leetspeak version, make the following substitutions:
// A => 4
// E => 3
// G => 6
// I => 1
// O => 0
// S => 5
// T => 7
//
// Example:
// leetspeak('Leet') --> "l337"

function leetspeak (string) {
    var startstring = string.toUpperCase();
    var leetstring = "";

    if (startstring.search("A") != -1) {
        startstring.replace("A","4")
    } else {}
}