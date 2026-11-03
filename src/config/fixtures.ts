import {Page, test as baseTest} from '@playwright/test'
import { LoginPage } from '../pages/loginPage'

type loginFixtures = {
    pageWithLogin: Page
}

export const test = baseTest.extend<loginFixtures>({
    pageWithLogin: async({page},use)=>{
        const logingPage = new LoginPage(page)
        await logingPage.loginApplication()
        await use(page)
    }
})