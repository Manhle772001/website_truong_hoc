
$( document ).ready(function() {
    var slideIndex = 0;
    showSlide(slideIndex)

    $('#open_search').on('click',(e)=>{
    console.log($.contains($('.input_search')),$('#open_search'));
       $('.sup_search').toggle()
    })


    function showSlide(index){
        var slides = $('.slide');
        console.log(slides);

        if(index >= slides.length) {slideIndex = 0}
        if(index < 0) {slideIndex = slideIndex - 1}
        slides.hide()
        slides.eq(slideIndex).show();
    }
});

