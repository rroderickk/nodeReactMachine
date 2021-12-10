// /* 1.Escribiendo un archivo que se llama App.js que contiene comandos basicos de reacts para inicializar una app en este mismo directorio*/
// const fs = require("fs");

// fs.writeFile(
//     "./App.js",
//     'import React from "react"; import ReactDOM from "react-dom";\n import { 444444 } from "./App"; import "./index.css";\n ReactDOM.render(< 4444444444 />, document.getElementById("root"));',
//     function (err) {
//         if (err) {
//             console.log(err);
//         }
//     }
// );
// console.log("Ultima linea de codigo");
// /* 1.Finaliza la creacion de un archivo que se llama ~/src/App.js que contiene comandos basicos de reacts para inicializar una app */

/* Index.js Escribiendo un archivo que se llama public/index.html que contiene comandos Html5React*/
const fs = require("fs");
var path = require("path");

const i = "./public/index.html";
const title = "titleAppReactHtml5";
const nodemachine = "H4NodeMachineH4";

fs.promises
    .mkdir(path.dirname(i), { recursive: true })
    .then((x) =>
        fs.promises.writeFile(
            i,
            '<!DOCTYPE html>\n<html lang="en">\n<head> \n<meta charset="utf-8" /> \n<meta name="viewport" content="width=device-width, initial-scale=1" /> \n<title>' +
                title +
                'TodoMachine</title> \n</head> \n<body> \n<div id="root"><h4>' +
                nodemachine +
                '</h4></div> \n<script> \nconst root = document.getElementById("root"); </script> </body> </html>'
        )
    );
console.log("Creado:\t" + i);
// /* Index.html I have a file: public/index.html contains Html5React*/

// //* Index.js Escribiendo un archivo que se llama src/index.js que contiene comandos basicos reacts en directorio src*/
// const fs = require("fs");
// var path = require("path");

const i_ = "./src/index.js";

fs.promises
    .mkdir(path.dirname(i_), { recursive: true })
    .then((x) =>
        fs.promises.writeFile(
            i_,
            'import React from "react"; import ReactDOM from "react-dom";\n import { ' +
                title +
                ' } from "./App"; import "./index.css";\n ReactDOM.render(< ' +
                title +
                ' />, document.getElementById("root"));'
        )
    );
console.log("Creado:\t" + i_);

// /* Index.js I have a file: public/index.js contains React*/
// //         console.log("Archivo creado");

// /* index.css 4.Writting a file: src/index.css contains Css*/
// //const fs = require("fs");
// //var path = require("path");

const ic = "./src/index.css";

fs.promises
    .mkdir(path.dirname(ic), { recursive: true })
    .then((x) =>
        fs.promises.writeFile(
            ic,
            "body {\nmargin: 1rem;\n}\n#root{\nmargin: 1rem;\n}"
        )
    );
console.log("Creado:\t" + ic);
// index.css I have a file: public/App.css contains AppCssReact*/

// /* App.js Escribiendo un archivo que se llama App.js que contiene comandos basicos reacts en directorio src*/
// //const fs = require("fs");
// //var path = require("path");

const a = "./src/App.js";

fs.promises
    .mkdir(path.dirname(a), { recursive: true })
    .then((x) =>
        fs.promises.writeFile(
            a,
            'import React from "react";\n import { Component } from "./Component"; \nfunction ' +
                title +
                "(){return(<React.Fragment>\n</React.Fragment>\n);}\nexport {" +
                title +
                "};"
        )
    );
console.log("Creado:\t" + a);
// /* App.js I have la creacion de un archivo que se llama ~/src/App.js que contiene comandos Jsx*/

// /* 4.Writtign a file: src/ButtonNeon.js contains Jsx*/
// const fs = require("fs");

//const btn-neon = "./src/ButtonNeon.js";
// fs.writeFile(
//     btn-neon,
//     'import React from "react"; import ReactDOM from "react-dom";\n import { 444444 } from "./App"; import "./index.css";\n ReactDOM.render(< 4444444444 />, document.getElementById("root"));',
//     function (err) {
//         if (err) {
//             console.log(err);
//         }
//         console.log("Archivo creado");
//     }
// );
// console.log("Creado:\t" + btn-neon);
// /* 4.I have a file: src/ButtonNeon.js contains ButtonNeonReact*/
// /* 4.Finaliza la creacion de un archivo que se ButtonNeon.js que contiene comandos Jsx*/
