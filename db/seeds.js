const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI } = require('../config/environment');

const Performance = require('../models/performance');
const User = require('../models/user');

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase();

  User.create([
    {
      username: 'jake75',
      email: 'jake@75',
      password: 'pass',
      passwordConfirmation: 'pass'
    }, {
      username: 'henry12',
      email: 'henry@12',
      password: 'pass',
      passwordConfirmation: 'pass'
    }, {
      username: 'sarah63',
      email: 'sarah@63',
      password: 'pass',
      passwordConfirmation: 'pass'
    }
  ])
    .then(users => {
      console.log(`${users.length} users were created`);

      return Performance.create([{
        name: 'The Lion King',
        startDate: 2-4-12,
        endDate: 12-29-19,
        runningTime: 152,
        venue: 'Lyceum Theatre',
        image: 'https://www.standard.co.uk/s3fs-public/styles/story_large/public/thumbnails/image/2017/04/19/15/andile-gumbi-simba-in-disneys-the-lion-king-at-the-lyceum-theatre-london.-photo-by-johan-persson.jpg',
        description: 'The Lion King is a musical based on the 1994 Disney animated feature film of the same name with music by Elton John and lyrics by Tim Rice along with the musical score created by Hans Zimmer with choral arrangements by Lebo M. Directed by Julie Taymor, the musical features actors in animal costumes as well as giant, hollow puppets. The show is produced by Disney Theatrical Productions.',
        reviews: [{
          rating: 4,
          review: 'loved the animal props'
        }, {
          rating: 4,
          review: 'one of my favorite shows'
        }, {
          rating: 5,
          review: 'amazing cast'
        }]
      }, {
        name: 'The Book of Mormon',
        startDate: 3-15-15,
        endDate: 10-4-19,
        runningTime: 124,
        venue: 'Palace Theatre',
        image: 'https://cdn.londonandpartners.com/asset/the-book-of-mormon-the-musical-at-the-prince-of-wales-theatre_the-book-of-mormon-photo-johan-persson_15576b28a68f43a7b5bd380f55f04e95.jpg',
        description: 'The Book of Mormon is a musical comedy about two young Mormon missionaries who travel to Uganda to preach the Mormon religion. First staged in 2011, the play mocks various Mormon beliefs and practices.',
        reviews: [{
          rating: 5,
          review: 'The funniest show I\'ve seen'
        }, {
          rating: 1,
          review: 'Didn\'t agree with the religious humor :('
        }, {
          rating: 4,
          review: 'Would definitely go again'
        }]
      },{
        name: 'Les Misérables',
        startDate: 6-11-13,
        endDate: 12-10-19,
        runningTime: 180,
        venue: 'Queen\'s Theatre',
        image: 'https://vignette.wikia.nocookie.net/lesmiserables/images/3/37/LesMis1.jpg/revision/latest?cb=20130126123538',
        description: 'Les Misérables is a French historical novel by Victor Hugo, first published in 1862, that is considered one of the greatest novels of the 19th century. In the English-speaking world, the novel is usually referred to by its original French title.',
        reviews: [{
          rating: 4,
          review: 'loved the props'
        }, {
          rating: 4,
          review: 'one of my favorite shows'
        }, {
          rating: 5,
          review: 'amazing cast'
        }]
      },{
        name: 'The Play That Goes Wrong',
        startDate: 9-22-16,
        endDate: 2-30-19,
        runningTime: 112,
        venue: 'Duchess Theatre',
        image: 'https://plymouththeatreroyal-assets.s3.amazonaws.com/assets/Image/6865-fitandcrop-890x500.jpg',
        description: 'The Play That Goes Wrong is a play by Henry Lewis, Jonathan Sayer, and Henry Shields of Mischief Theatre Company. It won Best New Comedy at the 2015 Laurence Olivier Awards.',
        reviews: [{
          rating: 5,
          review: 'The funniest show I\'ve seen'
        }, {
          rating: 1,
          review: 'Didn\'t agree with the humor :('
        }, {
          rating: 4,
          review: 'Would definitely go again'
        }]
      },{
        name: 'King Lear',
        startDate: 5-25-18,
        endDate: 9-28-18,
        runningTime: 289,
        venue: 'Duke of York\'s Theatre',
        image: 'http://resources.atgtickets.com/static/40364_full.png',
        description: 'King Lear is a tragedy written by William Shakespeare. It depicts the gradual descent into madness of the title character, after he disposes of his kingdom giving bequests to two of his three daughters',
        reviews: [{
          rating: 4,
          review: 'loved the props'
        }, {
          rating: 4,
          review: 'one of my favorite shows'
        }, {
          rating: 5,
          review: 'amazing cast'
        }]
      }]);
    })
    .then(performances => console.log(`${performances.length} performances were created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
