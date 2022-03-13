function dataHandler(array) {
  
}
async function mainEvent() { // the async keyword means we can make API requests
  const form = document.querySelector('.form');
  form.querySelector('submit').style.display = 'none';
  const results = await fetch('/api/foodServicesPG'); // This accesses some data from our API
  const arrayFromJson = await results.json(); // This changes it into data we can use - an object
  if (arrayFromJson.length > 0) {
    submit.style.display = block
    form.addEventListener('submit', async (submitEvent) => { // async has to be declared all the way to get an await
      submitEvent.preventDefault(); // This prevents your page from refreshing!
      document.querySelector('.submit').style.display = 'none';
      console.log('form submission'); // this is substituting for a "breakpoint"
    });
  }
  
  
  console.table(arrayFromJson); // this is called "dot notation"
  dataHandler(arrayFromJson)
  // arrayFromJson.data - we're accessing a key called 'data' on the returned object
  // it contains all 1,000 records we need
}

// this actually runs first! It's calling the function above
document.addEventListener('DOMContentLoaded', async () => mainEvent()); // the async keyword means we can make API requests
