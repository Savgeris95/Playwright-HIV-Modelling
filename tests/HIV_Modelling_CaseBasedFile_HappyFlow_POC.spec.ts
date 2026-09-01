import {test,expect} from '../fixtures/fixtures'

const filePath = 'C:/Users/savgeris/OneDrive - ECDC/Desktop/HIVmodel POC/tests/data/case_based.xlsx'

test('HIV modelling - Happy flow', async ({ pageManager }) => {

  //Welcome step
  await pageManager.commonPage().clickNextStepButton()
  
  //Input data upload step
  await pageManager.inputDataPage().uploadCaseBasedData(filePath)
  await pageManager.inputDataPage().applyMapping()
  await pageManager.inputDataPage().applyRegrouping()

  //Verify that the next button is not disabled before you go to the next step
  await expect(pageManager.commonPage().nextButton()).not.toHaveCSS('cursor','not-allowed')
  await pageManager.commonPage().clickNextStepButton()

  //Data summary step
  await expect(pageManager.dataSummaryPage().caseBasedSummaryText()).toBeVisible()
  await pageManager.commonPage().clickNextStepButton()

  //Adjustments step
  await expect(pageManager.adjustmentsPage().caseBaseDataAdjustmentsText()).toBeVisible()
  await pageManager.adjustmentsPage().checkImputationListOptions('Joint Modelling - JOMO')
  await pageManager.adjustmentsPage().setNumberOfImputations(1)
  await pageManager.adjustmentsPage().runAdjustments()
  await pageManager.commonPage().clickNextStepButton()

  //Migration step
  await pageManager.migrationPage().runMigration()
  await pageManager.commonPage().clickNextStepButton()

  //Modelling step
   await pageManager.modellingPage().navigateToSubPage('Run Main Fit')
   await pageManager.modellingPage().runMainModel()
   await pageManager.commonPage().clickNextStepButton()
  
  //Reports step
  await pageManager.reportsPage().createReport()
  await pageManager.commonPage().clickNextStepButton()
  
});


