import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
// Scenario 4
let data
let txt

beforeEach(function () { 
    let env = process.env.NODE_ENV || 'development'
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
        cy.scrollTo('bottom', {duration:500})
})
    When('read all texts', () => {
        cy.get('p[class="ContractsHeader-title"]')
        .contains(txt.ContractsHeadertitle)

}) 
    When('check the "Mandato de Pago"', () => {
        cy.get('.Checkbox-control').click()
})

    Then('press to continue button for the next page', () => {
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
