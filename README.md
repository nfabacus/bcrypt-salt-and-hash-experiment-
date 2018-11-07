# Example of Bcrypt Salt Hash Compare
1. Generate a salt. salt is a random string.
2. Concatinate a original password with salt.
3. Then, hash the whole string.
4. Attach the salt to the hashed string.
4. Store the string somewhere (e.g. database)
5. A user gives his/her password at a log in.
6. Retrieve the user's hashed password string from the stored location.
7. get the salt from the string, and use it to hash the password entered at the login.
8. If the newly hashed password is the same as the original hashed password, they must be the same.

## To run the example
1. Install - ```npm install``` for the first time.
2. node index.js
