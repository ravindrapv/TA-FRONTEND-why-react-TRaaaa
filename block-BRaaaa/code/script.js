let input = document.querySelector('input');
let rootEle = document.querySelector('.movie_List');


let allMovies = [
    {
        name:"sriramadasu",
        watched:false,
    },
    {
        name:"annamaya",
        watched:true,
    },
]

input.addEventListener('keyup',(event) => {
    if(event.keyCode === 13){
        allMovies.push({
            name:event.target.value,
            watched:false
        });
        event.target.value = '';
        createMovieUi(allMovies, rootEle);
    }
});

function handleChange(event){
    let id = event.target.id;

    allMovies[id].watched = !allMovies[id].watched;
    createMovieUi(allMovies, rootEle);
}


function createMovieUi(data,root){
    rootEle.innerHTML = '';
    data.forEach((movie,i) => {
        let li = document.createElement('li');
        let button = document.createElement('button');
        button.id = i;
        button.innerText = movie.watched ? 'wathed' : 'TO watche';
        button.addEventListener('click',handleChange);
        let label = document.createElement('label');
        label.for = i;
        label.innerText = movie.name;

        li.append(label, button);

        rootEle.append(li);
    });
}

createMovieUi(allMovies, rootEle);