import { test } from "../src/config/fixtures"
import { sideBarMenuItems } from "../src/constants/constants"
import { ProdcutsPage } from "../src/pages/ProdcutsPage"

// npx playwright test e2e --project=chromium --headed
test.describe('Products Page Validations', async () => {

    let prodcutsPage: ProdcutsPage

    test.beforeEach(async ({ pageWithLogin }) => {
        prodcutsPage = new ProdcutsPage(pageWithLogin)
    })
    
    test('Verifying Add New Prodcut Flow', async ({ }) => {
        await prodcutsPage.navigateViaHomePage(sideBarMenuItems.products.locator, sideBarMenuItems.products.expectedURL)
        await prodcutsPage.addNewProdcut()
    })
})