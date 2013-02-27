describe("phantom suite", function() {

  /**
    Phantom Quick Start Guide:
    https://github.com/ariya/phantomjs/wiki/Quick-Start
  */
  
  var browser, server;
  
  before( function( done ) {
    // get our borwser and server up and running
    phantom.create( function( ph ) {
      ph.createPage( function( page ) {
        browser = page;
        server = app;
        server.listen(3000, function () {
          done();    
        });         
      })
    })
      
  });
    
 
  it("testing with the help of phantom", function(done) {
    
    browser.open("http://localhost:3000", function(status){
        status.should.be.eql("success");
        done();
    })
    
  });
  
});
