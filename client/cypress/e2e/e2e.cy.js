/// <reference types="cypress" />


describe('E2E tests', () => {

    beforeEach(() => {
        cy.visit('http://localhost:5173/');
        cy.wait(2000);
        cy.clearAllCookies();
    });

    it('should be in login url', () => {
        cy.url().should('eq', 'http://localhost:5173/login');
    });

});