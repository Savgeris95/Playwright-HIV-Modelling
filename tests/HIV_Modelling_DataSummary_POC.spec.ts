import {test,expect} from '../fixtures/fixtures'

const FILE_PATH = 'C:/Users/savgeris/OneDrive - ECDC/Desktop/HIVmodel POC/tests/data/case_based.xlsx';

test.describe('HIV modelling - Data Summary step', () => {

    test.beforeEach(async ({ pageManager }) => {

        await pageManager.commonPage().clickNextStepButton();

        // Upload case-based data and complete the input step
        await pageManager.inputDataPage().uploadCaseBasedData(FILE_PATH);
        await pageManager.inputDataPage().applyMapping();
        await pageManager.inputDataPage().applyRegrouping();

        await expect(pageManager.commonPage().nextButton()).not.toHaveCSS('cursor', 'not-allowed');
        await pageManager.commonPage().clickNextStepButton();

        // Confirm we landed on the Data Summary page
        await expect(pageManager.page).toHaveURL(/select-data/);
    });

    test('Diagnosis Year section shows correct default range', async ({ pageManager }) => {

        await expect(pageManager.page.getByRole('heading', { level: 5, name: 'DIAGNOSIS YEAR' })).toBeVisible();
        await expect(pageManager.dataSummaryPage().diagnosisYearMinSlider()).toBeVisible();
        await expect(pageManager.dataSummaryPage().diagnosisYearMaxSlider()).toBeVisible();
        expect(await pageManager.dataSummaryPage().diagnosisYearMinInput()).toHaveValue('1981');
        expect(await pageManager.dataSummaryPage().diagnosisYearMaxInput()).toHaveValue('2016');
    });

    test('Notification Quarter section has visible sliders', async ({ pageManager }) => {

        await expect(pageManager.page.getByRole('heading', { level: 5, name: 'NOTIFICATION QUARTER' })).toBeVisible();
        await expect(pageManager.dataSummaryPage().notificationQuarterMinSlider()).toBeVisible();
        await expect(pageManager.dataSummaryPage().notificationQuarterMaxSlider()).toBeVisible();
    });

    test('records count shows full dataset by default', async ({ pageManager }) => {

        await expect(pageManager.dataSummaryPage().recordsCountText()).toContainText('100.00%',{timeout: 10000});
        await expect(pageManager.dataSummaryPage().recordsCountText()).toContainText('11,575',{timeout: 10000});
    });

    //There is a bug, reported under https://dev.azure.com/EU-ECDC/IT%20Solutions%20Hub/_workitems/edit/141836
    test('narrowing Diagnosis Year range reduces records count', async ({ pageManager }) => {
        // Shift minimum year forward to exclude early records
        const minInput = await pageManager.dataSummaryPage().diagnosisYearMinInput();
        
        await minInput.clear();
        await minInput.fill('1990');

        await expect(pageManager.dataSummaryPage().recordsCountText()).not.toContainText('100.00%', { timeout: 10000 });

        // Reset to original minimum and verify the full count is restored
        await minInput.fill('1981');
        await minInput.press('Enter');
        await expect(pageManager.dataSummaryPage().recordsCountText()).toContainText('100.00%', { timeout: 10000 });
    });

    //There is a bug, reported under https://dev.azure.com/EU-ECDC/IT%20Solutions%20Hub/_workitems/edit/141836
    test('narrowing Diagnosis Year maximum reduces records count', async ({ pageManager }) => {

        const maxInput = await pageManager.dataSummaryPage().diagnosisYearMaxInput();
        await maxInput.fill('2010');
        await maxInput.press('Enter');
        await expect(pageManager.dataSummaryPage().recordsCountText()).not.toContainText('100.00%', { timeout: 10000 });
    });

    test('"Apply this data selection in adjustments" checkboxes are visible and unchecked by default', async ({ pageManager }) => {
        
        const checkboxes = pageManager.dataSummaryPage().applyToAdjustmentsCheckboxes();

        // Two checkboxes: one per data type section
        await expect(checkboxes.first()).toBeVisible();
        await expect(checkboxes.last()).toBeVisible();
        await expect(checkboxes.first()).not.toBeChecked();
        await expect(checkboxes.last()).not.toBeChecked();
    });

    test('"Apply this data selection in adjustments" checkbox can be toggled', async ({ pageManager }) => {
        const checkbox = pageManager.dataSummaryPage().applyToAdjustmentsCheckboxes().first();

        await checkbox.check();
        await expect(checkbox).toBeChecked();

        await checkbox.uncheck();
        await expect(checkbox).not.toBeChecked();
    });

    test('Missing data summary section is visible with All/Female/Male options', async ({ pageManager }) => {

        await expect(pageManager.dataSummaryPage().missingDataSummaryHeading()).toBeVisible();

        const listbox = pageManager.dataSummaryPage().missingDataGenderListbox();
        await expect(listbox.getByRole('option', { name: 'All' })).toBeVisible();
        await expect(listbox.getByRole('option', { name: 'Female' })).toBeVisible();
        await expect(listbox.getByRole('option', { name: 'Male', exact: true })).toBeVisible();
    });

    test('"All" is selected by default in Missing data summary filter', async ({ pageManager }) => {
    
        const listbox = pageManager.dataSummaryPage().missingDataGenderListbox();

        await expect(listbox.getByRole('option', { name: 'All' })).toHaveAttribute('aria-selected', 'true');
    });

    test('Missing data summary filter switches between Female and Male correctly', async ({ pageManager }) => {
        
        const listbox = pageManager.dataSummaryPage().missingDataGenderListbox();

        await pageManager.dataSummaryPage().selectMissingDataGender('Female');
        await expect(listbox.getByRole('option', { name: 'Female', exact: true })).toHaveAttribute('aria-selected', 'true');
        await expect(listbox.getByRole('option', { name: 'All', exact: true })).not.toHaveAttribute('aria-selected', 'true');

        await pageManager.dataSummaryPage().selectMissingDataGender('Male');
        await expect(listbox.getByRole('option', { name: 'Male', exact: true })).toHaveAttribute('aria-selected', 'true');
        await expect(listbox.getByRole('option', { name: 'Female', exact: true })).not.toHaveAttribute('aria-selected', 'true');

        // Reset to All
        await pageManager.dataSummaryPage().selectMissingDataGender('All');
        await expect(listbox.getByRole('option', { name: 'All', exact: true })).toHaveAttribute('aria-selected', 'true');
    });

    test('Reporting delays summary section is visible with All/Female/Male options', async ({ pageManager }) => {

        await expect(pageManager.dataSummaryPage().reportingDelaysSummaryHeading()).toBeVisible();

        const listbox = pageManager.dataSummaryPage().reportingDelaysGenderListbox();
        await expect(listbox.getByRole('option', { name: 'All' })).toBeVisible();
        await expect(listbox.getByRole('option', { name: 'Female', exact: true})).toBeVisible();
        await expect(listbox.getByRole('option', { name: 'Male' ,exact: true})).toBeVisible();
    });

    test('"All" is selected by default in Reporting delays filter', async ({ pageManager }) => {

        const listbox = pageManager.dataSummaryPage().reportingDelaysGenderListbox();
        await expect(listbox.getByRole('option', { name: 'All' })).toHaveAttribute('aria-selected', 'true');
    });

    test('Reporting delays filter switches between gender options correctly', async ({ pageManager }) => {

        const listbox = pageManager.dataSummaryPage().reportingDelaysGenderListbox();

        await pageManager.dataSummaryPage().selectReportingDelaysGender('Female');
        await expect(listbox.getByRole('option', { name: 'Female', exact: true })).toHaveAttribute('aria-selected', 'true');
        await expect(listbox.getByRole('option', { name: 'All', exact: true })).not.toHaveAttribute('aria-selected', 'true');

        await pageManager.dataSummaryPage().selectReportingDelaysGender('Male');
        await expect(listbox.getByRole('option', { name: 'Male', exact: true })).toHaveAttribute('aria-selected', 'true');
        await expect(listbox.getByRole('option', { name: 'Female', exact: true })).not.toHaveAttribute('aria-selected', 'true');
    });

});
