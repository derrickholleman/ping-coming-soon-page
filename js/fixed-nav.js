function FixedNav () {
    if ($(this).scrollTop() < 7000){
        $('.fixed-nav').addClass('sticky');
    }
    else{
        $('.fixed-nav').removeClass('sticky');
    }
}

$( window ).scroll( FixedNav );
$( FixedNav );

