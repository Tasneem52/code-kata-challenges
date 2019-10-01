//code-kata-3 v-4 using j-query

// const $value = $(#names).val();

$('form').on('submit', (event) => {
  event.preventDefault();

  // $value.remove();
  $(`#names option:selected`).remove();
});


//code kata 3 version 1 - using vanilla javascript

// function removeItem() {
//   let items = document.getElementById('colorSelect');
//   items.options[items.selectedIndex].value;
//   //The selectedIndex property sets or returns the index of the selected option in a   drop-down list.The index starts at 0.
//   items.remove(items.selectedIndex);
//   // console.log(items.options[items.selectedIndex].remove()value);
// }


// function removeItem() {
//   let items = document.getElementById('colorSelect');
//    console.log(items);
//    // let remainingItems = [];
//    //The selectedIndex property sets or returns the index of the selected option in a drop-down list.The index starts at 0.
//    //
//    items.remove(items.Selecteditems);
//    console.log(items.value);
// }
//removeItem();


// function removeItem() {
//   let items = document.getElementById('colorSelect').addEventListerner('onClick',);
//   console.log(items);
// }
// console.log(removeItem());


// let items = document.getElementById('colorSelect')
//
// items.addEventListerner('click',function removeItem() {console.log(items)})
//

// function removeItem() {
//   let items = document.getElementById('colorSelect');
//    console.log(items);
//    //The selectedIndex property sets or returns the index of the selected option in a drop-down list.The index starts at 0.
//    //
//    //for (i=0; i < items.length; i++) {
//      //console.log(i);
//      items.remove(items.Selecteditems);
//      console.log(items.remove(items.Selecteditems));
//      //console.log(items.selectedIndex);
//      //if (items.selectedIndex == it)
//     // items[i].remove();
//     //};
//    // //console.log(items.selectedIndex)
//    // items.remove(items.Selecteditems);
//    //console.log(items);
//  }
// // removeItem();
