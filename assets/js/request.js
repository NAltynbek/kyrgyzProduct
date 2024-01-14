jQuery(function($) {
    const form = document.querySelector('form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const captchaResponse = grecaptcha.getResponse();

        if (!captchaResponse.length > 0) {
            throw new Error("Captcha not complete");
        }

        const fd = new FormData(e.target);
        const params = new URLSearchParams(fd);

        fetch('http://localhost:3000/upload', {
            method: "POST",
            body: params,
        })
        .then(res => res.json())
        .then(data => {
            if (data.captchaSuccess) {
                console.log("Validation successful");
            } else {
                console.error("Validation failed");
            }
        })
        .catch(err => console.error(err))
        
    });


    function validateForms(forma){
        $(forma).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 4
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format('Введите минимум {0} символа!')
                },
                phone: {
                    required: "Пожалуйста, введите свою почту или номер whatsapp",
                    email: "Неправильно введен адрес почты"
                }
            }
        });
    };

    validateForms('#consultation-form');
});