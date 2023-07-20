<?php
/**
 * A configuração de base do WordPress
 *
 * Este ficheiro define os seguintes parâmetros: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, e ABSPATH. Pode obter mais informação
 * visitando {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} no Codex. As definições de MySQL são-lhe fornecidas pelo seu serviço de alojamento.
 *
 * Este ficheiro contém as seguintes configurações:
 *
 * * Configurações de  MySQL
 * * Chaves secretas
 * * Prefixo das tabelas da base de dados
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */
define('WPCF7_AUTOP', false);
// ** Definições de MySQL - obtenha estes dados do seu serviço de alojamento** //
/** O nome da base de dados do WordPress */
define( 'DB_NAME', 'ninpon' );

/** O nome do utilizador de MySQL */
define( 'DB_USER', 'root' );

/** A password do utilizador de MySQL  */
define( 'DB_PASSWORD', '' );

/** O nome do serviddor de  MySQL  */
define( 'DB_HOST', 'localhost' );

/** O "Database Charset" a usar na criação das tabelas. */
define( 'DB_CHARSET', 'utf8mb4' );

/** O "Database Collate type". Se tem dúvidas não mude. */
define( 'DB_COLLATE', '' );

/**#@+
 * Chaves únicas de autenticação.
 *
 * Mude para frases únicas e diferentes!
 * Pode gerar frases automáticamente em {@link https://api.wordpress.org/secret-key/1.1/salt/ Serviço de chaves secretas de WordPress.org}
 * Pode mudar estes valores em qualquer altura para invalidar todos os cookies existentes o que terá como resultado obrigar todos os utilizadores a voltarem a fazer login
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY', '-%]OCtJ+:^|kk6CQ*p#BY0 ``23JR37oMOvY C1417+eq2/kDf0`1$Pklx;h+o#Y' );
define( 'SECURE_AUTH_KEY', 'lL,X.4kC|50.#a$9v248NApW9+V-0WU?,2Qm-]a^;X(,uFkCTrn/.z2Lu4t(nJ6V' );
define( 'LOGGED_IN_KEY', 'U<V D5#I%?J4E5Fdf{n@C19a8^,uwMca*D`>hOu&[1y2JeTlGOZCy?V P?.vVNuW' );
define( 'NONCE_KEY', '9)=(F4*9}!d,/WX#sm};XN_{cNM$#=Af&9CcS.l,{8f6ZL406pKBs4L>ZB8-D3/e' );
define( 'AUTH_SALT', '#NqTz4?9&#Z;0H;~^/8$8-b~!NV]%IIS0,Xrl#(,eVC b<h@ol BT*F*M!Xnnz%R' );
define( 'SECURE_AUTH_SALT', 'itA,h0sfheJ;!DF1<&B%UGjL2g.zd#n0]EPSp<}o 4,v6+WpSLX&CL:?^TRPi.c:' );
define( 'LOGGED_IN_SALT', '%^{;-h2S<>G>OQ?a}A6.L8~y^7`Z$MxLS<Bptr[Lb#QUqp$w$M/!+mni37fw=a!f' );
define( 'NONCE_SALT', 'xJZKu[aFTb2m+vnB6q=Mr:hug_@:1d[n(p7f:f}-7c#i7tX_yyvEf/%g.7U%?V1S' );

/**#@-*/

/**
 * Prefixo das tabelas de WordPress.
 *
 * Pode suportar múltiplas instalações numa só base de dados, ao dar a cada
 * instalação um prefixo único. Só algarismos, letras e underscores, por favor!
 */
$table_prefix = 'wp_';

/**
 * Para developers: WordPress em modo debugging.
 *
 * Mude isto para true para mostrar avisos enquanto estiver a testar.
 * É vivamente recomendado aos autores de temas e plugins usarem WP_DEBUG
 * no seu ambiente de desenvolvimento.
 *
 * Para mais informações sobre outras constantes que pode usar para debugging,
 * visite o Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', true );

/* E é tudo. Pare de editar! */

/** Caminho absoluto para a pasta do WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Define as variáveis do WordPress e ficheiros a incluir. */
require_once( ABSPATH . 'wp-settings.php' );
