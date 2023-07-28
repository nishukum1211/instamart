const heading = React.createElement("h1", {
    id: "title"
}, "Heading1");
const heading = React.createElement("h2", {
    id: "title"
}, "Heading2");
const Container = React.createElement("div", {
    id: "Container" //html attributes
}, [
    Heading1,
    Heading2
]); //whwn we have to pass multiple child in react,like array
//I want to run code inside the root
const root = ReactDOM.createRoot(document.getElementById("root")); /*ReactDom which is responsible for all the DOM operation,like html code but browser cosive it like DOM*/ 
/*put heading inside the root,root is the place where react runs.ex-search bar as the root.*/ root.render(Container); //render modify to dom
 /*why react is a library-when you build a whole website using html,css,js it get huge.suppose we have header,footer,and root*
    /*whenever we pass inside render function supoose heading its get injected inside the root*/  /*what is async and defer?*/  /*const heading = React.createElement("h1",null,"Namaste Everyone");,that means*/  /*const heading = React.createElement("h1",style:,"Namaste Everyone");,can i put style over here and how can*/ 

//# sourceMappingURL=index.6bd02f5a.js.map
