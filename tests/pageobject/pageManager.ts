import { Page } from "playwright";
import { RegistrationPage } from "./component/registrationPage";
import { HomePage } from "./component/homePage";


export class PageManager {

    protected readonly registration: RegistrationPage;
    protected readonly homePage: HomePage;

    constructor(page: Page) {
        this.registration = new RegistrationPage(page);
        this.homePage = new HomePage(page);
    }

    getRegistrationPage() {
        return this.registration;
    }

    getHomePage() {
        return this.homePage;
    }

}