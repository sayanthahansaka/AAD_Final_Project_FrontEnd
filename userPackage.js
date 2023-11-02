// $(document).ready(()=>{
//     localStorage.setItem("packageAdminToken",JSON.stringify("eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyUm9sZSI6InBhY2thZ2VBZG1pbiIsInN1YiI6InlvbW4iLCJpYXQiOjE2OTgwNDk5ODIsImV4cCI6NDg1MTY0OTk4Mn0.oM0GUoPgtjJdlJzU6Ji8HnVjznujyBeXdUNLNqE2A3Y"))
//     fetchPackageData();
// });

// $(document).ready(() => {
//     $(document).on("click", "#btnAdd", () => {
//         // if (!validator()) {
//         //     return swal("Operation failed!", "Please fill all the fields!", "error")
//         //  }

        
//             let packages = {
//                 packageID: parseInt($('#packageID').val()),
//                 hotelID: parseInt($('#hotelID').val()),
//                 vehicleID: parseInt($('#vehicleID').val()),
//                 userID: parseInt($('#userID').val()),
//                 guideID: parseInt($('#guideID').val()),
//                 packageCategory: $('#packageCategory').val(),
//                 travelDuration: $('#travelDuration').val(),
//                 travelArea: $('#travelArea').val(),
//                 noOfAdults: parseInt($('#noOfAdults').val()),
//                 noOfChildren: parseInt($('#noOfChildren').val()),
//                 totalHeadCount: parseInt($('#totalHeadCount').val()),
//                 isPetsAllowed: $('#isPetsAllowed').prop('checked'),
//                 isGuideNeeded: $('#isGuideNeeded').prop('checked'),
//                 packageValue: parseFloat($('#packageValue').val()),
//                 packagePaidValue: parseFloat($('#packagePaidValue').val()),
//                 remarks: $('#remarks').val()                
//             }

//             $.ajax({
//                 url: "http://localhost:8083/api/v1/package/add",
//                 method: "POST",
//                 headers: {
//                     "content-type": "application/json",
//                     "Authorization": "Bearer " + JSON.parse(localStorage.getItem("packageAdminToken"))
//                 },
//                 data: JSON.stringify(packages),
//                 success: (response) => {
//                     // if (response.statusCode === 200 || response.statusCode === 201) {
//                         // addTableField();
//                         alert("Done!", response.message, "success")
//                         // clearFields();
//                         // fetchHotelsData(); 
//                     // } else {
//                     //     return swal("OOPS!", response.message, "error")
//                     // }
//                 }, error: (error) => {
//                     alert("OOPS!", "An error occurred while communicating with the server ! ", "error");
//                 },
//             })
//         })
//     })


// localStorage.setItem("PKG_ADMIN_TKN",JSON.stringify("eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyUm9sZSI6IlBBQ0tBR0VfREVUQUlMUyIsInN1YiI6InBhY2thZ2VEZXRhaWxzYWRtaW4yMDAxIiwiaWF0IjoxNjk4NDY3MjQyLCJleHAiOjQ4NTIwNjcyNDJ9.iJmDyxXpcXihXCGqjv0S13WaFEku7zE_XQBr6LMKXXU"));
// localStorage.setItem("GToken",JSON.stringify("eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyUm9sZSI6IkFfR1VJREUiLCJzdWIiOiJhZG1pbmd1aWRlMjAwMSIsImlhdCI6MTY5ODIxNjUwOCwiZXhwIjo0ODUxODE2NTA4fQ.hQqMDON3iG7ANAOS45k064KfmpdgqOXpZ2T7bgIBFJ4"));
// localStorage.setItem("HToken",JSON.stringify("eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyUm9sZSI6IkFfSE9URUwiLCJzdWIiOiJob3RlbDIwMDEiLCJpYXQiOjE2OTgyMTczMjMsImV4cCI6NDg1MTgxNzMyM30.wHic2oKFfSTxMqLKMbV96Z9bnYgdyE_EaacnOGG2Lz8"));
// localStorage.setItem("VToken",JSON.stringify("eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyUm9sZSI6IkFfVkVISUNMRSIsInN1YiI6InZlaGkyMDAxIiwiaWF0IjoxNjk4MjE3ODY0LCJleHAiOjQ4NTE4MTc4NjR9.XdlpJELspG2kIHotbtx9WTmywt03QSV1qwoLigO6kKE"));
// localStorage.setItem("PKG_TK",JSON.stringify("eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyUm9sZSI6IkFfUEFDS0FHRSIsInN1YiI6InBhY2thZ2UyMDAxIiwiaWF0IjoxNjk4MjE4MTgzLCJleHAiOjQ4NTE4MTgxODN9.M4bzixa7mGlo-mmyhasByViBgMooTU_t5T4YvAyzmh0"));



