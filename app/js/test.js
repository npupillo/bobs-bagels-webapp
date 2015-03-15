describe('Namespace', function () {
     it("provides the 'Router' object", function () {
       // Expect exists and is an object.
       expect(Router).to.be.an("object");
       // Expect all namespace properties are present.
       expect(Router).to.include.keys(
         "Config", "Collections", "Models",
         "Routers", "Templates", "Views"
       );
});
     it("provides the 'Router' object", function () {
       expect(Router).to.be.an("object");
}); });







// describe("Test timing", function () {
//      it("should be a fast test", function (done) {
//        expect("hi").to.equal("hi");
// done(); });
//      it("should be a medium test", function (done) {
//  setTimeout(function () {
//       expect("hi").to.equal("hi");
//       done();
// }, 40); });
//   it("should be a slow test", function (done) {
//     setTimeout(function () {
//       expect("hi").to.equal("hi");
//       done();
//     }, 100);
// });
//   it("should be a timeout failure", function (done) {
//     setTimeout(function () {
//       expect("hi").to.equal("hi");
//       done();
//     }, 2001);
// }); });
