// JavaScript source code

// To-Do: #SOLVED: getItem only works, if Item exists. So it has to be checked first! --> what to do if it doenst exist? --> define item (array) with list = [] 
//        Copy index, since button has been added
//        #SOLVED: Add flexible counting possibility with storage to display number for every product (using div!)         
//                 choosing Product, changing quantitiy and then choosing another product wont save the quantity and reset it
//        print shopping list
//        #SOLVED?: check saving of div input in array (relevant alert is activated) --> added list = []; before filling the array
//        #SOLVED: shopname1 gets lost --> string array was accessed with array.toString(). Since the array already contained strings, this lead to an error.
//        accept manually added words and arrange them at the end of the list

//var storedArray = localStorage.getItem("market1");
//var list = JSON.parse(storedArray).slice();;

var list = [];
//var list = new Array;
var number_of_products = 0;
list[50] = number_of_products;
//alert(list);
let itemname = "market1";     // muss ohne switch statement mit "market1" definiert werden
let sel_itemname = "list1";
let shopnames = ["S1", "S2", "S3", "S4"];
let storedArray;

var count_products = 0;
var selected_product = []; // selected_product[itemnumber][quantity,name]
selected_product[50] = count_products;
var num_selected_product = [];

var list1 = [];
list1[50] = 0;
// This functions leads to problems with the overall functionality, buttons dont trigger functions

