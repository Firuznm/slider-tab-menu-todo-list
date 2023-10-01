
// const input=document.querySelector(".inp");
// const addBtn=document.querySelector(".addBtn");
// const inpValueList= document.querySelector(".inp-value-list");

// let inInputValueArr=[];

// addBtn.addEventListener("click", function(){
// 	let inInputValue=input.value;
// 	inInputValueArr.push(inInputValue);

// 	   inpValueList.innerHTML = "";

//        inInputValueArr.map((item)=>{
// 		let ListElememt=document.createElement("div");

//          let inpElememt=document.createElement("input");
// 		     inpElememt.setAttribute("type","checkbox");
// 			 inpElememt.setAttribute("id","deger");

// 		let labelElement=document.createElement("label");
// 		    labelElement.setAttribute("for","deger");	
// 			labelElement.textContent=item; 

//            ListElememt.appendChild(inpElememt);
// 	      ListElememt.appendChild(labelElement);

// 	     inpValueList.appendChild(ListElememt);
// 	})

       
// 	input.value=" ";
// 	let checkboxes = document.querySelectorAll('input[type="checkbox"]');
//     checkboxes.forEach((checkbox) => {
//         checkbox.addEventListener("change", function() {
//             let label = this.nextElementSibling;
//             if (this.checked) {
//                 label.style.color = "red";
//             } else {
//                 label.style.color = "black"; 
//             }
//         });
//     });

// 	let checkboxe = document.querySelectorAll('input[type="checkbox"]');
// 	console.log(inInputValueArr);
// 	console.log(checkboxe);


// });


// ========================to do list 2  ===================================
// const input=document.querySelector(".inp");
// const addBtn=document.querySelector(".addBtn");
// const inpValueList= document.querySelector(".inp-add");


// addBtn.addEventListener("click",function(){
//  let inInputValue=input.value;

//  let wrappList=document.createElement("div")
//      wrappList.classList.add("wrapper-style")
//  let listElememnt=document.createElement("p");
//      listElememnt.textContent=inInputValue;

// 	 const deleteBtn = document.createElement("button");
// 	 deleteBtn.classList.add("delete-btn");
// 	 deleteBtn.innerHTML = ` <i class=" fa-solid fa-trash-can"></i>`; 
     
// 	 wrappList.appendChild(listElememnt);
// 	 wrappList.appendChild(deleteBtn);
// 	 inpValueList.appendChild(wrappList);
// 	 deleteBtn.onclick = function () {
// 		deleteBtn.parentElement.remove("div");
// 	  };
// 	  input.value="";
// })

// ================= tab menu js ================

let tabTitle=document.querySelectorAll(".title");
let contents=document.querySelectorAll(".tab-menu-content ul");

// console.log("title",tabTitle, "contents",contents);

for(let headTitle of tabTitle){
    headTitle.addEventListener("click",function(){
		let activHeadTitle=document.querySelector(".active");
		     activHeadTitle.classList.remove("active");
			 this.classList.add("active");

			 let headTitleNumber=this.getAttribute("data-number");
			 for(let content of contents){
              if(headTitleNumber==content.getAttribute("data-number")){
				  content.classList.add("show");
			  }else{
				content.classList.remove("show")
			  }
			 }
	})

}


//  ==== slider js start =====

let sliderImage= document.querySelector(".slider-imgs .image");
let iconRight=document.querySelector(".fa-right-long");
let iconLeft=document.querySelector(".fa-left-long");

// console.log(sliderImage, iconLeft,iconRight);
// console.log(sliderImage.src);

let useSliderImgs=[
	"../images/s1.jpg",
	"../images/s2.jpg",
	"../images/s3.jpg",
	"../images/s4.jpg",
	"../images/s5.jpeg",
];

  let sliderImgIndex=0;

function sliderImgChangeFunc(){
    if(sliderImgIndex < 0){
		sliderImgIndex=useSliderImgs.length - 1;
	} else if(sliderImgIndex >= useSliderImgs.length){
             sliderImgIndex=0;
	}

	sliderImage.src = useSliderImgs[sliderImgIndex];
}


iconLeft.addEventListener("click", function() {
	sliderImgIndex--;
	sliderImgChangeFunc();
})

iconRight.addEventListener("click", function(){
	sliderImgIndex++;
	sliderImgChangeFunc();
}) 
 
