$(document).ready(function() {
    $('a').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            let hash = this.hash;
            console.log(hash);
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
});
//Drop-down menu.
//Toggle menu by clicking button
function myFunction() {
    document.getElementById('myDropdown').classList.toggle('show');
}
