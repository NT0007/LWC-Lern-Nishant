function beforesubmit() {
  let inputDate = document.querySelector(".inputDate");
  let outputDate = document.querySelector(".outputDate");
  console.log("inputDate.value", inputDate.value, typeof inputDate.value); // string into date locale i.e. en_IN
  let formatedDate = new Date(inputDate.value).toLocaleDateString("en-IN");
  outputDate.value = formatedDate;
}
