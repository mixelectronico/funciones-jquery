$('document').ready(function(){

    //BOTON CLICKEABLE
    $('#btnClick').click(function(){
        alert("¡¡ Hiciste click en el Botón !!")
    })

    //BOTON OCULTAR
    $('#btnHide').click(function(){
        $('#imgHideShow').hide()
    })

    //BOTON MOSTRAR
    $('#btnShow').click(function(){
        $('#imgHideShow').show()
    })

    //BOTON CONMUTAR
    $('#btnToggle').click(function(){
        $('#imgHideShow').toggle()
    })

    //BOTON DESLIZAR ARRIBA
    $('#btnSlideUp').click(function(){
        $('#imgSlide').slideUp()
    })

    //BOTON DESLIZAR ABAJO
    $('#btnSlideDown').click(function(){
        $('#imgSlide').slideDown()
    })

    //BOTON CONMUTAR DESLIZAMIENTO
    $('#btnToggleSlide').click(function(){
        $('#imgSlide').slideToggle()
    })
})