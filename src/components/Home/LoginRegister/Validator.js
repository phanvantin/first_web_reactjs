export default function Validator(options) {

    function getParent(element, selector) {
        while(element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }

    var selectorRules = {};
    function validatePas(inputElement, rule) {
    var rules = selectorRules[rule.selector]
    if(rule.selector==="#password") {
        for (var j = 0; j < rules.length; j++) {
            if(!rules[0](inputElement.value)) {
                document.querySelector('.passCondition0').classList.add('active')
                document.querySelector('.svgnam0').innerHTML ='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12"><path fill="#609230" fill-rule="evenodd" d="M6 0C2.7 0 0 2.7 0 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm-.75 8.55L2.7 6l1.05-1.05 1.5 1.5 3-3L9.3 4.5 5.25 8.55z"/></svg>'
            }else {
                document.querySelector('.passCondition0').classList.remove('active')
                document.querySelector('.svgnam0').innerHTML ='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12"><path fill="#88929e" d="M6 0C2.7 0 0 2.7 0 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm2.625 7.575l-1.05 1.05L6 7.05 4.425 8.625l-1.05-1.05L4.95 6 3.375 4.425l1.05-1.05L6 4.95l1.575-1.575 1.05 1.05L7.05 6l1.575 1.575z"/></svg>'
            }
            if(!rules[1](inputElement.value)) {
                document.querySelector('.passCondition1').classList.add('active')
                document.querySelector('.svgnam1').innerHTML ='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12"><path fill="#609230" fill-rule="evenodd" d="M6 0C2.7 0 0 2.7 0 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm-.75 8.55L2.7 6l1.05-1.05 1.5 1.5 3-3L9.3 4.5 5.25 8.55z"/></svg>'

            }else {
                document.querySelector('.passCondition1').classList.remove('active')
                document.querySelector('.svgnam1').innerHTML ='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12"><path fill="#88929e" d="M6 0C2.7 0 0 2.7 0 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm2.625 7.575l-1.05 1.05L6 7.05 4.425 8.625l-1.05-1.05L4.95 6 3.375 4.425l1.05-1.05L6 4.95l1.575-1.575 1.05 1.05L7.05 6l1.575 1.575z"/></svg>'

            }
            // if(!rules[2](inputElement.value)) {
            //     document.querySelector('.passCondition2').classList.add('active')
            //     document.querySelector('.svgnam2').innerHTML ='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12"><path fill="#609230" fill-rule="evenodd" d="M6 0C2.7 0 0 2.7 0 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm-.75 8.55L2.7 6l1.05-1.05 1.5 1.5 3-3L9.3 4.5 5.25 8.55z"/></svg>'
            // }else {
            //     document.querySelector('.passCondition2').classList.remove('active')
            //     document.querySelector('.svgnam2').innerHTML ='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12"><path fill="#88929e" d="M6 0C2.7 0 0 2.7 0 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm2.625 7.575l-1.05 1.05L6 7.05 4.425 8.625l-1.05-1.05L4.95 6 3.375 4.425l1.05-1.05L6 4.95l1.575-1.575 1.05 1.05L7.05 6l1.575 1.575z"/></svg>'
            // }
        }  
    }
}


    function validate(inputElement, rule) {
    var rules = selectorRules[rule.selector]

        var errorMessage;
        for (var i = 0; i < rules.length; i++) {
            errorMessage = rules[i](inputElement.value);
            if(errorMessage) {
                break;
            }
        }
        var errorNotification = getParent(inputElement, options.formGroupSelector).querySelector(options.errorIcon);
        if(errorMessage) {
            errorNotification.style.display = '-webkit-inline-flex';
            // errorNotification.innerHTML = '<svg className="dialog--err-svg" width="16" height="16" viewBox="0 0 16 16"><path d="M0 0h16v16H0V0z" fill="none"></path><path d="M15.2 13.1L8.6 1.6c-.2-.4-.9-.4-1.2 0L.8 13.1c-.1.2-.1.5 0 .7.1.2.3.3.6.3h13.3c.2 0 .5-.1.6-.3.1-.2.1-.5-.1-.7zM8.7 12H7.3v-1.3h1.3V12zm0-2.7H7.3v-4h1.3v4z" fill="currentColor"></path></svg>';
        } else {
            errorNotification.style.display = 'none';
        }
        var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
                    if(errorMessage) {
                        errorElement.innerText = errorMessage;
                        getParent(inputElement, options.formGroupSelector).classList.add('invalid');

                    } else {
                        errorElement.innerText = "";
                        getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
                    }
                    return !errorMessage;

    }
    var formElement = document.querySelector(options.form);
    if (formElement) {
        formElement.onsubmit = function(e) {
            e.preventDefault();

            var isFormvalid = true;
            options.rules.forEach(function (rule) {
                var inputElement = formElement.querySelector(rule.selector);
                var isValid = validate(inputElement,rule);

                if(!isValid) {
                    isFormvalid = false; 
                }
            });
            
            if(isFormvalid) {
                if(typeof options.onSubmit === 'function') {
                    var enableInputs = formElement.querySelectorAll('[name]:not([disable])');
            var formValues = Array.from(enableInputs).reduce(function(values, input){
                values[input.name] = input.value;
                return values;
            },{});
            options.onSubmit(formValues);
                }
            } 
        }
        options.rules.forEach(function (rule) {
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
            }
            var inputElement = formElement.querySelector(rule.selector);
            if (inputElement) {
                inputElement.onblur = function() {
                    validate(inputElement, rule); 
                }
                var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
                var errorNotification = getParent(inputElement, options.formGroupSelector).querySelector(options.errorIcon);
                inputElement.oninput = function() {
                    validatePas(inputElement, rule); 
                    errorNotification.style.display = 'none';
                    errorElement.innerText = "";
                    getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
                }
            }
        });
        
    }
} 
Validator.isRequired = function(selector, message) {
    return {
        selector: selector,
        test: function(value) {
            return value.trim() ? undefined : message || 'Vui lòng nhập trường này'
        }
    }
}
Validator.isEmail = function (selector, message) {
    return {
        selector: selector,
        test: function(value) {
            var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if(regex.test(value)) {
                return (
                    undefined
                )
            } else {
                return message || 'Trường này phải là email';
            }
        }
    }
}
Validator.minLength = function (selector, min, message) {
    return {
        selector: selector,
        test: function(value) {
            return value.length>= min ? undefined : message || `Vui lòng nhập tối thiểu ${min} kí tự`;
        }
    }
}
Validator.isConfirmed = function(selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function(value) {
            return value === getConfirmValue() ? undefined : message || 'Giá trị nhập vào không chính xác';
        }
    }
}