describe("Form", function() {
  var form;

  beforeEach(function() {
    form = new Form();
  });

  it("Should have an User", function() {
    expect(form.user).toBeDefined();
  });
  
  it("Should have an Email", function() {
    expect(form.email).toBeDefined();
  });  
});
