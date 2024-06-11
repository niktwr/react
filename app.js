const elem = React.createElement("div",{id:"parent"}, 
    React.createElement("div",{id:"child"}, 
        [
            React.createElement("h1",{}, "I m h1 tag"),
            React.createElement("p",{}, "Paragraph tag")
        ]
    )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(elem);