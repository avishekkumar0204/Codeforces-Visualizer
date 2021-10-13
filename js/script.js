
let findUser = document.getElementById("findUser");
let userDetail=document.getElementById("userDetails");
let fetchUserDetails = function () {
    let req = new XMLHttpRequest;
    let codeforcesHandle = document.getElementById("codeforcesHandle").value;
    let url = "https://codeforces.com/api/user.info?handles=" + codeforcesHandle;
    req.open("GET", url);
    req.send();
    req.onload = function () {
        let responseJSON = JSON.parse(req.response);
        if(responseJSON["status"]=="FAILED"){
            userDetail.innerText="User not found";
        }
        else
            userDetail.innerText=responseJSON["result"][0]["rating"];
        
            
    }
    

}
findUser.addEventListener("click", fetchUserDetails);