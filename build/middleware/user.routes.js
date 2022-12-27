"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = require("express");
const createUser_1 = require("../modules/B2B/user/useCases/createUser");
const createLogin_1 = require("../modules/B2B/login/usecase/createLogin");
const auth_1 = require("../middleware/auth");
const userInfo_1 = require("../modules/B2B/user/useCases/userInfo");
const updateUserProfile_1 = require("../modules/B2B/user/useCases/updateUserProfile");
const multer_1 = __importDefault(require("multer"));
const createUserRegistration_1 = require("../modules/B2C/userRegistration/useCases/createUserRegistration");
const createUserLogin_1 = require("../modules/B2C/userLogin/useCase/createUserLogin");
const CreateChnagePassword_1 = require("../modules/B2B/changePassword/useCase/CreateChnagePassword");
const updateUserDetails_1 = require("../modules/B2C/userRegistration/useCases/updateUserDetails");
const verifyOtp_1 = require("../modules/B2B/user/useCases/verifyOtp");
const createUserLocation_1 = require("../modules/B2C/userRegistration/useCases/createUserLocation");
const resendOtp_1 = require("../modules/B2B/user/useCases/resendOtp");
const sendOtp_1 = require("../modules/B2B/user/useCases/sendOtp");
const generateAuthy_1 = require("../modules/B2B/user/useCases/generateAuthy");
const validate_1 = require("../helper/validate");
const user_validate_1 = require("../middleware/routesValidator/user.validate");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require('cloudinary').v2;
// cloudinary configuration
const abc = cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, './public/images/user')
//     },
//     filename: function (req, file, cb) {
//          const fileExtension = file.originalname.split('.')[1];
//         cb(null, 'user-'+Date.now() + '.' + fileExtension);
//     }
//   });
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        height: 250,
        width: 250,
        folder: "user",
        crop: "scale",
        quality: 70,
        secure: "true",
    },
});
const upload = (0, multer_1.default)({ storage: storage });
const UserRoutes = (0, express_1.Router)();
exports.UserRoutes = UserRoutes;
//Add User Routes (BUSINESS USER REGISTRATION)(B2B)
// UserRoutes.post("/add", (request : any ,response : any)=>{
//     createUserController.handle(request,response);
// })
UserRoutes.post("/add", (request, response) => {
    createUser_1.createUserController.handle(request, response);
});
//Login Business User(B2B LOGIN)
UserRoutes.post("/login", (request, response) => {
    createLogin_1.createLoginController.handle(request, response);
});
//Add User Routes (CUSTOMER USER REGISTRATION)(B2C)
UserRoutes.post("/user-registration", (request, response) => {
    createUserRegistration_1.createUserRegistrationController.handle(request, response);
});
//Login CUSTOMER USER (B2C LOGIN)
UserRoutes.post("/user-login", (request, response) => {
    createUserLogin_1.createUserLoginController.handle(request, response);
});
//Get particular user Details(B2B)
UserRoutes.get("/getuser/:userId", (request, response) => {
    userInfo_1.userInfoController.handle(request, response);
});
//Update User(B2B)
UserRoutes.post("/updateuser/:userId", upload.single('profile_pic'), (request, response) => {
    updateUserProfile_1.updateUserProfileController.handle(request, response);
});
//Update User(B2C)
UserRoutes.post("/update_user/:userId", upload.single('profile_pic'), (request, response) => {
    updateUserDetails_1.updateUserController.handle(request, response);
});
//Change Password User(B2B)
UserRoutes.post("/change-password/:userId", auth_1.verifyTokenForB2B, (0, validate_1.joiValidate)(user_validate_1.userSchema.changePassword), (request, response) => {
    CreateChnagePassword_1.createChnagePasswordController.handle(request, response);
});
//Find User Location (B2C)
UserRoutes.post("/createUserLocation", (request, response) => {
    createUserLocation_1.createUserLocationController.handle(request, response);
});
//Resend OTP API Routes (B2C and B2B both)
UserRoutes.post("/resendOTP", (request, response) => {
    resendOtp_1.createResendOtpController.handle(request, response);
});
//Verify OTP User (B2B)
UserRoutes.post("/verify-otp", (request, response) => {
    verifyOtp_1.verityOtpController.handle(request, response);
});
//Resend OTP API Routes (B2C and B2B both)
UserRoutes.post("/sendOTP", (request, response) => {
    sendOtp_1.createSendOtpController.handle(request, response);
});
//Resend OTP API Routes (B2C and B2B both)
UserRoutes.post("/generate_authy_id", (request, response) => {
    generateAuthy_1.generateAuthyController.handle(request, response);
});
