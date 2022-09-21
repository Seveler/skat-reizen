// JavaScript source code

// To-Do: #SOLVED: getItem only works, if Item exists. So it has to be checked first! --> what to do if it doenst exist? --> define item (array) with list = [] 
//        Copy index, since button has been added
//        #SOLVED: Add flexible counting possibility with storage to display number for every product (using div!)         
//                 choosing Product, changing quantitiy and then choosing another product wont save the quantity and reset it
//        print shopping list
//        #SOLVED?: check saving of div input in array (relevant alert is activated) --> added list = []; before filling the array
//        #SOLVED: shopname1 gets lost --> string array was accessed with array.toString(). Since the array already contained strings, this lead to an error.
//        accept manually added words and arrange them at the end of the list

var list = [];
var number_of_products = 0;
list[50] = number_of_products;
let itemname = "market1";     // muss ohne switch statement mit "market1" definiert werden
let sel_itemname = "list1";
let num_selected_products_name = "quantities1";
let shopnames = ["Supermarkt1", "Supermarkt2", "Supermarkt3", "Supermarkt4"];
let storedArray;
let storedArraythree;
let helpArray_quantities;

var count_products = 0;
var selected_product = []; // selected_product[itemnumber][quantity,name]
selected_product[50] = count_products; // number of products saved at [50]
var num_selected_product = [];

window.onload = function () {
     for (var i = 0; i < 50; i += 1) {
          selected_product[i] = null;
          num_selected_product[i] = null;
     }
     // load list from local storage
     switch (document.getElementById("shopname").innerHTML) {
          case "Supermarkt1":
               itemname = "market1";
               sel_itemname = "list1";
               num_selected_products_name = "quantities1";
               if (localStorage.getItem(itemname) !== null) {
                    storedArray = localStorage.getItem(itemname);
                    list = JSON.parse(storedArray).slice();
               }
               if (localStorage.getItem(sel_itemname) !== null) {
                    storedArraythree = localStorage.getItem(sel_itemname);
                    selected_product = JSON.parse(storedArraythree).slice();
               }
               if (localStorage.getItem(num_selected_products_name) !== null) {
                    helpArray_quantities = localStorage.getItem(num_selected_products_name);
                    num_selected_product = JSON.parse(helpArray_quantities).slice();
               }
               break;

          case "Supermarkt2":
               itemname = "market2";
               sel_itemname = "list2";
               num_selected_products_name = "quantities2";
               if (localStorage.getItem(itemname) !== null) {
                    storedArray = localStorage.getItem(itemname);     
                    list = JSON.parse(storedArray).slice();
               }
               if (localStorage.getItem(sel_itemname) !== null) {
                    storedArraythree = localStorage.getItem(sel_itemname);
                    selected_product = JSON.parse(storedArraythree).slice();
               }
               if (localStorage.getItem(num_selected_products_name) !== null) {
                    helpArray_quantities = localStorage.getItem(num_selected_products_name);
                    num_selected_product = JSON.parse(helpArray_quantities).slice();
               }
               break;

          case "Supermarkt3":
               itemname = "market3";
               sel_itemname = "list3";
               num_selected_products_name = "quantities3";
               if (localStorage.getItem(itemname) !== null) {
                    storedArray = localStorage.getItem(itemname);
                    list = JSON.parse(storedArray).slice();
               }
               if (localStorage.getItem(sel_itemname) !== null) {
                    storedArraythree = localStorage.getItem(sel_itemname);
                    selected_product = JSON.parse(storedArraythree).slice();
               }
               if (localStorage.getItem(num_selected_products_name) !== null) {
                    helpArray_quantities = localStorage.getItem(num_selected_products_name);
                    num_selected_product = JSON.parse(helpArray_quantities).slice();
               }
               break;

          case "Supermarkt4":
               itemname = "market4";
               sel_itemname = "list4";
               num_selected_products_name = "quantities4";
               if (localStorage.getItem(itemname) !== null) {
                    storedArray = localStorage.getItem(itemname);
                    list = JSON.parse(storedArray).slice();
               }
               if (localStorage.getItem(sel_itemname) !== null) {
                    storedArraythree = localStorage.getItem(sel_itemname);
                    selected_product = JSON.parse(storedArraythree).slice();
               }
               if (localStorage.getItem(num_selected_products_name) !== null) {
                    helpArray_quantities = localStorage.getItem(num_selected_products_name);
                    num_selected_product = JSON.parse(helpArray_quantities).slice();
               }
               break;

          default:               
     }

     if (localStorage.getItem("shopnames") !== null) {
          var storedArraytwo = localStorage.getItem("shopnames");
          shopnames = JSON.parse(storedArraytwo).slice();
     }
     /*
     if (localStorage.getItem("num_selected_product") !== null) {
          var storedArrayfour = localStorage.getItem("num_selected_product");
          num_selected_product = JSON.parse(storedArrayfour).slice();
     }*/

     if (!(typeof list !== 'undefined' && list !== null)) {
          // alert("storage empty");
     } else {        
          // fill suggestions with product list
          fillProductList();
          fillShopList();
     }

     if (!(typeof selected_product !== 'undefined' && selected_product !== null)) {

     } else {
          fillSelectionList();
     }
     document.getElementById("shopname").innerHTML = shopnames[itemname[6] - 1];
     document.getElementById("l1").innerHTML = shopnames[0]; 
     document.getElementById("e1").innerHTML = shopnames[0]; 
     document.getElementById("l2").innerHTML = shopnames[1];
     document.getElementById("e2").innerHTML = shopnames[1];
     document.getElementById("l3").innerHTML = shopnames[2];
     document.getElementById("e3").innerHTML = shopnames[2];
     document.getElementById("l4").innerHTML = shopnames[3];
     document.getElementById("e4").innerHTML = shopnames[3];
}

