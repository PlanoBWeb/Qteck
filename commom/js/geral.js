    // Form Fixed 
    $('.btn-open-box, .txt-fale-fixed').click(function(){
        if($('.content-form-fixed').is(":visible")){
            $('.btn-open-box').animate({  borderSpacing: +360 }, {
                step: function(now,fx) {
                  $(this).css('-webkit-transform','rotate('+now+'deg)'); 
                  $(this).css('-moz-transform','rotate('+now+'deg)');
                  $(this).css('transform','rotate('+now+'deg)');
                },
                duration:'slow'
            },'linear');
            $( ".content-form-fixed" ).slideToggle();
        }else{
            $('.btn-open-box').animate({  borderSpacing: 180 }, {
                step: function(now,fx) {
                  $(this).css('-webkit-transform','rotate('+now+'deg)'); 
                  $(this).css('-moz-transform','rotate('+now+'deg)');
                  $(this).css('transform','rotate('+now+'deg)');
                },
                duration:'slow'
            },'linear');
            $( ".content-form-fixed" ).slideToggle();
        }   
    });

    // Nossos clientes Home
    $(document).ready(function() {
        var owl = $("#owl-demo-clientes");     
        owl.owlCarousel({
            items : 8, //10 items above 1000px browser width
            itemsDesktop : [1300,5], //5 items between 1000px and 901px
            itemsDesktopSmall : [1024,3], // betweem 900px and 601px
            itemsTablet: [767,1], //2 items between 600 and 0
            itemsMobile : 1 // itemsMobile disabled - inherit from itemsTablet option
        });  
    });

    // Drop menu mobile
    $(document).ready(function(){
        var altura_tela = $(window).width();
        $(".linha-menu-topo .dropdown-toggle").click(function(){
            if (altura_tela <= 768) {
                event.preventDefault();
                $(this).parent().find(".dropdown-menu").slideToggle();
            }
        });
    });

    window.onresize = function() {
        
        $(".linha-menu-topo .dropdown-toggle").click(function(){
            if (window.innerWidth <= 768) {
                event.preventDefault();
                $(this).parent().find(".dropdown-menu").slideToggle();
            }
        });
    }

    // Abri bloco menu interna
    $( ".btn-mais" ).click(function() {
        $( this ).parent().next(".bloco-sub-soft").slideToggle( "slow");
    });

    // Drop menu Superior
    $( ".bloco-menu-sup" ).click(function() {
        $( ".menu-sup" ).slideToggle( "slow");
    });

    $( ".close-menu-sup" ).click(function() {
        $( ".menu-sup" ).slideToggle( "slow");
    });

    // Destaques Blog Home
    $(document).ready(function() {
        var owl = $("#owl-demo-blog");     
        owl.owlCarousel({
            items : 4, //10 items above 1000px browser width
            itemsDesktop : [1300,5], //5 items between 1000px and 901px
            itemsDesktopSmall : [1024,2], // betweem 900px and 601px
            itemsTablet: [767,1], //2 items between 600 and 0
            itemsMobile : 1 // itemsMobile disabled - inherit from itemsTablet option
        });
    });

    // Destaques tibco
    $(document).ready(function() {
        var owl = $("#owl-demo-tibco");     
        owl.owlCarousel({
            items : 3, //10 items above 1000px browser width
            itemsDesktop : [1300,3], //5 items between 1000px and 901px
            itemsDesktopSmall : [1024,2], // betweem 900px and 601px
            itemsTablet: [767,1], //2 items between 600 and 0
            itemsMobile : 1 // itemsMobile disabled - inherit from itemsTablet option
        });
    });

    // Nossos clientes Home
    $(document).ready(function() {
        var owl = $("#owl-demo-interna");     
        owl.owlCarousel({
            items : 5, //10 items above 1000px browser width
            itemsDesktop : [1300,5], //5 items between 1000px and 901px
            itemsDesktopSmall : [1024,3], // betweem 900px and 601px
            itemsTablet: [767,1], //2 items between 600 and 0
            itemsMobile : 1 // itemsMobile disabled - inherit from itemsTablet option
        });
     
        // Custom Navigation Events
        $(".next").click(function(){
            owl.trigger('owl.next');
        })
        $(".prev").click(function(){
            owl.trigger('owl.prev');
        })     
    });

    // Nossos clientes Home
    $(document).ready(function() {
        var owl = $("#owl-demo-home");     
        owl.owlCarousel({
            items : 4, //10 items above 1000px browser width
            itemsDesktop : [1300,4], //5 items between 1000px and 901px
            itemsDesktopSmall : [1024,3], // betweem 900px and 601px
            itemsTablet: [767,1], //2 items between 600 and 0
            itemsMobile : 1 // itemsMobile disabled - inherit from itemsTablet option
        });
     
        // Custom Navigation Events
        $(".next").click(function(){
            owl.trigger('owl.next');
        })
        $(".prev").click(function(){
            owl.trigger('owl.prev');
        })     
    });


    // abri menu lateral
    $( ".open-close-menu" ).click(function() {
        $( ".menu-lat-mob" ).slideToggle( "slow");
    });

    $( ".open-submenu-lateral" ).click(function() {
        /*event.preventDefault();*/
        $( ".submenu-lateral" ).slideToggle( "slow");
    });

    

    // Busca mobile
    $('.lupa-mobile').click(function(){
        if($('.bloco-busca-mobile').is(":visible")){
            $('.bloco-busca-mobile').hide();
            $('.contatos-mob').css("margin-top", "80px");
            $('header').css("height", "164px");
        }else{
            $('.bloco-busca-mobile').show();
            $('.contatos-mob').css("margin-top", "120px");            
            $('header').css("height", "204px");
       }
    });


    // Função para Lightbox
    $(document).ready(function() {
        var current = '.mtlsr-images-for-lightbox ul li.current';
        
        //Função para verificar a posição atual da imagem e remover as setas(prev e next) conforme necessário
        function check_image_position(){                
            if ($(current).is(':last-child')) {
                $('.next').hide();
                $('.prev').show();
            }else if ($(current).is(':first-child')) {
                $('.next').show();
                $('.prev').hide();
            }else{
                $('.next, .prev').show();
            }
        }           
        
        $('.mtlsr-images-for-lightbox ul li').on('click', '.lupa-destaque', function(event) {
            event.preventDefault();
            var big_image_href = $(this).attr('href');
            
            $(this).parent().parent().parent().addClass('current');
            $('.mtlsr-lightbox').fadeIn();
            $('.mtlsr-lightbox').append('<img class="image-in-lightbox" src="'+big_image_href+'" alt="">');
            
            check_image_position();
        });
        //Fechar
        $('.mtlsr-lightbox').on('click', '.close', function(event) {
            $('.mtlsr-lightbox').fadeOut();
            $('.mtlsr-lightbox .image-in-lightbox').remove();
            $(current).removeClass('current');
        });

        $(document).keydown(function (e) {
            if(e.which == 27)
            {
                $('.mtlsr-lightbox').fadeOut();
                $('.mtlsr-lightbox .image-in-lightbox').remove();
                $(current).removeClass('current');
                return false;
            }
        });

        $('.mtlsr-lightbox a').on('click', function(e){             
            if($(this).attr('class')=='next'){
                var big_image_href = $(current).next().find('.lupa-destaque').attr('href');                
            
                $(current).next().addClass('current');
                $(current).prev().removeClass('current');
                
            }else if($(this).attr('class')=='prev'){
                var big_image_href = $(current).prev().find('.lupa-destaque').attr('href');
            
                $(current).prev().addClass('current');
                $(current).next().removeClass('current');
            }
            check_image_position();
                
            $('.mtlsr-lightbox .image-in-lightbox').remove();
            $('.mtlsr-lightbox').append('<img class="image-in-lightbox" src="'+big_image_href+'" alt=""></div>');
        });

    });

    // Valida Newslleter
    function validaNewsletter()
    {
        d = document.newsletter;

        if(trim(d.nome_news.value)=="")
        {
            alert("O campo NOME deve ser preenchido!");
            d.nome_news.focus();
            return false;
        }
        
        if(trim(d.email_news.value)=="")
        {
            alert("O campo E-MAIL deve ser preenchido!");
            d.email_news.focus();
            return false;
        }
        
        if(!email_news(d.email_news,'')) return false;
        
        d.submit();
    }

    // Valida Newslleter
    function validaOrcamento()
    {
        d = document.orcamento;

        if(trim(d.orc_nome.value)=="")
        {
            alert("O campo NOME deve ser preenchido!");
            d.orc_nome.focus();
            return false;
        }
        
        if(trim(d.orc_email.value)=="")
        {
            alert("O campo E-MAIL deve ser preenchido!");
            d.orc_email.focus();
            return false;
        }
        
        if(!email(d.orc_email,'')) return false;

        if(trim(d.orc_msg.value)=="")
        {
            alert("O campo MENSAGEM deve ser preenchido!");
            d.orc_msg.focus();
            return false;
        }
        
        d.submit();
    }


    // Valida Formulário Fixo
    function enviardadosFixed()
    {
        d = document.contatoFixed;

        if(trim(d.nome.value)=="")
        {
            alert("O campo NOME deve ser preenchido!");
            d.nome.focus();
            return false;
        }
        
        if(trim(d.email.value)=="")
        {
            alert("O campo E-MAIL deve ser preenchido!");
            d.email.focus();
            return false;
        }
        
        if(!email(d.email,'')) return false;

        if(trim(d.telefone.value)=="")
        {
            alert("O campo TELEFONE deve ser preenchido!");
            d.telefone.focus();
            return false;
        }
        
        if(trim(d.msg.value)=="")
        {
            alert("O campo MENSAGEM deve ser preenchido!");
            d.msg.focus();
            return false;
        }

        if(trim(d.onde.value)=="" || trim(d.onde.value)== "")
        {
            alert("O campo ONDE NOS ENCONTROU deve ser preenchido!");
            d.onde.focus();
            return false;
        }
        
        d.submit();
    }

    // Valida Formulário
    function enviardados()
    {
        d = document.contato;

        if(trim(d.nome.value)=="")
        {
            alert("O campo NOME deve ser preenchido!");
            d.nome.focus();
            return false;
        }
        
        if(trim(d.email.value)=="")
        {
            alert("O campo E-MAIL deve ser preenchido!");
            d.email.focus();
            return false;
        }
        
        if(!email(d.email,'')) return false;

        if(trim(d.telefone.value)=="")
        {
            alert("O campo TELEFONE deve ser preenchido!");
            d.telefone.focus();
            return false;
        }
        
        if(trim(d.msg.value)=="")
        {
            alert("O campo MENSAGEM deve ser preenchido!");
            d.msg.focus();
            return false;
        }

        if(trim(d.onde.value)=="" || trim(d.onde.value)== "")
        {
            alert("O campo ONDE NOS ENCONTROU deve ser preenchido!");
            d.onde.focus();
            return false;
        }
        
        d.submit();
    }

    // Vitrine Banner
    $(document).ready(function() {
        $("#owl-demo").owlCarousel({
            navigation : true,
            slideSpeed : 300,
            paginationSpeed : 400,
            singleItem : true
        });
    });

    // Ajax Busca Desktop
    $(document).ready(function(){
        $("#buscaValor").keyup(function(){
            var valorBusca = $('#buscaValor').val();
            var min_length = 0;
            var contaValor = $('#buscaValor').val().length;          
            var urlAction = $('.urlAction').val();  

            if (contaValor != min_length) {

                $.ajax({
                type: "POST",
                url: urlAction,
                // data:'busca='+$(this).val(),
                data: {search: valorBusca, buscaAjax: "buscaAjax", acao: "busca"},
          
                    success: function(data){
                        $("#carrega-busca").show();
                        $("#carrega-busca").html(data);
                        $("#buscaValor").css("background","#FFF");
                    }
                });
            }else{
                  $('#carrega-busca').hide();
            }
        });
    });

    $('#carrega-busca').on('click','.selectProduto', function(){
        var valorTxtBusca = $(this).text();

        $("#buscaValor").val(valorTxtBusca);
        $('.form-busca-desk').submit();
        $("#carrega-busca").hide();
        
    });

    // Ajax Busca Mobile
    $(document).ready(function(){
        $("#buscaValorMobile").keyup(function(){
            var valorBusca = $('#buscaValorMobile').val();
            var min_length = 0;
            var contaValor = $('#buscaValorMobile').val().length;
            var urlAction = $('.urlAction').val();  

            if (contaValor != min_length) {

                $.ajax({
                type: "POST",
                url: urlAction,
                // data:'busca='+$(this).val(),
                data: {search: valorBusca, buscaAjax: "buscaAjax", acao: "busca"},
          
                    success: function(data){
                        $("#carrega-busca-mobile").show();
                        $("#carrega-busca-mobile").html(data);
                        $("#buscaValorMobile").css("background","#FFF");
                    }
                });
            }else{
                  $('#carrega-busca-mobile').hide();
            }
        });
    });

    $('#carrega-busca-mobile').on('click','.selectProduto', function(){
        var valorTxtBusca = $(this).text();

        $("#buscaValorMobile").val(valorTxtBusca);
        $('.form-busca-mob').submit();
        $("#carrega-busca-mobile").hide();
        
    });
    

    // Função para vitirne projetos
    $(document).ready(function() {
        $('.lightBox-menor').on('click', function(event) {
            event.preventDefault();
            var big_image_href = $(this).attr('href');
            var linkAtivo =  $(this).children('.bg-vermelho-inativo');

            $('.bg-vermelho-inativo').removeClass('lightBox-menor-ativo');
            $('.img-inicial').remove();
            $('.carrega-lightBox-menor').fadeIn();
            $('.carrega-lightBox-menor').append('<img class="img-inicial" src="'+big_image_href+'">');
            $(linkAtivo).addClass('lightBox-menor-ativo');
        });
    });

    // Redirect mobile menu lateral
    $('.menuLatLink').change(function(){
        var url = $(this).val();
        if (url == "") {
            alert("Valor inválido, selecione um valor válido");
        }else{
            window.location.href = url;        
        }
    });

    // Troca de bloco dos menu interno
    // $(document).ready(function() {
    //     $('.linha-desc-interna').on('click', function(event) {
    //         var qualDataId = $(this).data("item-id");
    //         $('.bloco-desc-prod').hide();
    //         $('.linha-desc-interna').removeClass('linha-desc-interna-ativo');
    //         $('#aba'+qualDataId).show();
    //         $(this).addClass('linha-desc-interna-ativo');
    //     });
    // });

    // Mascara telefone
    $("#telefone")
    .mask("(99) 9999-9999?9")
    .focusout(function (event) {  
        var target, phone, element;  
        target = (event.currentTarget) ? event.currentTarget : event.srcElement;  
        phone = target.value.replace(/\D/g, '');
        element = $(target);  
        element.unmask();  
        if(phone.length > 10) {  
            element.mask("(99) 99999-999?9");  
        } else {  
            element.mask("(99) 9999-9999?9");  
        }  
    });


    // Menu lateral
    $(document).ready(function () {
        $('.bloco-menu-lat .linha-menu-lat-title').click(function(){
            if ($(this).attr('class') != 'active'){
                $('.block-sub-lat').slideUp();
                $(this).find('.block-sub-lat').slideToggle();
                $('.bloco-menu-lat .linha-menu-lat-title').removeClass('active');
                $(this).addClass('active');
            }
        });
    });