require 'test_helper'

class CurrenciesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get currencies_index_url
    assert_response :success
  end

  test "should get search" do
    get currencies_search_url
    assert_response :success
  end

  test "should get calculate" do
    get currencies_calculate_url
    assert_response :success
  end

end
