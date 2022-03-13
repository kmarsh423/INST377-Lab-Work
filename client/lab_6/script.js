function getRandomIntInclusive(min, max) {
  const newMin = Math.ceil(min);
  const newMax = Math.floor(max);
  return Math.floor(
    Math.random() * (newMax - newMin + 1) + newMin
  );
}

function createHtmlList(collection) {
  console.log('fired HTML creator');
  console.log(collection);
  const targetList = document.querySelector('#resto-list');
  targetList.innerHTML = '';
  collection.forEach((item) => {
    const injectThisItem = `<li>${item.name}</li>`;
    targetList.innerHTML += injectThisItem;
  });
}

function dataHandler(arrayl) {
  const range = [...Array(15).keys()];
  const listItems = range.map((item, index) => {
    const restNum = getRandomIntInclusive(0, arrayl.length - 1);
    return arrayl[restNum];
  });
  return listItems;
}
async function mainEvent() { // the async keyword means we can make API requests
  const form = document.querySelector('.form');
  const submit = document.querySelector('.submit');
  submit.style.display = 'none';

  const results = await fetch('/api/foodServicesPG'); // This accesses some data from our API
  const arrayFromJson = await results.json(); // This changes it into data we can use - an object
  console.log(arrayFromJson.data);
  if (arrayFromJson.data.length > 0) {
    submit.style.display = 'block';
    form.addEventListener('submit', async (submitEvent) => { // async has to be declared all the way to get an await
      submitEvent.preventDefault(); // This prevents your page from refreshing!
      console.log('form submission'); // this is substituting for a "breakpoint"
      // arrayFromJson.data - we're accessing a key called 'data' on the returned object
      // it contains all 1,000 records we need
      const restoArr = dataHandler(arrayFromJson.data);
      createHtmlList(restoArr);
    });
  }
}

// this actually runs first! It's calling the function above
document.addEventListener('DOMContentLoaded', async () => mainEvent()); // the async keyword means we can make API requests
