$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/RandomFact.feature");
formatter.feature({
  "name": "",
  "description": "  Verify random fact endpoint is working",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify endpoint is returning one random fact",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User calls random endpoint with no parameters",
  "keyword": "When "
});
formatter.match({
  "location": "randomFacts.noParamsCall()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "randomFacts.responseCode()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response should return one cat fact",
  "keyword": "And "
});
formatter.match({
  "location": "randomFacts.verifyOneFact()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify endpoint is returning desired number of facts",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User calls random endpoint with amount parameter set to \"2\"",
  "keyword": "When "
});
formatter.match({
  "location": "randomFacts.userCallsAmdinLoginWithGUID(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "randomFacts.responseCode()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response should return 2 facts",
  "keyword": "And "
});
formatter.match({
  "location": "randomFacts.responseShouldReturnFacts(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify endpoint is returning correct animal facts",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User calls random endpoint with 3 and \"dog\" parameters",
  "keyword": "When "
});
formatter.match({
  "location": "randomFacts.userCallsRandomEndpointWithAndParameters(int,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "randomFacts.responseCode()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response should return 3 facts for \"dog\"",
  "keyword": "And "
});
formatter.match({
  "location": "randomFacts.responseShouldReturnFactsFor(int,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify no facts are returned",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User calls random endpoint with 0 amount parameters",
  "keyword": "When "
});
formatter.match({
  "location": "randomFacts.userCallsRandomEndpointWithAmountParameters(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "randomFacts.responseCode()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response should return not facts",
  "keyword": "And "
});
formatter.match({
  "location": "randomFacts.responseShouldReturnNotFacts()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify no facts are returned for invalid parameters",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User calls random endpoint with -1 and \"test\" parameters",
  "keyword": "When "
});
formatter.match({
  "location": "randomFacts.userCallsRandomEndpointWithAndParameters(int,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "randomFacts.responseCode()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response should return not facts",
  "keyword": "And "
});
formatter.match({
  "location": "randomFacts.responseShouldReturnNotFacts()"
});
formatter.result({
  "status": "passed"
});
});