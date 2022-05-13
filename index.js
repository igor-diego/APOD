$('#btn').click(function() {
    
    requisicao()
})


    function requisicao() {
        const data = $('#data').val()
       $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=zn3IsgyhbVyTpMQrm5CJ7Gb4vWdzdpHcPqw1fc3U&date=${data}`,
        type: 'GET',
        success:function(data) {
            exibir(data)
            
        }
    })
 }
    


function exibir(result) {
    const subtitulo = $('#subtitulo')
    const explanation = $('#explanation')
    const copy = $('#copy')
    const imagem = $('#img')
    const video = $('#video')
    
        $('#img').attr('src',result.url)
            subtitulo.html(`${result.title}`)
            explanation.html(`${result.explanation}`)
            copy.html(`${result.copyright}`)

            if(result.media_type == 'image') {
                imagem.html(`<img class="img" scr="${result.url}"/>`)
                $('#img').css('width', '500px')
                $('#img').css('height', '300px')
                $('#video').hide()
                $('#img').show()
            }else {
                
                // video.attr(`<iframe class="img" src="${result.url}?autoplay=1&mute=1"></iframe>`)
                video.attr('src', result.url)
                $('#video').css('width', '500px')
                $('#video').css('height', '300px')
                console.log(result);
                $('#video').show()
                $('#img').hide()

                // (`<iframe class="img" src="${result.url}?autoplay=1&mute=1"></iframe>`)
                // video.html(`<iframe class="img" src="${result.url}?autoplay=1&mute=1"></iframe>`)
                //`<iframe class="img" src="${result.url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
            }

}

$('#video').hide()
$('#img').hide()
