'use strict' ;

const state={
    user:'',
    results:[]
}

function handleUserChange() {
    $('#user').change(e=>{
        e.preventDefault()
        return state.user=e.target.value
    });
};

function handleSubmit() {
    $('input[type="submit"]').click(e=>{
        e.preventDefault()
        fetch(`https://api.github.com/users/${state.user}/repos`)
        .then(response => response.json())
        .then(responseJson => {
            state.results=responseJson;
            console.log(state.results)
        })
        displayResults()
    })  
}

function displayResults() {
    $('.results').empty();
    let htmlResults=state.results.reduce((acc,val)=>{
        return acc+=`<p>${val.name}</p><a href="${val.html_url}" target="_blank">${val.html_url}</a>`
    },'')
    debugger
    $('.results').html(htmlResults)
}

function main() {
    handleUserChange()
    handleSubmit()
}

$(main)