import routes from '../../src/config/routes';

describe('Pages', () => {
  describe('Desktop', () => {
    routes.forEach((route) => {
      it(`${route.text} should match previous screenshot`, () => {
        cy.visit(route.path).then(() => {
          cy.document().matchImageSnapshot();
        });
      });
    });
  });

  describe('Mobile', () => {
    routes.forEach((route) => {
      it(`${route.text} should match previous screenshot`, () => {
        cy.viewport('iphone-x');

        cy.visit(route.path).then(() => {
          cy.document().matchImageSnapshot();
        });
      });
    });
  });
});
