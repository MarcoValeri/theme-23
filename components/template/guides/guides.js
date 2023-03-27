export default function() {
    const urlGuides = 'http://bestpractices.local/wp-json/wp/v2/posts';

    // $.getJSON('http://bestpractices.local/wp-json/wp/v2/posts', function(data) {
    //     console.log(data);
    // })

    fetch(urlGuides)
        .then(res => res.json())
        .then(guides => {
            const guidesSidebar = document.querySelectorAll('#guides-sidebar-menu');
            guidesSidebar.forEach((elements, items) => {
                let guideGroup = elements.querySelectorAll("li");
                console.log(typeof guideGroup);
                // guideGroup.forEach((element, item) => {
                //     let guide = element.querySelector("li");
                //     console.log(guide);
                // })
            })
        })
        .catch(err => console.log(err));

}
