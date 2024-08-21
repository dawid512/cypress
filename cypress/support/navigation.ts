import { Helpers } from '../../cypress/support/helpers';
import { controlers } from '../../cypress/fixtures/controlers.json'
import { format } from 'util';


export class Navigation extends Helpers{

    public setNewUserDataWhileSignUp(login: string, email: string){
        this.type(controlers.input.name,login);
        //this.getElement(controlers.input.name)?.type(login);
        this.type(controlers.input.email,email);
        // this.getElement(controlers.input.email)?.type(email);
        this.click(controlers.buttons.signup)
        // this.getElement(controlers.buttons.signup)?.click();
        this.checker(controlers.text.enter_Account_Information_text, controlers.condition.beVisible);
        // this.getElement(controlers.text.enter_Account_Information_text)?.should('be.visible');
    }

    public setAllRequiredDataInSingUpFormAndConfirm(confirm= false){
        this.getElement(controlers.input.title_Mr)?.click();
        this.getElement(controlers.input.password_input)?.type("testEmail");
        this.getElement(controlers.input.select_day).select(12);
        this.getElement(controlers.input.select_month).select("April");
        this.getElement(controlers.input.select_year).select("2012");
        this.getElement(controlers.input.checkbox_newsletter)?.click();
        this.getElement(controlers.input.checkbox_receive_special_offers)?.click();

        this.getElement(controlers.input.first_name_input)?.type("test");
        this.getElement(controlers.input.last_name_input)?.type("test");
        this.getElement(controlers.input.company_input)?.type("test");
        this.getElement(controlers.input.address_input)?.type("test");
        this.getElement(controlers.input.address2_input)?.type("test");
        this.getElement(controlers.input.country_input)?.select("United States");
        this.getElement(controlers.input.state_input)?.type("test");
        this.getElement(controlers.input.city_input)?.type("test");
        this.getElement(controlers.input.zipcode_input)?.type(Math.random().toString().slice(2, 12));
        this.getElement(controlers.input.mobile_number_input)?.type(Math.random().toString().slice(2, 12));
        if(!confirm)
        this.getElement(controlers.buttons.create_account)?.click();

    }

    public checkIfUserCreatedAndSignedUp(test_username: string){
        this.getElement(controlers.text.account_created)?.should('be.visible');
        this.getElement(controlers.buttons.continue)?.click();

        //%s only works with format from util
        this.getElement(format(controlers.text.loggedInAs, test_username)).should('be.visible');
    }

    public deleteAccountAndCheckIfDeleted(){
        this.getElement(controlers.buttons.delete_account)?.click();
        this.getElement(controlers.text.account_deleted)?.should('be.visible');
        this.getElement(controlers.buttons.continue)?.click();
    }
}