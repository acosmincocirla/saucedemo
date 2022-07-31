describe('some login tests', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    });
    it('1st login session', () => {
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('.bm-burger-button').click()
        cy.wait(4000)
        cy.get('#logout_sidebar_link').click()
    });
    it('2nd login session', () => {
        cy.get('[data-test="username"]').type('locked_out_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.contains('Epic sadface: Sorry, this user has been locked out.').wait(4000).reload()
    });
    it('3rd login session', () => {
        cy.get('[data-test="username"]').type('problem_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('.bm-burger-button').click()
        cy.wait(4000)
        cy.get('#logout_sidebar_link').click()
    });
    it('4th login session', () => {
        cy.get('[data-test="username"]').type('performance_glitch_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('.bm-burger-button').click()
        cy.wait(4000)
        cy.get('#logout_sidebar_link').click()
    });
    it('uncompleteted input fields', () => {
        cy.get('[data-test="login-button"]').click()
        cy.contains('Epic sadface: Username is required').wait(4000).reload()
    });
    it('Empty username field', () => {
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.contains('Epic sadface: Username is required').wait(4000).reload()
    });
    it('Empty password field', () => {
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="login-button"]').click()
        cy.contains('Epic sadface: Password is required').wait(4000).reload()
    });
    it('Attempt to login with different username', () => {
        cy.get('[data-test="username"]').type('blablabla')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.contains('Epic sadface: Username and password do not match any user in this service').wait(4000).reload()
    });
    it('Attempt to login with different password', () => {
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('blablabla')
        cy.get('[data-test="login-button"]').click()
        cy.contains('Epic sadface: Username and password do not match any user in this service').wait(4000).reload()
    });
});