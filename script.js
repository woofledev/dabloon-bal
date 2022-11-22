//yes i did rip this off of w3schools
function setCookie(cname,cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    let count = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(count) == 0) {
        return c.substring(count.length, c.length);
      }
    }
    return "";
  }
  
  function checkCookie() {
    let dablooncount = getCookie("count");
    if (dablooncount != "") {
        document.getElementById("bal").innerHTML=dablooncount;
      
      } else {
       dablooncount = prompt("Enter the amount of dabloons you currently have (write 0 if none):","");
       if (dablooncount != "" && dablooncount != null) {
         setCookie("count", dablooncount, 30);
         document.getElementById("bal").innerHTML=dablooncount;
       }
    }
  }
//not this part tho
butn_lose=document.getElementById("lose");
butn_gain=document.getElementById("gain");
butn_reset=document.getElementById("reset");
current=parseInt(getCookie("count"));
butn_lose.addEventListener("click", function removeDabloons(){
    al=prompt("How many dabloons did you lose?");
    ala=current-=parseInt(al);
    setCookie("count", ala, 30);
    location.reload();
});
butn_gain.addEventListener("click", function addDabloons(){
    ag=prompt("How many dabloons did you gain?");
    aga=current+=parseInt(ag);
    setCookie("count", aga, 30);
    location.reload();
});
butn_reset.addEventListener("click", function resetAll(){
    a=prompt("Are you sure you want to reset all of your Dabloons? Enter your current amount to continue.");
    if(a==getCookie("count")){
        document.cookie = "count=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        location.reload();
    }else{
        alert("Wrong amount written. Cancelling.")
    }
});