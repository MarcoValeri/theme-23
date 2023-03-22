<?php

namespace A\Components\Sample;

function parseArgs(array $args): ?array
{
    //* Define defaults
    $defaults = [
        'foo' => 'bar',
    ];
    //* Assign defaults
    $args = \wp_parse_args($args, $defaults);

    return $args;
}
