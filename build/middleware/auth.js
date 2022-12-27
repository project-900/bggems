"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyTokenForAdmin = exports.generateToken = exports.verifyTokenForUser = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authConfig = require("../config/auth.json");
const generateToken = (login) => __awaiter(void 0, void 0, void 0, function* () {
    return jsonwebtoken_1.default.sign({ login }, authConfig.secret, {
        expiresIn: 86400,
    });
});
exports.generateToken = generateToken;
const verifyToken = (request) => __awaiter(void 0, void 0, void 0, function* () {
    const authHeader = request.headers.authorization;
    let isValidToken = true;
    let message = "";
    if (!authHeader) {
        isValidToken = false;
        message = 'No token provided';
        return { isValidToken, message };
    }
    const parts = authHeader.split(' ');
    if (parts.length != 2) {
        isValidToken = false;
        message = 'Token error';
        return { isValidToken, message };
    }
    const [scheme, token] = parts;
    if (!/^Bearer$/i.test(scheme)) {
        isValidToken = false;
        message = 'Token malformatted';
        return { isValidToken, message, token };
    }
    return { isValidToken, message, token };
});
const verifyTokenForUser = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { isValidToken, message, token } = yield verifyToken(request);
    if (!isValidToken) {
        return response.status(401).send({
            Status: 0,
            msg: message
        });
    }
    jsonwebtoken_1.default.verify(token, authConfig.secret, (err, decoded) => __awaiter(void 0, void 0, void 0, function* () {
        if (err)
            return response.status(401).send({
                Status: 0,
                msg: 'token invalid'
            });
        try {
            if (decoded.loginUser.IsAdmin == false) {
                if (!request.body.UserId) {
                    request.body.UserId = decoded.loginUser.Id;
                }
                return next();
            }
            else {
                return response.status(401).send({
                    Status: 0,
                    msg: 'Unauthorized token..'
                });
            }
        }
        catch (_a) {
            return response.status(401).send({
                Status: 0,
                msg: 'token invalid'
            });
        }
        // request.body.UserId = decoded.UserID;
    }));
});
exports.verifyTokenForUser = verifyTokenForUser;
const verifyTokenForAdmin = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { isValidToken, message, token } = yield verifyToken(request);
    if (!isValidToken) {
        return response.status(401).send({
            Status: 0,
            msg: message
        });
    }
    jsonwebtoken_1.default.verify(token, authConfig.secret, (err, decoded) => __awaiter(void 0, void 0, void 0, function* () {
        if (err)
            return response.status(401).send({
                Status: 0,
                msg: 'token invalid'
            });
        try {
            if (decoded.loginUser.IsAdmin == true) {
                return next();
            }
            else {
                return response.status(401).send({
                    Status: 0,
                    msg: 'Unauthorized token..'
                });
            }
        }
        catch (_b) {
            return response.status(401).send({
                Status: 0,
                msg: 'token invalid'
            });
        }
        // request.body.UserId = decoded.UserID;
    }));
});
exports.verifyTokenForAdmin = verifyTokenForAdmin;
