Feature:
  Verify random fact endpoint is working

  Scenario: Verify endpoint is returning one random fact
    When User calls random endpoint with no parameters
	Then response code should be 200
    And response should return one cat fact

  Scenario: Verify endpoint is returning desired number of facts
    When User calls random endpoint with amount parameter set to "2"
	Then response code should be 200
    And response should return 2 facts
	
  Scenario: Verify endpoint is returning correct animal facts
    When User calls random endpoint with 3 and "dog" parameters
	Then response code should be 200
    And response should return 3 facts for "dog"
	
  Scenario: Verify no facts are returned
    When User calls random endpoint with 0 amount parameters
	Then response code should be 200
    And response should return not facts
	
  Scenario: Verify no facts are returned for invalid parameters
    When User calls random endpoint with -1 and "test" parameters
	Then response code should be 200
    And response should return not facts