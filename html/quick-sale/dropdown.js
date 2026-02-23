// 
    // ADD REWARD BUTTON
// 
const optionMenu = document.querySelector(".select-menu");
const  selectBtn = document.querySelector(".select-btn");
const options = document.querySelectorAll(".option");
 const  sBtn_text = document.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () => {
    console.log(optionMenu.classList);
    optionMenu.classList.toggle("active")});       

options.forEach(option =>{
    option.addEventListener("click", ()=>{
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption;

        optionMenu.classList.remove("active");
    });
});

// 
    // ADD PERCENTAGE BUTTON
// 


const percentOptionMenu = document.querySelector(".percent-select-menu");
const  percentSelectBtn = document.querySelector(".percent-select-btn");
const percentOptions = document.querySelectorAll(".percent-option");
const  percent_text = document.querySelector(".percent-text");

percentSelectBtn.addEventListener("click", () => {
    console.log(percentOptionMenu.classList);
    percentOptionMenu.classList.toggle("active")});       

percentOptions.forEach(option =>{
    option.addEventListener("click", ()=>{
        let selectedOption = option.querySelector(".percent-option-text").innerText;
        percent_text.innerText = selectedOption;

        percentOptionMenu.classList.remove("active");
    });
});

const serviceMenu = document.querySelector(".select-services");
const  serviceBtn = document.querySelector(".service-btn");
const addService = document.querySelectorAll(".add-services");
const  serviceBtnText = document.querySelector(".service-btn-text");


// serviceBtn.addEventListener("click", () => {
//     console.log(addService.classList);
//     addService.classList.toggle("active")});       

   addService.forEach(option =>{
    //  console.log(option.classList);
    option.addEventListener("click", (e)=>{
        // console.log(option);
        console.log(e.target);
     
        if(e.target==""){
            serviceBtnText.innerText = "Add Services"
        }
        else{
            serviceBtnText.innerText = e.target.innerText;

            
            
        }
        

    });
});


// 
    // ADD SERVICES BUTTON
// 


const selectServiceBtn = document.querySelector(".select-service"),
items = document.querySelectorAll(".item");
const serviceItems = document.querySelector(".service-items");

selectServiceBtn.addEventListener("click", () => {
selectServiceBtn.classList.toggle("open");
});

// items.forEach(item => {
// item.addEventListener("click", (e) => {
//     console.log(e.target);
//     item.classList.toggle("checked");

//     let checked = document.querySelectorAll(".checked"),
//         btnText = document.querySelector(".service-btn-text");

//     if (checked && checked.length > 0) {
//         btnText.innerText = `${checked.length} Selected`;
//     } else {
//         btnText.innerText = "Add Services";
//     }
// });
// })


// 
    // ADD PRODUCT BUTTON
// 

const selectProductBtn = document.querySelector(".select-product");
// items = document.querySelectorAll(".item");
const productitems = document.querySelector(".product-items");

selectProductBtn.addEventListener("click", () => {
selectProductBtn.classList.toggle("open");
});