![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Buffers - File Transformers

### Author: Xochil Squaglia

### Links and Resources
* [repo] https://github.com/xochil73/04lab
* [travis]


#### Documentation
* [swagger](http://xyz.com) (API assignments only)
* [jsdoc](http://xyz.com) (All assignments)

### Modules
#### `index.js`
##### Exported Values and Methods

###### `fs.writeFile('files/loop.js', myBuffer, (err) => {
            if(err) console.log(err);
            console.log('done');
        });`
Usage Notes or examples

###### `bar(array) -> array`
Usage Notes or examples

### Setup
#### `.env` requirements
* `PORT` - Port Number
* `MONGODB_URI` - URL to the running mongo instance/db

#### Running the app
* `npm start`
* Endpoint: `fs.writeFile('files/loop.js', myBuffer, (err) => {
                 if(err) console.log(err);
                 console.log('done');
             });`
  * Returns a new file loop.js with an forEach that runs through an array of names.
* Endpoint: `files/loop.js`
  * Returns a three names with console.log.
  
#### Tests
* How do you run tests?
* What assertions were made?
* What assertions need to be / should be made?

#### UML
Link to an image of the UML for your application and response to events