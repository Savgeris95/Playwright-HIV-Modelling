import { Page } from "@playwright/test";

export class Welcome{

    readonly page: Page

    constructor(page: Page){
        this.page = page
    }

    
}