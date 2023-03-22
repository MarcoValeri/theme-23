<div class="navigation">
    <div class="container-fluid">
        <div class="row">
            <div class="navigation__col col-2">
                <div class="navigation__container-logo">
                <img id="navigation-dark-logo" class="navigation__show" src="/wp-content/uploads/2023/03/logo-dark.svg" alt="SoBold Dark Logo">
                </div>
            </div>
            <div class="navigation__col col-7">
                <div class="navigation__container-menu">
                    <?php
                    $navigationArgs = [
                        'menu'  => 'Menu Navigation'
                    ];
                    wp_nav_menu($navigationArgs);
                    ?>
                </div>
            </div>
            <div class="navigation__col col-3">
                <div class="navigation__container-dark-light-icon">
                    <img id="navigation-dark-light" src="/wp-content/uploads/2023/03/sun.svg" alt="Sun Icon">
                </div>
            </div>
        </div>
    </div>
</div>
