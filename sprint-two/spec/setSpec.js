describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a("function");
    expect(set.contains).to.be.a("function");
    expect(set.remove).to.be.a("function");
  });

  it('should add values to a set', function(){
    set.add("Susan Sarandon");
    set.add("Danny Glover");
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function(){
    set.add("Mel Gibson");
    //added additional test to deal with false positives
    expect(set.contains("Mel Gibson")).to.equal(true);
    set.remove("Mel Gibson");
    expect(set.contains("Mel Gibson")).to.equal(false);
  });



  it('should add numbers to the set', function(){
    set.add(1);
    set.add(2);
    expect(set.contains(1)).to.equal(true);
    expect(set.contains(2)).to.equal(true);
  });

  it('should add objects to the set', function(){
    var obj = {a:2};
    var arr = ["aj", ["ben"]];
    set.add(obj);
    set.add(arr);
    expect(set.contains(obj)).to.equal(true);
    expect(set.contains(arr)).to.equal(true);

  });

});