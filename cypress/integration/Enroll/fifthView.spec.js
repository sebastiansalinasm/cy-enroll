import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import { connectableObservableDescriptor } from "rxjs/observable/ConnectableObservable";
// Scenario 5
let data
let txt

beforeEach(function () { 
    let env = process.env.NODE_ENV || 'development'
    let vne = process.env.NODE_ENV || 'authPage'
    cy.fixture('dataDev.json').then((json) => {
        data = json[env]
    })
    cy.fixture('webText.json').then((jsonTxt) => {
        txt = jsonTxt[vne]
    })
});

    Given('to enter "Autenticacion y Firma" page', () => {
        cy.wait(1000)
        cy.url('include', '/contratacion')
    // Validator text
        cy.get('[class=HiringHeader-info]')
       .contains(txt.HiringHeaderinfo)
        cy.get('[class=HiringWarning-box')
        .contains(txt.HiringWarningbox)
    }) 

    When('answer the question', () => {
        let question1 = cy.get(':nth-child(1) > .question')
        console.log(question1)
        cy.get(':nth-child(1) > :nth-child(2) > label > span').click()

        let question2 = cy.get(':nth-child(2) > .question')
        console.log(question2)
        cy.get(':nth-child(2) > :nth-child(2) > label > span').click()

        let question3 = cy.get(':nth-child(3) > .question')
        console.log(question3)
        cy.get(':nth-child(3) > :nth-child(2) > label > span').click()

        let question4 = cy.get(':nth-child(4) > .question')
        console.log(question4)
        cy.get(':nth-child(4) > :nth-child(2) > label > span').click()

        let question5 = cy.get(':nth-child(5) > .question')
        console.log(question5)
        cy.get(':nth-child(5) > :nth-child(2) > label > span').click()
    })  

    When('press send button', () => {
        cy.get('[id=btn-finalizar]').then(($btnFinish => {
            if($btnFinish[0].disabled) {
                alert('respuestas no completadas')
            } else {
                $btnFinish.click()
                cy.log('Cargando validacion de telefono')
                cy.wait(1000)

        }
    })
        )
})
    Then('insert sms code', () => {
        cy.wait(2000)
        cy.get('.HiringSendSms-card > p')
        .contains(txt.HiringSendSmscard)
        cy.get('.HiringSendSms-btn > #btn-finalizar').click()
        cy.wait(2000)
        cy.get('[id=name]')
        .type(123456)
        cy.wait(4000)
        cy.get('[id=btn-continuar]').then(($btnContinue) => {
            if($btnContinue[0].disabled) {
                alert('coño mala mia, que arrecho el codigo')
            } else {
                $btnContinue.click()
                cy.log('finalizando Flujo')
                cy.wait(2000)

            }
        })
    })  