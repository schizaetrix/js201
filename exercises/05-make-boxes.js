// Write a function "makeSquare" which is given a size and returns a square of
// that size using asterisks.
// Example:
// makeSquare(5)
// *****
// *****
// *****
// *****
// *****

function makeSquare (size) {

    var asterisks = "*";
    var asterisksMult = asterisks.repeat(size) + '\n';
    var asterisksSquared = asterisksMult.repeat(size);

    return asterisksSquared.substring(0, asterisksSquared.length - 1);

}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "makeBox" which is given a width and height and returns a
// hollow box of those dimensions.
// Example:
// makeBox(6, 4)
// ******
// *    *
// *    *
// ******

function makeBox (width, height) {

    var asterisks = "*";
    var finalBox = "";
    var lineTop = asterisks.repeat(width) + '\n';
    var lineMiddle = "";
    var lineBottom = asterisks.repeat(width);

    function noAsterisks () {
        if (height >= 3  && width >= 3) {
          lineMiddle = lineMiddle + "*" + ( " ".repeat(width - 2) ) + "*" + '\n';
        }
    }

    function ifHeiWid () {
        if (height === 1) {
          finalBox = finalBox + lineBottom;
        } else if (height === 2) {
          finalBox = finalBox + lineTop + lineBottom;
        } else if (width === 1 || width === 2) {
          finalBox = finalBox + ( lineTop.repeat(height - 1) ) + lineBottom;
        } else {
          finalBox = finalBox + lineTop + ( lineMiddle.repeat(height - 2) ) + lineBottom;
        }
    }

    noAsterisks();
    ifHeiWid();
    return finalBox;

}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "makeBanner" which is given some text and returns a banner
// with a border surrounding the text. The border should stretch to the length
// of the text.
// Example:
// makeBanner('Welcome to DigitalCrafts')
// ****************************
// * Welcome to DigitalCrafts *
// ****************************

function makeBanner () {

}