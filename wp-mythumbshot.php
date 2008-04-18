<?php
/*
Plugin Name: WP-Mythumbshot
Plugin URI: http://www.mythumbshot.com
Description: allows visitors to preview your external links by using <a href="http://www.mythumbshot.com">Mythumbshot</a>.
Author: Mythumbshot
Author URI: http://www.mythumbshot.com
Version: 0.2
*/

function mythumbshot_js() {
	echo '<script type="text/javascript">var bubbleImagePath="'.get_bloginfo('wpurl').'/wp-content/plugins/mythumbshot/bg.png"</script>';
	echo "\n";
	echo '<script src="'.get_bloginfo('wpurl').'/wp-content/plugins/mythumbshot/previewbubble.js" type="text/javascript"></script>';
	echo "\n";
}
add_action("wp_head","mythumbshot_js");
?>