import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
// Scenario 1
let data
let txt

beforeEach(function () { 
    let env = process.env.NODE_ENV || 'development'
    let vne = process.env.NODE_ENV || 'homePage'
    cy.fixture('dataDev.json').then((json) => {
        data = json[env]
    })
    cy.fixture('webText.json').then((jsonTxt) => {
        txt = jsonTxt[vne]
    })

})

    Given('to enter a "Hazte Socio" page', () => {
    // open browser and enter to the page
        cy.visit(data.url)
        cy.wait(1000)

})
    When('fill the forms', () => {
    // text check
        cy.get('p[class="HomeHeader-title"]')
        .contains(txt.homeHeadertitle)

        cy.get('p[class="HomeHeader-description"]')
        .contains(txt.homeHeaderDescription)        
    // *** Completing field's boxes ***
    // name
        cy.get('[id=name]')
        .type(data.names, {delay: 50})
        .should('have.value', data.names)

    // last name
        cy.get('[id=apellidop]')
        .type(data.middleName, {delay: 50})
        .should('have.value', data.middleName)

    // second last name
        cy.get('[id=apellidom]')
        .type(data.lastName, {delay: 50})
        .should('have.value', data.lastName)
    // work
        cy.get('[id=profesion]')
        .type('Arquitecto de Software', {delay: 50})
        // cy.get('label[for="s-professions"]').click()
        // cy.get(`li[name=${data.job}]`).click()
    // rut
        cy.get('[id=rut]')
        .type(data.rutUser, {delay:50})
        .should('not.have.value', data.rutUser)
    // serial number
        cy.get('[id=serie]')
        .type(data.serialNumber, {delay: 50})
        .should('have.value', data.serialNumber)
    // deploy serial number help
        cy.get('[class="l_credential"]').click()
        
})
    When('select external controllers', () => {
    // text checker
        cy.get('label[class="Checkbox-control Checkbox-control--checkbox"]')
        .contains(txt.checkboxCtrl)

        cy.get('div[class="HomeQuestions-cards"]').then(() => {
            cy.get('label[for="fatcaNo"]').click()
            cy.get('label[for="crsNo"]').click()
            cy.get('label[for="cb-autorizo"]').click()
        })  
})
    Then('button continue is on', () => {
        cy.get('p[class="HomeFooter-disclaimer"]')
        .contains(txt.homeFooterDisclaimer)
        
        cy.get('[id=btn-continuar]').then(($btnContinue) => {
            if ($btnContinue[0].disabled) {
                cy.log('Falta completar campos obligatorios')
            } else {
                $btnContinue.click()
            }
    })
})