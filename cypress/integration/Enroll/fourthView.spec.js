import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
// Scenario 4
let data
let txt

beforeEach(function () { 
    let env = process.env.NODE_ENV || 'create-mode'
    let vne = process.env.NODE_ENV || 'contractPage'
    cy.fixture('dataDev.json').then((json) => {
        data = json[env]
    })
    cy.fixture('webText.json').then((jsonTxt) => {
        txt = jsonTxt[vne]
    })
});

    Given('to enter a "Contratos" page', () => {
        cy.wait(2000)
    })

    When('read all texts', () => {
        cy.get('p[class="ContractsHeader-title"]').contains(txt.ContractsHeadertitle)
        cy.get('p[class="ContractsHeader-legend"]').contains(txt.ContractsHeaderlegend)
    }) 

    When('check the "Mandato de Pago"', () => {
        
    })

