/*
--------------------------------
Ajax Contact Form
--------------------------------
+ https://github.com/mehedidb/Ajax_Contact_Form
+ A Simple Ajax Contact Form developed in PHP with HTML5 Form validation.
+ Has a fallback in jQuery for browsers that do not support HTML5 form validation.
+ version 1.0.1
+ Copyright 2016 Mehedi Hasan Nahid
+ Licensed under the MIT license
+ https://github.com/mehedidb/Ajax_Contact_Form
*/

(function ($, window, document, undefined) {
    'use strict';
    var $form = $('#contact-form');
    $form.submit(function (e) {
        // remove the error class
        $('.form-input').removeClass('has-error');
        $('.help-block').remove();
        // get the form data
        var formData = {
            'name' : $('input[name="form-name"]').val(),
            'email' : $('input[name="form-email"]').val(),
            'phone' : $('input[name="form-phone"]').val(),
            'website' : $('input[name="form-website"]').val(),
            'message' : $('textarea[name="form-message"]').val()
        };
        // process the form
        $.ajax({
            type : 'POST',
            url  : '/',
            data : formData,
            encode : true
        }).done(function (data) {
            $form.html('<div class="alert alert-success">' + data + '</div>');
        }).fail(function (data) {
            $form.html('<div class="alert alert-error">' + data + '</div>');
        });

        e.preventDefault();
    });
}(jQuery, window, document));