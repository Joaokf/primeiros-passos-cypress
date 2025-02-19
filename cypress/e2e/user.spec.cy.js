import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

const Chance = require('chance');
const chance = new Chance();

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {
  it('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashBoardPage()

    menuPage.accessMyInfo()
    // 'Middle Name'
    myInfoPage.fillPersonalDetails(chance.first(), chance.string(), chance.last())
    
    // Gerando uma data formatada no formato YYYY-MM-DD
    const formattedDate = chance.date({ year: 2025 }).toLocaleDateString('en-CA') // Formato canadense (YYYY-MM-DD)

    myInfoPage.fillEmployeeDetails(chance.integer({ min: 1000000000, max: 9999999999 }), chance.integer({ min: 1000000000, max: 9999999999 }), chance.integer({ min: 1000000000, max: 9999999999 }), formattedDate)
    myInfoPage.fillStatus()    
    myInfoPage.saveForm()

    // Usando chance.bool() para selecionar aleatoriamente entre 'Single' ou 'Married'
    const maritalStatus = chance.bool() ? 'Single' : 'Married'
    const dateOfBirth = chance.birthday({ age: 25 }).toLocaleDateString('en-CA')
    cy.wait(500);

    // ---------------------------------------------------------------------------------------------------------------
    const nationality = chance.country({ full: true });  // Nacionalidade completa (nome do país)
    console.log("Selected nationality: ", nationality); // Verifique o valor da nacionalidade gerada

    myInfoPage.personalStatus(nationality, maritalStatus, dateOfBirth, chance.gender());
    cy.wait(500)
    // ---------------------------------------------------------------------------------------------------------------

    // TIPO SANGUÍNEO
    const bloodType = chance.pickone(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']);
    console.log("Selected blood type: ", bloodType); // Verifique o tipo sanguíneo gerado

    myInfoPage.customField(bloodType, 'Test Value')
    myInfoPage.saveFormCustomField()
    myInfoPage.checkboxField()
  })
})
