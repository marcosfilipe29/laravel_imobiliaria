jQuery('input[name=rg]').mask('00-000.000');
jQuery('input[name=cpf]').mask('000.000.000-37');
jQuery('input[name*=data]').mask('00/00/0000');
jQuery('input[name=telefone]').mask('(00) 0000-0000');
jQuery('input[name=celular]').mask('(00) 00000-0000');
jQuery('input[name=horario]').mask('00:00');
jQuery('input[name*=valor], input[name*=pretencao]').mask("#.##0,00", {reverse: true});

jQuery('form:not(.no-ajax)').on('submit', function(event){
        event.preventDefault();

        var form = jQuery(this);
                
        var options = {
            url: form.attr('action'),
            type: 'POST', 
            dataType: 'json',
            beforeSubmit: function(){
                form.find('button[type=submit]').addClass('loading');
                form.find('input, select, textarea, button').attr('disabled', true);
            },
            success: function(result){
                var values,
                msg,
                redirect = '',
                id_rdstation = '',
                limpa = true;

                // if(result.id_rdstation != undefined)
                //     id_rdstation = result.id_rdstation;

                if(result.error != undefined){
                    values = result.error;
                    limpa = false;
                    msg = '<div class="msg">';
                }

                if(result.success != undefined){
                    values = result.success;
                    msg = '<div class="msg success">';

                    apiSend(form, id_rdstation);
                    grecaptcha.reset();
                }

                for(x in values){
                    msg += '<li>'+values[x]+'</li>';
                }
                msg += '</div>';
            
                if(result.redirect != undefined)
                    redirect = result.redirect;
                
                form.find('button[type=submit]').removeClass('loading');
                form.prepend(msg);
                
                if(result.modal == 'false')
                    location.href = redirect;
                else                        
                    Ok(redirect, limpa);
            }
        };

        jQuery(form).ajaxSubmit(options);
    });

    function scroll_to(item) {
        jQuery('body').animate({scrollTop: item.offset().top-((jQuery(window).height()/2)+(item.height()/2))+'px'}, 600);
    }

    function limpaForm() {
        jQuery('form').find('input:checked').attr('checked', false);
        jQuery('form').find('input:not("[type=submit]"), select, textarea').val('');
    }

    function Ok(redirect = '', limpa = true) {
        jQuery('.msg').after().click(function(){
            jQuery(this).fadeOut();
            jQuery(this).parent('form').find('input').css('borderColor', false);
            jQuery(this).parent('form').find('input, select, textarea, button').attr('disabled', false);
            jQuery(this).parent('form').find('button[class*="loading"]').removeClass('loading');

            if(limpa)
                limpaForm();

            if(redirect != '')
                location.href = redirect;
        });
    }

    function apiSend(form, id_rdstation = ''){
        if(form.find('input[name=tipo]').attr('value') == "no-rdstation"){
            form.submit();
        }else{
            var request  = [
                            { name: 'nome', value: form.find('input[name=nome]').val() },
                            { name: 'email', value: form.find('input[name=email]').val() },
                            { name: 'identificador', value: form.find('input[name=formulario]').val() },
                            { name: 'token_rdstation', value: '85bea3de5ac0193a34247a7859b00f64' }
                          ];

            RdIntegration.post(request, function () { form.submit(); });
        }
    }