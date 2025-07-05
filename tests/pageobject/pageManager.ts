import { Page } from "playwright";
import { RegistrationPage } from "./component/registrationPage";


export class PageManager {

    protected readonly registration: RegistrationPage;

    constructor(page: Page) {
        this.registration = new RegistrationPage(page);
    }

    getRegistrationPage() {
        return this.registration;
    }

}