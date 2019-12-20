'use strict;'

// let container=$.

$.get('data.json','json').then(data=>{
    data.forEach(element => {
        $('ul').append(`<li> ${element.name} : ${element.age}</li>`)
    });
})
// $('document').ready(style)

// function style(){ $.find("li").style.color = "#ff0000"
// }
