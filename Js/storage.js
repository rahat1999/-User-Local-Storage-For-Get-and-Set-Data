// use local storage as your db for now
const addToDb = id => {
  const exists = getDb();
  let shopping_cart = {};
  if (!exists) {
    shopping_cart[id] = 1;
  }
  else {
    shopping_cart = JSON.parse(exists);
    if (shopping_cart[id]) {
      const newCount = shopping_cart[id] + 1;
      shopping_cart[id] = newCount;
    }
    else {
      shopping_cart[id] = 1;
    }
  }
  updateDb(shopping_cart);
}

const getDb = () => localStorage.getItem('shopping_cart');
const updateDb = cart => {
  localStorage.setItem('shopping_cart', JSON.stringify(cart));
}

const removeFromDb = id => {
  const exists = getDb();
  if (!exists) {

    //এই জাগাটা খালি রাখতে পারি বা শুধু returnকরেতে পারি/কারন হচ্ছে আমাদের  সপিং কার্ডে প্রডাক্ট না থাকলে কিছু তো রিমোভ করা যাবে না 
  }
  else {
    const shopping_cart = JSON.parse(exists);
    delete shopping_cart[id];
    updateDb(shopping_cart);
  }
}

const getStoredCart = () => {
  const exists = getDb();
  return exists ? JSON.parse(exists) : {};
}

const clearTheCart = () => {
  localStorage.removeItem('shopping_cart');
}

export { addToDb, removeFromDb, clearTheCart, getStoredCart }




//আমার  বানানো
// // db means database
// const addToDb = item => {
//     const db = getDb()
//     if (item in db) {
//         db[item] = db[item] + 1
//     }
//     else {
//         db[item] = 1
//     }
//     saveLocalStorage(db);
// }
// //set data local storage
// const saveLocalStorage = db => {
//     const dbJson = JSON.stringify(db);
//     localStorage.setItem('shopping-cart', dbJson);
// }
//
// //get data from local storage
// const getDb = () => {
//     let getFromLocalStorage = localStorage.getItem('shopping-cart');
//
//     // if (getFromLocalStorage) {
//     //     getFromLocalStorage = JSON.parse(getFromLocalStorage);
//     // } else {
//     //     getFromLocalStorage = {};
//     // }
//
//     // return getFromLocalStorage;
//     return getFromLocalStorage ? JSON.parse(getFromLocalStorage) : {}
//
// }
//
// //remove data from storage
// const removeDataFromDb = (item) => {
//     const db = getDb()
//     delete db[item];
// }
// export { addToDb, removeDataFromDb, getDb }
