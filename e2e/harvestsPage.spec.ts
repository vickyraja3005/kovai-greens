import { test } from "../src/config/fixtures"
import { sideBarMenuItems } from "../src/constants/constants"
import { HarvestsPage } from "../src/pages/harvestsPage"

// npx playwright test tests/login.spec.ts --project=chromium --headed
test.describe('Harvests Page Validations', async () => {

    let harvestPage: HarvestsPage

    test.beforeEach(async ({ pageWithLogin }) => {
        harvestPage = new HarvestsPage(pageWithLogin)
    })
    
    test('Verifying Harvests Page Total Record Validations', async ({ }) => {
        await harvestPage.navigateViaHomePage(sideBarMenuItems.harvests.locator, sideBarMenuItems.harvests.expectedURL)
        await harvestPage.grabTotalRecordsCount()
    })
})