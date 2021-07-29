import qr from "qr";
import { CounterComponent } from "./components/counter";
import { HelloWorldComponent } from "./components/hello-world";

export default {
    paint: function ($elem, layout) {
        const baseUrl = qr.toUrl(".");

        const cssFile = baseUrl + "/" + process.env.APP_NAME + ".css";

        qr(["css!" + cssFile], _ => {
            HelloWorldComponent($elem[0]);
            // CounterComponent($elem[0]);
        });
    }
};