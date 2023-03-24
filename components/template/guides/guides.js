export default function() {
    const urlGuides = 'http://bestpractices.local/wp-json/wp/v2/posts';

    // $.getJSON('http://bestpractices.local/wp-json/wp/v2/posts', function(data) {
    //     console.log(data);
    // })

    fetch(urlGuides)
        .then(res => res.json())
        .then(guides => {
            console.log(guides);
        })
        .catch(err => console.log(err));

}
