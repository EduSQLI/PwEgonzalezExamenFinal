import { Locator, Page } from "@playwright/test";
import { User } from "../../model/user";

export class RegistrationPage {

    readonly firstNameBox: Locator;
    readonly lastNameBox: Locator;
    readonly streetBox: Locator;
    readonly cityBox: Locator;
    readonly stateBox: Locator;
    readonly zipCodeBox: Locator;
    readonly phoneNumberBox: Locator;
    readonly ssnBox: Locator;
    readonly usernameBox: Locator;
    readonly passwordBox: Locator;
    readonly repeatedPasswordBox: Locator;
    readonly registerButton: Locator;

    constructor(page: Page) {
        this.firstNameBox = page.locator('[id="customer.firstName"]');
        this.lastNameBox = page.locator('[id="customer.lastName"]');
        this.streetBox = page.locator('[id="customer.address.street"]');
        this.cityBox = page.locator('[id="customer.address.city"]');
        this.stateBox = page.locator('[id="customer.address.state"]');
        this.zipCodeBox = page.locator('[id="customer.address.zipCode"]');
        this.phoneNumberBox = page.locator('[id="customer.phoneNumber"]');
        this.ssnBox = page.locator('[id="customer.ssn"]');
        this.usernameBox = page.locator('[id="customer.username"]');
        this.passwordBox = page.locator('[id="customer.password"]');
        this.repeatedPasswordBox = page.locator('#repeatedPassword');
        this.registerButton = page.getByRole('button', { name: 'Register' });
    }

    async fillForm(user: User) {
        await this.firstNameBox.fill(user.firstname);
        await this.lastNameBox.fill(user.lastname);
        await this.streetBox.fill(user.address.street);
        await this.cityBox.fill(user.address.city);
        await this.stateBox.fill(user.address.state);
        await this.zipCodeBox.fill(user.address.zipCode);
        await this.phoneNumberBox.fill(user.phone);
        await this.ssnBox.fill(user.ssn);
        await this.usernameBox.fill(user.username);
        await this.passwordBox.fill(user.password);
        await this.repeatedPasswordBox.fill(user.password);
    }
    async submitForm() {
        await this.registerButton.click();
    }
}
