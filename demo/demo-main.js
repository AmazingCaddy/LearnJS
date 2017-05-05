var componentName = "OpportunitiesTile";

var div = $("<link href='Core/SharedComponents/" + componentName + "/style.css' rel='stylesheet'>");
$("head").append(div);

require.config({
    baseUrl: '.',
    paths: requireConfigPaths,
    packages: requireConfigPackages
});

require(["Core/Utils/AvoidRedundantLibLoading", "Core/SharedComponents/" + componentName + "/demo/index.js"], function () {

});