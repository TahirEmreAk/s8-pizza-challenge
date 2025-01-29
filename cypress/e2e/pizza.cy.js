describe("Pizza Sipariş Formu", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/order");
  });

  it("İsim inputuna bir metin girilebiliyor", () => {
    cy.get('[data-cy="name"]').type("Müşteri Adı");
    cy.get('[data-cy="name"]').should("have.value", "Müşteri Adı");
  });

  it("Birden fazla malzeme seçilebiliyor", () => {
    cy.get('[data-cy="checkbox-input"]').then((checkboxes) => {
      cy.wrap(checkboxes[0]).check().should("be.checked");
      cy.wrap(checkboxes[1]).check().should("be.checked");
      cy.wrap(checkboxes[2]).check().should("be.checked");
      cy.wrap(checkboxes[3]).check().should("be.checked");
    });
  });

  it("Form başarılı şekilde gönderiliyor", () => {
    cy.get('[data-cy="name"]').type("Test Kullanıcısı");
    cy.get('[data-cy="orta-size"]').check();
    cy.get('[data-cy="dough-choice"]').select("İnce");

    cy.get('[data-cy="checkbox-input"]').then((checkboxes) => {
      cy.wrap(checkboxes[0]).check();
      cy.wrap(checkboxes[1]).check();
      cy.wrap(checkboxes[2]).check();
      cy.wrap(checkboxes[3]).check();
    });

    cy.get('[data-cy="submit-button"]').click();

    cy.url().should("include", "/success");
  });
});
