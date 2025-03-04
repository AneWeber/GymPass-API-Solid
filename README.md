# GymPass-style app.

## Coding Skills
- Geolocation;
- Design Patterns;
- Docker;
- JWT;
- Refresh Token;
- RBAC;

## Application Bases

### FRs (Functional Requirements)
- [x] It should be possible to register;
- [x] It should be possible to authenticate;
- [x] It should be possible to retrieve the profile of a logged-in user;
- [x] It should be possible to obtain the number of check-ins made by the logged-in user;
- [x] It should be possible for the user to retrieve their check-in history;
- [x] It should be possible for the user to search for nearby gyms;
- [x] It should be possible for the user to search for gyms by name;
- [x] It should be possible for the user to check in at a gym;
- [x] It should be possible to validate a user's check-in;
- [x] It should be possible to register a gym;

### BRs (Business Rules)
- [x] A user should not be able to register with a duplicate email;
- [x] A user cannot perform two check-ins on the same day;
- [x] A user cannot check in if they are not within 100m of the gym;
- [x] A check-in can only be validated up to 20 minutes after it is created;
- [ ] A check-in can only be validated by administrators;
- [ ] A gym can only be registered by administrators;

### NFRs (Non-Functional Requirements)
- [x] The user's password must be encrypted;
- [x] The application's data must be persisted in a PostgreSQL database;
- [x] All data lists must be paginated with 20 items per page;
- [ ] The user must be identified by a JWT (JSON Web Token);