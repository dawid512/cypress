///<reference types="cypress" />
import { baseData } from '../../fixtures/base.json'
import { Helpers } from '../../support/helpers';
import { Checker } from '../../support/checker';
import { Navigation } from '../../support/navigation';

describe('Register / login / logout users', () => {

    const helpers = new Helpers();
    const checker = new Checker();
    const navigation = new Navigation();

    const test_username = `test${Math.random().toString().slice(2, 12)}`
    const testEmail = `${test_username}@test.te`;


    before(()=> {
        helpers.goToPage(baseData.defaultUrl);
    });
    

    it('Register user test', () => {
        checker.checkIfMainPageDisplayProperly()
        checker.navigateToSingUpPageAndCheckIfDisplayProperly()
        navigation.setNewUserDataWhileSignUp(test_username, testEmail);
        navigation.setAllRequiredDataInSingUpFormAndConfirm(false);
        navigation.checkIfUserCreatedAndSignedUp(test_username);
        navigation.deleteAccountAndCheckIfDeleted();
    });
})

