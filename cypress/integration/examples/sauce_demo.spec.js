/// <reference types="Cypress" />
import LoginPage from '../../support/pageObjects/LoginPage';
import HomePage from '../../support/pageObjects/HomePage';
import CartPage from '../../support/pageObjects/CartPage';
import CheckoutPage from '../../support/pageObjects/CheckoutPage';

describe('Sauce Demo Test', () => {

    before(function () {
        cy.fixture('testData.json').then(function (data) {
            this.data = data;
        });
    });

    it('Login to the site with valid credentials and verify Cart is Empty', function () {
        const loginPage = new LoginPage();
        const homePage = new HomePage();

        cy.visit(Cypress.env('url'));
        loginPage.getUserName().type(this.data.username);
        loginPage.getPassword().type(this.data.password);
        loginPage.getLoginBtn().click();

        homePage.getCartCount().should('not.exist');
    });

    it('Add all products in the cart with the word ‘Shirt’ and verify Cart value is equal to the products added', function () {
        const homePage = new HomePage();

        var productNameArray = [];
        var productCount;
        homePage.getAllProductName().each(
            ($el, index, $list) => {
                if ($el.text().includes("Shirt")) {
                    productNameArray.push($el.text());
                    var productCount = productNameArray.length;
                    index = index - (productCount - 1);
                    homePage.getAddToCartBtn().should('contain.text', 'ADD TO CART').eq(index).
                    click();
                }
            }).then(function () {
            productCount = productNameArray.length;
        });

        homePage.getCartCount().then(function (element) {
            var cartCount = element.text();
            expect(productCount).to.eql(parseInt(cartCount));
        });
    });

    it('Go to the Cart and verify all products details', () => {
        const homePage = new HomePage();
        const cartPage = new CartPage();

        homePage.getCartBtn().click();
        cartPage.getAllProductName().each(
            ($el, index, $list) => {
                expect($el.text()).to.include("Shirt");
                cartPage.getProductQty().eq(index).should('contain.text', '1');
            });

        cartPage.getCheckoutBtn().click();
        cartPage.getCheckoutHeader().should('contain.text', 'Checkout: Your Information');
    });

    it('Proceed to Final payment and verify order is successfully placed', () => {
        const checkoutPage = new CheckoutPage();

        checkoutPage.getFirstName().type('test first');
        checkoutPage.getLastName().type('test last');
        checkoutPage.getPostalCode().type('11111');
        checkoutPage.getContinueBtn().click();

        checkoutPage.getFinishBtn().click();
        checkoutPage.getOrderPlacedMsg().should('contain.text', 'THANK YOU FOR YOUR ORDER');
        checkoutPage.getOrderDispatchedMsg().should('contain.text', 'Your order has been dispatched');
    });
});