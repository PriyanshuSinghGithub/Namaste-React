//* create a new element using JS
/* 
    const heading = document.createElement("h1")
    heading.innerHTML = "Hello world"
    const root = document.getElementById("root")
    root.appendChild(heading)
*/

//* create a new element using React
const heading = React.createElement("h1", { id: "heading" }, "Hello world");
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

//* How to create nested div's using React
/* like the following 
    <div id="parent" >
        <div id="child">
            <h1>I'm a h1 tag</h1>
        </div>
    </div>
*/
/*  //*the solution :
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "Hello Mate")
  )
);
root.render(parent);
*/

/* //*IF you want to create siblings of an element then give it in an array
 like the following 
    <div id="parent" >
        <div id="child">
            <h1>I'm a h1 tag</h1>
            <h2>I'm a h2 tag</h2>
        </div>
    </div>
*/
//* Eg. 1
/*const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello I'm h1"),
    React.createElement("h2", {}, "Hello I'm h2"),
  ])
);
root.render(parent);
*/

//* Eg.2
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Hello I'm h1 of child 1"),
    React.createElement("h2", {}, "Hello I'm h2 of child 1"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hello I'm h1 of child 2"),
    React.createElement("h2", {}, "Hello I'm h2 of child 2"),
  ]),
]);

root.render(parent);
console.log(parent)
