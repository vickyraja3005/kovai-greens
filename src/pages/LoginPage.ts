import { Page, Locator, expect } from "@playwright/test"

export class LoginPage {

    // HERE WE HAVE DECLARED THE PAGE VARIABLE AS A PAGE TYPE TO STORE THE PAGE VARIABLE WHICH IS RECEIVED FROM THE HOMEPAGE.SPEC FILE
    page: Page
    username: Locator
    password: Locator
    loginButton: Locator
    profileIcon: Locator
    // baseURL:String
    // loginUsername:String
    // loginPassword:String
    logoutButton:Locator
    homePageHeading:Locator

    // RECEIVING THE PAGE PARAMETER FROM HOMEPAGE.SPEC FILE AND STRORING IT INTO THE THIS.PAGE VARIABLE
    constructor(page: Page) {
        this.page = page
        this.username = page.getByTestId('connect-username-input')
        this.password = page.getByTestId('connect-password-input')
        this.loginButton = page.getByTestId('connect-button-button-2')
        this.profileIcon = page.getByTestId('app-account-and-password-button')
        // this.baseURL=process.env.baseURL || ""
        // this.loginUsername=process.env.username || ""
        // this.loginPassword=process.env.password || ""
        this.logoutButton=page.getByTestId('app-span-3')
        this.homePageHeading=page.getByTestId('app-kovai-greens-h1')
    }

    async loginApplication() {
        // LOGIN PAGE VALIDATIONS
        await this.page.goto('https://kovai-greens.vercel.app/')
        await this.username.fill('Aravind')
        await this.password.fill('Vidhu@251021')

        // await this.page.goto(this.baseURL)
        // await this.username.fill(this.loginUsername)
        // await this.password.fill(this.loginPassword)
        await this.loginButton.click()
        await this.profileIcon.waitFor({ state: 'visible' })
    }
}