localStorage.setItem("userAdminToken",JSON.stringify("eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyUm9sZSI6InVzZXJBZG1pbiIsInN1YiI6ImxhbGEiLCJpYXQiOjE2OTgzOTY3NjcsImV4cCI6NDg1MTk5Njc2N30.NSVw4_n38FJ6-Gy5DrlgNklEnzRPixz_-UjKeqvh0mg"));
localStorage.setItem("HToken",JSON.stringify("eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyUm9sZSI6ImhvdGVsQWRtaW4iLCJzdWIiOiJzYXlhIiwiaWF0IjoxNjk4NjQ5MTQ5LCJleHAiOjQ4NTIyNDkxNDl9.TnyuXkQDmmY4JSA1s-Rvp1rcCdAsIGrXdaCFuJeVISc"));
localStorage.setItem("VToken",JSON.stringify("eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyUm9sZSI6InZlaGljbGVBZG1pbiIsInN1YiI6ImpvaG4xMjMiLCJpYXQiOjE2OTgwNDk0ODUsImV4cCI6NDg1MTY0OTQ4NX0.xzQB4WbvHQOl7jf6vVjff74JrLEVE1V3ELdfUZL4sF0"));
localStorage.setItem("PKG_TK",JSON.stringify("eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyUm9sZSI6InBhY2thZ2VBZG1pbiIsInN1YiI6InlvbW4iLCJpYXQiOjE2OTgwNDk5ODIsImV4cCI6NDg1MTY0OTk4Mn0.oM0GUoPgtjJdlJzU6Ji8HnVjznujyBeXdUNLNqE2A3Y"));
// Smole
localStorage.setItem("PKG_ADMIN_TKN",JSON.stringify("eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyUm9sZSI6InBhY2thZ2VBYWRtaW4iLCJzdWIiOiJsYWxheSIsImlhdCI6MTY5ODQ2Njk1NCwiZXhwIjo0ODUyMDY2OTU0fQ.TV7Ve9GRdiIdy0EpTWI9wM_hOwJ50HRgD29QS7yCWEg"));
localStorage.setItem("GToken",JSON.stringify("eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyUm9sZSI6Imd1aWRlQWRtaW4iLCJzdWIiOiJsYWxheSIsImlhdCI6MTY5ODQ2MTI2NSwiZXhwIjo0ODUyMDYxMjY0fQ.-8-qRWsQUb3mYHijjmi4mq2dLTGjM6GWYdykQkDVuNg"));


var pID="";
var pc="";

$(document).ready(function() {

    getHotel();
    getHotelDestinations();
    getVehicle();

    // Attach the click event handler to the "bookingPackageBtn"
    $("#bookingPackageBtn").on("click", function() {
        OnSavePackageDetails();
    });
    getGuides
    // Attach the change event handler to the "needGuide" select
    $("#needGuide").on("change", toggleGuideNameDiv);
    // Call the toggleGuideNameDiv function to handle initial visibility
    toggleGuideNameDiv();


    $("#needGuide").on("input", function() {
        getGuides();
    });
    $("#numAdults, #numChildren").on("input", function() {
        countAdultsAndChildren();
    });





    $("#hotelList").on("click", function() {
        getHotelRoomTypesWithValues();


    });

    $("#startDate").on("click", function() {

    });
    if (JSON.parse(localStorage.getItem("packageName")) === "regular"){
        pID="P001";
        pc="regular";
        return packageLoader(pID);
    }
    if (JSON.parse(localStorage.getItem("packageName")) === "mid"){
        pID="P002";
        pc="mid";
        return packageLoader(pID);
    }
    if (JSON.parse(localStorage.getItem("packageName")) === "luxury"){
        pID="P003";
        pc="luxury";
        return packageLoader(pID);
    }
    if (JSON.parse(localStorage.getItem("packageName")) === "superLux"){
        pID="P004";
        pc="superLux";
        return packageLoader(pID);
    }


});



