<?php
/**
 * Default output for a download via the [download] shortcode
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
} // Exit if accessed directly

if( ! $dlm_download ) {
	return;
}

/** @var DLM_Download $dlm_download */
$dlm_download->the_download_link();
?>