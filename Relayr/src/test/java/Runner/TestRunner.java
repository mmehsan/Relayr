package Runner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(features = {"src/test/java/features"}, glue = "steps",
        plugin = { "pretty", "html:target/cucumber-html-reports",
                "json:target/cucumber-html-reports/cucumber.json","rerun:target/failed_scenarios.txt" }, monochrome = true
)
public class TestRunner extends AbstractTestNGCucumberTests {
}