/*$(document).ready(function () {
    $("#hotelCategory option[value='" + res.data.hotelCategory + "']").remove();
    $("#hotelCategory").append("<option value='" + res.data.hotelCategory + "'>" + res.data.hotelCategory + "</option>");
    $("#hotelCategory option[value='" + res.data.hotelCategory + "']").attr('selected', 'selected');
});*/


function packageLoader(pID) {
    $.ajax({
        url: "http://localhost:8081/api/v1/hotel/getHotelPckageID?packageID=" + pID,
        method: "GET",
        contentType: "application/json",
        headers: {
            "Authorization": "Bearer " + JSON.parse(localStorage.getItem("HToken"))
        },
        success: function (response) {
            if (response.statusCode === 200 || response.statusCode === 201) {
                // Clear the existing options
                const selectElement = $("#hotelList");
                selectElement.empty();

                swal("get successful");
                console.log(response+"response");
                localStorage.setItem("hotelData", JSON.stringify(response.data.data));

                response.data.forEach((hotel) => {
                    let option = $("<option>");
                    option.attr("value", hotel.hotelName);
                    console.log(hotel.hotelName+"response");
                    option.text(hotel.hotelName);
                    selectElement.append(option);
                });
            } else {
                // Handle the response from the server here if needed
            }
        },
        error: function (error) {
            handleRequestError(error);
        }
    });


    $.ajax({
        url: "http://localhost:8082/api/v1/vehicles/getVehiclesByPackageId?packageId=" + pID,
        method: "GET",
        contentType: "application/json",
        headers: {
            "Authorization": "Bearer " + JSON.parse(localStorage.getItem("VToken"))
        },
        success: function (response) {
            if (response.statusCode === 200 || response.statusCode === 201) {
                // Clear the existing options
                const selectElement = $("#vehicleList");
                selectElement.empty();

                swal("get successful");
                console.log(response+"response");
                localStorage.setItem("vehicleData", JSON.stringify(response.data.data));

                response.data.forEach((vehi) => {
                    let option = $("<option>");
                    option.attr("value", vehi.vehicleName);
                    console.log(vehi.vehicleName+"response");
                    option.text(vehi.vehicleName);
                    selectElement.append(option);
                });
            } else {
                // Handle the response from the server here if needed
            }
        },
        error: function (error) {
            handleRequestError(error);
        }
    });
}

function handleRequestError(error) {
    console.error('Error fetching data from the server', error);
    // You can show an appropriate error message or take other actions here.
}


//get rooms types with values
function getHotelRoomTypesWithValues(){

    $.ajax({
        url: "http://localhost:8083/api/v1/hotel/getAllHotels",
        method: "GET",
        headers: {
            "Authorization": "Bearer " + JSON.parse(localStorage.getItem("HToken"))
        },
        success: (res) => {
            if (!res.data) {
                // Handle the case when no data is found
                swal("OOPS!", "No data found!", "error");
            } else {
                console.log("Response data:", res.data);

                const selectElement = $("#roomType");
                selectElement.empty(); // Clear the existing options

                
                res.data.forEach((hotels) => {
                    let option = $("<option>");
                    option.attr("value", hotels.fullBoardWithACLuxuryRoomDouble);
                    option.text("fullBoardWithACLuxuryRoomDouble:"+hotels.fullBoardWithACLuxuryRoomDouble,hotels.fullBoardWithACLuxuryRoomDouble);
                    option.attr("value", hotels.halfBoardWithACLuxuryRoomDouble);
                    option.text("halfBoardWithACLuxuryRoomDouble:"+hotels.halfBoardWithACLuxuryRoomDouble,hotels.halfBoardWithACLuxuryRoomDouble);
                    option.attr("value", hotels.fullBoardWithACLuxuryRoomTriple);
                    option.text("fullBoardWithACLuxuryRoomTriple: "+hotels.fullBoardWithACLuxuryRoomTriple,hotels.fullBoardWithACLuxuryRoomTriple);
                    option.attr("value", hotels.halfBoardWithACLuxuryRoomTriple);
                    option.text("halfBoardWithACLuxuryRoomTriple:"+hotels.halfBoardWithACLuxuryRoomTriple,hotels.halfBoardWithACLuxuryRoomTriple);

                    selectElement.append(option);
                });
            }
        },
        error: function (error) {
            console.error('Error fetching data from the server', error);
        }
    });
}


