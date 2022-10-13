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

let createElement =  React.createElement;

function createMovieUi(data,root){
    // rootEle.innerHTML = '';
    let ui = data.map((movie,i) => {
        let btn = createElement('button',{id:i,onclick:handleChange},movie.watched ? 'wathed' : 'TO watche');
        // btn.addEventListener('click',handleChange);
        let li = createElement(
        'li',
        null,
        createElement('label',{for:i},movie.name),btn
        );
        // let button = document.createElement('button');
        // button.id = i;
        // button.innerText = movie.watched ? 'wathed' : 'TO watche';
        // button.addEventListener('click',handleChange);
        // let label = document.createElement('label');
        // label.for = i;
        // label.innerText = movie.name;
        
    });
    ReactDOM.render(ui,root)
}

createMovieUi(allMovies, rootEle);



// function createElement(type,attr ={}, ...children){
//     let element = document.createElement(type);
//     for (const key in attr) {
//         if (key.startsWith('data-')) {
//          element.setAttribute(key,attr[key]);
//         }else{
//             element[key] = attr[key]
//         }
//     }
//     children.forEach((child) => {
//         if(typeof child === 'object'){
//             element.append(child);
//         }
//         if(typeof child === 'string'){
//             let node = document.createTextNode(child);
//             element.append(node);
//         }
//     });
//     return element;
// }