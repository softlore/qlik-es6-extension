import $ from "jquery";
import html from "./template.html";
import "./style.css";

export const HelloWorldComponent = (rootElement) => {
    const root = $(rootElement);

    root.empty();
    root.append(html);
};