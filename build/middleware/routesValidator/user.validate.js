"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const Joi = require("joi");
const userSchema = {
    changePassword: Joi.object().keys({
        old_password: Joi.string().required().messages({
            'any.required': `"Old Password" is a required field`,
            'string.empty': `Old Password cannot be an empty field`,
        }),
        new_password: Joi.string().required(),
        confirm_password: Joi.any()
            .valid(Joi.ref("new_password"))
            .required()
            .label("New Password")
            .options({ messages: { "any.only": "New Password does not match" } }),
    }),
    login: Joi.object().keys({
        username: Joi.string().required().messages({
            'any.required': `Username is a required field`,
            'string.empty': `Username cannot be an empty field`,
        }),
        password: Joi.string().required().messages({ 'string.empty': `Username cannot be an empty field`, }),
    }),
    registration: Joi.object().keys({
        FirstName: Joi.string().required().messages({ 'string.empty': `First name is required` }),
        LastName: Joi.string().required().messages({ 'string.empty': `Last name is required` }),
        Username: Joi.string().required().messages({ 'string.empty': `Username is required` }),
        Email: Joi.string().email().required().messages({
            'string.empty': `Email is required`,
            'string.email': 'Email must be a valid',
        }),
        Password: Joi.string().required().messages({ 'string.empty': `Password cannot be an empty field` }),
        // CONFIRM: Joi.any()
        //   .valid(Joi.ref("password"))
        //   .required()
        //   .label("New Password")
        //   .options({ messages: { "any.only": "Password does not match" } }),
        CountryCode: Joi.string().required().messages({ 'string.empty': `Country code is required` }),
        MobileNo: Joi.string().required().messages({ 'string.empty': `Mobile number is required` }),
        BusinessTypeId: Joi.string().required().messages({ 'string.empty': `Business type is required` }),
        CompanyName: Joi.string().required().messages({ 'string.empty': `Company name is required` }),
        CompanyAddress: Joi.string().required().messages({ 'string.empty': `Address is required` }),
        OfficePhoneCountryCode: Joi.string().required().messages({ 'string.empty': `Office number Country code is required` }),
        OfficePhoneNumber: Joi.string().required().messages({ 'string.empty': `office number is required` }),
        CountryId: Joi.string().required().messages({ 'string.empty': `Please select company` }),
        RegionId: Joi.string().required().messages({ 'string.empty': `region is required` }),
        CityId: Joi.string().required().messages({ 'string.empty': `city is required` }),
        ZipCode: Joi.string().required().messages({ 'string.empty': `Zip code is required` }),
        ReferenceId: Joi.string().required().messages({ 'string.empty': `Please select reference` }),
        SalesPersonId: Joi.string().required().messages({ 'string.empty': `Please select sales person` }),
    }),
};
exports.userSchema = userSchema;
// messages: {
//   'string.alphanum': '{{#label}} must only contain alpha-numeric characters',
//   'string.base': '{{#label}} must be a string',
//   'string.base64': '{{#label}} must be a valid base64 string',
//   'string.creditCard': '{{#label}} must be a credit card',
//   'string.dataUri': '{{#label}} must be a valid dataUri string',
//   'string.domain': '{{#label}} must contain a valid domain name',
//   'string.email': '{{#label}} must be a valid email',
//   'string.empty': '{{#label}} is not allowed to be empty',
//   'string.guid': '{{#label}} must be a valid GUID',
//   'string.hex': '{{#label}} must only contain hexadecimal characters',
//   'string.hexAlign': '{{#label}} hex decoded representation must be byte aligned',
//   'string.hostname': '{{#label}} must be a valid hostname',
//   'string.ip': '{{#label}} must be a valid ip address with a {{#cidr}} CIDR',
//   'string.ipVersion': '{{#label}} must be a valid ip address of one of the following versions {{#version}} with a {{#cidr}} CIDR',
//   'string.isoDate': '{{#label}} must be in iso format',
//   'string.isoDuration': '{{#label}} must be a valid ISO 8601 duration',
//   'string.length': '{{#label}} length must be {{#limit}} characters long',
//   'string.lowercase': '{{#label}} must only contain lowercase characters',
//   'string.max': '{{#label}} length must be less than or equal to {{#limit}} characters long',
//   'string.min': '{{#label}} length must be at least {{#limit}} characters long',
//   'string.normalize': '{{#label}} must be unicode normalized in the {{#form}} form',
//   'string.token': '{{#label}} must only contain alpha-numeric and underscore characters',
//   'string.pattern.base': '{{#label}} with value {:[.]} fails to match the required pattern: {{#regex}}',
//   'string.pattern.name': '{{#label}} with value {:[.]} fails to match the {{#name}} pattern',
//   'string.pattern.invert.base': '{{#label}} with value {:[.]} matches the inverted pattern: {{#regex}}',
//   'string.pattern.invert.name': '{{#label}} with value {:[.]} matches the inverted {{#name}} pattern',
//   'string.trim': '{{#label}} must not have leading or trailing whitespace',
//   'string.uri': '{{#label}} must be a valid uri',
//   'string.uriCustomScheme': '{{#label}} must be a valid uri with a scheme matching the {{#scheme}} pattern',
//   'string.uriRelativeOnly': '{{#label}} must be a valid relative uri',
//   'string.uppercase': '{{#label}} must only contain uppercase characters'
// }
