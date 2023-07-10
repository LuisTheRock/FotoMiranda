# Node JS Backend Application

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

### `npm run dev`

Runs the app in the development mode using nodemon.\
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
Not working at the moment

### `npm run register-admin <albumName> <albumPassword>`

Run this script to create a new administrator on the system by providing a name and a password. The password will be encrypted and the user stored in the DB.

## Capabilities

The capabilities of this backend are:

- Get all albums;
- Register an album;
- Login the account (albumName & password);
- See the profile of the album (details about them);
- Delete an album;
- Send email for the contact us;
- Store a folder of images related to a album.

## Other utilities

### Encrypt password

In order to be more difficult to access the password of a user, it is implemented with a third library `bcrypt` the encryption of the password with a 10 `saltOrRound`

- The salt to be used in encryption. If specified as a number then a salt will be generated with the specified number of rounds and used.

This adds more security to the possible penetration of database in order to get the password of an user. It´s hard to decode a password that has a hash of 10 salts.

### Nodemailer

To get a password that your gmail account will provide in order you use the nodemailer correctly you will\
need to visit this [support google](https://support.google.com/accounts/answer/185833?visit_id=638119160143863606-122509462&p=InvalidSecondFactor&rd=1#zippy=) page, so you can understand what is necessary to be done.

1. Enter with your account.
2. Go to **Security**.
3. Search for _Palavras-passe de aplicações_.
4. Insert you password of google account.
5. Select an app you want, in this case you will choose other and give a name to that.
6. Copy the password that generates and store it in [.env](.env) file.
7. Tap **Done** and that´s it.

## Learn More

You can learn more in the [Create Node App documentation](https://nodejs.org/en/docs/guides/getting-started-guide/).

To learn Node, check out the [Node documentation](https://nodejs.org/en/docs/).
