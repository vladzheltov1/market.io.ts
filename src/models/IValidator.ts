/* Types for creating functions */

type EmailProp = {
    length: number,
    required: boolean
};
type TextFieldProp = {
    length: number,
    required: boolean,
    min: number,
    max: number
};

export interface IValidator{
    
    /* Email validation template */
    email(
        field: string,
        required: boolean
    ): string | boolean;


    /* Text field validation template */
    textField(
        field: string,
        required: number,
        min?: number,
        max?: number
    ): string | boolean;


    /* Password validation template */
    password(
        field: string
    ): string | boolean;


    /* Password match validation template */
    passwordMatch(
        password1: string,
        password2: string
    ): string | boolean;
}