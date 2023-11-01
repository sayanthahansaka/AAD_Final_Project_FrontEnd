$(document).ready(()=>{
    localStorage.setItem("packageAdminToken",JSON.stringify("eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyUm9sZSI6InBhY2thZ2VBZG1pbiIsInN1YiI6InlvbW4iLCJpYXQiOjE2OTgwNDk5ODIsImV4cCI6NDg1MTY0OTk4Mn0.oM0GUoPgtjJdlJzU6Ji8HnVjznujyBeXdUNLNqE2A3Y"))
    fetchPackageData();
});

$(document).ready(() => {
    $(document).on("click", "#btnAdd", () => {
        // if (!validator()) {
        //     return swal("Operation failed!", "Please fill all the fields!", "error")
        //  }

        
            let packages = {
                packageID: parseInt($('#packageID').val()),
                hotelID: parseInt($('#hotelID').val()),
                vehicleID: parseInt($('#vehicleID').val()),
                userID: parseInt($('#userID').val()),
                guideID: parseInt($('#guideID').val()),
                packageCategory: $('#packageCategory').val(),
                travelDuration: $('#travelDuration').val(),
                travelArea: $('#travelArea').val(),
                noOfAdults: parseInt($('#noOfAdults').val()),
                noOfChildren: parseInt($('#noOfChildren').val()),
                totalHeadCount: parseInt($('#totalHeadCount').val()),
                isPetsAllowed: $('#isPetsAllowed').prop('checked'),
                isGuideNeeded: $('#isGuideNeeded').prop('checked'),
                packageValue: parseFloat($('#packageValue').val()),
                packagePaidValue: parseFloat($('#packagePaidValue').val()),
                remarks: $('#remarks').val()                
            }

            $.ajax({
                url: "http://localhost:8083/api/v1/package/add",
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    "Authorization": "Bearer " + JSON.parse(localStorage.getItem("packageAdminToken"))
                },
                data: JSON.stringify(packages),
                success: (response) => {
                    // if (response.statusCode === 200 || response.statusCode === 201) {
                        // addTableField();
                        alert("Done!", response.message, "success")
                        // clearFields();
                        // fetchHotelsData(); 
                    // } else {
                    //     return swal("OOPS!", response.message, "error")
                    // }
                }, error: (error) => {
                    alert("OOPS!", "An error occurred while communicating with the server ! ", "error");
                },
            })
        })
    })
    