<?php

use A\Component;

get_header();

$content = [];

// $sidebar = Component::render('components/template/sidebar/sidebar');
while (have_posts()) {
    the_post();
    $content[] = apply_filters('the_content', get_the_content());
}

echo Component::render('components/template/main/main', [
    // 'sidebar' => $sidebar,
    'content' => implode($content)
]);

get_footer();
