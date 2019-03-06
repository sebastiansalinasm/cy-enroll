import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
// Scenario 1
let data
let txt

beforeEach(function () { 
    let env = process.env.NODE_ENV || 'create-mode'
    let vne = process.env.NODE_ENV || 'homePage'
    cy.fixture('dataDev.json').then((json) => {
        data = json[env]
    })
    cy.fixture('webText.json').then((jsonTxt) => {
        txt = jsonTxt[vne]
    })

})

    Given('to enter a "Hazte Socio" page', () => {
        cy.visit(data.url)
        cy.wait(2000)

})
    When('fill the forms', () => {
    // text check
        cy.get('p[class="HomeHeader-title"]').contains(txt.homeHeadertitle)
        cy.get('p[class="HomeHeader-description"]').contains(txt.homeHeaderDescription)        
    // Se completan los campos
        cy.get('[id=name]').type(data.names)
        cy.get('[id=apellidop]').type(data.middleName)
        cy.get('[id=apellidom]').type(data.lastName)
        cy.get('[id=profesion]').type(data.job)
        cy.get('[id=rut]').type(data.rutUser)
        cy.get('[id=serie]').type(data.serialNumber)
        cy.get('[class="l_credential"]').click()
        
})
    When('select external controllers', () => {
    // Revision de textos
        cy.get('label[class="Checkbox-control Checkbox-control--checkbox"]').contains(txt.checkboxCtrl)
        cy.get('div[class="HomeQuestions-cards"]').then(() => {
            cy.get('label[for="fatcaNo"]').click()
            cy.get('label[for="crsNo"]').click()
            cy.get('label[for="cb-autorizo"]').click()
        })  
})
    Then('button continue is on', () => {
        cy.get('p[class="HomeFooter-disclaimer"]').contains(txt.homeFooterDisclaimer)
        cy.get('[id=btn-continuar]').then(($btnContinue) => {
            if ($btnContinue[0].disabled) {
                cy.log('Falta completar campos obligatorios')
            } else {
                $btnContinue.click()
            }
    })
})