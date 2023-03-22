<?php

use A\Component;

?>

<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
    <?php wp_head(); ?>
    <link rel="stylesheet" href="https://use.typekit.net/wef8zrv.css">
</head>

<body <?php body_class('dark'); ?>>
    <?php wp_body_open(); ?>
    <?= Component::render('components/layout/navigation/navigation'); ?>
