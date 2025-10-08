import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()

describe('Orange HRM Tests', () => {

  const selectorList = { 
    
    
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: '.oxd-input--active',
    dataField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: '.--close',
    submitButton: "[type='submit']",
    selectButton: '.oxd-select-text--arrow',
    selectCountry:':nth-child(27)',
    selectMartial: '.oxd-select-dropdown > :nth-child(2)'
  
  }
  it.only('User Info Update - Success', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
    menuPage.acessMyInfo()
    
    cy.get(selectorList.firstNameField).clear().type('FirstNameTest')
    cy.get(selectorList.lastNameField).clear().type('LastNameTest')
   // cy.get(selectorList.genericField).eq(3).clear().type('NickNameTest')
    cy.get(selectorList.genericField).eq(3).clear().type('EIdTest')
    cy.get(selectorList.genericField).eq(4).clear().type('OtherIdTest')
    cy.get(selectorList.genericField).eq(5).clear().type('DLNTest')
    cy.get(selectorList.genericField).eq(6).clear().type('2026-07-10')
    cy.get(selectorList.dateCloseButton).click()
    cy.get(selectorList.selectButton).eq(0).click()
    cy.get(selectorList.selectCountry).click()
    cy.get(selectorList.selectButton).eq(1).click()
    cy.get(selectorList.selectMartial).click()
   // cy.get(selectorList.genericField).eq(7).type('ssnNumberTest')
   // cy.get(selectorList.genericField).eq(8).type('sinNumberTest')
   cy.get(selectorList.submitButton).eq(0).click()
   cy.get('body').should('contain', 'Successfully Update')
  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert)
    
  })
})
