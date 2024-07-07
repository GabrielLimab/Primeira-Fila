/// <reference types="cypress" />

const timestamp = Date.now();
const uniqueName = `testuser${timestamp}`;
const uniqueEmail = `testuser${timestamp}@test.com`;
const password = 'test123';

describe('Sign Up', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
    cy.wait(1000);
    cy.clearAllCookies();
  });

  it('should be in auth url', () => {
    cy.url().should('eq', 'http://localhost:5173/auth');
  });

  it('should go to sign up page', () => {
    cy.get('.signup-link').click();
    cy.get('.text-input-container').should('have.length', 3);
  });

  it('should create a new user and get logged in', () => {
    cy.get('.signup-link').click();
    cy.get('.text-input-container').eq(0).type(uniqueName);
    cy.get('.text-input-container').eq(1).type(uniqueEmail);
    cy.get('.text-input-container').eq(2).type(password);
    cy.get('.submit-button').click();
    cy.url().should('eq', 'http://localhost:5173/');
  });
});

describe('Login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
    cy.wait(1000);
    cy.clearAllCookies();
  });

  it('should be in auth url', () => {
    cy.url().should('eq', 'http://localhost:5173/auth');
  });

  it('should display login input fields', () => {
    cy.get('.text-input-container').should('have.length', 2);
  });

  it('should login and logout', () => {
    cy.get('.text-input-container').eq(0).type(uniqueEmail);
    cy.get('.text-input-container').eq(1).type(password);
    cy.get('.submit-button').click();
    cy.url().should('eq', 'http://localhost:5173/');
    cy.get('.logout').click();
    cy.url().should('eq', 'http://localhost:5173/auth'); 
  });
});

describe('Home Page', () => {
  beforeEach(() => {
    cy.clearAllCookies();
    cy.wait(1000);
    cy.visit('http://localhost:5173/');
  });

  it('should not display home page if not logged in', () => {
    cy.url().should('eq', 'http://localhost:5173/auth');
  });

  it('should login and display home page', () => {
    cy.get('.text-input-container').eq(0).type(uniqueEmail);
    cy.get('.text-input-container').eq(1).type(password);
    cy.get('.submit-button').click();
    cy.url().should('eq', 'http://localhost:5173/');
  });

  it('should display 3 movie card sections', () => {
    cy.get('.text-input-container').eq(0).type(uniqueEmail);
    cy.get('.text-input-container').eq(1).type(password);
    cy.get('.submit-button').click();
    cy.get('.card-section-container').should('have.length', 3);
  });

  it('should display top rated movie card section', () => {
    cy.get('.text-input-container').eq(0).type(uniqueEmail);
    cy.get('.text-input-container').eq(1).type(password);
    cy.get('.submit-button').click();
    cy.get('.card-section-container').eq(1).contains('Melhores filmes').should('exist');
    cy.get('.card').should('exist');
  });
});