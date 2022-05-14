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
                imagem.html(`<img class="imagem" scr="${result.url}"/>`)
                $('#video').hide()
                $('#img').show()
            }else {
                
                video.attr('src', result.url)
                console.log(result);
                $('#video').show()
                $('#img').hide()

               
            }

}

$('#video').hide()
$('#img').hide()
