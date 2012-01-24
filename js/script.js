// Fisher-Yates Shuffle - O(n) complexity in place array shuffle.
function shuffle(arr) {
  var len = arr.length;
  var t;
  for (var i = len - 1, j; i > 0; i--) {
    j = Math.floor(Math.random() * i);
    t = arr[j];
    arr[j] = arr[i];
    arr[i] = t;
  }
}

function viewModel() {
  this.numWords = ko.observable(5);
  this.passphrase = ko.observable("");

  this.entropy = ko.computed(function() {
    return this.numWords() * 13;
  }, this);

  this.generatePassphrase = function() {
    var words = [];
    for (var i = 0; i < this.numWords(); i++) {
      words[i] = dicewords8k[Math.floor(Math.random()*8192)];
    }
    this.passphrase(words.join(' '));
  };
}

$(document).ready(function () {
  ko.applyBindings(new viewModel());
  shuffle(dicewords8k);
});