function fillSelectionList(){
     clearSelectedListWindow(); 
     let sel_list = document.getElementById("selection_list");
     num_selected_product.forEach(element => {
          console.log(element);
     });
     console.log("lenght: " + num_selected_product.length)
     for (var i = 0; i < selected_product[50]; i += 1) {
          if (selected_product[i] !== null && selected_product[i] !== undefined) {
               sel_list.innerHTML += '<p><input onchange="saveQuantities()" class="numbers" type="number" id="quantity' + i.toString() + '" value="' + num_selected_product[i] + '" name="quantity" min="1" max="9999"> ' + selected_product[i].toString() + '<button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" id="' + i.toString()+'" onclick="deleteProduct(id)" style="float: right;"><img src="cross.png" alt="X" style="height: 100%; width: 100%;"></button>' + '</p>';
          }
     }
}

function deleteProduct(index){
     selected_product.splice(index, 1);
     selected_product.splice(49, 0, null)
     selected_product[50] -= 1;
     num_selected_product.splice(index, 1);
     
     fillSelectionList();
     localStorage.setItem(sel_itemname, JSON.stringify(selected_product));  // save personal product list in local storage
     //alert("save quantities: ");
     num_selected_product.forEach(element => {
          //alert(element);
     });
     localStorage.setItem(num_selected_products_name, JSON.stringify(num_selected_product));
}

function addContent() {
     let shopitems = "";
     list = [];
     list[50] = 0;
     shopitemcontent = document.getElementById("shopitems").innerHTML;
     // Sonderzeichen entfernen (<div>)
     for (var i = 0; shopitemcontent[i] !== undefined; i += 1)
     {
          if (shopitemcontent[i] == "<" && shopitemcontent[i + 1] == "d") {
               i += 4;
               list[list[50]] = shopitems;
               list[50] += 1;
               shopitems = "";
          } else if (shopitemcontent[i] == "<" && shopitemcontent[i + 1] == "/") {
               i += 10;
               list[list[50]] = shopitems;
               list[50] += 1;
               shopitems = "";
          } else if (shopitemcontent[i] == "&" && shopitemcontent[i + 5] == ";") {
               i += 5;
               list[list[50]] = shopitems;
               list[50] += 1;
               shopitems = "";
          } else {
               shopitems += shopitemcontent[i];
          }
     }
     fillProductList(); 
     localStorage.setItem(itemname, JSON.stringify(list));  // save personal product list in local storage
}

function fillProductList() {
     document.getElementById("product_list").innerHTML = '';
     for (var i = 0; i < list[50]; i += 1) {
          if (list[i] !== null) {
               document.getElementById("product_list").innerHTML += '<option value="' + list[i].toString() + '" />';
          }
     }
}

function fillShopList(){
     for (var i = 0; i < list[50]; i += 1) {
          if (list[i] !== null) {
               document.getElementById("shopitems").innerHTML += '<div>' + list[i].toString() + '</div>';
          }
     }
}

function deleteContent() {
     if (confirm('Gespeichertes Sortiement wirklich entfernen?')) {
          clearSelectedListStorage();
          clearQuantitiesStorage();
          list = [];
          list[50] = 0;
          clearShopItemWindow();
          clearProductListWindow();
          clearSelectedListWindow();
          
     }
}

