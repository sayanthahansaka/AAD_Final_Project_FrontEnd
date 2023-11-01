$(document).ready(()=>{
    localStorage.setItem("packageAdminToken",JSON.stringify("eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyUm9sZSI6InBhY2thZ2VBZG1pbiIsInN1YiI6InlvbW4iLCJpYXQiOjE2OTgwNDk5ODIsImV4cCI6NDg1MTY0OTk4Mn0.oM0GUoPgtjJdlJzU6Ji8HnVjznujyBeXdUNLNqE2A3Y"))
    fetchPackageData();
});


$(document).ready(function() {
    const fetchPackageData = () => {
        $.ajax({
            url: "http://localhost:8083/api/v1/package",
            method: "GET",
            headers: {
                "content-type": "application/json",
                "Authorization": "Bearer " + JSON.parse(localStorage.getItem("packageAdminToken"))
            },
            success: (response) => {
                console.log(response);

                if (response && Array.isArray(response.data)) {
                    populateTable(response.data);
                } else {
                    console.error("Expected an array inside response.data but got:", response.data);
                }
            },
            error: (error) => {
                alert("OOPS!", "An error occurred while fetching the Package data!", "error");
            },
        });
    }

    const populateTable = (data) => {
        const tbody = $(".table tbody");
        tbody.empty();
        data.forEach(package => {
            let $row = $("<tr></tr>");
            $row.append($("<td></td>").text(package.packageID));
            $row.append($("<td></td>").text(package.hotelID));
            $row.append($("<td></td>").text(package.vehicleID));
            $row.append($("<td></td>").text(package.userID));
            $row.append($("<td></td>").text(package.guideID));
            $row.append($("<td></td>").text(package.packageCategory));
            $row.append($("<td></td>").text(package.travelDuration));
            $row.append($("<td></td>").text(package.totalHeadCount));
            $row.append($("<td></td>").text(package.travelArea));
            $row.append($("<td></td>").text(package.packageValue));
            $row.append($("<td></td>").text(package.packagePaidValue));
            tbody.append($row);
        });
    }

    fetchPackageData();
});

// ---------------------------------------------Get ID------------------------------------------------------------------

$(document).ready(function() {
    $('#btnSearch').on('click', function() {
        const packageID = $('#packageID').val().trim();

        if (packageID) {
            fetchPackageByID(packageID);
        } else {
            alert("Please enter a Package ID to search.");
        }
    });
});

function fetchPackageByID(id) {
    $.ajax({
        url: `http://localhost:8083/api/v1/package/id/${id}`,
        method: "GET",
        headers: {
            "Authorization": `Bearer ${JSON.parse(localStorage.getItem("packageAdminToken"))}`
        },
        success: function(response) {
            populateFieldsWithResponse(response);
        },
        error: function() {
            alert("OOPS! An error occurred while fetching the hotel data by ID!");
        }
    });
}

function populateFieldsWithResponse(response) {
    let packageData = response.data;
    if (packageData) {
        $('#packageID').val(packageData.packageID);
        $('#hotelID').val(packageData.hotelID);
        $('#vehicleID').val(packageData.vehicleID);
        $('#userID').val(packageData.userID);
        $('#guideID').val(packageData.guideID)
        $('#packageCategory').val(packageData.packageCategory);
        $('#travelDuration').val(packageData.travelDuration);
        $('#travelArea').val(packageData.travelArea);
        $('#noOfAdults').val(packageData.noOfAdults);
        $('#noOfChildren').val(packageData.noOfChildren);
        $('#totalHeadCount').val(packageData.totalHeadCount);
        $('#isPetsAllowed').prop('checked', packageData.isPetsAllowed);
        $('#isGuideNeeded').prop('checked', packageData.isGuideNeeded);
        $('#packageValue').val(packageData.packageValue);
        $('#packagePaidValue').val(packageData.packagePaidValue);
        $('#remarks').val(packageData.remarks);
    } else {
        alert("No data received from the server.");
    }  
}

// --------------------------------------------------Delete---------------------------------------------------

$(document).ready(function () {
    $('#btnDelete').on('click', function () {
        const packageID = $('#packageID').val().trim();

        if (packageID) {
            deletePackageByID(packageID);
        } else {
            alert("Please enter a Package ID to delete.");
        }
    });
});

function deletePackageByID(packageID) {
    $.ajax({
        url: `http://localhost:8083/api/v1/packageid/${packageID}`,
        method: "DELETE",
        headers: {
            "Authorization": "Bearer " + JSON.parse(localStorage.getItem("vehicleAdminToken"))
        },
        success: function (response) {
            alert("Package deleted successfully!");
           
        },
        error: function (xhr, textStatus, errorThrown) {
            console.error("AJAX Error:", textStatus, errorThrown);
            alert("OOPS! An unknown error occurred while deleting the Package!");
        }
    });
}

