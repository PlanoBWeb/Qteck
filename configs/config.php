<?php

// Data no passado
header("Expires: Mon, 26 Jul 1997 05:00:00 GMT");

// Sempre modificado
header("Last-Modified: " . gmdate("D, d M Y H:i:s") . " GMT");

// HTTP/1.1
header("Cache-Control: no-store, no-cache, must-revalidate");
header("Cache-Control: post-check=0, pre-check=0", false);

// HTTP/1.0
header("Pragma: no-cache");

session_start();

require $path.'libs/Smarty.class.php';

$smarty = new Smarty;
/*
$smarty->compile_check = false;
$smarty->caching = false;
$smarty->debugging = false;
*/

/* MyADMIN - http://phpmyadmin.locaweb.com.br/ */
if( $_SERVER['SERVER_NAME'] == 'planobweb' || $_SERVER['SERVER_NAME'] == '192.168.0.105')
{
	define("db_host", 'localhost');
	define("db_user", 'root');
	define("db_pass", '');
	define("db_base", 'expressaobrindes');
	define("PATH_SERVIDOR","C:/wamp/www/clientes/QTeck/Web/");
	define("PASTAPROJETO", strtolower("clientes/QTeck/Web/"));
	if ($_SERVER['SERVER_NAME'] == '192.168.0.105') {
		define("URL","http://192.168.0.105/clientes/QTeck/Web/");
	}else{
		define("URL","http://planobweb/clientes/QTeck/Web/");
	}
}
else
{
	/* DADOS Online  */
	define("PATH_SERVIDOR","	E:/Home/planobweb2/Web/clientes/Bda");
	define("PASTAPROJETO", strtolower("homologacao/"));

	$urlWWW = $_SERVER['SERVER_NAME'];
	$urlWWWFinal = explode('.', $urlWWW);
	if ($urlWWWFinal[0] == "www") {
		define("URL","http://www.bdasolutions.com.br/homologacao/");	
	}elseif ($urlWWWFinal[0] == "WWW") {
		define("URL","http://WWW.bdasolutions.com.br/homologacao/");	
	}
	else{
		define("URL","http://bdasolutions.com.br/homologacao/");
	}	
}

define("TITULO","QTeck");

?>