function deleteSelection() {
     if (confirm('Einkaufsliste löschen?')) {
          clearSelectedListStorage();
          clearSelectedListWindow();
          clearQuantitiesStorage();
     }
}

function clearShopItemWindow(){
     document.getElementById("shopitems").innerHTML = '';
}

function clearProductListWindow(){
     document.getElementById("product_list").innerHTML = '';
}

function clearSelectedListWindow(){
     document.getElementById("selection_list").innerHTML = '';
}

function clearSortedListWindow(){
     document.getElementById("sorted_list").innerHTML = '';
}

function clearSelectedListStorage(){
     localStorage.removeItem(sel_itemname);
     selected_product = [];
     selected_product[50] = 0;
}

function clearQuantitiesStorage(){
     localStorage.removeItem(num_selected_products_name);
     num_selected_product = [];
}

function chooseProduct() {
     contentexists = document.getElementById("selection_input").value
     if (contentexists) {
          selected_product[selected_product[50]] = document.getElementById("selection_input").value;
          num_selected_product[selected_product[50]] = 1;
          selected_product[50] += 1;
          count_products += 1;
          document.getElementById("selection_input").value = "";
          fillSelectionList();
          
          localStorage.setItem(sel_itemname, JSON.stringify(selected_product));  // save personal product list in local storage
     }
}

function saveName() {
     shopnames[itemname[6] - 1] = document.getElementById("shopname").innerHTML;
     localStorage.setItem("shopnames", JSON.stringify(shopnames));  // save personal product list in local storage
     saveQuantities();
}

function saveQuantities(){
     //alert("save folliwing quantities: ");
     for (var i = 0; i < selected_product[50]; i += 1) {
          num_selected_product[i] = document.getElementById("quantity" + i.toString()).value;
          //alert(num_selected_product[i]);
     }
     localStorage.setItem(num_selected_products_name, JSON.stringify(num_selected_product));  // save personal product list in local storage
}

function changeMarketName(){
     currentInput = document.getElementById("shopname").innerHTML;
     let e_id = "e" + itemname[6].toString();
     let l_id = "l" + itemname[6].toString();
     document.getElementById(e_id).innerHTML = currentInput;
     document.getElementById(l_id).innerHTML = currentInput;
}

function sortList() {
     saveName();
     let sorted_list = [];
     let count_sorted_list = 0;
     let num_selected_product_sorted = [];
     
     for (var x = 0; x < list[50]; x += 1)
     {
          for (var k = 0; k < selected_product[50]; k += 1)
          {
               if(selected_product[k] == list[x])
               {
                    sorted_list[count_sorted_list] = selected_product[k];
                    num_selected_product_sorted[count_sorted_list] = num_selected_product[k];
                    count_sorted_list += 1;
                    k = selected_product[50];
               }
          }
     }
     
     var listed = false;
     for (var x = 0; x < selected_product[50]; x += 1) {
          listed = false;
          for (var k = 0; k < list[50]; k += 1) {
               if (selected_product[x] == list[k]) {
                    listed = true;
               }
          }
          if (!listed) {
               sorted_list[count_sorted_list] = selected_product[x];
               num_selected_product_sorted[count_sorted_list] = num_selected_product[x];
               count_sorted_list += 1;
          }
     }
     
     clearSortedListWindow();
     let text_sorted_list = document.getElementById("sorted_list");
     for (var c = 0; c < count_sorted_list; c += 1) {
          text_sorted_list.innerHTML += `<li class="mdl-list__item">
                                   <span class="mdl-list__item-primary-content">`
                                        + num_selected_product_sorted[c] + " " + sorted_list[c] +
                                   `</span>
                                   <span class="mdl-list__item-secondary-action">
                                        <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="list-checkbox-1">
                                             <input type="checkbox" id="list-checkbox-1" class="mdl-checkbox__input" />
                                        </label>
                                   </span>
                              </li>`;
     }
}


var info_visible = false;
function showInfo() {
     if (info_visible)
     {
          document.getElementById("explain").style.display = "none";
          document.getElementById("information").style.color = "black";
          document.getElementById("information").style.backgroundColor = "white";
     } else {
          document.getElementById("explain").style.display = "block";
          document.getElementById("information").style.color = "white";
          document.getElementById("information").style.backgroundColor = "#3757bf";
     }
     info_visible = !info_visible;
}