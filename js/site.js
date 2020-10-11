jQuery(document).ready(function() {

	jQuery("body").on("contextmenu", "*", function(e) {
		return false;
	});

	jQuery("#filtros-busca .filtros select").change(function() {
		
		if(this.value == ''){
			jQuery(this).addClass('vazio');
		}else{
			jQuery(this).removeClass('vazio');
		}
		if (this.name == 'post_type') {
			
			jQuery("#filtros-busca .filtros select:first-child").css('border-color', 'transparent');
			if (this.value == "imovel-aluguel") {
				jQuery("#filtros-busca [name='fase']").hide();
				jQuery("#filtros-busca [name='faixa-valor']").hide();
			} else {
				jQuery("#filtros-busca [name='fase']").show();
				jQuery("#filtros-busca [name='faixa-valor']").show();
			}
		}
	});
	jQuery("#filtros-busca .filtros select").each(function() {
		if (this.name == 'post_type') {
			if (this.value == "imovel-aluguel") {
				jQuery("#filtros-busca [name='fase']").hide();
				jQuery("#filtros-busca [name='faixa-valor']").hide();
			} else {
				jQuery("#filtros-busca [name='fase']").show();
				jQuery("#filtros-busca [name='faixa-valor']").show();
			}
		}
	});
	
	jQuery('#filtros-busca .filtros select').each(function(){
		if(jQuery(this).val() != ''){
			jQuery(this).removeClass('vazio');
		}
	});
	jQuery("#filtros-busca .filtros #busca_submit").click(function() {
		if(jQuery("#filtros-busca .filtros select:first-child").val() == ''){
			jQuery('.box_msg').fadeIn(500).delay(3000).fadeOut(500);
			jQuery("#filtros-busca .filtros select:first-child").css('border', '1px solid rgba(150,0,0,0.7)');
		}
		else{
			jQuery('#filtros-busca form').submit();
		}
	});


	jQuery(".menu-mapa li span").click(function(){
		jQuery(".menu-mapa li span").removeClass("active");
		jQuery(this).addClass("active");
	});

	jQuery(".autoheight").matchHeight();

	jQuery("#menu-galeria span").click(function(){
		jQuery("#menu-galeria span").removeClass("active");
		jQuery(this).addClass("active");
	})


	function abreGaleria(idGaleria){
		jQuery(".item-galeria").removeClass("show");
		jQuery(idGaleria).addClass("show");


	}

	jQuery("#menu-mapa span").click(function(){
		jQuery("#menu-mapa span").removeClass("active");
		jQuery(this).addClass("active");
	})

	function abreMapa(esconde, mostra){
		jQuery(esconde).slideUp(function(){
			jQuery(mostra).slideDown();
		});
	}

	jQuery("#menu-ficha-tecnica li").click(function(){
		jQuery("#menu-ficha-tecnica li").removeClass("active");
		jQuery(this).addClass("active");
	})

	function abreArea(idArea){
		jQuery(".conteudo-ficha-tecnica").removeClass("show");
		jQuery(idArea).addClass("show");
	}

	jQuery("#menu-plantas span").click(function(){
		jQuery("#menu-plantas span").removeClass("active");
		jQuery(this).addClass("active");
	})

	function abrePlantas(idPlantas){
		jQuery(".item-galeria").removeClass("show");
		jQuery(idPlantas).addClass("show");
	}


	// Menu mobile

	var menuMobile = document.getElementById( 'menu-mobile' );
	var body = document.body;
	var safari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;

	menuMobile.onclick = function() {
		if (safari){
			if(window.innerWidth > 1024){
				jQuery('#cbp-spmenu-s2').toggleClass( 'open' );
			}
			jQuery('.menu-site').toggleClass( 'gambi_menu_mobile' );
		}
		classie.toggle( this, 'active' );
		classie.toggle( body, 'cbp-spmenu-push-toleft' );
		classie.toggle( menuMobile, 'cbp-spmenu-open' );
		// jQuery('footer').toggleClass( 'gambi_menu_margin' );
		// jQuery('.barra-fixa-contato').toggleClass( 'gambi_menu_margin' );
		jQuery('.cancel_box_contato').toggleClass( 'cancel_contato_menu' );
		disableOther( 'menuMobile' );
	};
	jQuery('body').on('click', function(e) {
		if (!jQuery(e.target).closest('#menu-mobile, #cbp-spmenu-s2').length){
			if (jQuery('#menu-mobile').hasClass('cbp-spmenu-open')){
				if (safari){
					if(window.innerWidth > 1024){
						jQuery('#cbp-spmenu-s2').toggleClass( 'open' );
					}
					jQuery('.menu-site').toggleClass( 'gambi_menu_mobile' );
				}
				classie.toggle( this, 'active' );
				classie.toggle( body, 'cbp-spmenu-push-toleft' );
				classie.toggle( menuMobile, 'cbp-spmenu-open' );
				jQuery('footer').toggleClass( 'gambi_menu_margin' );
				jQuery('.barra-fixa-contato').toggleClass( 'gambi_menu_margin' );
				jQuery('.cancel_box_contato').toggleClass( 'cancel_contato_menu' );
				disableOther( 'menuMobile' );
			}
		}
	});

	jQuery('.menu-site nav li:first-child').after('<li class="show1024 hide"><a href="'+ window.location.origin +'/?post_type=&tipo=loteamento">Loteamentos</a></li><li class="show1024 hide"><a href="javascript:;" data-value="imovel-aluguel" onclick="formDados(this);">Aluguel</a></li><li class="show1024 hide"><a href="javascript:;" data-value="imovel-revenda" onclick="formDados(this);">Revenda</a></li><li class="show1024 hide"><a href="javascript:;" data-value="imovel-lancamento" onclick="formDados(this);">Lançamentos</a></li><li class="show1024 hide"><a href="'+ window.location.origin +'/class">Imóveis de luxo</a></li>');

	jQuery('form select option[value="Goiás"]').attr('selected', true);
	jQuery('.gambi_news li.telefone input').attr('value', '00000000');
	jQuery('.gambi_news li#field_2_4 input').attr('value', '31/12/9999');
	jQuery('.gambi_news #input_2_1').attr('placeholder', 'Nome');
	jQuery('.gambi_news #input_2_2').attr('placeholder', 'E-mail');
	jQuery('.gambi_news #input_2_5 input').attr('checked');
	jQuery('.gambi_news #gform_confirmation_message_2').text('Obrigado por se cadastrar! Em breve você receberá novidades no seu e-mail.');

	function disableOther( button ) {
		if( button !== 'menuMobile' ) {
			classie.toggle( menuMobile, 'disabled' );
		}
	}
	jQuery('.cancel_box_contato').click(function() {

		jQuery('.barra-fixa-contato').slideToggle();
		jQuery('.cancel_box_contato').slideToggle();
		jQuery('footer').css('margin-bottom', '0px');

	});
	jQuery('.box-busca-rapida div[class*="col-"]:nth-last-child(1) a').click(function() {

		jQuery('#banners #filtros-busca').slideToggle();
		jQuery('#banners .acancel_circle').slideToggle();

	});

	jQuery('#top-filter').click(function() {

		jQuery('#filtros-busca').slideToggle();

	});
	jQuery('body').on('click', function(e) {
		if (!jQuery(e.target).closest('#banners #filtros-busca, .box-busca-rapida div[class*="col-"]:nth-last-child(1) a').length){
			jQuery( "#banners #filtros-busca" ).slideUp(250);
			jQuery("#banners .acancel_circle").slideUp(250);
		}
	});
	if(jQuery('#banners').length == 0){
		jQuery('.menu-site').addClass('.menu-site-internas');
	}else{
		jQuery('#filtros-busca .map_filtro').hide();
	}
	if(jQuery('#modulo_map_canvas').length == 1){
		jQuery('body').addClass('X-Y-hide');
		jQuery('#filtros-busca').addClass('filtro_modulo');
		jQuery('#filtros-busca .map_filtro').hide();
		jQuery('.cancel_box_contato').hide();
		jQuery('.filtro_modulo').after().click(function(e) {
			if (!jQuery(e.target).closest('#filtros-busca select, #busca_submit').length){
				if(jQuery('.filtro_modulo').css('height') == '5px'){
					jQuery('.filtro_modulo').animate({height : '81px'});
					jQuery(body).append('<style>.filtro_modulo:after{animation: filtro_open 0.4s linear;}</style>').delay(500).append('<style>.filtro_modulo:after{top:40px;}</style>');
				}else{
					jQuery('.filtro_modulo').animate({height : '5px'});
					jQuery(body).append('<style>.filtro_modulo:after{animation: filtro_close 0.4s linear;}</style>').delay(500).append('<style>.filtro_modulo:after{top:-41px;}</style>');
				}
				jQuery('#modulo_map_canvas').toggleClass('h_filtro_close');
			}
		});
		
	}
	jQuery('.sidebar-filtros ul li label').click(function(e) {
		if(jQuery(this).next().css('display') == 'block'){
			jQuery(this).next().hide();
		}
		else{
			if (!jQuery(e.target).closest('.sidebar-filtros ul li ul').length){
				jQuery('.sidebar-filtros ul li ul').hide();
			}
			jQuery(this).next().show();
		}
	});

	jQuery("#menu-principal li a").first().addClass("btn-home");

	var $barraContatos = jQuery(".barra-fixa-contato");
	var $barraHeight = jQuery(".barra-fixa-contato").height() + 87;

	jQuery(".central-vendas").click(function() {

		barraContato();

		if ($barraContatos.css("bottom") == "-70px") {
			$barraContatos.animate({
				bottom : "0px"
			});
			jQuery(".btns-contato-left, .btns-contato-right").slideDown();
			$barraContatos.addClass("barra-bg");
		}

	});

	sendForm(jQuery('#form_whats'));

	function sendForm(form){
		form.on('submit', function(event){


			event.preventDefault();
			jQuery.ajax({
				type: "POST",
				url: form.attr('action'),
				data: form.serialize(),
				dataType: 'json',
				beforeSend: function(){
					form.find('.btn').attr('disabled', true);
					form.find('.message').removeClass('error hide').addClass('success').html('Enviando...').slideDown(1000);
				},
				complete: function() {
					form.find('.btn').attr('disabled', false);
				},
				error: function () {
					form.find('.message').removeClass('success').addClass('error').html('Houve um erro durante o envio. Tente novamente!').slideDown(1000);
				},
				success: function(data){
					if(data.error !== undefined) {
						form.find('.message').addClass('error').html('<p>'+data.error+'</p>').slideDown(1000);
					} else {
						form.find('.form-control').val('');
						form.find('.message').addClass('success').html('<p>'+data.success+'</p>').slideDown(1000).delay(7000).slideUp();
					}
				}
			});
		});
	}

	function barraContato() {
		if (window.innerWidth >= 600) {
			if ($barraContatos.css("bottom") == "0px") {
				$barraContatos.animate({
					bottom : -$barraHeight / 2 + "px"
				});
			} else {
				$barraContatos.animate({
					bottom : "0px"
				});
			}
		} else {

			if ($barraContatos.css("bottom") == "-70px") {
				$barraContatos.animate({
					bottom : "0px"
				});
				jQuery(".btns-contato-left, .btns-contato-right").slideDown();
				$barraContatos.addClass("barra-bg");
			} else {
				$barraContatos.animate({
					bottom : "-70px"
				});
				jQuery(".btns-contato-left, .btns-contato-right").slideUp();

			}
		}
	}

	//setTimeout(barraContato, 3000);

	jQuery(window).resize(function() {
		jQuery(".btns-contato-left, .btns-contato-right").slideDown();
		var $barraHeight = jQuery(".barra-fixa-contato").height() + 87;
		if (window.innerWidth <= 600) {
			$barraContatos.addClass("barra-bg");
		}
	});

	// Home - Banners
	jQuery(".imagens-loteamento").owlCarousel({
		paginationSpeed : 400,
		rewindSpeed : 400,
		autoPlay : true,
		lazyLoad : true,
		singleItem : true,
		navigationText : ['', ''],
		navigation : true,
		pagination : false,
		autoHeight : true,
	});

	// Home - Banners
	if(jQuery('.banner-item').length > 1){
		jQuery(".lista-banners").owlCarousel({
			// rewindSpeed : 1000,
			smartSpeed : 10000,
			autoPlay : true,
			// autoplayTimeout : 10000,
			lazyLoad : true,
			mouseDrag : false,
			// animateOut: 'fadeOut',
			transitionStyle :"fade",
			touchDrag : false,
			singleItem : true,
			autoHeight : true,
		});
	}


	// Home - Banners
	jQuery(".lista-class-banners").owlCarousel({
		paginationSpeed : 400,
		rewindSpeed : 400,
		autoPlay : true,
		items : 2,
		navigationText : ['', ''],
		navigation : true,
		pagination : false,
		autoHeight : true,
	});

	jQuery('.menu-banners span').click(function() {

		jQuery(this).addClass('active').siblings().removeClass("active");

		var filtroBanner = jQuery(this).attr('data-filter');
		
		jQuery(".lista-banners").html("<div class='btn-mais-imoveis'><i class='fa fa-cog fa-spin'></i> Carregando...</div><br><br>");

		jQuery.get(bloginfo + "/parts/home/banners-items.php?tipo-banner=" + filtroBanner, function(data) {

			jQuery(".lista-banners").html(data);
			jQuery(".lista-banners").data("owlCarousel").reinit();

		});

	});

	// Home - Lançamento Destaques
	jQuery(".img-bairro > div").owlCarousel({
		rewindSpeed : 400,
		autoPlay : false,
		singleItem : true,
		navigation : false,
		pagination : true,
	});

	// Home - Lançamento Destaques
	jQuery("#imagensVideos .tab-pane > .container > .row").owlCarousel({
		paginationSpeed : 400,
		rewindSpeed : 400,
		autoPlay : false,
		singleItem : true,
		navigation : false,
		pagination : true,
	});

	// Home - Lançamento Destaques
	jQuery(".lista-lancamentos-destaque").owlCarousel({
		paginationSpeed : 400,
		rewindSpeed : 400,
		autoPlay : true,
		singleItem : true,
		navigation : false,
		pagination : true,
	});

	// Portfolio Grid
	jQuery(".lista-imoveis-class").owlCarousel({
		paginationSpeed : 400,
		rewindSpeed : 400,
		autoPlay : false,
		items : 2,
		navigation : false,
		pagination : true,
		itemsDesktopSmall : [1024, 2]
	});

	/* Galeria de Imagens */
	jQuery(".galeria-imagens .lista-imagens").owlCarousel({
		paginationSpeed : 0,
		rewindSpeed : 0,
		autoPlay : true,
		lazyLoad : true,
		items : 4,
		navigationText : ['', ''],
		navigation : true,
		pagination : false,
		autoHeight : true,

	});

	/* Galeria de Imagens */
	jQuery(".galeria-plantas .lista-imagens").owlCarousel({
		paginationSpeed : 400,
		rewindSpeed : 400,
		autoPlay : true,
		lazyLoad : true,
		items : 2,
		navigationText : ['', ''],
		navigation : true,
		pagination : false,
		autoHeight : true,

	});

	/* Imoveis Relacionados */
	jQuery(".lista-imoveis-relacionados").owlCarousel({
		paginationSpeed : 400,
		rewindSpeed : 400,
		navigationText : ['', ''],
		items : 3,
		navigation : false,
		pagination : true,
		itemsDesktopSmall : [1024, 2],

	});

	// Portfolio Grid
	// var portfolioGrid = jQuery('.lista-imoveis').isotope({
	// itemSelector: '.imovel-item',
	// layoutMode: 'masonry',
	// });
	// portfolioGrid.imagesLoaded(
	// function() {
	// portfolioGrid.isotope('layout');
	// });
	//
	// jQuery('.lista-categorias span').click(function(){
	// jQuery('.lista-categorias span').removeClass('active');
	// jQuery(this).addClass('active');
	// var selector = jQuery(this).attr('data-filter');
	// portfolioGrid.isotope({ filter: selector });
	// return false;
	// });

	jQuery("#imoveis .box-select select").change(function() {

		jQuery(".btn-mais-imoveis").attr("href", window.location + "../?post_type=" + this.value);

		jQuery(".sessao-grid-items").slideUp(function() {
			jQuery(".sessao-grid-items").html("<div class='btn-mais-imoveis'><i class='fa fa-cog fa-spin'></i> Carregando...</div><br><br>").slideDown();
		});

		jQuery(".sessao-grid-items-2").slideUp(function() {
			jQuery(".sessao-grid-items-2").html("<div class='btn-mais-imoveis'><i class='fa fa-cog fa-spin'></i> Carregando...</div><br><br>").slideDown();
		});

		jQuery.get(bloginfo + "/parts/home/imoveis-grid-items.php?finalidade=" + this.value, function(data) {

			jQuery(".sessao-grid-items").slideUp();

			setTimeout(function() {

				jQuery(".sessao-grid-items").slideUp(function() {
					jQuery(".sessao-grid-items").html(data).slideDown();

					var portfolioGrid = jQuery('.lista-imoveis').isotope({
						itemSelector : '.imovel-item',
						layoutMode : 'masonry',
					});

					portfolioGrid.imagesLoaded(function() {
						portfolioGrid.isotope('layout');
					});

					jQuery('.lista-categorias span').click(function() {
						jQuery('.lista-categorias span').removeClass('active');
						jQuery(this).addClass('active');
						var selector = jQuery(this).attr('data-filter');
						portfolioGrid.isotope({
							filter : selector
						});
						return false;
					});
				});

			}, 1000);

		});

		jQuery.get(bloginfo + "/parts/class/imoveis-grid-items.php?finalidade=" + this.value, function(data) {

			jQuery(".sessao-grid-items-2").slideUp();

			setTimeout(function() {

				jQuery(".sessao-grid-items-2").slideUp(function() {
					jQuery(".sessao-grid-items-2").html(data).slideDown();

					var portfolioGrid = jQuery('.lista-imoveis').isotope({
						itemSelector : '.imovel-item',
						layoutMode : 'masonry',
					});

					portfolioGrid.imagesLoaded(function() {
						portfolioGrid.isotope('layout');
					});

					jQuery('.lista-categorias span').click(function() {
						jQuery('.lista-categorias span').removeClass('active');
						jQuery(this).addClass('active');
						var selector = jQuery(this).attr('data-filter');
						portfolioGrid.isotope({
							filter : selector
						});
						return false;
					});
				});

			}, 1000);

		});

	});

	setTimeout(function() {
		jQuery("#imoveis .box-select select").change();
	}, 1000);

	/* Paralax BG */
	jQuery('.paralax').each(function() {
		var obj = jQuery(this);
		jQuery(window).scroll(function() {
			var yPos = -(jQuery(window).scrollTop() / obj.data('speed'));
			var bgpos = '50% ' + yPos + 'px';
			obj.css('background-position', bgpos);

		});
	});

	jQuery('#email_input').mask('(99)99999-9999');

});