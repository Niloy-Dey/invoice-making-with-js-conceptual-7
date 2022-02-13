const date = new Date();
document.getElementById('show-date').innerText = date.toLocaleDateString();

//input-details details-btn  show-invoice
document.getElementById('details-btn').addEventListener('click', function(){
    // Get input details
    const inputDetails = document.getElementById('input-details');
    const inputInformation = inputDetails.value;
    // Show invoice
    const showInvoice = document.getElementById('show-invoice');
    showInvoice.innerText = inputInformation;
    inputDetails.value = '';


})

// input-name  input-price  input-quantity  submit-btn 
document.getElementById('submit-btn').addEventListener('click', function(){
    let inputName = document.getElementById('input-name');
    let inputPrice = document.getElementById('input-price');
    let inputQuantity = document.getElementById('input-quantity');
    let addTableData = document.getElementById('add-table-data');

    // total price
    const totalPrice = parseFloat(inputPrice.value) * parseFloat(inputQuantity.value)
    // creating element
    let tableRow = document.createElement('tr');
    let tableData1 = document.createElement('td');
    let tableData2 = document.createElement('td');
    let tableData3 = document.createElement('td');
    let tableData4 = document.createElement('td');

    tableData4.classList.add('item-total-price'); // creating a class using javascript  and calling calculateSubtotal function
    tableData1.innerText = inputName.value;
    tableData2.innerText = inputPrice.value;
    tableData3.innerText = inputQuantity.value;
    tableData4.innerText = totalPrice;
 
    tableRow.appendChild(tableData1);
    tableRow.appendChild(tableData2);
    tableRow.appendChild(tableData3);
    tableRow.appendChild(tableData4);  //   <td class="item-total-price">42</td>

     addTableData.appendChild(tableRow);

    // Calling  calculateGrandTotal function
    calculateGrandTotal();
})


function calculateSubtotal(){
    let subtotal = 0;
    const cost = document.getElementsByClassName('item-total-price');
    // console.log(cost);
    for(let i=0; i<cost.length; i++){
        const element = cost[i];
        // console.log(element.innerText);
        const price = parseFloat(element.innerText);
        subtotal = subtotal + price;
    }
    return subtotal;
}


function calculateGrandTotal(){
    const subTotal = calculateSubtotal();

    const displaySubtotal = document.getElementById('sub-total');
    displaySubtotal.innerText = subTotal;

    // calculating tax 
    const tax = subTotal * .2;
    document.getElementById('tax').innerText = tax.toFixed(3);


    // grand total 
    document.getElementById('grand-total').innerText = subTotal + tax;
    document.getElementById('grand-total-2').innerText = subTotal + tax;
}