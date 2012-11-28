buster.testCase "hoge",
  "test hogehoge" : ->
    ###:DOC += <div id="hogehoge">aaaa</div> ####
    console.log document.body.innerHTML
    assert(document.getElementById('hogehoge').innerHTML == "aaaa")
    console.log document.getElementById('hogehoge').innerHTML
    return
