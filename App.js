{
  /* 
    <div>
        <h1>I am heading 1</h1>
        <h1>I am heading 2</h1>
    </div>
    <div>
        <h1>I am heading 3</h1>
        <h1>I am heading 4</h1>
    </div> 
    
*/
}
// ToDO: Write a React code to Implement the above HTML

const html = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am heading 1"),
    React.createElement("h1", {}, "I am heading 1"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am heading 1"),
    React.createElement("h1", {}, "I am heading 1"),
  ]),
]);

// Problem with the above code is that it is super difficult to write
// it decreases the development velocity
// Solution: JSX

const root = ReactDOM.createRoot(document.getElementById("root"));
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "hello world from react"
);
console.log(heading);
root.render(html);
