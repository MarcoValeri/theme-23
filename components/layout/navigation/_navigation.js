export default function() {

    /**
     * Create a function that gets
     * @param string idImageSelected
     * @param string srcImageOne
     * @param string srcImageTwo
     * The function shows the first image
     * and
     * hides the second one
     * and viceversa
     */
    const showsAndHidesImage = (idImageSelected, srcImageOne, srcImageTwo) => {
        if ($(`#${idImageSelected}`).attr('src') === srcImageTwo) {
            $(`#${idImageSelected}`).attr('src', srcImageOne);
        } else {
            $(`#${idImageSelected}`).attr('src', srcImageTwo);
        }
    }

    $('#navigation-dark-light').click(() => {

        // Icon that fires the event
        $('body').toggleClass('light');

        // Company Logo
        showsAndHidesImage('navigation-dark-logo', '/wp-content/uploads/2023/03/logo-dark.svg', '/wp-content/uploads/2023/03/logo-light.svg');

        // Dark and Light Icon
        showsAndHidesImage('navigation-dark-light', '/wp-content/uploads/2023/03/sun.svg', '/wp-content/uploads/2023/03/moon.svg');
    })
    console.log(`navigation.js`);
}
