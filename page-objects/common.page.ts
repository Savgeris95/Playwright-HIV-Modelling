import { Page } from "@playwright/test";

export class CommonPage{
    readonly page: Page

    constructor(page: Page){
        this.page = page
    }

    async clickNextStepButton(){
        await this.page.locator('#next-step-button').click();
    }

    async clickPreviousStepButton(){
        await this.page.locator('#prev-step-button').click();
    }

    nextButton(){
        return this.page.locator('#next-step-button')
    }
}