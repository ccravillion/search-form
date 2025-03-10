<?php
/**
 * @var array $attributes Array of block attributes
 * @var string $content The content from the save function
 */

$query = new WP_Query(
	[
		'post_type' => 'project',
		'orderby' => 'title',
		'order' => 'ASC',
	]
)
?>
<div <?php echo get_block_wrapper_attributes(); ?>>
	<?php while ( $query->have_posts() ) : $query->the_post(); ?>
	<div class="flip-card" style="padding-bottom: 50px;">
		<div class="flip-card-inner">
			<div class="flip-card-front">
				<?= get_the_post_thumbnail(); ?>
			</div>
			<div class="flip-card-back" style="background-color: <?= $attributes['cardColor']; ?>">
				<h3 class="name" style="background-color: <?= $attributes['headingColor']; ?>"><?= get_the_title() ?></h3>
				<div class="technology" style="background-color: <?= $attributes['textColor']; ?>"><?= get_post_meta(get_the_ID(), 'project_description', true); ?></div>
				<div class="technology" style="background-color: <?= $attributes['textColor']; ?>"><?= get_post_meta(get_the_ID(), 'technology_used', true); ?></div>
				<div class="link" style="background-color: <?= $attributes['textColor']; ?>">
					<a href="<?= get_post_meta(get_the_ID(), 'link', true)['url']; ?>">More Info</a>
				</div>
			</div>
		</div>
	</div>
	<?php endwhile; ?>
</div>
