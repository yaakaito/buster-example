buster.testCase("hoge", {
  "test hogehoge": function() {
    /*:DOC += <div id="hogehoge">aaaa</div>
    */
    assert(document.getElementById('hogehoge').innerHTML === "aaaa");
    console.log(document.getElementById('hogehoge').innerHTML);
  }
});
