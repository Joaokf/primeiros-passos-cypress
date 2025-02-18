
import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'


const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()


describe('Orange HRM Tests', () => {

  const selectorsList = {

 
    
  }
  


  it('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashBoardPage()

    menuPage.accessMyInfo()
    myInfoPage.fillPersonalDetails('First Name', 'Middle Name', 'Last Name')
    myInfoPage.fillEmployeeDetails('Employee ', 'Other Id', 'Driver License Number', '2025-07-29')
    myInfoPage.fillStatus()    
    myInfoPage.saveForm()
    myInfoPage.personalStatus()
    myInfoPage.customField()
    myInfoPage.saveFormCustomField()
    myInfoPage.checkboxField()

  
  
 
    
  


    // -----------------------------------------------------------
    // 
    // // -----------------------------------------------------------
    
    // // -----------------------------------------------------------
    // 
    // // -----------------------------------------------------------


   
  })


  it('Login - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAccessInvalid()

  })
})


