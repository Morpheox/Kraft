/*jslint */
/*global module: true, exports: true, require: false, define: false */

/**
 * jaaulde-jquery-cookies.js
 *
 * Copyright (c) 2005-2015, Jim Auldridge MIT License
 *
 */

/**
 *
 * @param {object} scope - a reference to the call scope
 * @param {undefined} undef - an undefined variable for comparison checks
 * @returns {void}
 */
(function (scope, undef) {
    'use strict';

   /**
    * IIFE for injecting jquery-cookies module into jQuery via whichever require/scope is in use
    *
    * @param {function} definition - function which produces the plugin methods and adds them to the injected jQuery's prototype
    * @returns {void}
    */
    (function (definition) {
        if (typeof module === 'object' && module !== null && module.exports) {
            module.exports = exports = definition(require('jquery'), require('cookies'));
        } else if (typeof define === 'function' && define.amd) {
            define(['jquery', 'cookies'], definition);
        } else {
            definition(scope.jQuery, scope.cookies);
        }
    }(function ($, cookies) {
        var NameTokenIterator,
            nti;

        NameTokenIterator = function () {
            this.rewind();
        };

        NameTokenIterator.prototype = {
            next: function () {
                this.current = this.name_token_attrs.shift();

                return this.current !== undef;
            },
            rewind: function () {
                this.current = undef;

                this.name_token_attrs = [
                    'name',
                    'id'
                ];
            }
        };

        nti = new NameTokenIterator();

        /*
         * Alias `cookies` as `$.cookies`
         */
        $.cookies = cookies;

        /*
         * Extend the jQuery prototype with our new plugin methods
         */
        $.extend($.fn, {
            /**
             * $('selector').cookify - set the value of an input field, or the innerHTML of an element, to a cookie by the name or id of the field or element
             *                           (field or element MUST have name or id attribute)
             *
             * @access public
             * @param options OBJECT - list of cookie options to specify
             * @see https://github.com/JAAulde/cookies#cookie-options
             * @return jQuery
             */
            cookify: function (options) {
                return this
                    /*
                     * Iterate radio and checkbox inputs
                     * `cookify` not yet implemented for radios and checkboxes
                     */
                    .filter(':radio, :checkbox').each($.noop)
                    .end()
                    /*
                     * Iterate all other elements
                     */
                    .not(':radio, :checkbox').each(function () {
                        var $this,
                            name_token_value,
                            value;

                        $this = $(this);

                        nti.rewind();

                        while (nti.next()) {
                            name_token_value = $this.attr(nti.current);

                            if (typeof name_token_value === 'string' && name_token_value !== '') {
                                value = $this.is(':input') ? $this.val() : $this.html();

                                cookies.set(
                                    name_token_value,
                                    (typeof value === 'string' && value !== '') ? value : null,
                                    options
                                );

                                break;
                            }
                        }
                    })
                    .end();
            },
            /**
             * $('selector').cookieFill - set the value of an input field or the innerHTML of an element from a cookie by the name or id of the field or element
             *
             * @access public
             * @return jQuery
             */
            cookieFill: function () {
                return this
                    /*
                     * Iterate radio and checkbox inputs
                     * `cookieFill` not yet implemented for radios and checkboxes
                     */
                    .filter(':radio, :checkbox').each($.noop)
                    .end()
                    /*
                     * Iterate all other elements
                     */
                    .not(':radio, :checkbox').each(function () {
                        var $this,
                            name_token_value,
                            value;

                        $this = $(this);

                        nti.rewind();

                        while (nti.next()) {
                            name_token_value = $this.attr(nti.current);

                            if (typeof name_token_value === 'string' && name_token_value !== '') {
                                value = cookies.get(name_token_value);

                                if (value !== null) {
                                    if ($this.is(':input')) {
                                        $this.val(value);
                                    } else {
                                        $this.html(value);
                                    }
                                }

                                break;
                            }
                        }
                    })
                    .end();
            },
            /**
             * $('selector').cookieBind - call cookieFill() on matching input elements, and bind their change events to cookify()
             *
             * @access public
             * @param options OBJECT - list of cookie options to specify
             * @see https://github.com/JAAulde/cookies#cookie-options
             * @return jQuery
             */
            cookieBind: function (options) {
                return this
                    /*
                     * Only run on inputs because of bind to `change` event
                     */
                    .filter(':input').each(function () {
                        var $this = $(this);

                        $this.cookieFill().on('change', function () {
                            $this.cookify(options);
                        });
                    })
                    .end();
            }
        });
    }));
}(this));