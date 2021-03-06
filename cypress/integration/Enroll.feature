Feature: Flujo enrolamiento Coopeuch
    # Screen 1
    Scenario: Ingreso Hazte Socio
        Given to enter a "Hazte Socio" page
        When fill the forms
        When select external controllers
        Then button continue is on
    # Screen 2
    Scenario: Completar los campos 
        Given to enter a "Datos Personales" page
        When fill phone and address forms
        Then button continue is on to third view
    # Screen 3
    Scenario: Información del Plan
        Given to enter a "Información del Plan" page
        When read the text and scroll
        Then press continue button
    # Screen 4 
    Scenario: Contratos
        Given to enter a "Contratos" page
        When read all texts 
        When check the "Mandato de Pago"
        Then press to continue button for the next page
    # Screen 5
    Scenario: Autenticacion y Firma
        Given to enter "Autenticacion y Firma" page
        When answer the question 
        When press send button
        Then insert sms code and finish

    
    
    
        




    
