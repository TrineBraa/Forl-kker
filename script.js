updateView()


function updateView() {
    document.getElementById("app").innerHTML = /*HTML*/ `
        <button onclick="PrintNumbers()">Print Numbers</Button>
        <br/>
        <div id="ShowNumbers"></div>
    `;
}



// function PrintNumbers() {
//     let stopValue = 20;
//     for (let counter = '2'; counter <= stopValue; counter = counter + 2) {
//         document.getElementById('ShowNumbers').innerHTML += '<li>' + counter + '</li>';
//     }
//     updateView()
// }


function PrintNumbers() {
    let stopValue = 20
    for (let counter = 0; counter <= stopValue; counter = counter + 2) {
        document.getElementById('ShowNumbers').innerHTML += '<li>' + counter + '</li>'
    }
    // document.getElementById("ShowNumbers").innerHTML += '<li>' + 2 + '</li>';
    // document.getElementById("ShowNumbers").innerHTML += '<li>' + 4 + '</li>';
    // document.getElementById("ShowNumbers").innerHTML += '<li>' + 6 + '</li>';
    // document.getElementById("ShowNumbers").innerHTML += '<li>' + 8 + '</li>';
    // document.getElementById("ShowNumbers").innerHTML += '<li>' + 10 + '</li>';
    // document.getElementById("ShowNumbers").innerHTML += '<li>' + 12 + '</li>';
    // document.getElementById("ShowNumbers").innerHTML += '<li>' + 14 + '</li>';
    // document.getElementById("ShowNumbers").innerHTML += '<li>' + 16 + '</li>';
    // document.getElementById("ShowNumbers").innerHTML += '<li>' + 18 + '</li>';
    // document.getElementById("ShowNumbers").innerHTML += '<li>' + 20 + '</li>';
}