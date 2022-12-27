"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userAuthRouter = void 0;
const express_1 = require("express");
const auth_1 = require("../middleware/auth");
const Login_1 = require("../modules/user/userAuth/useCase/Login");
const VerifyToken_1 = require("../modules/user/userAuth/useCase/VerifyToken");
const VerifyUser_1 = require("../modules/user/userAuth/useCase/VerifyUser");
const Registration_1 = require("../modules/user/userAuth/useCase/Registration");
const ForgetPasswordRequest_1 = require("../modules/user/userAuth/useCase/ForgetPasswordRequest");
const ResetPassword_1 = require("../modules/user/userAuth/useCase/ResetPassword");
const multer_1 = __importDefault(require("multer"));
const FindUser_1 = require("../modules/user/userAuth/useCase/FindUser");
const GetUserLoginDetails_1 = require("../modules/admin/UserLoginDetails/useCase/GetUserLoginDetails");
const userAuthRouter = (0, express_1.Router)();
exports.userAuthRouter = userAuthRouter;
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './assets/user/images');
    },
    filename: function (req, file, cb) {
        const fileExtension = file.originalname.split('.')[1];
        cb(null, req.body.Username + '-' + Date.now() + '.' + fileExtension);
        // cb(null, 'user-' + Date.now() + '.' + fileExtension);
    }
});
const upload = (0, multer_1.default)({ storage: storage });
// userAuthRouter.post('/login', joiValidate(userSchema.login), (request, response)=>{
userAuthRouter.post('/login', (request, response) => {
    Login_1.loginController.handle(request, response);
});
// userAuthRouter.post('/registration', joiValidate(userSchema.registration), upload.single('Image'), (request, response) => {
userAuthRouter.post('/registration', upload.single('Image'), (request, response) => {
    Registration_1.registrationController.handle(request, response);
});
userAuthRouter.post('/forgot-password-request', (request, response) => {
    ForgetPasswordRequest_1.forgotPasswordRequestController.handle(request, response);
});
userAuthRouter.get('/forgot-password/:Token', (request, response) => {
    VerifyToken_1.verifyTokenController.handle(request, response);
});
userAuthRouter.post('/reset-password', (request, response) => {
    ResetPassword_1.resetPasswordController.handle(request, response);
});
// verify user from admin side
userAuthRouter.post('/verify-user', (request, response) => {
    VerifyUser_1.verifyUserController.handle(request, response);
});
// Find user
userAuthRouter.post('/find-user', auth_1.verifyTokenForUser, (request, response) => {
    FindUser_1.findUserController.handle(request, response);
});
// Get User login details
userAuthRouter.get('/find-user-login-details', auth_1.verifyTokenForAdmin, (request, response) => {
    GetUserLoginDetails_1.getUserLoginDetailsController.handle(request, response);
});
