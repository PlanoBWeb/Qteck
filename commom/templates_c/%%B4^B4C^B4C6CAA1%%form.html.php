<?php /* Smarty version 2.6.12, created on 2016-03-04 10:26:32
         compiled from ../inc/form.html */ ?>
<form class="form-horizontal form-fale" name="contato" method="post" action="<?php echo $this->_tpl_vars['URL']; ?>
envia">
    <div class="row txt-bloco-fale-desk">
        <img src="<?php echo $this->_tpl_vars['URL']; ?>
commom/img/icon-form.png" class="pull-left" alt="Fale Conosco" title="Fale Conosco">
        <p class="txt-fale pull-left">Fale conosco</p>
    </div>
    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 pd-mobile-form-home">
            <input type="text" name="nome" class="form-home form-control" placeholder="NOME">
        </div>
    </div>
    <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-6 pd-mobile-form-home">
            <input type="email" name="email" class="form-home form-control" placeholder="EMAIL">
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 pd-mobile-form-home">
            <input id="telefone" type="text" name="telefone" class="form-home form-control" placeholder="TELEFONE">
        </div>
    </div>
    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 pd-mobile-form-home">
            <textarea name="msg" class="form-home text-area-home form-control" placeholder="MENSAGEM"></textarea>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-12 col-sm-10 col-md-10 pd-mobile-form-home">
            <select class="form-home form-control" name="onde" id="onde">
                <option value="">Onde nos encontrou</option>
                <option value="Google">Google</option>
                <option value="Indicação">Indicação</option>
                <option value="E-mail MKT">E-mail MKT</option>
                <option value="Outros">Outros</option>
            </select>
        </div>
        <div class="col-xs-12 col-sm-2 col-md-2 pull-right pd-mobile-form-home">
            <button type="submit" class="btn btn-default-site btn-default pull-right mg-none" onclick="return enviardados();">enviar!</button>
        </div>  
    </div>
</form> 