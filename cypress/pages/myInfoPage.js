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
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().middleNameField).clear().type(MiddleNameTest)
        cy.get(this.selectorsList().lastNameField).clear().type(LastNameTest)
    }

    fillEmployeeDetails(Employee, OtherId, DriverLicenseNumber, expireDate) {
        cy.get(this.selectorsList().genericFiled).eq(3).clear().type(Employee)
        cy.get(this.selectorsList().genericFiled).eq(4).clear().type(OtherId)
        cy.get(this.selectorsList().genericFiled).eq(5).clear().type(DriverLicenseNumber)
        cy.get(this.selectorsList().genericFiled).eq(6).clear().type(expireDate)
        cy.get(this.selectorsList().dateCloseButton).click()
    }

    saveForm() {
        cy.get(this.selectorsList().submitButton).eq(1).click()
        cy.get('body').should('contain', 'Successfully Saved')
    }

    fillStatus() {}

    personalStatus(Nationality, statusMarital, dateBirth, gender) {
        // Preencher a nacionalidade
        cy.get(this.selectorsList().Nationality).eq(0).click()
        cy.contains(Nationality).click()
    
        // Selecionar o estado civil
        cy.get(this.selectorsList().statusMarital).eq(1).click()
        cy.contains(statusMarital).click()
    
        // Preencher a data de nascimento
        cy.get(this.selectorsList().dateBirth).eq(1).clear().type(dateBirth, { force: true });
        cy.wait(500); // Aguarda 500ms antes de tentar novamente
                
        // Selecionar o gênero
        cy.get(this.selectorsList().gender).eq(1).click() // Se necessário, ajustar para selecionar corretamente o gênero
    }
    

    customField(bloodTypeField, Test_Field) {
        cy.get(this.selectorsList().bloodTypeField).eq(2).click() // Abre o campo de tipo sanguíneo
        cy.contains(bloodTypeField).click() // Seleciona a opção, por exemplo, 'O-'
        
        cy.get(this.selectorsList().Test_Field).eq(0).clear().type(Test_Field).click() // Preenche o campo Test_Field com o valor desejado
    }
    
    

    saveFormCustomField() {
        cy.get(this.selectorsList().submitButton).eq(1).click()
        cy.get('body').should('contain', 'Successfully Saved')
    }

    checkboxField() {
        cy.get('input[type="checkbox"]').eq(0).check({ force: true })
    }
}

export default MyInfoPage
