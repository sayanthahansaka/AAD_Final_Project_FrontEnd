$(document).ready(function () {
    $("#submit").click(function (event) {
        event.preventDefault();
        CustomerRegister();
    });
    
    function CustomerRegister() {
        const imageArray = [];
        const fileInputIds = ["#nic_image","#user_image"];

        function handleImageSave(data) {
            imageArray.push(data);

            
            if (imageArray.length === fileInputIds.length) {
                const userRole = "user";
                const userId = "001";
                const name = $("#name").val();
                const userName = $("#username").val();
                const userPassword = $("#password").val();
                const userNIC = $("#nic").val();
                const userNICImageLocation = imageArray[0];
                const userAge = $("#age").val();
                const gender = $("#gender").val();
                const userEmail = $("#email").val();
                const userPhone = $("#contact").val();
                const userAddress = $("#address").val();
                const remarks = $("#remark").val();
                const userImageLocation = imageArray[1];
                const isAuthenticated = true;  // Set this to the desired value (true or false)

                const data = {
                    userRole: userRole,
                    userId: userId,
                    name: name,
                    userName: userName,
                    userPassword: userPassword,
                    userNIC: userNIC,
                    userNICImageLocation: userNICImageLocation,
                    userAge: userAge,
                    gender: gender,
                    userEmail: userEmail,
                    userPhone: userPhone,
                    userAddress: userAddress,
                    remarks: remarks,
                    userImageLocation: userImageLocation,
                    isAuthenticated: isAuthenticated
                };

                $.ajax({
                    url: "http://localhost:8080/api/v1/auth/getAuth",
                    method: "POST",
                    contentType: "application/json", 
                    data: JSON.stringify(data),
                    success: function (response) {
                        console.log(response);

                        if (response.statusCode === 200 || response.statusCode === 201 || response.statusCode === 500 || response.statusCode === 500 || response.statusCode === 0) {
                            swal("Save successful");
                            localStorage.setItem("userAuthToken", JSON.stringify(response.data));

                        }
                    },
                    error: function(xhr, textStatus, errorThrown) {
                        swal("Error: " + xhr.responseText);
                    }
                });
            }
        }

        for (let i = 0; i < fileInputIds.length; i++) {
            const delay = 2000 * i;
            setTimeout(() => {
                saveImage(fileInputIds[i], handleImageSave);
            }, delay);
        }
    }

    function saveImage(fileInputId, successCallback) {
        var formData = new FormData();
        var file = $(fileInputId)[0].files[0];

        if (file) {
            formData.append('imageFile', file);

            $.ajax({
                url: 'http://localhost:8090/upload',
                type: 'POST',
                data: formData,
                cache: false,
                contentType: false,
                processData: false,
                success: function(data) {
                    successCallback(data);
                },
                error: function(xhr, textStatus, errorThrown) {
                    swal("OOPS!", "Server threw an exception: " + xhr.responseJSON.message, "error");
                }
            });
        } else {
            successCallback("");
        }
    }
});

// =================\



   

   

            