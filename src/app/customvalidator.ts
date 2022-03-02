import { AbstractControl, MaxLengthValidator, ValidationErrors, Validators } from "@angular/forms";
export class Customvalidator {
    static priceValidator (control:AbstractControl): ValidationErrors|null
    {
        const price=control.value as number;

        if(price<100 || price>200)
        {
            return {'priceError':{'valid':false}}
        }
        
        return null;
    }

    static phonevalidator (control:AbstractControl): ValidationErrors|null
    {
        const phonenumber=control.value as string;
        if(phonenumber.length!=10 || !phonenumber.match("^[0-9]+$"))
        {
            return {'numberError':{'valid':false}}
        }
        return null;
    }

    

}