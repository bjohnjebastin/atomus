import { getGreeting } from '../support/app.po';

const personName = 'John Smith';
const bookingDate = '2021-09-01';
const meetingReason = 'To discuss about sales';

describe('meeting-management', () => {
  beforeEach(() => cy.visit('/'));

  it('should display meeting booking form', () => {
    cy.get('button').click();
    cy.url().should('include', '/meetings/create');
  });

  it('should enable submit button when form details filled', () => {
    cy.visit('/meetings/create');
    cy.get('#personName').type(personName);
    cy.get('#bookingDate').type(bookingDate);
    cy.get('#meetingReason').type(meetingReason);
    cy.get('button').should('be.enabled', true);
  });

  it('should create meeting', () => {
    cy.visit('/meetings/create');
    cy.get('#personName').type(personName);
    cy.get('#bookingDate').type(bookingDate);
    cy.get('#meetingReason').type(meetingReason);
    cy.get('button').click();
    cy.get('#bookedMeetingInfoContainer').contains(personName);
    cy.get('#bookedMeetingInfoContainer').contains(meetingReason);
  });
});