//get  destination only

function getHotelDestinations(){

    $.ajax({
        url: "http://localhost:8083/api/v1/hotel/getAllHotels",
        method: "GET",
        headers: {
            "Authorization": "Bearer " + JSON.parse(localStorage.getItem("HToken"))
        },
        success: (res) => {
            if (!res.data) {
                // Handle the case when no data is found
                swal("OOPS!", "No data found!", "error");
            } else {
                console.log("Response data:", res.data);

                const selectElement = $("#hotelLocations");
                selectElement.empty(); // Clear the existing options

                res.data.forEach((hotels) => {
                    let option = $("<option>");
                    option.attr("value", hotels.hotelLocation);
                    option.text(hotels.hotelLocation);

                    selectElement.append(option);
                });
            }
        },
        error: function (error) {
            console.error('Error fetching data from the server', error);
        }
    });
}



//get  hotels only
function getHotel(){

    $.ajax({
        url: "http://localhost:8083/api/v1/hotel/getAllHotels",
        method: "GET",
        headers: {
            "Authorization": "Bearer " + JSON.parse(localStorage.getItem("HToken"))
        },
        success: (res) => {
            if (!res.data) {
                // Handle the case when no data is found
                swal("OOPS!", "No data found!", "error");
            } else {
                console.log("Response data:", res.data);

                const selectElement = $("#hotelList");
                selectElement.empty(); // Clear the existing options

                res.data.forEach((hotels) => {
                    let option = $("<option>");
                    option.attr("value", hotels.hotelName);
                    option.text(hotels.hotelName);

                    selectElement.append(option);
                });
            }
        },
        error: function (error) {
            console.error('Error fetching data from the server', error);
        }
    });
}



//get  vehicle  only
function getVehicle(){

    $.ajax({
        url: "http://localhost:8082/api/v1/vehicles/getAllVehicle",
        method: "GET",
        headers: {
            "Authorization": "Bearer " + JSON.parse(localStorage.getItem("VToken"))
        },
        success: (res) => {
            if (!res.data) {
                // Handle the case when no data is found
                swal("OOPS!", "No data found!", "error");
            } else {
                console.log("Response data:", res.data);

                const selectElement = $("#vehicleList");
                selectElement.empty(); // Clear the existing options

                res.data.forEach((vehicle) => {
                    let option = $("<option>");
                    option.attr("value", vehicle.vehicleName);
                    option.text(vehicle.vehicleName);

                    selectElement.append(option);
                });
            }
        },
        error: function (error) {
            console.error('Error fetching data from the server', error);
        }
    });
}




//get  guides  only

function getGuides(){

    $.ajax({
        url: 'http://localhost:8085/api/v1/guide/getAllGuide',
        method: 'GET',
        headers: {
            "Authorization": "Bearer " + JSON.parse(localStorage.getItem("GToken"))
        },
        success: (res) => {
            if (!res.data) {
                // Handle the case when no data is found
                swal("OOPS!", "No data found!", "error");
            } else {
                console.log("Response data:", res.data);

                const selectElement = $("#guidenames");
                selectElement.empty(); // Clear the existing options

                res.data.forEach((guide) => {
                    let option = $("<option>");
                    option.attr("value", guide.guideName);
                    option.text(guide.guideName);

                    selectElement.append(option);
                });
            }
        },
        error: function (error) {
            console.error('Error fetching data from the server', error);
        }
    });
}


