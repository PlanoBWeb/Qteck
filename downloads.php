<?php

    include_once "configs/config.php";

    $smarty->assign("pagina", $pagina);
    $smarty->assign("URL", URL);
    $smarty->assign("url", $url);
    $smarty->assign("permissao", $permissao);
    $smarty->display("downloads.html");

?>