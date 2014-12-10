/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var shopping_carp0052 = {
    shoppingList: [],
    
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        //document.addEventListener("DOMContentLoaded", this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        shopping_carp0052.receivedEvent('deviceready');
        
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
          
          if(localStorage.getItem("shopping-carp0052")){
            shopping_carp0052.shoppingList = JSON.parse(localStorage.getItem("shopping-carp0052"));
           // console.log("exists");
            shopping_carp0052.showList();
          }else{
            console.log("empty");
          }
         var btn= document.querySelector("#addItem");    
         btn.addEventListener("click", shopping_carp0052.addItem );
         
    },
    
    addItem: function(ev){
                ev.preventDefault();
                
                var newItem = document.querySelector("#newItem").value;  
                if (newItem == null || newItem == "") {        
                    return false;
                }                
                shopping_carp0052.shoppingList.push(newItem);                
                localStorage.setItem("shopping-carp0052", JSON.stringify(shopping_carp0052.shoppingList) );
                shopping_carp0052.showList();
                $("input:text").val("");
                
                return false;

    },
    
    removeItem:function (ev){
                
                var txt = ev.currentTarget.firstChild.nodeValue;        
                for(var i=0;i<shopping_carp0052.shoppingList.length;i++){
                  if(shopping_carp0052.shoppingList[i] == txt){
                      shopping_carp0052.shoppingList.splice(i, 1);               
                      localStorage.removeItem(shopping_carp0052.item);
                  }
                }
            localStorage.setItem("shopping-carp0052", JSON.stringify(shopping_carp0052.shoppingList) );
            shopping_carp0052.showList();
 },
    
    showList: function(){            
                var list = document.querySelector("#addedItem");
                list.innerHTML = "";
            
            for(var i=0;i<shopping_carp0052.shoppingList.length;i++){
               // var remove = document.createElement("span");
                //remove.setAttribute("class", "ui-btn ui-icon-minus ui-btn-icon-notext ui-corner-all");
                    
                        
                
                var item = document.createElement("li");
                item.innerHTML = shopping_carp0052.shoppingList[i];    
                
                
                list.appendChild(item);
               // item.appendChild(remove);
                
                $(list).listview('refresh');
                
                
                item.addEventListener("click", shopping_carp0052.removeItem);
          }       
    }
};

shopping_carp0052.initialize();