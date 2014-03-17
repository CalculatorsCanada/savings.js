/*!
 * cc-savings.js v0.1.0
 * Copyright 2014, Calculators Canada
 *
 * Freely distributable under the MIT license.
 *
 * For suggestions and any issues please contact us at:
 * http://calculatorscanada.ca/contact
 */

var ccSavings = ccSavings || (function () {
    // private members

    return {

        Interest: function (deposit, rate, years, m) {
            var _simple, _compound;
            // m - number of times the interest is compounded per year
            _simple = deposit * rate / 100 * years;
            _compound = deposit * Math.pow(1 + rate / 100 / m, years* m) - deposit;

            this.simple = _simple;
            this.compound = _compound;
        }

    };
}());