import qr from "qr";
import React from "react";
import ReactDOM from "react-dom";
import { CounterComponent } from "./components/counter";
import { HelloWorldComponent } from "./components/hello-world";
import { appStore } from "./utils/app.store";
import "./RENAME_THIS_FILE.qext";

/**
 * To load resources only once require it before the paint function
 */
const cssFile = appStore.baseUrl + "/" + process.env.APP_NAME + ".css";
qr(["css!" + cssFile]);

export default {
    paint: function ($elem, layout) {
        appStore.updateInstance(this, $elem, layout);
  
        if(!appStore.painted){
            appStore.painted = true;

            ReactDOM.render(
                // <HelloWorldComponent/>,
                <CounterComponent/>,
                $elem[0]
            );
        }
    }
};