class CheckoutPage {

    getFirstName(){
        return cy.get('[data-test=firstName]');
    }

    getLastName(){
        return cy.get('[data-test=lastName]');
    }

    getPostalCode(){
        return cy.get('[data-test=postalCode]');
    }

    getContinueBtn(){
        return cy.get('[type="submit"]');
    }

    getFinishBtn(){
        return cy.get('a.btn_action.cart_button');
    }

    getOrderPlacedMsg(){
        return cy.get('.complete-header');
    }

    getOrderDispatchedMsg(){
        return cy.get('.complete-text');
    }
}

export default CheckoutPage;