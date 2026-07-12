// ===============================
// Temperature Conversion
// ===============================

const convertButton = document.getElementById("convertBtn");


convertButton.addEventListener("click", function () {


    const temperature =
        document.getElementById("temperatureInput").value;


    const unit =
        document.getElementById("unitSelect").value;



    if (temperature === "") {


        showToast("Please enter a temperature value");


        return;

    }



    fetch(
        `http://localhost:8080/api/temperatures/convert?value=${temperature}&unit=${unit}`,
        {

            method: "POST",

            headers: {

                "X-API-KEY": "my-secret-key"

            }

        }
    )


    .then(response => {


        if (!response.ok) {


            throw new Error("API request failed");


        }


        return response.json();


    })


    .then(data => {


        document.getElementById("result").innerHTML =
            data.outputTemperature
            + " °"
            + data.outputUnit;



        showToast("Conversion Successful!");


    })


    .catch(error => {


        console.log(error);


        showToast("Something went wrong");


    });



});





// ===============================
// Load History
// ===============================


const historyButton = document.getElementById("historyBtn");


historyButton.addEventListener("click", function () {


    fetch(
        "http://localhost:8080/api/temperatures/history",
        {

            method: "GET",

            headers: {

                "X-API-KEY": "my-secret-key"

            }

        }
    )


    .then(response => {


        if (!response.ok) {


            throw new Error("History API failed");


        }


        return response.json();


    })


    .then(data => {


        const historyList =
            document.getElementById("historyList");


        historyList.innerHTML = "";



        if (data.length === 0) {


            historyList.innerHTML =
                "No conversion history found";


            showToast("No history available");


            return;


        }



        data.forEach(item => {



            const card =
                document.createElement("div");



            card.className = "history-card";



            card.innerHTML = `

                <p>

                    <strong>
                        ${item.inputTemperature}
                        ${item.inputUnit}
                    </strong>

                    →

                    ${item.outputTemperature}
                    ${item.outputUnit}

                </p>


                <p>

                    Time:
                    ${item.timestamp}

                </p>

            `;



            historyList.appendChild(card);



        });



        showToast("History loaded successfully!");



    })


    .catch(error => {


        console.log(error);


        showToast("Unable to load history");


    });



});





// ===============================
// Toast Message Function
// ===============================


function showToast(message) {


    const toast =
        document.getElementById("toast");



    toast.innerHTML = message;



    toast.className = "show";



    setTimeout(function () {


        toast.className =
            toast.className.replace("show", "");



    }, 3000);


}
// ===============================
// Filter History
// ===============================


const filterButton =
    document.getElementById("filterBtn");



filterButton.addEventListener("click", function () {



    const selectedUnit =
        document.getElementById("filterUnit").value;



    let url =
        "http://localhost:8080/api/temperatures/filter";



    if(selectedUnit !== "all"){


        url += `?unit=${selectedUnit}`;


    }



    fetch(
        url,
        {

            method: "GET",

            headers: {

                "X-API-KEY": "my-secret-key"

            }

        }
    )



    .then(response => {


        if(!response.ok){


            throw new Error("Filter API failed");


        }


        return response.json();


    })



    .then(data => {


        const historyList =
            document.getElementById("historyList");



        historyList.innerHTML = "";




        if(data.length === 0){


            historyList.innerHTML =
            "No matching records found";


            showToast("No records found");


            return;


        }





        data.forEach(item => {



            const card =
            document.createElement("div");



            card.className =
            "history-card";



            card.innerHTML = `


                <p>

                    <strong>
                    ${item.inputTemperature}
                    ${item.inputUnit}
                    </strong>

                    →

                    ${item.outputTemperature}
                    ${item.outputUnit}


                </p>


                <p>

                    Time:
                    ${item.timestamp}

                </p>


            `;



            historyList.appendChild(card);



        });




        showToast("Filter applied successfully!");



    })



    .catch(error => {


        console.log(error);


        showToast("Unable to filter history");


    });



});