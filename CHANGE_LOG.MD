
# 22/8/2022
### migration create - done
### live updated - pending


# 23/8/2022
### migration create - done
### live updated - pending

# 24/8/2022
### migration create - done
### live updated - pending

# 29/8/2022
### migration create - done
### live updated - pending

# 30/8/2022
### migration create - done
### live updated - pending
 


# 31/8/2022
### migration create - done
### live updated - pending
### changes need - API: /api/GetFreelancerProfessionals/getTimeSlot (Time slots according to booked appointments)
                 - API: /api/GetFreelancerProfessionals/createAppoinmentBooking (spell mistake 'userServices')
                 - API: /api/TeamRequest/acceptVirtualQueueNotificationRequest (spell mistake 'userServices', code changed)
                 - API: /api/GetFreelancerProfessionals/createStartAppoinment (appoinment_status ; 'running')
                 - API: /api/GetFreelancerProfessionals/endAppoinment (appoinment_status ; 'completed')
                 - API: /api/GetFreelancerProfessionals/deleteUpcomingAppoinment (appoinment_status : 'canceled')
                 - API: /api/GetFreelancerProfessionals/createCancelParticularAppoinment (appoinment_status : 'rejected')
 

# 09/09/2022
### Changes - delete constraint manually from Table (user_ratings - {freedback_id, rating_type_id} constrain) - live done
### Changes - delete constraint manually from Table (subscription_payment - {subscription_plan_id} constrain) - live done


# 09/09/2022
### Changes - delete manually Table ( subscription_plan )
### Changes - delete manually Table ( subscription_payment)

### Changes - delete manually Table if exists ( stripe_connect_accounts )
### Changes - delete manually Table if exists ( stripe_customer_accounts )



============================== ^ all done ^ ===============================

# 28/09/2022
### Added - Migration created for add column appointment booking (service_amount)
### Changes - delete manually constraint(annual_sale_goals_business_owner_id_fkey) from Table( annual_sale_goals)


