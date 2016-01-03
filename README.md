Object Version System
=====================

# Installation
0. Prerequisites
    > You must have [Git](https://git-scm.com/),
    [Node.js](https://nodejs.org/en/) (with NPM), and
    [MongoDB](https://www.mongodb.org/) already installed.
1. Unzip
    > `unzip object-version-system.zip`
2. Navigate to directory
    > `cd object-version-system`
3. Install
    > `npm install`

# Usage
1. Start application
    > `node object-version-system.js`
2. POST JSON objects to `http://localhost:3000/documents/`
3. Open a browser and navigate to [http://localhost:3000](http://localhost:3000)
4. Click a document name to view it's version history by date
5. Check multiple versions to compare properties
6. Click a property to narrow the comparison to just that property

# Security
This application was built with the understanding that it will reside on a
trusted intranet; therefore, it does not authenticate requests. **It is not
secure to expose this application's endpoints to the internet at large.**
