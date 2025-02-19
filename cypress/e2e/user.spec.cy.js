
import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

const Chance = require('chance');

var chance = new Chance();
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()


describe('Orange HRM Tests', () => {

  // const selectorsList = {

  // }
  

  it('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashBoardPage()

    menuPage.accessMyInfo()
    // 'Middle Name'
    myInfoPage.fillPersonalDetails(chance.first(), chance.string(), chance.last())
    myInfoPage.fillEmployeeDetails(chance.profession(), 'Other Id', 'Driver License Number', '2025-07-29')
    myInfoPage.fillStatus()    
    myInfoPage.saveForm()
    myInfoPage.personalStatus('Brazilian', 'Single', '1992-08-27', 'Male')
    myInfoPage.customField('O-', 'Test Value')
    myInfoPage.saveFormCustomField()
    myInfoPage.checkboxField()
   
  })

})


