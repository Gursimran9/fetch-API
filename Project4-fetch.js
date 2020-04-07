//JavaScript document

//Creating a variable url and then pass in the url of our source file products.json
let url='products.json';

//Through DOM we are accessing the id=getProducts 
//Using addeventlistener we are invoking the getProducts function through a click
document.getElementById('getProducts').addEventListener('click', getProducts);

//Creating function getProducts using fetch API and promises
//This function fetches all the data from our json file,then displaying data in the web browser      
function getProducts(){
  fetch(url)//the url of our required file
  .then((response) => response.json())  //
  .then((data) => {         //get data
    let display = '<h2 class="product">Product</h2>';//created a display var that will display the data
    data.forEach(function(product){
     
//Output the data of products.json file i.e. image,name,price and details
//Used card template from bootstrap to display data in Cards
      display +=`
      <div class="card" style="width: 18rem;">
  <div class="card-body">
  <img class="card-img-top" src=${product.image} alt="Card image cap"> 
    <h5 class="card-title">Name: ${product.name}</h5>
    <hr>
    <h5 class="card-subtitle mb-2 text-muted">Price: ${product.price}</h6>
    <hr co>
    <h5 class="card-subtitle mb-2 text-muted">Details: ${product.details}</h6>
  </div>
</div>
    `;
    });
    document.getElementById('display').innerHTML = display;//Using the DOM displaying all the data into the web browser
  })
}