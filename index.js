const bcrypt = require('bcrypt-nodejs');

const myPassword1 = "hello";
const myPassword2 = "hello1";

bcrypt.genSalt(10, (err, salt) => {
  console.log('randomly-created salt at registration >>>', salt);
  bcrypt.hash(myPassword1, salt, null, (err, hash)=>{
    console.log('generated hash>>>', hash);
    console.log('As you can see above, generated hash contains the salt.');

    bcrypt.compare(myPassword2, hash, (err, isMatch) =>{
      console.log('bcrypt takes the salt from the original hash, and uses it to hash the password provided by a user at log in.');
      console.log('If the created hash is the same as the original hash, then the passwords must be the same.')
      if(err) {
        console.log(err);
      }
      console.log('match! ', isMatch);
    })
  });
});

