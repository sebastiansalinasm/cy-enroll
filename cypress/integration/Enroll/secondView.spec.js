import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
// Scenario 2
let data
let txt

beforeEach(function () { 
    let env = process.env.NODE_ENV || 'development'
    let vne = process.env.NODE_ENV || 'personalPage'
    cy.fixture('dataDev.json').then((json) => {
        data = json[env]
    })
    cy.fixture('webText.json').then((jsonTxt) => {
        txt = jsonTxt[vne]
    })
});

    Given('to enter a "Datos Personales" page', () => {
        cy.url('include', '/datos-personales').then(() => {
            cy.wait(5000)
        // text checking 
            cy.get('p[class="PersonalDataHeader-title"]').contains(txt.PersonalDataHeadertitle)
            cy.get('[class="PersonalDataMessage"]').then(($personalData) => {
                console.log($personalData)
            })
            cy.get('p[class="PersonalDataForm-title"]').contains(txt.PersonalDataFormtitle)
        })
    })
    When('fill phone and address forms', () => {
        cy.get('[id=phone]').type(data.cellphone)
        cy.get('[id=phonecopy]').type(data.cellphone)
        cy.get('[id=email]').type(data.email)
        cy.get('[role=combobox]').type(data.address)
        cy.get('[class="suggestion-item"]').then(($autoComplete) => {
            $autoComplete[0].click()
            console.log('Dirección Particular:', $autoComplete[0].innerText)
    })
        cy.get('[id=depto]').type(data.other)
})

    Then('button continue is on to third view', () => {
        cy.get('[id=btn-continuar]').then(($btnContinue) => {
            if($btnContinue[0].disabled) {
                alert('coño mala mia, que arrecho el codigo')
            } else {
                $btnContinue.click()
                cy.log('Ingresando a página de información')
                cy.wait(2000)
            // Validación de Número de Teléfono
                cy.get('label[class="error-label"]').should('not.exist')
            } 
        })
    })


