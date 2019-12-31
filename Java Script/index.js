var productContainer ;

if(localStorage.getItem("productsData") == null)
{
    productContainer = [];
}
else 
{
    productContainer = JSON.parse(localStorage.getItem("productsData"))
    productDisplay();
}


function addProduct()
{
    var productNamePro =  document.getElementById("productName").value;
    var productPricePro =  document.getElementById("productPrice").value;
    var productCategoryPro =  document.getElementById("productCategory").value;
    var productDescPro =  document.getElementById("productDesc").value;



    var product =  
    {
        name : productNamePro,
        price : productPricePro,
        category : productCategoryPro,
        desc : productDescPro
    }

    productContainer.push(product);
    localStorage.setItem("productsData" , JSON.stringify(productContainer))
    productDisplay();
}

function productDisplay()
{
    var temp = "";

    for (var i = 0 ; i < productContainer.length ; i++) 
    {
        temp+= ` <div class="col-md-3">
        <div class="product mb-5">
            <img class="img-fluid" src="images/01-lg-gram.webp">
            <h4>`+productContainer[i].name+`<span class="badge badge-primary ml-5">`+productContainer[i].category+`</span></h4>
            <p>`+productContainer[i].desc+`</p>
                <div class="price">`+productContainer[i].price+`</div>
                <button onclick="deleteProduct(`+i+`)" class="btn btn-outline-danger btn-sm">delete</button>
                <button class="btn btn-outline-success btn-sm">update</button>
        </div>
    </div>`
    }

    document.getElementById("productsRow").innerHTML = temp;
}


function searchProducts(term)
{

    temp = ``;
    for (i = 0 ; i < productContainer.length ; i++)
    {
        if (productContainer[i].name.toLowerCase().includes(term.toLowerCase()))
        {
            temp+= ` <div class="col-md-3">
            <div class="product mb-5">
                <img class="img-fluid" src="images/01-lg-gram.webp">
                <h4>`+productContainer[i].name+`<span class="badge badge-primary ml-5">`+productContainer[i].category+`</span></h4>
                <p>`+productContainer[i].desc+`</p>
                    <div class="price">`+productContainer[i].price+`</div>
                    <button onclick="deleteProduct(`+i+`)" class="btn btn-outline-danger btn-sm">delete</button>
                    <button class="btn btn-outline-success btn-sm">update</button>
            </div>
        </div>`
        }
    }
    document.getElementById("productsRow").innerHTML = temp;
}

function deleteProduct(indx)
{
    var deleted = productContainer.splice(indx , 1)
    localStorage.setItem("productsData" , JSON.stringify(productContainer))
    productDisplay();
}