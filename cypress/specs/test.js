import * as _ from 'lodash';
// https://docs.cypress.io/api/introduction/api.html

import mockCatBreeds from '../../src/__mock__/mock';

const cat = mockCatBreeds[0];

describe('Given I am a user of a cat web application', () => {
  it('see a page with a table that contains multiple cat breeds', () => {
    const header = ['Image', 'Name'];
    const body = _.map(mockCatBreeds, (o) => ({
      image: o?.image?.url,
      name: o.name,
    }));

    cy.visit('/');
    header.forEach((value) => {
      cy.get('.header')
        .get('.column')
        .should('contain', value);
    });

    body.forEach((value) => {
      cy.get('.body')
        .get('.name')
        .should('contain', value.name);
    });
  });
  it('I click on a specific entry on the data table', () => {
    cy.get('.body')
      .get(`#${cat.name}`)
      .click();
  });
  it('Then I should be directed to a page of the chosen cat breed', () => {
    cy.location('pathname').should('eq', `/catDetail/${cat.name}`);
  });
  it('And I should see the breed title, image, description, maximum weight, average lifespan', () => {
    cy.get('.title')
      .should('contain', cat.name);
    cy.get('.description')
      .should('contain', cat.description);
    cy.get('.cat-image')
      .should('have.attr', 'src').should('include', cat.image.url);
    cy.get('.weight')
      .should('contain', cat.weight.imperial);
    cy.get('.life-span')
      .should('contain', cat.life_span);
  });
  it('And I should see a map showing the origin of the cat breed', () => {
    cy.get('.vue-map-container') // yields <nav>
      .should('be.visible');
  });
});
