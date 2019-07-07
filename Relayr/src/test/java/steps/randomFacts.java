package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import org.testng.Assert;


import static Data.UrlConstantUtils.BASE_URL;
import Data.Model.Fact;
import static io.restassured.RestAssured.given;

public class randomFacts {

  private Response factResponse;
  private JsonPath jsonResponse;
  private int amount;
  private String animal;

  @When("User calls random endpoint with no parameters")
  public void noParamsCall() {

    String API_URL = "/facts/random";
    factResponse =
            given().contentType(ContentType.JSON).when().get(BASE_URL + API_URL);
  }

  @Then("response code should be 200")
  public void responseCode() {
    factResponse.then().assertThat().statusCode(200);
  }

  @And("response should return one cat fact")
  public void verifyOneFact() {

    jsonResponse = factResponse.jsonPath();
    String type = jsonResponse.get("type");
    Assert.assertEquals(type,"cat");
  }

  @When("User calls random endpoint with amount parameter set to \"([^\"]*)\"$")
  public void userCallsAmdinLoginWithGUID(int arg0) {
    amount = arg0;
    String API_URL = "/facts/random?amount=";
    factResponse =
            given().contentType(ContentType.JSON).when().get( BASE_URL + API_URL + amount);
  }

  @And("response should return {int} facts")
  public void responseShouldReturnFacts(int arg0) {
    jsonResponse = factResponse.jsonPath();
    Fact[] facts = factResponse.as(Fact[].class);
    Assert.assertEquals(facts.length,arg0);
  }

  @When("User calls random endpoint with {int} and {string} parameters")
  public void userCallsRandomEndpointWithAndParameters(int arg0, String arg1) {
    amount = arg0;
    animal = arg1;
    String API_URL = "/facts/random?amount=";
    factResponse =
            given().contentType(ContentType.JSON).when().get( BASE_URL + API_URL + amount +
            "&animal_type=" + animal);
  }

  @And("response should return {int} facts for {string}")
  public void responseShouldReturnFactsFor(int arg0, String arg1) {
    jsonResponse = factResponse.jsonPath();
    Fact[] facts = factResponse.as(Fact[].class);
    Assert.assertEquals(facts.length,arg0);
    for(int i=0; i<facts.length; i++){
      Assert.assertEquals(facts[i].getType(),arg1);
    }
  }

  @When("User calls random endpoint with {int} amount parameters")
  public void userCallsRandomEndpointWithAmountParameters(int arg0) {
    amount = arg0;
    String API_URL = "/facts/random?amount=";
    factResponse =
            given().contentType(ContentType.JSON).when().get( BASE_URL + API_URL + amount);
  }

  @And("response should return not facts")
  public void responseShouldReturnNotFacts() {
    jsonResponse = factResponse.jsonPath();
    String response = jsonResponse.get("_id").toString();
    Assert.assertEquals(response,"[]");
    }

}
