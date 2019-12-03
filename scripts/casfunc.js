function onSubmitFormJS() {
    var checkingValue = new Number(document.getElementById("checking").value);
    var savingsValue = new Number(document.getElementById("savings").value);
    var investmentsValue = new Number(document.getElementById("investments").value);
    var retirementValue = new Number(document.getElementById("retirement").value);
    var otherassetsValue = new Number(document.getElementById("otherassets").value);

    var creditValue = new Number(document.getElementById("credit").value);
    var mortgageValue = new Number(document.getElementById("mortgage").value);
    var carValue = new Number(document.getElementById("car").value);
    var studentloanValue = new Number(document.getElementById("studentloan").value);
    var otherloansValue = new Number(document.getElementById("otherloans").value);

    var netWorthId = document.getElementById("netWorth");

    var assetsTotal = checkingValue + savingsValue + investmentsValue + retirementValue + otherassetsValue;
    var liabilitiesTotal = creditValue + mortgageValue + carValue + studentloanValue + otherloansValue;

    var convertedNum = myNumberConverter((assetsTotal - liabilitiesTotal).toFixed(2));
    netWorthId.innerHTML = convertedNum;
}

function myNumberConverter(num) {
    var numStr = num + "";
    var sign = "";
    if (numStr.charAt(0) == "-") {
        sign = "-";
        numStr = numStr.substring(1);
    }
    var numStrDecimals = numStr.substring(numStr.length-3);
    numStr = numStr.substring(0,numStr.length-3); // "12345.67" => "12345"
    return sign + "$ " + myWholeNumberConverter(numStr) + numStrDecimals;
}

function myWholeNumberConverter(numStr) {
    if (numStr == "-") {

    }
    if (numStr.length <= 3) {
        return numStr;
    }
    return myWholeNumberConverter(numStr.substring(0,numStr.length-3)) + "," + numStr.substring(numStr.length-3);
}
