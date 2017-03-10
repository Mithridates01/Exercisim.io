// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.


var Year = function(input) {
  this.yearNumber= input;
};

Year.prototype.isLeap = function() {
  var divisbleBy4AndEven = (this.yearNumber / 4) % 2 === 0;
  var divisbleBy100AndEven = (this.yearNumber / 100) % 2 === 0;
  var divisbleBy400AndEven = (this.yearNumber / 400) % 1 === 0;

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
