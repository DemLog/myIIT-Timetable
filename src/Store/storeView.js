import {makeAutoObservable} from "mobx";

class StoreView {
    activeView = {
        app: "auth",
    };

    constructor() {
        makeAutoObservable(this);
    }

    changeView(view, name) {
        this.activeView[view] = name;
    };
};

const storeView = new StoreView();

export default storeView;
export { StoreView };