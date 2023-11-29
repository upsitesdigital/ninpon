<?php



/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

require_once dirname(__FILE__) . '/../etc/php/lib/CloudezSettings.php';

define('WPCF7_AUTOP', false);
define('FS_METHOD', 'direct');

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', CEZ_DBNAME);

/** MySQL database username */
define('DB_USER', CEZ_DBUSER);

/** MySQL database password */
define('DB_PASSWORD', CEZ_DBPASS);

/** MySQL hostname */
define('DB_HOST', CEZ_DBHOST);

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', CEZ_DBCHARSET);

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

define('WP_MEMORY_LIMIT', ini_get('memory_limit'));


/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '^ff1vG+P;C]^R8KU!8xUSphu.)X`#$pQ+)F(|YZ f^jL36NFP^^c(QU+x@KL');
define('SECURE_AUTH_KEY',  ':v!bE75gh4MaS@j^[vm@YPCA0MZ5!|e%$cAtTczG8RW`HDByJ`%ndy+Aw6r7');
define('LOGGED_IN_KEY',    '+_ttDwG+$P+d<2 K,VLR<JXdL 3@MHjyFG9nBy`7Qns}R>rYZn0)aP%{2sMq');
define('NONCE_KEY',        ':G:WqsLyzU JEcC_7Nc5eEh[>ntGg_`Z8mhF8PX|Z8q^JFNDbN(.{KS*Mu2@');
define('AUTH_SALT',        'a#J|!mx0$_QS}9N*/QVUgkAhZNDKGB9E_(sE/r]:v <53:aX*D5xXT`@XUGL');
define('SECURE_AUTH_SALT', '$|7FD6]baN^+kh,Eef[k2QdqWn^q[`Z}v8F w|XG%/vTkjPeaHSBzht.|Erq');
define('LOGGED_IN_SALT',   'j4+gz7rXUH9gCw%5/khS shn!Xd4)tDsmn%(Zp1:Fr5H>67M*LaZLJt[L5<p');
define('NONCE_SALT',       '$FP+zF9TMyqSDEGR6wcbv8}>#1:69d+ZmZe%zpa{%Tc}f`bt;5.z/h7uz6PV');

define('WP_SITEURL', isset($_SERVER['HTTP_HOST']) ? (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] == "on") ? 'https://'.$_SERVER['HTTP_HOST'] : 'http://'.$_SERVER['HTTP_HOST'] : 'http://danielrobertomucheroni.siteup.dev');
define('WP_HOME', isset($_SERVER['HTTP_HOST']) ? (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] == "on") ? 'https://'.$_SERVER['HTTP_HOST'] : 'http://'.$_SERVER['HTTP_HOST'] : 'http://danielrobertomucheroni.siteup.dev');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'ocea_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/**
 * security
 */
define('DISALLOW_FILE_EDIT', true);
define('CONCATENATE_SCRIPTS', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
