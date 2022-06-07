import * as _ from 'lodash';
// https://docs.cypress.io/api/introduction/api.html

import mockCatBreeds from '../../src/__mock__/mock';

const cat = {
  adaptability: 5,
  affection_level: 5,
  alt_names: '',
  cfa_url: 'http://cfa.org/Breeds/BreedsAB/Abyssinian.aspx',
  child_friendly: 3,
  country_code: 'EG',
  country_codes: 'EG',
  description: 'The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.',
  dog_friendly: 4,
  energy_level: 5,
  experimental: 0,
  grooming: 1,
  hairless: 0,
  health_issues: 2,
  hypoallergenic: 0,
  id: 'abys',
  image: {
    height: 1445,
    id: '0XYvRd7oD',
    url: 'https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg',
    width: 1204,
  },
  indoor: 0,
  intelligence: 5,
  lap: 1,
  life_span: '14 - 15',
  name: 'Abyssinian',
  natural: 1,
  origin: 'Egypt',
  rare: 0,
  reference_image_id: '0XYvRd7oD',
  rex: 0,
  shedding_level: 2,
  short_legs: 0,
  social_needs: 5,
  stranger_friendly: 5,
  suppressed_tail: 0,
  temperament: 'Active, Energetic, Independent, Intelligent, Gentle',
  vcahospitals_url: 'https://vcahospitals.com/know-your-pet/cat-breeds/abyssinian',
  vetstreet_url: 'http://www.vetstreet.com/cats/abyssinian',
  vocalisation: 1,
  weight: {
    imperial: '7  -  10',
    metric: '3 - 5',
  },
  wikipedia_url: 'https://en.wikipedia.org/wiki/Abyssinian_(cat)',
};

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
      .get('#Abyssinian')
      .click();
  });
  it('Then I should be directed to a page of the chosen cat breed', () => {
    cy.location('pathname').should('eq', '/catDetail/Abyssinian');
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
