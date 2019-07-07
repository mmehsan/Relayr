# Relayr
I have used "GET /facts/random" endpoint from https://alexwohlbruck.github.io/cat-facts/docs/ for this test maven project. This api returns animal facts for the provided 'amount' and 'animal_type' parameters. The default value for 'amount' is 0 and for 'animal_type' is "cat". Total of five test cases are written in cucumber format and automated using RestAssured, Java, TestNG framework and Cucumber. Please execute command "mvn install" to load all dependencies and then execute "mvn test" to execute all scenarios in feature file.

For sub task 1 test cases are available in "Test/Java/feature/RandomFact.feature"

FILES:

Test/Java/Data/Model/Fact:  Model class for fact oject being returned by API

Test/Java/feature/RandomFact: Feature file containg test scenarios for mentioned endpoint

Test/Java/Runner/TestRunner:  Test runner class for cucumber

Test/Java/Steps/randomFacts:  Step definition class for feature file(s)
