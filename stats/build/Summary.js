'use strict';
exports.__esModule = true;
exports.Summary = void 0;
var WInsAnalysis_1 = require('../src/analyzers/WInsAnalysis');
var HtmlReport_1 = require('../src/reportTargets/HtmlReport');
var Summary = /** @class */ (function() {
  function Summary(analyzer, outputTarget) {
    this.analyzer = analyzer;
    this.outputTarget = outputTarget;
  }
  Summary.winsAnalysisWithHtmlReport = function(team) {
    return new Summary(
      new WInsAnalysis_1.WinsAnalysis(team),
      new HtmlReport_1.HtmlReport()
    );
  };
  Summary.prototype.buildAndPrintReport = function(matches) {
    var output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  };
  return Summary;
})();
exports.Summary = Summary;
