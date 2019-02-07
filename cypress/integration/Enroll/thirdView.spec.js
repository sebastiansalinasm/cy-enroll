import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";

let data
let txt

beforeEach(function () { 
    let env = process.env.NODE_ENV || 'development'
    let vne = process.env.NODE_ENV || 'infoPage'
    cy.fixture('dataDev.json').then((json) => {
        data = json[env]
    })
    cy.fixture('webText.json').then((jsonTxt) => {
        txt = jsonTxt[vne]
    })
});

    Given('to enter a "Información del Plan" page', () => {
        cy.wait(2000)
        cy.url('include', '/detalles-plan')
})
    When('read the text', () => {
        cy.get('p[class="PlanDetailsHeader-title"]').contains(txt.PlanDetailsHeadertitle)
    })