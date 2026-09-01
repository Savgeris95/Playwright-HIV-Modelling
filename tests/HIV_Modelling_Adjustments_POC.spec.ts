import {test,expect} from '../fixtures/fixtures'


const FILE_PATH = 'C:/Users/savgeris/OneDrive - ECDC/Desktop/HIVmodel POC/tests/data/case_based.xlsx';

test.describe('HIV modelling - Adjustments step', ()=>{

    test.beforeEach(async({pageManager})=>{

        await pageManager.commonPage().clickNextStepButton();
        // Upload case-based data and complete the input step
        await pageManager.inputDataPage().uploadCaseBasedData(FILE_PATH);
        await pageManager.inputDataPage().applyMapping();
        await pageManager.inputDataPage().applyRegrouping();
        await expect(pageManager.commonPage().nextButton()).not.toHaveCSS('cursor', 'not-allowed');
        await pageManager.commonPage().clickNextStepButton();
        await expect(pageManager.page).toHaveURL(/select-data/);
        await pageManager.commonPage().clickNextStepButton();
        // Confirm we landed on the Adjustments page
        await expect(pageManager.page).toHaveURL(/adjustments/);  

    });

    test('Verify "None" option is selected by default on Multiple Imputations type section', async({pageManager})=>{
        
        await expect (pageManager.adjustmentsPage().multipleImputationListOptions().getByRole('option', {name: 'None'})).toBeChecked()
        await expect (pageManager.adjustmentsPage().multipleImputationListOptions().getByRole('option', {name: 'Joint Modelling - JOMO'})).not.toBeChecked()
        await expect (pageManager.adjustmentsPage().multipleImputationListOptions().getByRole('option', {name: 'Chained Equations - MICE'})).not.toBeChecked()

    })

    test('Switch options on Multiple Imputations type section', async({pageManager})=>{

        await pageManager.adjustmentsPage().checkImputationListOptions('Joint Modelling - JOMO')
        await expect (pageManager.adjustmentsPage().multipleImputationListOptions().getByRole('option', {name: 'None'})).not.toBeChecked()
        await expect (pageManager.adjustmentsPage().multipleImputationListOptions().getByRole('option', {name: 'Joint Modelling - JOMO'})).toBeChecked()
        await expect (pageManager.adjustmentsPage().multipleImputationListOptions().getByRole('option', {name: 'Chained Equations - MICE'})).not.toBeChecked()

        await pageManager.adjustmentsPage().checkImputationListOptions('Chained Equations - MICE')
        await expect (pageManager.adjustmentsPage().multipleImputationListOptions().getByRole('option', {name: 'None'})).not.toBeChecked()
        await expect (pageManager.adjustmentsPage().multipleImputationListOptions().getByRole('option', {name: 'Joint Modelling - JOMO'})).not.toBeChecked()
        await expect (pageManager.adjustmentsPage().multipleImputationListOptions().getByRole('option', {name: 'Chained Equations - MICE'})).toBeChecked()

        //reset to None
        await pageManager.adjustmentsPage().checkImputationListOptions('None')
        await expect (pageManager.adjustmentsPage().multipleImputationListOptions().getByRole('option', {name: 'None'})).toBeChecked()
        await expect (pageManager.adjustmentsPage().multipleImputationListOptions().getByRole('option', {name: 'Joint Modelling - JOMO'})).not.toBeChecked()
        await expect (pageManager.adjustmentsPage().multipleImputationListOptions().getByRole('option', {name: 'Chained Equations - MICE'})).not.toBeChecked()
    
    })

    test('Verify "None" option is selected by default on Reporting Delays type section', async({pageManager})=>{

        await expect (pageManager.adjustmentsPage().reportingDelaysOptions().getByRole('option', {name: 'None'})).toBeChecked()
        await expect (pageManager.adjustmentsPage().reportingDelaysOptions().getByRole('option', {name: 'Without trend'})).not.toBeChecked()
        await expect (pageManager.adjustmentsPage().reportingDelaysOptions().getByRole('option', {name: 'With trend'})).not.toBeChecked()

    })

    test('Switch options on Reporting Delays type section', async({pageManager})=>{

        await pageManager.adjustmentsPage().checkReportingDelaysOptions('Without trend')
        await expect (pageManager.adjustmentsPage().reportingDelaysOptions().getByRole('option', {name: 'None'})).not.toBeChecked()
        await expect (pageManager.adjustmentsPage().reportingDelaysOptions().getByRole('option', {name: 'Without trend'})).toBeChecked()
        await expect (pageManager.adjustmentsPage().reportingDelaysOptions().getByRole('option', {name: 'With trend'})).not.toBeChecked()

        await pageManager.adjustmentsPage().checkReportingDelaysOptions('With trend')
        await expect (pageManager.adjustmentsPage().reportingDelaysOptions().getByRole('option', {name: 'None'})).not.toBeChecked()
        await expect (pageManager.adjustmentsPage().reportingDelaysOptions().getByRole('option', {name: 'Without trend'})).not.toBeChecked()
        await expect (pageManager.adjustmentsPage().reportingDelaysOptions().getByRole('option', {name: 'With trend'})).toBeChecked()

        //reset to None
        await pageManager.adjustmentsPage().checkReportingDelaysOptions('None')
        await expect (pageManager.adjustmentsPage().reportingDelaysOptions().getByRole('option', {name: 'None'})).toBeChecked()
        await expect (pageManager.adjustmentsPage().reportingDelaysOptions().getByRole('option', {name: 'Without trend'})).not.toBeChecked()
        await expect (pageManager.adjustmentsPage().reportingDelaysOptions().getByRole('option', {name: 'With trend'})).not.toBeChecked()
    
    })



    test('Adjustments step - Joint Modelling JOMO - Slider is working as expected', async({pageManager})=>{
        
        await pageManager.adjustmentsPage().checkImputationListOptions('Joint Modelling - JOMO')
        
        const box = await pageManager.adjustmentsPage().slider().boundingBox()
        
        if(!box){
            throw new Error('slider not visible') 
        }
        
        const x = box.x + box.width / 2;
        const y = box.y + box.height / 2;
 

        expect (await pageManager.adjustmentsPage().sliderMaxInput()).toBe('4')

        await pageManager.page.mouse.move(x,y)
        await pageManager.page.mouse.down()
        await pageManager.page.mouse.move(x - 100,y)
        await pageManager.page.mouse.up()
        expect (await pageManager.adjustmentsPage().sliderMaxInput()).toBe('3')

        await pageManager.page.mouse.move(x - 100,y)
        await pageManager.page.mouse.down()
        await pageManager.page.mouse.move(x + 200,y)
        await pageManager.page.mouse.up()
        expect (await pageManager.adjustmentsPage().sliderMaxInput()).toBe('5')
    
    })

    test('Adjustments step - Chained Equations MICE - Slider is working as expected', async({pageManager})=>{
        
        await pageManager.adjustmentsPage().checkImputationListOptions('Chained Equations - MICE')
        
        const box = await pageManager.adjustmentsPage().slider().boundingBox()
        
        if(!box){
            throw new Error('slider not visible') 
        }
        
        const x = box.x + box.width / 2;
        const y = box.y + box.height / 2;
 

        expect (await pageManager.adjustmentsPage().sliderMaxInput()).toBe('4')

        await pageManager.page.mouse.move(x,y)
        await pageManager.page.mouse.down()
        await pageManager.page.mouse.move(x - 100,y)
        await pageManager.page.mouse.up()
        expect (await pageManager.adjustmentsPage().sliderMaxInput()).toBe('3')

        await pageManager.page.mouse.move(x - 100,y)
        await pageManager.page.mouse.down()
        await pageManager.page.mouse.move(x + 200,y)
        await pageManager.page.mouse.up()
        expect (await pageManager.adjustmentsPage().sliderMaxInput()).toBe('5')
    
    })

    
});
    

