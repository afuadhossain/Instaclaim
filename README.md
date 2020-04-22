# Instaclaim - Getting paid has never been easier
Automatic flight interruption (delays, cancellations) claims and payment processing using smart contracts in the Blockchain

![alt text](./images/instaclaim.jpg)

## In order to launch Instaclaim you will need to install the following:

1. Make sure Node.js is installed otherwise [Install Node.js](https://nodejs.org/en/)

2. Make sure npm is installed other [Install npm](https://www.npmjs.com/get-npm)

3. Using npm install truffle:
`npm install -g truffle`

4. Make sure truffle is installed using: `truffle version`

5. [Install Ganache](https://www.trufflesuite.com/ganache) (We recommend the GUI version in order to more easily view the changes in the account balances and the events emitted).

6. Install the Metamask extension in your browser. [We recommend the chrome version](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en).

## To launch Instaclaim complete the following steps:

1. Clone the project: `git clone https://github.com/afuadhossain/IFT6056-Project.git`

2. Go to the main directory: `cd IFT6056-Project`

3. Launch the Ganache application and create a new workspace (or run ganache-cli).

4. In the Ganache GUI, click on add project and add the truffle-config.js present in the main directory. (If not prompt with the window to add project, click on the setting button.) See the image below.

![Ganache](./images/ganache.png)

5. Go to setting in Ganache. Go to Server. Make sure the port number is 7545. (This can be configured in truffle-config.js)

![Server](./images/server.png)

6. Deploy the contract: `truffle migrate --reset`

7. Launch Instaclaim using: `npm run dev`

8. You should get a notification in MetaMask requesting for permissions. Click on connect.
![Metamask](./images/metamask.png)

9. In MetaMask go in import account and important a private key of one of the addresses in Ganache. This will serve as the contract creator.

10. Fill in the field and create a flight. After updating the flight status. If the flight is delayed by 3hrs or more, you should see the balanche updated in the account associated to the compensation address.