window.onload = function () {
     //alert("onload");
     //var list = new Array;
     //list[50] = number_of_products;

     // load list from local storage
     
     switch (document.getElementById("shopname").innerHTML) {
          case "Supermarkt1":
               //alert("Supermarkt1");
               itemname = "market1";
               sel_itemname = "list1";
               if (localStorage.getItem(itemname) !== null) {
                    storedArray = localStorage.getItem(itemname);
                    list = JSON.parse(storedArray).slice();
               }
               if (localStorage.getItem(sel_itemname) !== null) {
                    storedArraythree = localStorage.getItem(sel_itemname);
                    selected_product = JSON.parse(storedArraythree).slice();
               }
               //alert(list[0]);
               break;

          case "Supermarkt2":
               //alert("Supermarkt2");
               itemname = "market2";
               sel_itemname = "list2";
               if (localStorage.getItem(itemname) !== null) {
                    storedArray = localStorage.getItem(itemname);     
                    list = JSON.parse(storedArray).slice();
                    //alert("test1");
               }
               if (localStorage.getItem(sel_itemname) !== null) {
                    storedArraythree = localStorage.getItem(sel_itemname);
                    selected_product = JSON.parse(storedArraythree).slice();
               }
               break;

          case "Supermarkt3":
               //alert("Supermarkt3");
               itemname = "market3";
               sel_itemname = "list3";
               if (localStorage.getItem(itemname) !== null) {
                    storedArray = localStorage.getItem(itemname);
                    list = JSON.parse(storedArray).slice();
               }
               if (localStorage.getItem(sel_itemname) !== null) {
                    storedArraythree = localStorage.getItem(sel_itemname);
                    selected_product = JSON.parse(storedArraythree).slice();
               }
               break;

          case "Supermarkt4":
               //alert("Supermarkt4");
               itemname = "market4";
               sel_itemname = "list4";
               if (localStorage.getItem(itemname) !== null) {
                    storedArray = localStorage.getItem(itemname);
                    list = JSON.parse(storedArray).slice();
               }
               if (localStorage.getItem(sel_itemname) !== null) {
                    storedArraythree = localStorage.getItem(sel_itemname);
                    selected_product = JSON.parse(storedArraythree).slice();
               }
               break;

          default:
               //alert("default");
               
     }
     // ab hier wird nicht mehr ausgeführt, wenn index2.html aufgerufen wird
     //alert("shopnames: " + shopnames[0] + shopnames[1]);
     
     //#############
     /*
     if (localStorage.getItem("market1") !== null) {
          var storedArray = localStorage.getItem("market1");
          var help = JSON.parse(storedArray); // fehlerhaft
          list = help.slice();
          alert("load list");
     }*/
     //#############
     //alert(localStorage.getItem("shopnames"));

     if (localStorage.getItem("shopnames") !== null) {
          var storedArraytwo = localStorage.getItem("shopnames");
          shopnames = JSON.parse(storedArraytwo).slice();
          //alert("load shopnames");
     }
     if (localStorage.getItem("num_selected_product") !== null) {
          var storedArrayfour = localStorage.getItem("num_selected_product");
          num_selected_product = JSON.parse(storedArrayfour).slice();
          //alert(num_selected_product);
     }
     //alert(shopnames[0]);
     //itemname = "market1";
     


     // Check if localStorage is empty (or if a list already has been created)
     if (!(typeof list !== 'undefined' && list !== null)) {
          // alert("storage empty");
     } else {

          // Storage schon vorhanden
          //alert("storage occupied " + list[0] + list[1] + list[50] + list[51]);
          //var list = [];
          //var storedArray = localStorage.getItem("market1");
          //list = JSON.parse(storedArray).slice();;


          // get access to product list with DOM          
          let output = document.getElementById("product_list");
          
          //output.innerHTML += '<option value="' + 1 + '" />"'; // FEHLERHAFT, aber warum?
          
          // fill suggestions with product list
          document.getElementById("product_list").innerHTML = '';
          for (var i = 0; i < list[50]; i += 1) {
               if (list[i] !== null) {
                    product_list.innerHTML += '<option value="' + list[i].toString() + '" />';
               }
          }

          for (var i = 0; i < list[50]; i += 1) {
               if (list[i] !== null) {
                    document.getElementById("test1").innerHTML += '<div>' + list[i].toString() + '</div>';
               }
          }
          
          
               
          //alert(list[50]);
          
          //alert(list[51] + " " + list[50]);
     }

     if (!(typeof selected_product !== 'undefined' && selected_product !== null)) {

     } else {

          // get access to product list with DOM          
          let sel_list = document.getElementById("selection_list");

          //output.innerHTML += '<option value="' + 1 + '" />"'; // FEHLERHAFT, aber warum?

          // fill suggestions with product list

          for (var i = 0; i < selected_product[50]; i += 1) {
               if (selected_product[i] !== null && selected_product[i] !== undefined) {
                    //sel_list.innerHTML += '<p>' + num_selected_product[i] + " " + selected_product[i] + '</p>';
                    sel_list.innerHTML += '<p><input class="numbers" type="number" id="quantity' + i.toString() + '" value="' + num_selected_product[i] + '" name="quantity" min="1" max="9999"> ' + selected_product[i].toString() + '</p>';
               }
          }
     }
     //alert(selected_product[0] + " " + selected_product[1] + " " + selected_product[2]);
     document.getElementById("shopname").innerHTML = shopnames[itemname[6] - 1]; //list[51];
     document.getElementById("l1").innerHTML = shopnames[0]; //list[51];
     document.getElementById("e1").innerHTML = shopnames[0]; //list[51];
     document.getElementById("l2").innerHTML = shopnames[1];
     document.getElementById("e2").innerHTML = shopnames[1];
     document.getElementById("l3").innerHTML = shopnames[2];
     document.getElementById("e3").innerHTML = shopnames[2];
     document.getElementById("l4").innerHTML = shopnames[3];
     document.getElementById("e4").innerHTML = shopnames[3];
     //alert("shopnames: " + shopnames[0] + shopnames[1] + shopnames[2] + shopnames[3]);
}


