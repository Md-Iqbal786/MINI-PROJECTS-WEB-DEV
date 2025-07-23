function ageCalculator() {
  const userInput = document.getElementById("dob").value;
  let dob = new Date(userInput);
  let today = new Date();

  let year = today.getFullYear()-dob.getFullYear();
  let month = today.getMonth() - dob.getMonth();
  let day = today.getDate() - dob.getDate();

  if(month<0 || month===0 && day<0){
    year--;
    month+=12;
  }

  if(day<0){

    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    day += prevMonth.getDate();
    month--;

  }

  document.getElementById("result").innerText =
    `Your Age is ${year} Year, ${month} month, ${day} day`;
}
