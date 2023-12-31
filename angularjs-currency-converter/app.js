// app.js
var app = angular.module('currencyConverterApp', []);

app.controller('CurrencyConverterController', function($scope) {
    $scope.amount = 0;
    $scope.fromCurrency = '';
    $scope.toCurrency = '';
    $scope.result = 0;

    $scope.currencyList = ['USD', 'GBP', 'INR']; 

    $scope.convert = function() {
        // Simple currency conversion logic 
        var conversionRates = {
            'USD': 1,    // 1 USD to USD (base currency)
            'GBP': 0.74, // 1 USD to GBP
            'INR': 75.6  // 1 USD to INR
        };

        var convertedAmount = ($scope.amount * conversionRates[$scope.fromCurrency]) / conversionRates[$scope.toCurrency];
        $scope.result = convertedAmount.toFixed(2);
    };
});
