/*
    Assignment 05
*/
const arrayOfItems = [
    {
        id: 1,
        name: "Laptops",
        description: "A laptop, sometimes called a notebook computer by manufacturers, is a battery- or AC-powered personal computer (PC) smaller than a briefcase.",
        categoryGenre: "Computers"
    },
    {
        id: 2,
        name: "Smartphone",
        description: "A smartphone is a portable computer device that combines mobile telephone functions and personal computing functions into one unit.",
        categoryGenre: "Mobile Devices"
    },
    {
        id: 3,
        name: "SmartWatch",
        description: "Smartwatches. A smartwatch is a watch that offers extra functionality and connectivity on top of the features offered by standard watches. They do this by including a computer system that carries out the normal functionality we expect, but can also handle some extra bells and whistles.",
        categoryGenre: "Wearable"
    },
    {
        id: 4,
        name: "TV",
        description: "an electronic system of transmitting transient images of fixed or moving objects together with sound over a wire or through space by apparatus that converts light and sound into electrical waves and reconverts them into visible light rays and audible sound.",
        categoryGenre: "Home Tech"
    },
    {
        id: 5,
        name: "Headphones",
        description: "Headphones are a pair of padded speakers which you wear over your ears in order to listen to a radio or recorded music, or for using a phone without other people hearing it.",
        categoryGenre: "Audio"
    }
];
class ContentItem {
    id;
    name;
    description;
    categoryGenre;
    constructor(id, name, description, categoryGenre){
        this.id = id;
        this.name = name;
        this.description = description;
        this.categoryGenre = categoryGenre;
    }
    updateContentItem(id, name, description, categoryGenre){
        if(id===this.id && name!==null && description!==null && categoryGenre !== null){
            this.name = name;
            this.description = description;
            this.categoryGenre = categoryGenre;
        }
    }
    toString(){
        return `<div id='content-item-${this.id}' class='content-item-wrapper'><h2>${this.name}</h2><div>${this.description}</div><p>${this.categoryGenre}</p></div>`;
    }
}
$(document).ready(function () {
    arrayOfItems.forEach(item=>{
        let itemObj =  new ContentItem(item.id, item.name, item.description, item.categoryGenre);
        $("#content-item-list").append(itemObj.toString());
        $(`#content-item-${item.id}`).css({
            border: "1px solid gray",
            padding: "5px",
            margin: "5px auto"
        })
    });
});


