// Function to Calc and display Tip, total bill and amount per person 
function calculateAndDisplay(){
    // Get the values from the html form 
    let bill = parseFloat(document.getElementById('totalBill').value)
    let numOfPpl = parseInt(document.getElementById('numOfPeople').value)
    let serviceQuality = document.getElementById('serviceQuality').value

    // Calculate tip, total Bill and the Amount each person owes 
    let tip 
    let totalBill 
    let amtPerPers = calcAmtperPers(totalBill, numOfPpl)

}