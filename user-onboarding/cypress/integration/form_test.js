describe( 'Form Test', function() {
    beforeEach(() => {
        cy.visit('index.html')
    })

    const nameInput = () => cy.get('input[name=name]');
    const emailInput = () => cy.get('input[name=email]');
    const pwdInput = () => cy.get('input[name=pwd');
    const tosCheckbox = () => cy.get('input[name=tos]');
    const submitButton = () => cy.get('button[id=submitBtn]');


    it ("Checks for the existence of each form element", () => {

        nameInput().should('exist');
        emailInput().should('exist');
        pwdInput().should('exist');
        tosCheckbox().should('exist');
        submitButton().should('exist');

    })

    it('Check that submit button is disabled', () => {
        submitButton().should('be.disabled');
    })

    describe('Filling out Form and Submitting', () => {

        it('Can type in the inputs', () => {
            nameInput()
                .should('have.value', '')
                .type('Full Name')
                .should('have.value', 'Full Name');

            emailInput()
                .should('have.value', '')
                .type('email@email.com')
                .should('have.value', 'email@email.com');

            pwdInput()
                .should('have.value', '')
                .type('8charpwd')
                .should('have.value', '8charpwd');
                
            tosCheckbox()
                .should('not.be.checked')
                .click()
                .should('be.checked');
            
            submitButton()
                .should('not.be.disabled')
                .click()
                .should('be.disabled')
        })

        it('Checks for error messages for each form element', () => {
            nameInput().should('have.value', '').type('Name').clear()
            cy.get('div[id=errName]').should('exist')

            emailInput().should('have.value', '').type('nonValidEmail@.com')
            cy.get('div[id=errEmail]').should('exist')

            pwdInput().should('have.value', '').type('shortPw')
            cy.get('div[id=errPwd]').should('exist')

            tosCheckbox().should('not.be.checked')
            .click().should('be.checked')
            .click()
            cy.get('div[id=errTos]').should('exist')
        })
        
    })
})