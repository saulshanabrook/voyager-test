var lib_voyager_1 = require("datavoyager/build/lib-voyager");

var container = document.getElementById("root");

var data = {
    values: [
        { fieldA: "A", fieldB: 28 },
        { fieldA: "B", fieldB: 55 },
        { fieldA: "C", fieldB: 43 },
        { fieldA: "D", fieldB: 91 },
        { fieldA: "E", fieldB: 81 },
        { fieldA: "F", fieldB: 53 },
        { fieldA: "G", fieldB: 19 },
        { fieldA: "H", fieldB: 87 },
        { fieldA: "I", fieldB: 52 }
    ]
};
lib_voyager_1.CreateVoyager(container, {}, data);