function addContent() {
     //var product_input = document.getElementById("product_input");
     /*
     let text = document.getElementById("product_input");
     list[list[50]] = product_input.value;
     //alert(list[list[50]] + " " + list[0] + " " + list[50]);
     list[50] += 1;

     // fill suggestions of input with product
     
     var product_list = document.getElementById("product_list");
     
     let list_text = product_input.value.toString();
     product_list.innerHTML += '<option value="' + list_text + '" />';

     localStorage.setItem(itemname, JSON.stringify(list));  // save personal product list in local storage
     text.value = "";    // clear input text field

     writeContent();
     */
     
     //alert(document.getElementById("test1").innerHTML);
     let test1 = "";
     list = [];
     list[50] = 0;
     for (var i = 0; document.getElementById("test1").innerHTML[i] !== undefined; i += 1)
     {
          if (document.getElementById("test1").innerHTML[i] == "<" && document.getElementById("test1").innerHTML[i + 1] == "d") {
               i += 4;
               list[list[50]] = test1;
               list[50] += 1;
               test1 = "";
          } else if (document.getElementById("test1").innerHTML[i] == "<" && document.getElementById("test1").innerHTML[i + 1] == "/") {
               i += 10;
               list[list[50]] = test1;
               list[50] += 1;
               test1 = "";
          } else if (document.getElementById("test1").innerHTML[i] == "&" && document.getElementById("test1").innerHTML[i + 5] == ";") {
               i += 5;
               list[list[50]] = test1;
               list[50] += 1;
               test1 = "";
          } else {
               test1 += document.getElementById("test1").innerHTML[i];
          }
          
     }
     //alert(list);
     
     // fill suggestions of input with product
     document.getElementById("product_list").innerHTML = '';
     for (var i = 0; i < list[50]; i += 1) {
          if (list[i] !== null) {
               document.getElementById("product_list").innerHTML += '<option value="' + list[i].toString() + '" />';
          }
     }
     
     localStorage.setItem(itemname, JSON.stringify(list));  // save personal product list in local storage
     
     //writeContent();
     //var output = document.getElementById("schreiben");
     //output.innerHTML += "<p> hi </p>";
}


function writeContent() {
     //var storedArray = localStorage.getItem("market1");
     //list = JSON.parse(storedArray).slice();;
     //alert(list[0]);
     document.getElementById("schreiben").innerHTML = "";   // schreiben.innerHTML = "";
     let write_text = '';
     for (var i = 0; i < list[50]; i += 1) { // vorher < list[50]
          write_text += '<p>' + list[i] + '<p/>';
     }
     schreiben.innerHTML = write_text;
     
     //alert(document.getElementById("shopname").innerHTML);
     
     //alert(list[51]);
}

function deleteContent() {

     if (confirm('Gespeichertes Sortiement wirklich entfernen?')) {
          // jede Funktion müsste zum Updaten durchlaufen werden, aufrufen funktioniert allerdings nicht
          localStorage.removeItem(itemname);
          list = [];
          list[50] = 0;
          //alert(list[0]);
          //storedArray = localStorage.getItem("market1");
          //list = JSON.parse(storedArray).slice();
          //writeContent();
          document.getElementById("schreiben").innerHTML = "";

          // clear suggestions
          document.getElementById("product_list").innerHTML = '';
          //let selection_list = document.getElementById("product_list");
          //selection_list.innerHTML = '';

          // clear sorted list
          document.getElementById("sorted_list").innerHTML = "";
     } else {
          // Do nothing!
          
     }
     
}

function deleteSelection() {

     if (confirm('Einkaufsliste löschen?')) {
          // clear selected list
          localStorage.removeItem(sel_itemname);
          selected_product = [];
          selected_product[50] = 0;
          document.getElementById("selection_list").innerHTML = "";
          //alert("selection list deleted");
          // clear quantities of selected list
          localStorage.removeItem("num_selected_product");
          num_selected_product = [];
     } else {
          // Do nothing!

     }    
}


