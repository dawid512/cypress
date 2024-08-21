import { Helpers } from '../../cypress/support/helpers';
import { controlers } from '../../cypress/fixtures/controlers.json'


export class Checker extends Helpers{

    public checkIfMainPageDisplayProperly(){
        this.getElement(controlers.static.logo_xpath)?.should('be.visible');
    }

    public navigateToSingUpPageAndCheckIfDisplayProperly(){
        this.getElement(controlers.buttons.signUP_login)?.click();
        this.getElement(controlers.text.new_user_signUP_text)?.should('be.visible');
    }
}