function viewModel() {
  this.numWords = ko.observable(5);
  this.passphrase = ko.observable("");

  this.entropy = ko.computed(function() {
    return this.numWords() * 13;
  }, this);

  this.generatePassphrase = function() {
    var numInts = this.numWords();
    var words = [];
    $('#random').attr('src', 'https://www.random.org/integers/?num=' + numInts
      + '&min=0&max=8191&col=' + numInts + '&format=plain&rnd=new&base=10');
    //for (var i = 0; i < numInts; i++) {
    //  words[i] = dicewords8k[rnd];
    //}
    //this.passphrase(data);
  };
}

ko.applyBindings(new viewModel());

