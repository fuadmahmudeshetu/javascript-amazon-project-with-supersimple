const fuad = new XMLHttpRequest();

fuad.addEventListener('load', ()=>{
    console.log(fuad.response)
});

fuad.open('GET', 'https://supersimplebackend.dev');
fuad.send();