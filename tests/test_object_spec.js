buster.spec.expose();

describe("A test_object module", function () {
    it("dom", function () {
        var p = document.createElement("p")
        test_object.dom(p);
        expect(p.innerHTML).toEqual("Buster.JS");
    });
});
