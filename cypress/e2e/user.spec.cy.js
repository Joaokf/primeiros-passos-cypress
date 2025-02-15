
import userData from '../fixtures/user-data.json'
describe('Orange HRM Tests', () => {
  
  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTittleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']",
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: "[name='firstName']",
    middleNameField: "[name='middleName']",
    lastNameField: "[name='lastName']",
    genericFiled: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']"
  }


  it.only('User Info Update - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('FistNameTest').click()
    cy.get(selectorsList.middleNameField).clear().type('MiddleNameTest').click()
    cy.get(selectorsList.lastNameField).clear().type('LastNameTest').click()
    cy.get(selectorsList.genericFiled).eq(3).clear().type('Employee').click()
    cy.get(selectorsList.genericFiled).eq(4).clear().type('OtherIdTest').click()
    cy.get(selectorsList.genericFiled).eq(5).clear().type('DriverLicenseTest').click()
    cy.get(selectorsList.genericFiled).eq(6).clear().type('2025-03-10').click
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.submitButton).eq(1).click()
    cy.get('body').should('contain', 'Successfully Saved')
    
  })


  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)

  })
})


