let counter = 1;
let seatCounter = 0;
let buttonList = [];
function bgChange(id) {
    document.getElementById(id).classList.add('bg-primaryCol');
}
function discountCalculator() {
    if (document.getElementById('couponInput').value == 'NEW15') {
        let totalPrice = parseFloat(document.getElementById('ttlPrice').innerText);
        let discountPrice = (totalPrice * 0.15);
        document.getElementById('disContainer').classList.remove('hidden');
        document.getElementById('disPrice').innerText = discountPrice;
        document.getElementById('btnContainer').classList.add('hidden');
        document.getElementById('ggTtl').innerText = totalPrice - discountPrice;
    }
    if (document.getElementById('couponInput').value == 'Couple20') {
        let totalPrice = parseFloat(document.getElementById('ttlPrice').innerText);
        let discountPrice = (totalPrice * 0.20);
        document.getElementById('disContainer').classList.remove('hidden');
        document.getElementById('disPrice').innerText = discountPrice;
        document.getElementById('btnContainer').classList.add('hidden');
        document.getElementById('ggTtl').innerText = totalPrice - discountPrice;
    }

}
function tableUpdater(id) {
    let tableID = document.getElementById('seatTable')
    let newTr = document.createElement('tr');
    let seatData = document.createElement('td');
    let seatClass = document.createElement('td');
    let seatPrice = document.createElement('td');
    seatData.innerText = id;
    seatClass.innerText = "Economic";
    seatPrice.innerText = "550";
    newTr.appendChild(seatData);
    newTr.appendChild(seatClass);
    newTr.appendChild(seatPrice);
    tableID.appendChild(newTr);
}
function priceUpdater() {
    document.getElementById('ttlPrice').innerText = parseInt(counter * 550);
    document.getElementById('ggTtl').innerText = parseInt(counter * 550);
}
document.getElementById('tickets').addEventListener('click', function (e) {
    document.getElementById('phnNumber').addEventListener('keyup', function () {
        document.getElementById('nxtBtn').removeAttribute('disabled');
    });
    if(!buttonList.includes(e.target.id)){
        if (e.target.tagName == 'BUTTON') {
            buttonList.push(e.target.id);
            if (counter == 3) {
                document.getElementById('btnApply').removeAttribute('disabled');
            }
            document.getElementById('seatTableCounter').innerText = counter;
            if (counter <= 4) {
                bgChange(e.target.id);
                let avaialbleSeat = document.getElementById('seatCount');
                seatCounter = parseFloat(avaialbleSeat.innerText);
                seatCounter--;
                avaialbleSeat.innerText = seatCounter;
                tableUpdater(e.target.id);
                priceUpdater();
            } else {
                alert("Sorry!")
            }
            counter++;
        }
    }

})