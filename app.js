// we create a element h1 

const heading=React.createElement('h1',{},"hello React");



// so  we create a create a element with some attributes

const heading2=React.createElement('h1',{id:'abc'},"Hell react with attributes")


// so we create the nested  elements 

const div=React.createElement(
    'div',
    {id:'parent'},
    React.createElement('div',{id:'child'},
    React.createElement('h1',{id:'heading'},"I am a children heading")
    )
)




// we create a root that tells the react where is root exist for DOM manupulation


const root = ReactDOM.createRoot(document.getElementById('root'));

//render method convert react object(heading) in to a html tag

root.render(div);