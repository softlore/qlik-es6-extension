import $ from "jquery";
import html from "./template.html";
import "./style.css";
import { appStore } from "../../utils/app.store";

export const HelloWorldComponent = (rootElement) => {
    const root = $(rootElement);

    root.empty();
    root.append(html);

    console.log(appStore.ele);
};