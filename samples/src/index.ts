import { Sample1HelloWorld } from "./samples/Sample1HelloWorld";

function runSample(sampleClassName: string) {
    
    switch(sampleClassName) {
        case "Sample1HelloWorld" : {
            console.log(sampleClassName + " is running:");
            let s : ISample = new Sample1HelloWorld();
            s.Run(); 
        } break;
        default : {
            console.log("There is no such method");
        }
    }
}

runSample("Sample1HelloWorld");