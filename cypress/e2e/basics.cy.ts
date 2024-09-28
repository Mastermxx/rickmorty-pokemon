describe('Homepage', () => {
  it('should visit the homepage', () => {
    cy.visit('http://localhost:3000')
  })

  it('should have 2 <h1> on the page', () => {
    cy.visit('http://localhost:3000/')
    cy.get('h1').should('have.length', 2)
  })

  it('should display the page title: Gotta Catch Em All! & Chaos, comedy, and the multiverse collide!', () => {
    cy.visit('http://localhost:3000/')
    cy.get('h1').contains('Gotta Catch \'Em All!')
    cy.get('h1').contains('Chaos, comedy, and the multiverse collide!')
  })

  it('should have 3 buttons: home, pokemon and Rick & Morty', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-cy="home-button"]').should('have.length', 1)
    cy.get('[data-cy="pokemon-button"]').should('have.length', 1)
    cy.get('[data-cy="rickmorty-button"]').should('have.length', 1)
  })
})

describe('Pokémon Overview', () => {
  it('should visit the homepage', () => {
    cy.visit('http://localhost:3000')
  })

  it('should go to the pokemon page when pokemon button is clicked', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-cy="pokemon-button"]').click()
    cy.get('h1').contains('Pokémon')
    cy.wait(1000)
    cy.get('.card').should('exist')
    cy.screenshot()
  })
})

describe('Rick & Morty Overview', () => {
  it('should visit the homepage', () => {
    cy.visit('http://localhost:3000')
  })

  it('should go to the pokemon page when pokemon button is clicked', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-cy="rickmorty-button"]').click()
    cy.get('h1').contains('Rick & Morty Characters')
    cy.wait(1000)
    cy.get('.card').should('exist')
    cy.screenshot()
  })
})

describe('View Toggle', () => {
  it('should toggle between grid and list views on Pokémon page', () => {
    cy.visit('http://localhost:3000/pokemon')
    cy.get('.grid').should('exist')
    cy.get('[data-cy="view-toggle"]').click()
    cy.get('.flex').should('exist')
  })
})
