import {test,expect} from '../fixtures/fixtures'


const filePath = 'C:/Users/savgeris/OneDrive - ECDC/Desktop/HIVmodel POC/tests/data/aggregated.csv';

test('HIV modelling - Full flow with URL validation and tab verification', async ({ pageManager }) => {
	
	await expect(pageManager.page).toHaveURL(/hiv-modeling-tool-dev\.ecdc\.azure/)

	// Welcome step - verify page loads correctly
	await expect(pageManager.commonPage().nextButton()).toBeVisible()
	await pageManager.commonPage().clickNextStepButton()

	// Input data upload step - verify both data type tabs are available
	await expect(pageManager.inputDataPage().caseBasedDataTab()).toBeVisible()
	await expect(pageManager.inputDataPage().aggregatedDataTab()).toBeVisible()

	// Upload aggregated data from the Aggregated data tab
	await pageManager.inputDataPage().uploadAggregatedData(filePath)

	// Verify next button is enabled before proceeding
	await expect(pageManager.commonPage().nextButton()).not.toHaveCSS('cursor', 'not-allowed', { timeout: 30000 })
	await pageManager.commonPage().clickNextStepButton()

	// Data summary step
	await expect(pageManager.page.getByText(/Select .* data for summary/i)).toBeVisible()
	await pageManager.commonPage().clickNextStepButton()

	// Adjustments step - verify page displays properly
	await expect(pageManager.page.getByText('Case-base data adjustments parameters')).toBeVisible()
	await pageManager.commonPage().clickNextStepButton()

	// Migration step - run migration and wait for completion
	await expect(pageManager.migrationPage().runMigrationButton()).toBeVisible()
	await pageManager.migrationPage().runMigration()
	
	// Ensure next button is enabled after migration completes
	await expect(pageManager.commonPage().nextButton()).not.toHaveCSS('cursor', 'not-allowed')
	await pageManager.commonPage().clickNextStepButton()

	// Modelling step - run main fit model
	await pageManager.modellingPage().navigateToSubPage('Run Main Fit')
	await expect(pageManager.page.locator('#run-main-model-button')).toBeVisible()
	await pageManager.modellingPage().runMainModel()
	await pageManager.commonPage().clickNextStepButton()

	// Reports step - create and verify report
	await expect(pageManager.page.locator('#create-report-button')).toBeVisible()
	await pageManager.reportsPage().createReport()
	
	// Wait for report generation to complete before test ends
	await expect(pageManager.commonPage().nextButton()).not.toHaveCSS('cursor', 'not-allowed', { timeout: 120000 })
	
});
