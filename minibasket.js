/**
 * Created by Rolf Richter on 26.03.14.
 */
(function (window, document) {
    window.MINIBASKET = window.XAJAX || {};

    var serverCache = {},
        Basket = function (container, language, countryCode) {

            initialize(container, language, countryCode);

            function initialize(container, language, countryCode) {

                var url = '/' + language + '/' + countryCode + '/Ajax/Basket/refreshBasket/';
                new Ajax.Request(url, {
                    method: 'get',
                    onSuccess: function(response) {
                        var basket = response.responseText.evalJSON();

                        if (container.getElementsByClassName('count'))
                            container.getElementsByClassName('count')[0].innerHTML = basket.count;

                        if (container.getElementsByClassName('price'))
                            container.getElementsByClassName('price')[0].innerHTML = basket.price;
                    }
                });
            }


            // Public methods
            publicMethods = {

                foo: function (param, callback) {
                    return true
                }
            };

            return publicMethods;
        };

    /**
     *
     * @param container
     * @param language
     * @param countryCode
     * @returns {Basket}
     */
    MINIBASKET.create = function (container, language, countryCode) {

        var instance;

        instance = new Basket(container, language, countryCode);

        return instance;
    }

})(window, document);