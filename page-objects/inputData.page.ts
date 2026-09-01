import { expect, Page } from "@playwright/test";

export class InputData{

    readonly page: Page

    constructor(page: Page){
        this.page = page
    }

    async uploadCaseBasedData(filePath: string){
        await this.page.getByRole('tab', { name: 'Case-based data' }).click();
        const caseBasedPanel = this.page.locator('[role="tabpanel"]').filter({ hasText: 'Supported files types: csv, xls, xlsx, zip archives' });
        await expect(caseBasedPanel).toBeVisible();
        await caseBasedPanel.locator('input[type="file"]').setInputFiles(filePath);
    }

    async uploadAggregatedData(filePath: string){
        await this.page.getByRole('tab', { name: 'Aggregated data' }).click();
        const aggregatedPanel = this.page.locator('[role="tabpanel"]').filter({ hasText: 'Supported files types: csv, zip archives' });
        await expect(aggregatedPanel).toBeVisible();
        await aggregatedPanel.locator('input[type="file"]').setInputFiles(filePath);
    }

    async applyMapping(){
        await this.page.locator('#apply-mapping-btn').click();
        await expect (this.page.locator('#migration-compat-alert')).toBeVisible({timeout: 10000});
    }

    async applyRegrouping(){
        await this.page.locator('#apply-regrouping-btn').click();
    }

    caseBasedDataTab(){
        return this.page.getByRole('tab', { name: 'Case-based data' })
    }

    aggregatedDataTab(){
        return this.page.getByRole('tab', { name: 'Aggregated data' })
    }
}