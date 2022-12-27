import { Router } from 'express';
const router = Router();
let version = 'v1';

import { userAuthRouter } from "./userAuth.routes";
import { locationRouter } from "./location.routes";
import { businessTypeRouter } from "./businessType.routes";
import { ReferenceTypeRouter } from "./reference.routes";
import { salesPersonRouter } from "./salesPerson.routes";
import { tempRouter } from "./test.routes";
import { mailRouter } from "./mail.routes";


router.use('', userAuthRouter)
router.use('/api/'+version+'/user', userAuthRouter)
router.use('/api/'+version+'/location', locationRouter)
router.use('/api/'+version+'/business-type', businessTypeRouter)
router.use('/api/'+version+'/sales-person', salesPersonRouter)
router.use('/api/'+version+'/reference-type', ReferenceTypeRouter)
router.use('/api/'+version+'/mail', mailRouter)


router.use('/api/'+version+'/test', tempRouter)

export {
    router
}