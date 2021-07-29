import $ from "jquery";
import "./style.css";
import html from "./template.html";

let counter = 0;

export const CounterComponent = (rootElement) => {
    const template = $(rootElement);

    template.empty();
    template.append(html);

    const btns = template.find(".qlik-counter-button");

    btns.eq(0).on("click", _ => {
        counter = counter + 1;
        template.find("#qlik-counter-text").html(counter);
    });

    btns.eq(1).on("click", _ => {
        counter = counter - 1;
        template.find("#qlik-counter-text").html(counter);
    });
};