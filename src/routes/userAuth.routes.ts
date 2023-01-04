import { Router } from "express";
// import { joiValidate } from "../helper/validate";
import { verifyTokenForAdmin, verifyTokenForUser } from "../middleware/auth";
// import { userSchema } from "../middleware/routesValidator/user.validate";
import { loginController } from "../modules/user/userAuth/useCase/Login";
import { verifyTokenController } from "../modules/user/userAuth/useCase/VerifyToken";
import { verifyUserController } from "../modules/user/userAuth/useCase/VerifyUser";
import { registrationController } from "../modules/user/userAuth/useCase/Registration";
import { forgotPasswordRequestController } from "../modules/user/userAuth/useCase/ForgetPasswordRequest";
import { resetPasswordController } from "../modules/user/userAuth/useCase/ResetPassword";
import multer from "multer";
import { findUserController } from "../modules/user/userAuth/useCase/FindUser";
import { getUserLoginDetailsController } from "../modules/admin/UserLoginDetails/useCase/GetUserLoginDetails";

const userAuthRouter = Router();
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './assets/user/images')
    },
    filename: function (req, file, cb) {
        const fileExtension = file.originalname.split('.')[1];
        cb(null, req.body.Username+'-' + Date.now() + '.' + fileExtension);
        // cb(null, 'user-' + Date.now() + '.' + fileExtension);
    }
});
const upload = multer({ storage: storage });


// userAuthRouter.post('/login', joiValidate(userSchema.login), (request, response)=>{
userAuthRouter.post('/login', (request, response) => {
    loginController.handle(request, response);
})

// userAuthRouter.post('/registration', joiValidate(userSchema.registration), upload.single('Image'), (request, response) => {
userAuthRouter.post('/registration', upload.single('Image'), (request, response) => {
    registrationController.handle(request, response);
})

userAuthRouter.post('/forgot-password-request', (request, response) => {
    forgotPasswordRequestController.handle(request, response);
})

userAuthRouter.get('/forgot-password/:Token', (request, response) => {
    verifyTokenController.handle(request, response);
})

userAuthRouter.post('/reset-password', (request, response) => {
    resetPasswordController.handle(request, response);
})

// verify user from admin side
userAuthRouter.post('/verify-user', (request, response) => {
    verifyUserController.handle(request, response);
})

// Find user
userAuthRouter.post('/find-user', verifyTokenForUser, (request, response) => {
    findUserController.handle(request, response);
})

// Get User login details
userAuthRouter.get('/find-user-login-details', verifyTokenForAdmin, (request, response) => {
    getUserLoginDetailsController.handle(request, response);
})


export {
    userAuthRouter
}
