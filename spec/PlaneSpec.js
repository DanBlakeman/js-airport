describe("plane", function() {

  beforeEach(function() {
    plane = new Plane();
  });

  it ("is flying when created", function(){
    expect(plane.isFlying()).toEqual(true);
  });

  it ("can land", function() {
    plane.land()
    expect(plane.isFlying()).toEqual(false);
  });

  it ("can takeoff", function() {
    plane.land();
    plane.takeoff();
    expect(plane.isFlying()).toEqual(true);
  });

});