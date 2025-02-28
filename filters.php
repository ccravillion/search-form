<?php

function cc_add_borders( $block_content = '', $block = [] ) {
	$defaults = [
		'bcBorderStyle' => 'none',
		'bcPadding' => '10',
		'bcBorderWidth' => '2',
		'bcBorderRadius' => '2',
		'bcBorderColor' => 'black'
	];

	$attrs = array_merge($defaults, $block['attrs']);
	// only do this if border style is set
if($attrs['bcBorderStyle'] !== 'none') {
	$divStyles = "
		border-style: {$attrs['bcBorderStyle']};
		padding: {$attrs['bcPadding']}px;
		border-width: {$attrs['bcBorderWidth']}px;
		border-radius: {$attrs['bcBorderRadius']}px;
		border-color: {$attrs['bcBorderColor']};
	";

	// wrap the block content with a div with these styles
	$block_content = '<div style="'.$divStyles.'">' . $block_content . '</div>';
}
	// return unmodified block content
	return $block_content;
}

add_filter( 'render_block', 'cc_add_borders', 10, 2 );
