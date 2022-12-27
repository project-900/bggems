import { password } from '../../../../../config/database';
import { generateToken } from '../../../../../middleware/auth';
import { IUserAuthRepository } from '../../repository/IUserAuthRepository';
import { compare } from 'bcrypt';
import { IUserLoginDetailRepository } from '../../../../admin/UserLoginDetails/repository/IGetUserLoginDetailsRepository';
var geoip = require('geoip-lite');

const CurrentDate = new Date().toISOString().slice(0, 10);
const CurrentTime = new Date().toLocaleString(undefined, {hour12: false, minute:'2-digit', second:'2-digit'});

class LoginUseCase {
    constructor(
        private UserAuthRepository: IUserAuthRepository,
        private UserLoginDetailRepository: IUserLoginDetailRepository,
    ){}

    async execute({Username, Password, IP}:any):Promise<any>{
        try{
            const login = await this.UserAuthRepository.login({Username})
            if(login == null){
                return {
                    Status: false,
                    message: 'Incorrect username...',
                    data: {}
                };
            }else{
                const verify = await compare(Password, login.Password)
                if(!verify){
                    return {
                        Status: false,
                        message: 'Incorrect password...',
                        data: {}
                    };
                }
                var geo = await geoip.lookup(IP);

                const LoginLocation = {
                    UserId: login.Id, 
                    Ip: IP, 
                    Longitude: geo?.longitude ? geo.longitude : '27.542554', 
                    Latitude: geo?.longitude ? geo.longitude : '73.542554', 
                    Country: 'India', 
                    Region: 'Gujarat', 
                    City: 'Surat', 
                    Date: CurrentDate, 
                    Time: CurrentTime, 
                    DeviceType: 'web'
                }
                const locationSave = await this.UserLoginDetailRepository.AddUserLoginDetails(LoginLocation)
                return {
                    Status: true,
                    message: 'Login Successfully...',
                    data: login.Token
                };
            }
        }catch {
            return {
                Status: false,
                message: 'Something went wrong...',
                data: {}
            };                
        }
    };

}

export {
    LoginUseCase
}