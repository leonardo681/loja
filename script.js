// script.js

// Adicionar interatividade aos botões "Saiba mais"
document.querySelectorAll('.btn-saiba-mais button').forEach(button => {
    button.addEventListener('click', () => {
        alert("Mais informações sobre o modelo em breve!");
    });
});

// Interatividade no menu dropdown
document.querySelectorAll('.dropdown').forEach(dropdown => {
    dropdown.addEventListener('mouseenter', () => {
        dropdown.querySelector('.dropdown-content').style.display = 'block';
    });
    
    dropdown.addEventListener('mouseleave', () => {
        dropdown.querySelector('.dropdown-content').style.display = 'none';
    });
});

$(document).ready(function() {
    $(".circulo").click(function() {
        $(".imagemoto").attr("src", $(this).attr("data-image"));
    });
});

$(document).ready(function() {
    $(".parcela").click(function() {
        var newText = $(this).attr("data-text"); 
        if (newText) {
            $("div.preso.nada p").text(newText);
        }
    });
});

$(document).ready(function() {
    $(".parcela").click(function() {
        $(".parcela").removeClass("caixa");
        $(this).addClass("caixa");
    });
});

$('.order').click(function() {
    let button = $(this);

    if (!button.hasClass('animate')) {
        button.addClass('animate');
        setTimeout(() => {
            button.removeClass('animate');
        }, 10000);    
    }
});
