let input = document.querySelector('input');
let rootEle = document.querySelector('.movie_List');


let allMovies = [
    {
        name:"sriramadasu",
        watched:true
    },
    {
        name:"annamaya",
        watched:false
    },
]

input.addEventListener('keyup',(event) => {
    if(event.keyCode === 13){
        allMovies.push({
            name:event.target.value,
            watched:false
        });
        event.target.value = '';
        createMovieUi();
    }
});


function createMovieUi(){
    
}