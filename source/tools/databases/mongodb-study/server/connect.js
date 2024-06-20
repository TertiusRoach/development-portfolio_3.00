//--► npm run startConnect ◄--//
//--► CRUD is the acronym for CREATE, READ, UPDATE and DELETE ◄--//
const { MongoClient } = require('mongodb');

//--|▼| This connects the application to a MongoDB cluster |▼|--//
async function main() {
  const uri = 'mongodb+srv://TertiusRoach:F9MTuRf6dKXTfM0b@cluster0.n1t9opj.mongodb.net/?retryWrites=true&w=majority'; //--|◄| Keep Confidential |◄|--//
  const client = new MongoClient(uri);
  try {
    await client.connect();
    /* await listDatabases(client); */

    //--|▼| Create |▼|--//
    /*
    await createSingle(client, {
      name: 'Lovely Loft',
      summary: 'A charming loft in Paris',
      bedrooms: 1,
      bathrooms: 1,
    });
    */

    /*
    await createMultiple(client, [
      {
        name: 'Infinite Views',
        summary: 'Modern home with infinite views from the infinity pool',
        property_type: 'House',
        bedrooms: 5,
        bathrooms: 4.5,
        beds: 5,
      },
      {
        name: 'Private room in London',
        property_type: 'Apartment',
        bedrooms: 1,
        bathroom: 1,
      },
      {
        name: 'Beautiful Beach House',
        summary: 'Enjoy relaxed beach living in this house with a private beach',
        bedrooms: 4,
        bathrooms: 2.5,
        beds: 7,
        last_review: new Date(),
      },
    ]);
    */

    //--|▼| Read |▼|--//
    /* await findOneListingByName(client, 'Infinite Views'); */

    /*
    await findListingsWithMinimumBedroomsBathroomsAndMostRecentReviews(client, {
      minimunNumberOfBedrooms: 4,
      minimumNumberOfBathrooms: 2,
      minimumNumberOfResults: 5,
    });
    */
    //--|▼| Update |▼|--//
    /* await updateListingByName(client, 'Infinite Views', { bedrooms: 6, beds: 8 }); */

    /* await upsertListingByName(client, 'Cozy Cottage', { name: 'Cozy Cottage', bedrooms: 2, bathrooms: 6 }); */

    await updateAllListingsToHavePropertyType(client);
    //--|▼| Delete |▼|--//
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}
main().catch(console.error);

//--|▼| Create |▼|--//
async function createSingle(client, newListing) {
  const result = await client.db('sample_airbnb').collection('listingsAndReviews').insertOne(newListing);
  console.log(`New listing created with the following id: ${result.insertedId}`);
}
async function createMultiple(client, newListings) {
  const result = await client.db('sample_airbnb').collection('listingsAndReviews').insertMany(newListings);
  console.log(`${result.insertedCount} new listings created with the following id's: `);
  console.log(result.insertedIds);
}

//--|▼| Read |▼|--//
async function findListingsWithMinimumBedroomsBathroomsAndMostRecentReviews(
  client,
  { minimumNumberOfBedrooms = 0, minimumNumberOfBathrooms = 0, maximumNumberOfResults = Number.MAX_SAFE_INTEGER } = {}
) {
  // See https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#find for the find() docs
  const cursor = client
    .db('sample_airbnb')
    .collection('listingsAndReviews')
    .find({
      bedrooms: { $gte: minimumNumberOfBedrooms },
      bathrooms: { $gte: minimumNumberOfBathrooms },
    })
    .sort({ last_review: -1 })
    .limit(maximumNumberOfResults);

  // Store the results in an array
  const results = await cursor.toArray();

  // Print the results
  if (results.length > 0) {
    console.log(`Found listing(s) with at least ${minimumNumberOfBedrooms} bedrooms and ${minimumNumberOfBathrooms} bathrooms:`);
    results.forEach((result, i) => {
      const date = new Date(result.last_review).toDateString();

      console.log();
      console.log(`${i + 1}. name: ${result.name}`);
      console.log(`   _id: ${result._id}`);
      console.log(`   bedrooms: ${result.bedrooms}`);
      console.log(`   bathrooms: ${result.bathrooms}`);
      console.log(`   most recent review date: ${date}`);
    });
  } else {
    console.log(`No listings found with at least ${minimumNumberOfBedrooms} bedrooms and ${minimumNumberOfBathrooms} bathrooms`);
  }
}
async function findOneListingByName(client, nameOfListing) {
  const result = await client.db('sample_airbnb').collection('listingsAndReviews').findOne({ name: nameOfListing });
  if (result) {
    console.log(`Found a listing in the collection with the name '${nameOfListing}'`);
    console.log(result);
  } else {
    console.log(`No listing found with the name '${nameOfListing}'`);
  }
}

//--|▼| Update |▼|--//
async function updateAllListingsToHavePropertyType(client) {
  const result = await client
    .db('sample_airbnb')
    .collection('listingsAndReviews')
    .updateMany({ property_type: { $exists: false } }, { $set: { property_type: 'Unknown' } });
  console.log(`${result.matchedCount} document(s) matched the query criteria.`);
  console.log(`${result.modifiedCount} document(s) was/were updated.`);
}
async function updateListingByName(client, nameOfListing, updatedListing) {
  const result = await client.db('sample_airbnb').collection('listingsAndReviews').updateOne({ name: nameOfListing }, { $set: updatedListing });

  console.log(`${result.matchedCount} document(s) matched the query criteria`);
  console.log(`${result.modifiedCount} documents was/were updated`);
}

async function upsertListingByName(client, nameOfListing, updatedListing) {
  const result = await client.db('sample_airbnb').collection('listingsAndReviews').updateOne({ name: nameOfListing }, { $set: updatedListing }, { upsert: true });

  console.log(`${result.matchedCount} document(s) matched the query criteria`);

  if (result.upsertedCount > 0) {
    console.log(`One document was inserted with the id ${result.upsertedId}`);
  } else {
    console.log(`${result.modifiedCount} document(s) was/were updated`);
  }
}

//--|▼| Delete |▼|--//

//--|▼| Loops through Database |▼|--//
async function listDatabases(client) {
  const databasesList = await client.db().admin().listDatabases();

  console.log('Databases: ');
  databasesList.databases.forEach((db) => {
    console.log(` - ${db.name}`);
  });
}
console.log('--connect.js Loaded');

//--► https://github.com/mongodb-developer/nodejs-quickstart ◄--//
