export class Helpers {

    public static log(selectorOrMessage: string) {
        cy.task("consoleLog", `${new Date().toLocaleString()} -> ${selectorOrMessage}`);
        cy.log(`**${new Date().toLocaleString()} -> ${selectorOrMessage}**`);
      }

    public getElement(selector: string) {
        if (selector.startsWith('//')) {
            cy.xpath(selector).should("exist", {timeout: 10000});
            return cy.xpath(selector);
        } else {
            cy.get(selector).should("exist", {timeout: 10000});
            return cy.get(selector);
        }
    }


    public goToPage(url: string){
        cy.visit(url)
    }

    public click(selector: string){
        Helpers.log(`Click on ${selector}`);
        this.getElement(selector).click();
    }

    public type(selector: string, value: string){
        Helpers.log(`Type on ${selector} with ${value}`);
        this.getElement(selector).type(value);
    }

    public invokeType(selector: string, value: string){
        Helpers.log(`Invoke type on ${selector} with ${value}`);
        this.getElement(selector).invoke('val', value);
    }

    public checker(selector: string, conditon: string){
        Helpers.log(`Check if ${selector} -->  ${conditon}`);
        this.getElement(selector).should(conditon);
    }
}