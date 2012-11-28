var runner = module.exports;

runner["browser test"] = {
  env : "browser",
  sources : [
    "lib/test_object.js"
  ],
  tests : [
//    "tests/test_object_tests.js",
//    "tests/test_object_spec.js",
    "tests/test_object_spec.coffee"

  ],
  extensions: [require("buster-jstestdriver"),require("buster-coffee")]
}
