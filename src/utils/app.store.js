import qr from "qr";
import qlik from "qlik";

class AppStore {

    constructor() {
        this.baseUrl = qr.toUrl(".");
        this.context = null;
        this.qlikApp = null;
        this.ele = null;
        this.layout = null;
    }

    updateInstance(context, ele, layout){
        this.layout = layout;
        this.ele = ele;
        this.context = context;
        this.qlikApp = qlik.currApp(context);
    }
}

export const appStore = new AppStore();