// Calculate the total package value
/*function calculatePackageTotal() {
    const guideServicePrice = calculateGuideServicePrice();
    const hotelCharges = calculateHotelCharges();
    const vehicleCharges = calculateVehicleCharges();

    if (guideServicePrice === null || hotelCharges === null || vehicleCharges === null) {
        console.log("Invalid input. Please enter valid numbers.");
        return;
    }

    const totalPackageValue = guideServicePrice + hotelCharges + vehicleCharges;
    console.log("Total Package Value: $" + totalPackageValue);
    return totalPackageValue;
}

function calculateGuideServicePrice() {
    const startDay = parseInt($("#startDate").val()); // Assuming you have an input field for start day
    const endDay = parseInt($("#endDate").val()); // Assuming you have an input field for end day

    if (isNaN(startDay) || isNaN(endDay)) {
        console.log("Invalid input for guide service days. Please enter valid numbers.");
        return null;
    }

    const guideServicePrice = 1000 * (startDay + endDay);
    return guideServicePrice;
}

function calculateHotelCharges() {
    const perDayHotelFee = parseFloat($("#perDayHotelFee").val()); // Assuming you have an input field for per day hotel fee
    const days = parseInt($("#hotelDays").val()); // Assuming you have an input field for the number of hotel days

    if (isNaN(perDayHotelFee) || isNaN(days)) {
        console.log("Invalid input for hotel charges. Please enter valid numbers.");
        return null;
    }


    const hotelCharges = perDayHotelFee * days;
    return hotelCharges;
}

function calculateVehicleCharges() {
    const perDayVehicleFee = parseFloat($("#perDayVehicleFee").val()); // Assuming you have an input field for per day vehicle fee
    const vehicleDays = parseInt($("#vehicleDays").val()); // Assuming you have an input field for the number of vehicle days

    if (isNaN(perDayVehicleFee) || isNaN(vehicleDays)) {
        console.log("Invalid input for vehicle charges. Please enter valid numbers.");
        return null;
    }

    const vehicleCharges = perDayVehicleFee * vehicleDays;
    return vehicleCharges;
}*/


// Count adults and children
function countAdultsAndChildren() {
    let adultCount = parseInt($("#numAdults").val()) || 0; // Default to 0 if input is not a number
    let childCount = parseInt($("#numChildren").val()) || 0; // Default to 0 if input is not a number

    let totalPeopleCount = adultCount + childCount;

    // Update the content of the "totalPeople" span with the calculated count
    $("#totalPeople").text(totalPeopleCount);

    console.log("Total Number of People: " + totalPeopleCount);
}


// Toggle visibility of guide name input
function toggleGuideNameDiv() {
    let needGuide = $("#needGuide").val();
    let nameofGuideDiv = $("#guidenames");
    let nameofGuideDiv1 = $("#manday");


    if (needGuide === "true") {
        nameofGuideDiv.show();
        nameofGuideDiv1.show();
    } else {
        nameofGuideDiv.hide();
        nameofGuideDiv1.hide();
    }
}

function OnSavePackageDetails() {
    // Retrieve form data
    let pkDetailsID = "p00214";
    let start_Date = $("#startDate").val();
    let end_Date = $("#endDate").val();
    let Package_category = $("#packageCategory").val();
    let area = $("#areaList").val();
    let No_ofAdults = parseInt($("#numAdults").val());
    let No_ofChild = parseInt($("#numChildren").val());
    let totalOfHeadCount =  countAdultsAndChildren();
    let allowPets = $("#petstatus").val();
    let NeedGuide = $("#needGuide").val();
    let NameofGuide = $("#guidenames").val(); // Make sure this field is properly defined in your HTML
    let TotalOfHotelVehicleGuide = calculatePackageTotal(); // Call the function to calculate the total package value
    let SpecialRequests = $("#specialremark").val();

    // Create an object to store the data
    const data = {
        packageDetailsID:pkDetailsID,
        startDuration: start_Date,
        endDuration: end_Date,
        packageCategory: Package_category,
        travelArea: area,
        noOfAdults: No_ofAdults,
        noOfChildren: No_ofChild,
        totalHeadCount: totalOfHeadCount,
        isPetsAllowed: allowPets,
        isGuideNeeded: NeedGuide,
        NameGuide: NameofGuide,
        TotalPackageValue: TotalOfHotelVehicleGuide,
        remark: SpecialRequests
    };

    // Retrieve the JWT token from localStorage
    let token = localStorage.getItem("PKG_ADMIN_TKN");

    // Check if the token is valid
    if (!token) {
        swal("Token not found. Please log in.");
        return;
    }

    // Make the AJAX request to save the payment data
    $.ajax({
        url: "http://localhost:8084/api/v1/packageDetals/save",
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify(data),
        headers: {
            "Authorization": "Bearer " + JSON.parse(localStorage.getItem("PKG_ADMIN_TKN"))
        },
        success: function (response) {
            if (response.statusCode === 200 || response.statusCode === 201) {
                swal("Update successful");
                // You can handle the response from the server here if needed
            }
        },
        error: function (xhr, textStatus, errorThrown) {
            swal("Error: " + xhr.responseText);
        }
    });
}
    