let allProduct = [];

const addProductsToTable = (data) => {
const tableBody = document.querySelector("tbody")
const total = data.reduce((accum, prod) => {
 accum.price += prod.price*prod.quantity;
 accum.quantity += prod.quantity;
 return accum;
},
{price:0,quantity:0}
);
// console.log(total)
tableBody.innerHTML = (
 data.map(
        (prod,index)=>     
       `<tr>
        <td>${index+1}</td>
        <td>${prod.name} </td>
        <td>${prod.quantity} </td>
        <td>${prod.price} </td>
        <td>${prod.quantity*prod.price} </td>
        </tr>`     
    )
    .join("") +
    `<tr>
        <td colspan=2 >Total</td>
        <td>${total.quantity}</td>
        <td></td>
        <td>${total.price}</td>
    </tr>`
 );
};
 
const prodName = document.getElementById("prodName");
const prodQuantity = document.getElementById("prodQuantity");
const unitPrice = document.getElementById("unitPrice");

const addButton = document.querySelector("#addProduct");
const clearButton = document.querySelector("#clearButton");
const clearAll = document.querySelector("#clearAll")
const printButton = document.querySelector("#printButton")

printButton.addEventListener("click",() => {
window.print()
});

clearButton.addEventListener("click",()=>{
    prodName.value = "";
    prodQuantity.value = "";
    unitPrice.value = "";
});

clearAll.addEventListener("click",()=>{
    document.querySelector("tbody").innerHTML = "";
    clearButton.click();
})

addButton.addEventListener("click", () => {
    const obj = { 
        name : prodName.value,
        quantity : Number(prodQuantity.value),
        price : Number(unitPrice.value),
    };
    allProduct.push(obj);
    addProductsToTable(allProduct);
    clearButton.click();
    prodName.focus();
});
