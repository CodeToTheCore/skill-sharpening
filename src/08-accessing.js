/*
  For all of the functions below, assume each function takes the following `person` object as its input. While the values of the object may change, the structure of it will always be the same.

  const person = {
    names: {
      first: "Rachel",
      middle: "Eleanor",
      last: "Rojas"
    },
    address: {
      street: "697 Pine Drive",
      unit: "2A",
      city: "Staten Island",
      state: "NY",
      zip: "10306"
    },
    numbers: [
      7185550921,
      7185558611
    ]
  }
*/

/**
 * getFirstName()
 * ---------------------
 * Return the `first` name of the inputted person.
 * @param {Object} person
 * @returns {string}
 *
 * EXAMPLE:
 *  getFirstName(person);
 *  //> "Rachel"
 */
function getFirstName(person) {
  // for(let key of person){
    return person.names["first"]

  // }
}

/**
 * getLastName()
 * ---------------------
 * Return the `last` name of the inputted person.
 * @param {Object} person
 * @returns {string}
 *
 * EXAMPLE:
 *  getLastName(person);
 *  //> "Rojas"
 */
function getLastName(person) {
  for(let key of person){
    return person.names["last"]

  }
}

/**
 * getAddressStreet()
 * ---------------------
 * Return the `street` of the inputted person's `address`.
 * @param {Object} person
 * @returns {string}
 *
 * EXAMPLE:
 *  getAddressStreet(person);
 *  //> "697 Pine Drive"
 */
function getAddressStreet(person) {
  for(let element of person){
    return person.address.street

  }
}

/**
 * getCountOfPhoneNumbers()
 * ---------------------
 * Return a count of how many phone `numbers` the person has.
 * @param {Object} person
 * @returns {number}
 *
 * EXAMPLE:
 *  getCountOfPhoneNumbers(person);
 *  //> 2
 */
function getCountOfPhoneNumbers(person) {
  // let phoneNums = 0;
  // for(const key in person){
  //   if[person]["numbers"] === true){
  //     phoneNums++
  //   }
    return person.numbers.length
  }


/**
 * getFirstPhoneNumber()
 * ---------------------
 * Return the first phone number associated with the person.
 *
 * NOTE: There will always be at least one phone number.
 *
 * @param {Object} person
 * @returns {number}
 *
 * EXAMPLE:
 *  getFirstPhoneNumber(person);
 *  //> 7185550921
 */

  function getCountOfPhoneNumbers(person) {
    // let phoneNums = 0;
    for(const key in person){
     return person.numbers[0]
    }
}

/**
 * getLastPhoneNumber()
 * ---------------------
 * Return the last phone number associated with the person.
 *
 * NOTE: There will always be at least one phone number.
 *
 * @param {Object} person
 * @returns {number}
 *
 * EXAMPLE:
 *  getLastPhoneNumber(person);
 *  //> 7185558611
 */
function getLastPhoneNumber(person) {
  for(const key in person){
    return person.numbers.length -1
   }
}

/**
 * getFullName()
 * ---------------------
 * Combine the `first`, `middle`, and `last` names to return the full name.
 * @param {Object} person
 * @returns {string}
 *
 * EXAMPLE:
 *  getFullName(person);
 *  //> "Rachel Eleanor Rojas"
 */
function getFullName(person) {
  // return `${person.names.first.middle.last}`
return `${person.names.first} ${person.names.middle} ${person.names.last}` 

  // // let eachName = ""
  // let fullName = person.names;
  // for(const name in person){
  //   // eachName += fullName
  //   if(fullName = "firstName" +)
  //   }
  //   return eachName
   }


/**
 * getCityAndState()
 * ---------------------
 * Combine the `city` and `state` of the person's `address`.
 *
 * NOTE: Pay attention to the formatting below.
 *
 * @param {Object} person
 * @returns {string}
 *
 * EXAMPLE:
 *  getCityAndState(person);
 *  //> "Staten Island, NY"
 */
function getCityAndState(person) {
  // if(person.address.city && person.address.state ){
    return `${person.address.city} ${person.address.state}`
  // }
}

/**
 * getFullAddress()
 * ---------------------
 * Combine all of the `address` fields to create a full address for the person.
 *
 * NOTE: Pay attention to the formatting below.
 *
 * @param {Object} person
 * @returns {string}
 *
 * EXAMPLE:
 *  getFullAddress(person);
 *  //> "697 Pine Drive 2A, Staten Island, NY, 10306"
 */
function getFullAddress(person) {
  return `${person.address.street.unit.city.state.zip}`
  //  const fullAddress = person [address].map(all => getFullAddress(all));

  // if(person.address.street && person.address.unit && person.address.city && person.address.state && person.address.zip){
  //   return `${person.address.street} ${person.address.unit} ${person.address.city} ${person.address.state} ${person.address.zip}`
  // }
}

/**
 * getFlatObject()
 * ---------------------
 * Create a new object where all of the keys from the `names` and `address` objects are in the same object. You may leave the `numbers` array as is.
 * @param {Object} person 
 * @returns {Object}
 * 
 * EXAMPLE:
 *  getFlatObject(person);
 *  //> {
      first: "Rachel",
      middle: "Eleanor",
      last: "Rojas",
      street: "697 Pine Drive",
      unit: "2A",
      city: "Staten Island",
      state: "NY",
      zip: "10306",
      numbers: [7185550921, 7185558611],
    };

 */
// function getFlatObject(person) {
//   let newObject = {}
//   for(const key in person){
//     if(person.names.key && person.address.key){
//        newObject += person[key] 
//     }
//   }
//   return newObject
// }

function getFlatObject(person) {
  //  newPersonObject = [person].names.address 
  newPersonObject = [person].names.first.middle.address.street.unit.city.state.zip 
}

// Do not change the code below.
module.exports = {
  getFirstName,
  getLastName,
  getAddressStreet,
  getCountOfPhoneNumbers,
  getFirstPhoneNumber,
  getLastPhoneNumber,
  getFullName,
  getCityAndState,
  getFullAddress,
  getFlatObject,
};
