<?php

// http://bestpractices.local/wp-json/wp/v2/posts
// http://bestpractices.local/wp-json/wp/v2/categories

// Categories Queries
$categoriesArgs = [
    'taxonomy'  => 'category'
];

$getAllCategories = get_categories($categoriesArgs);

?>

<section class="guides">
    <div class="container-fluid">
        <div class="row">
            <div class="guides__col col-2">
                <div id="guides-sidebar" class="guides__container-sidebar">
                    <?php
                    if (isset($getAllCategories)) {
                        foreach ($getAllCategories as $key => $category) {
                            $categoryID = $category->term_id;
                            $categoryTitle = $category->name;
                            // Print out category name
                            ?>
                            <h2 class="body"><?= $categoryTitle; ?></h2>
                            <ul class="guides__content-list">
                            <?php
                            // Query the posts related to the above category
                            $guidesArgs = [
                                'post_type'         => 'post',
                                'cat'               => $categoryID,
                                'post_per_page'     => -1
                            ];
                            $guidesQuery = new WP_Query($guidesArgs);

                            if ($guidesQuery->have_posts()) {
                                $counter = 0;
                                while ($guidesQuery->have_posts()) {
                                    $counter++;
                                    $guidesQuery->the_post();
                                    $guideID = get_the_ID();
                                    $guideTitle = get_the_title();
                                    ?>
                                    <li id="<?= $guideID; ?>" class="guides__list menu-item <?= $key === 0 && $counter === 1 ? 'guides__list-mark' : ''; ?>"><?= $guideTitle; ?></li>
                                    <?php
                                }
                            }
                            ?>
                            </ul>
                            <?php
                        }
                    }
                    ?>
                </div>
            </div>
            <div class="guides__col col-10">
                <div class="guides__container-content">
                    <?php
                    if (isset($getAllCategories)) {
                        foreach ($getAllCategories as $index => $category) {
                            if ($index === 0) {
                                $categoryID = $category->term_id;
                                $categoryTitle = $category->name;
                                // Print out category name
                                ?>
                                <h2><?= $categoryTitle; ?></h2>
                                <?php
                                // Query the posts related to the above category
                                $guidesArgs = [
                                    'post_type'         => 'post',
                                    'cat'               => $categoryID,
                                    'post_per_page'     => -1
                                ];
                                $guidesQuery = new WP_Query($guidesArgs);

                                if ($guidesQuery->have_posts()) {
                                    while ($guidesQuery->have_posts()) {
                                        $guidesQuery->the_post();
                                        $guideTitle = get_the_title();
                                        ?>
                                        <p><?= $guideTitle; ?></p>
                                        <?php
                                    }
                                }
                            }
                        }
                    }
                    ?>
                </div>
            </div>
        </div>
    </div>
</section>
