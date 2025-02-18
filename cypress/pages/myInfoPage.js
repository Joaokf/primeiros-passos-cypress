class MyInfoPage {
    selectorsList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            middleNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            genericFiled: ".oxd-input--active",
            dateField: "[placeholder='yyyy-dd-mm']",
            dateCloseButton: ".--close",
            submitButton: "[type='submit']",
            Nationality: ".oxd-select-wrapper",
            statusMarital: ".oxd-select-wrapper",
            dateBirth: "[placeholder='yyyy-dd-mm']",
            gender: ".oxd-radio-wrapper",
            bloodTypeField: ".oxd-select-wrapper",
            Test_Field: "[options='']",
            checkboxField: ".oxd-checkbox-input--active",

        }

        return selectors
    }

    fillPersonalDetails(firstName, MiddleNameTest, LastNameTest) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName).click()
        cy.get(this.selectorsList().middleNameField).clear().type(MiddleNameTest).click()
        cy.get(this.selectorsList().lastNameField).clear().type(LastNameTest).click()
    }

    fillEmployeeDetails(Employee, OtherId, DriverLicenseNumber, expireDate) {
        cy.get(this.selectorsList().genericFiled).eq(3).clear().type(Employee).click()
        cy.get(this.selectorsList().genericFiled).eq(4).clear().type(OtherId).click()
        cy.get(this.selectorsList().genericFiled).eq(5).clear().type(DriverLicenseNumber).click()
        cy.get(this.selectorsList().genericFiled).eq(6).clear().type(expireDate).click()
        cy.get(this.selectorsList().dateCloseButton).click()
    }

    saveForm() {
        cy.get(this.selectorsList().submitButton).eq(1).click()
        cy.get('body').should('contain', 'Successfully Saved')
    }

    fillStatus() {

    }

    personalStatus() {
        cy.get(this.selectorsList().Nationality).eq(0).click()
        cy.contains('Brazilian').click()
        // -----------------------------------------------------------
        cy.get(this.selectorsList().statusMarital).eq(1).click()
        cy.contains('Single').click()
        // -----------------------------------------------------------
        cy.get(this.selectorsList().dateBirth).eq(1).clear().type('1992-08-27').click()
        // -----------------------------------------------------------
        cy.get(this.selectorsList().gender).eq(1).click()
    }

    customField() {
        cy.get(this.selectorsList() .bloodTypeField).eq(2).click()
        cy.contains('O-').click()
        cy.get(this.selectorsList() .Test_Field).eq(0).click()
    }

    saveFormCustomField() {
        cy.get(this.selectorsList().submitButton).eq(1).click()
        cy.get('body').should('contain', 'Successfully Saved')
    }

    checkboxField(){
        cy.get('input[type="checkbox"]').eq(0).check({ force: true })
    }
}

export default MyInfoPage