function chooseProduct() {
     
     //alert("choose product");
     //saveName();
     // choose only if something is written in the input field (empty input field doesnt work)
     if (document.getElementById("selection_input").value) {
          selected_product[selected_product[50]] = document.getElementById("selection_input").value;
          selected_product[50] += 1;
          count_products += 1;
          document.getElementById("selection_input").value = "";


          let selection_list = document.getElementById("selection_list");
          selection_list.innerHTML = '';
          //selection_list.innerHTML = '<ul type="circle">';
          //alert(selected_product[50]);
          for (var i = 0; i < selected_product[50]; i += 1) {
               //console.log(num_selected_product[i]);
               //alert(isNaN(num_selected_product[i]) + " " + num_selected_product[i]);
               if (num_selected_product[i] == '' || num_selected_product[i] == undefined || num_selected_product[i] == null) {
                    //alert("keine zahl");
                    selection_list.innerHTML += '<p><input class="numbers" type="number" id="quantity' + i.toString() + '" value="1" name="quantity" min="1" max="9999"> ' + selected_product[i].toString() + '</p>'; //'<li>' + selected_product[i].toString() + '</li>';
               } else {
                    selection_list.innerHTML += '<p><input class="numbers" type="number" id="quantity' + i.toString() + '" value="' + num_selected_product[i] + '" name="quantity" min="1" max="9999"> ' + selected_product[i].toString() + '</p>'; //'<li>' + selected_product[i].toString() + '</li>';
               }
          }
          //selection_list.innerHTML += '</ul>';
          //alert(selected_product[0] + " " + selected_product[1] + " " + selected_product[2]);
          localStorage.setItem(sel_itemname, JSON.stringify(selected_product));  // save personal product list in local storage
          //alert(selected_product[0] + " " + selected_product[1] + " " + selected_product[2]);
          //
     }
}


function sortList() {

     saveName();
     let sorted_list = [];
     let count_sorted_list = 0;
     let num_selected_product_sorted = [];
     //alert("listeneintrag: " + list[1]);     // listeneinträge leer
     
     for (var x = 0; x < list[50]; x += 1)
     {
          for (var k = 0; k < selected_product[50]; k += 1)
          {
               if(selected_product[k] == list[x])
               {
                    sorted_list[count_sorted_list] = selected_product[k];
                    num_selected_product_sorted[count_sorted_list] = num_selected_product[k];
                    count_sorted_list += 1;
                    //alert(count_sorted_list);
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
     
     let text_sorted_list = document.getElementById("sorted_list");
     text_sorted_list.innerHTML = '';   // empty sorted list
     // fill sorted list with checkboxes
     //alert("numbers: " + num_selected_product_sorted[0] + " " + num_selected_product_sorted[1] + " " + num_selected_product_sorted[2] + " " + num_selected_product_sorted[3]);
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
          //'<p>' + sorted_list[c] + '<p/>';
     }
}

// Supermarktnamen abspeichern, alert funktioniert in dieser Funktion nicht
function saveName() {
     shopnames[itemname[6] - 1] = document.getElementById("shopname").innerHTML;
     //console.log("shopnames: " + shopnames[0] + shopnames[1]);
     localStorage.setItem("shopnames", JSON.stringify(shopnames));  // save personal product list in local storage

     // save number of products
     for (var i = 0; i < selected_product[50]; i += 1) {
          num_selected_product[i] = document.getElementById("quantity" + i.toString()).value;
          //console.log(num_selected_product[i]);
          //selection_list.innerHTML += '<p><input class="numbers" type="number" id="quantity' + i.toString() +'" value="1" name="quantity" min="1" max="9999"> ' + selected_product[i].toString() + '</p>'; //'<li>' + selected_product[i].toString() + '</li>';
     }
     localStorage.setItem("num_selected_product", JSON.stringify(num_selected_product));  // save personal product list in local storage
}

// funktioniert onunload?
/*
window.onunload = function () {
     //alert("hi");
     list[51] = document.getElementById("shopname").innerHTML;
     localStorage.setItem("market1", JSON.stringify(list));  // save personal product list in local storage
     
}*/
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
