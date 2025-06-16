# GymPass-style app.

A backend API for a gym check-in system, allowing user registration, authentication, gym search, and location-based check-ins. It enforces business rules and uses PostgreSQL with JWT authentication.

### Tests Running
![testsGymPassOk](https://github.com/user-attachments/assets/fa3b1ad5-bc07-4b0f-a86a-b39443f34b4c)


## Coding Skills
- Geolocation;
- Design Patterns;
- Docker;
- JWT;
- Refresh Token;
- RBAC;
- CI/CD testing;

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
- [x] A check-in can only be validated by administrators;
- [x] A gym can only be registered by administrators;

### NFRs (Non-Functional Requirements)
- [x] The user's password must be encrypted;
- [x] The application's data must be persisted in a PostgreSQL database;
- [x] All data lists must be paginated with 20 items per page;
- [x] The user must be identified by a JWT (JSON Web Token);

## How to try

### terminal 01:
- npm install (*install packages*)
- npm run build (*compile project*)
- npm run start (*start project*)

### terminal 02:
- docker-compose up --build -d (*create and execute docker*)
- npm run test:ui (*run unit tests*)
- npm run test:e2e (*run unit tests*)
