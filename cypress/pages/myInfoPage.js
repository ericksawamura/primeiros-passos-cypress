class MyInfoPage {

    selectorList() {
        const selector = {
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

        return selector
    }

    fillPersonalDetails(firstName, lastName, nickName) {
        cy.get(this.selectorList().firstNameField).clear().type(firstName)
        cy.get(this.selectorList().lastNameField).clear(2).type(lastName)
        //cy.get(this.selectorList().genericField).eq(3).clear().type(nickName)
    }

    fillEmployeeDetails(employeeId, otherId, driversLicenseDate, ssnNumber, sinNumber) {
        cy.get(this.selectorList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorList().genericField).eq(5).clear().type(driversLicenseDate)
        cy.get(this.selectorList().genericField).eq(6).clear().type('2026-07-10')
        cy.get(this.selectorList().dateCloseButton).click()
        //cy.get(this.selectorList().genericField).eq(7).type(ssnNumber)
        //cy.get(this.selectorList().genericField).eq(8).type(sinNumber)
    }

    saveForm() {
        cy.get(this.selectorList().submitButton).eq(0).click()
        cy.get('body').should('contain', 'Successfully Update')
    }

    fillStatus() {
        cy.get(this.selectorList().selectButton).eq(0).click()
        cy.get(this.selectorList().selectCountry).click()
        cy.get(this.selectorList().selectButton).eq(1).click()
        cy.get(this.selectorList().selectMartial).click()
    }
    }



export default MyInfoPage