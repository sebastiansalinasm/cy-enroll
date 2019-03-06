import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
// Scenario 3
let data
let txt

beforeEach(function () { 
    let env = process.env.NODE_ENV || 'create-mode'
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

    Then('press continue button', () => {
        cy.get('[id=btn-continuar]').then(($btnContinue) => {
            if($btnContinue[0].disabled) {
                alert('coño mala mia, que arrecho el codigo')
            } else {
                $btnContinue.click()
                cy.log('Ingresando a siguiente página')
                cy.wait(2000)

            }
        })

    })

})