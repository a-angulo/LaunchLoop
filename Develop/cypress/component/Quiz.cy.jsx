import Quiz from "../../client/src/components/Quiz";

describe('Quiz Component', () => {
  beforeEach(() => {
    cy.intercept(
      {
        method: 'GET',
        url: '/api/questions/random'
      },
      {
        fixture: 'questions.json',
        statusCode: 200
      }
    ).as('getRandomQuestion');
  });

  it('should start the quiz and display the first question', () => {
    cy.mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click();
    cy.wait('@getRandomQuestion');

    cy.get('.card').should('be.visible');
    cy.get('h2').should('not.be.empty');
  });

  it('should answer all questions and complete the quiz', () => {
    cy.mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click();
    cy.wait('@getRandomQuestion');

    // Simulate answering 3 questions (adjust based on your app logic)
    for (let i = 0; i < 3; i++) {
      cy.get('button')
        .contains(/^\d+$/)
        .first()
        .click();
    }

    cy.get('.alert-success')
      .should('be.visible')
      .and('contain', 'Your score');
  });

  it('should restart the quiz after completion', () => {
    cy.mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click();
    cy.wait('@getRandomQuestion');

    // Simulate answering 3 questions
    for (let i = 0; i < 3; i++) {
      cy.get('button')
        .contains(/^\d+$/)
        .first()
        .click();
    }

    // Restart the quiz
    cy.get('button').contains('Take New Quiz').should('exist').click();
    cy.wait('@getRandomQuestion');

    // Confirm quiz is restarted
    cy.get('.card').should('be.visible');
    cy.get('h2').should('not.be.empty');
  });
});
