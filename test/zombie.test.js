/**
  Zombie.js
  Insanely fast, headless full-stack testing using Node.js
  http://zombie.labnotes.org/
*/

describe("zombie suite", function() {

  var server;
  
  before( function() {
    
    server = app;
    server.listen(4000, function () {
      
    });
  });
  
  it("testing with the help of zombie", function(done) {
    
    Browser.visit('http://localhost:4000', function(err, browser) {
        browser.success.should.be.true;
        browser.text("title").should.eql('Hello world');
        browser
          .fill("email", "test@exmple.com")
          .pressButton("Save", function() {
            // Form submitted, new page loaded.
            browser.success.should.be.true;
            done();
          })
    });
  
  });
});
