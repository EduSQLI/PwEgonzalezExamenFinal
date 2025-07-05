import { Locator, Page } from "@playwright/test";
import { User } from "../../model/user";

export class HomePage {

    readonly registerLink: Locator;
    readonly userField: Locator;
    readonly passwordField: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.registerLink = page.getByRole('link', { name: 'Register' });
        this.userField = page.locator('input[name="username"]');
        this.passwordField = page.locator('input[name="password"]');
        this.loginButton = page.getByRole('button', { name: 'Log In' });
    }
    
    async registerLinkClick() {
        await this.registerLink.click();
    }

    async loginButtonClick() {
        await this.loginButton.click();
    }
}