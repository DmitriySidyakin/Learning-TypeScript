"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sample1HelloWorld_1 = require("./samples/Sample1HelloWorld");
function runSample(sampleClassName) {
    switch (sampleClassName) {
        case "Sample1HelloWorld":
            {
                console.log(sampleClassName + " is running:");
                let s = new Sample1HelloWorld_1.Sample1HelloWorld();
                s.Run();
            }
            break;
        default: {
            console.log("There is no such method");
        }
    }
}
runSample("Sample1HelloWorld");
