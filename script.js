const dob = document.getElementById("dob");
const today = document.getElementById("today");

document.addEventListener("DOMContentLoaded", () => {
  today.valueAsDate = new Date();
});

const calculateBtn = document.getElementById("calculateBtn");

calculateBtn.addEventListener("click", function () {
  const dobDate = new Date(dob.value);
  const todayDate = new Date(today.value);

  if (!dob.value || !today.value) {
    alert("Please enter the date.");
    return;
  }

  if (dobDate > todayDate) {
    alert("Date of birth cannot be after the current date.");
    return;
  }

  const diff = todayDate - dobDate;
  let age = todayDate.getFullYear() - dobDate.getFullYear();

  const hasHadBirthdayThisYear =
    todayDate.getMonth() > dobDate.getMonth() ||
    (todayDate.getMonth() === dobDate.getMonth() &&
      todayDate.getDate() >= dobDate.getDate());

  if (!hasHadBirthdayThisYear) {
    age--;
  }

  let totalMonths =
    (todayDate.getFullYear() - dobDate.getFullYear()) * 12 +
    (todayDate.getMonth() - dobDate.getMonth());

  if (todayDate.getDate() < dobDate.getDate()) {
    totalMonths--;
  }

  const monthPart = totalMonths % 12;

  let dayPart = todayDate.getDate() - dobDate.getDate();
  if (dayPart < 0) {
    // Go back one month to get the actual number of days
    const previousMonth = new Date(
      todayDate.getFullYear(),
      todayDate.getMonth(),
      0
    ); // 0 = last day of prev month
    dayPart += previousMonth.getDate();
  }

  if (
    todayDate.getMonth() === dobDate.getMonth() &&
    todayDate.getDate() === dobDate.getDate() &&
    todayDate.getFullYear() === dobDate.getFullYear()
  ) {
    document.querySelector(".message").innerHTML = "🎉 New Born! 🎂";
  } else if (
    todayDate.getMonth() === dobDate.getMonth() &&
    todayDate.getDate() === dobDate.getDate()
  ) {
    document.querySelector(".message").innerHTML = "🎉 Happy Birthday! 🎂";
  }

  document.querySelector(".age").innerHTML =
    `${age} year${age === 1 ? "" : "s"}, ` +
    `${monthPart} month${monthPart === 1 ? "" : "s"}, ` +
    `${dayPart} day${dayPart === 1 ? "" : "s"}`;

  const seconds = Math.floor(diff / 1000);
  document.querySelector(".seconds").innerHTML = `${seconds} seconds`;

  const minutes = Math.floor(diff / (1000 * 60));
  document.querySelector(".minutes").innerHTML = `${minutes} minutes`;

  const hours = Math.floor(diff / (1000 * 60 * 60));
  document.querySelector(".hours").innerHTML = `${hours} hours`;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  document.querySelector(".days").innerHTML = `${days} days`;
});
