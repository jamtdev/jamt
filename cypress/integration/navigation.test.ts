import routes from '../../src/config/routes';

describe('Navigation', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  routes.forEach((route) => {
    it(`clicking ${route.text} should navigation to ${route.path}`, () => {
      cy.get(`[data-testid=NavLink__${route.text}]`).click();
      cy.url().should('include', route.path);
    });
  });
});
