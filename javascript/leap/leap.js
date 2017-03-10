//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.


var Year = function(input) {
  console.log(input, "input")
  yearNumber: input
};

Year.prototype.isLeap = function(yearNumber) {
  var divisbleBy4AndEven = (yearNumber / 4) % 2 === 0;
  var divisbleBy100AndEven = (yearNumber / 100) % 2 === 0;
  var divisbleBy400AndEven = (yearNumber / 400) % 2 === 0;
  console.log(divisbleBy4AndEven);
  console.log(divisbleBy100AndEven);
  console.log(divisbleBy400AndEven);
  console.log(".......TEST.............");

  if (divisbleBy4AndEven) {
    if (divisbleBy100AndEven) {
      if (divisbleBy400AndEven) {
        return true;
      }
      return false;
    }
    return true;
  }
  return false;
};

module.exports = Year;
