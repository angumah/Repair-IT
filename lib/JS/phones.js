
const client_id = '284509052384-okn3ak31ub29dbee53v2b23c4ilvfp21.apps.googleusercontent.com';
const client_secret = 'VbQAseWjnRwMUjXs8AIAXsFn';
const API_Key = 'AIzaSyDDwzLPSbwScSAVNcIm5x0Phn-5zPVkY2U';

// const fs = require('fs');
// const readline = require('readline');
// const {google} = require('googleapis');


//Making DOM Variables
const choosePhoneTypeRef = document.getElementById('choosePhoneType');
const phoneTypeRef = document.getElementById('phoneType');
const chooseAndroidBrand = document.getElementById('androidBrand');
const iphoneModelRef = document.getElementById('iphoneModel');
const detailsFormRef = document.getElementById('detailsForm');
const contactFormRef = document.getElementById('contactForm');
var formsRefArray = document.querySelectorAll('form');
console.log(formsRefArray);
console.log(formsRefArray.length);

let model;

//Add event listener
choosePhoneTypeRef.addEventListener('change', phoneSelected);
//Display dropdown functions
function phoneSelected(){
    console.log(phoneTypeRef.value);
    
    for(let i=1; i<formsRefArray.length; i++){
        formsRefArray[i].style['display']='none';
    }
    imageDivRef.innerText='';
    var type = phoneTypeRef.value;

    if(type == 'apple'){
        chooseIphoneModelRef.style['display']='block';
    }
     if(type == 'android'){
        chooseAndroidBrand.style['display']='block';
    }
}

//choose android brand
const phoneCompanyRef = document.getElementById('phoneCompany');
const samsungTypeRef = document.getElementById('chooseSamsungType');
const googleTypeRef = document.getElementById('chooseGoogleType');
chooseAndroidBrand.addEventListener('change', brandSelected);


function brandSelected(){
    for(let i=3; i<formsRefArray.length; i++){
        formsRefArray[i].style['display']='none';
    }
    imageDivRef.innerText='';
    var phoneCompanyValue = phoneCompanyRef.value;
    console.log(phoneCompanyValue);

    if(phoneCompanyValue == 'samsung'){
        samsungTypeRef.style['display']='block';

    }
    if(phoneCompanyValue == 'google'){
        googleTypeRef.style['display']='block';
    }
}

//choose google type
const chooseNexusRef = document.getElementById('chooseNexusModel');
const googleModelRef = document.getElementById('chooseGoogleLine');
const choosePixelRef = document.getElementById('choosePixelModel');
googleTypeRef.addEventListener('change', googleTypeChosen);

function googleTypeChosen(){
    for(let i=4; i<formsRefArray.length; i++){
        formsRefArray[i].style['display']='none';
    }
    imageDivRef.innerText='';
    model = googleModelRef.value;
    console.log(model);

    if(model == 'nexus'){
        chooseNexusRef.style['display']='block';
    }

    if(model == 'pixel'){
        choosePixelRef.style['display']='block';
    }

}


//choose samsung type

const samsungTypeValueRef = document.getElementById('samsungType');
const galaxySRef = document.getElementById('chooseSamsungModelGalaxy_s');
const galaxyNoteRef = document.getElementById('chooseSamsungModelGalaxy_note');
const galaxySActiveRef = document.getElementById('chooseSamsungModelGalaxy_sActive');

samsungTypeRef.addEventListener('change', samsungTypeChosen);

function samsungTypeChosen(){
    for(let i=7; i<formsRefArray.length; i++){
        formsRefArray[i].style['display']='none';
    }
    imageDivRef.innerText='';
    var samsungTypeValue = samsungTypeValueRef.value;
    console.log(samsungTypeValue);

    if(samsungTypeValue == 'galaxy_s'){
        galaxySRef.style['display']='block';
    }
    if(samsungTypeValue == 'galaxy_note'){
        galaxyNoteRef.style['display']='block';
    }
    if(samsungTypeValue == 'active'){
        galaxySActiveRef.style['display']='block';
    }
}

//iphoneModels dropdown

//iphone image div
const imageDivRef = document.getElementById('phoneImageDiv');
//iphone images
var iphoneArray = [];
//0
var iphone4 = document.createElement('img');
iphone4.src = '../assets/apple/iphone4.jpg';
iphone4.id='iphone4Img';
iphoneArray.push(iphone4);
//1
var iphone4s = document.createElement('img');
iphone4s.src = '../assets/apple/iphone4s.jpg';
iphone4s.id = 'iphone4sImg';
iphoneArray.push(iphone4s);
//2
var iphone5 = document.createElement('img');
iphone5.src = '../assets/apple/iphone5.jpg';
iphone5.id = 'iphone5Img';
iphoneArray.push(iphone5);
//3
var iphone5s = document.createElement('img');
iphone5s.src = '../assets/apple/iphone5s.jpeg';
iphone5s.id ='iphone5sImg';
iphoneArray.push(iphone5s);
//4
var iphoneSE = document.createElement('img');
iphoneSE.src = '../assets/apple/iphoneSE.jpeg';
iphoneSE.id = 'iphoneSEImg';
iphoneArray.push(iphoneSE);
//5
var iphone5c = document.createElement('img');
iphone5c.src = '../assets/apple/iphone5c.jpg';
iphone5c.id = 'iphone5cImg';
iphoneArray.push(iphone5c);
//6
var iphone6 = document.createElement('img');
iphone6.src = '../assets/apple/iphone6.jpg';
iphone6.id = 'iphone6Img';
iphoneArray.push(iphone6);
//7
var iphone6Plus = document.createElement('img');
iphone6Plus.src = '../assets/apple/iphone6_plus.png';
iphone6Plus.id = 'iphone6PlusImg';
iphoneArray.push(iphone6Plus);
//8
var iphone6s = document.createElement('img');
iphone6s.src = '../assets/apple/iphone6s.jpg';
iphone6s.id = 'iphone6sImg';
iphoneArray.push(iphone6s);
//9
var iphone6sPlus = document.createElement('img');
iphone6sPlus.src = '../assets/apple/iphone6s_plus.png';
iphone6sPlus.id = 'iphone6sPlusImg';
iphoneArray.push(iphone6sPlus);
//10
var iphone7 = document.createElement('img');
iphone7.src = '../assets/apple/iphone7.jpeg';
iphone7.id = 'iphone7Img';
iphoneArray.push(iphone7);
//11
var iphone7Plus = document.createElement('img');
iphone7Plus.src = '../assets/apple/iphone7plus.jpeg';
iphone7Plus.id = 'iphone7PlusImg';
iphoneArray.push(iphone7Plus);
//12
var iphone8 = document.createElement('img');
iphone8.src = '../assets/apple/iphone8.jpeg';
iphone8.id = 'iphone8Img';
iphoneArray.push(iphone8);
//13
var iphone8Plus = document.createElement('img');
iphone8Plus.src = '../assets/apple/iphone8_plus.jpeg';
iphone8Plus.id = 'iphone8PlusImg';
iphoneArray.push(iphone8Plus);
//14
var iphoneX = document.createElement('img');
iphoneX.src = '../assets/apple/iphoneX.jpg';
iphoneX.id = 'iphoneXImg';
iphoneArray.push(iphoneX);
//15
var iphoneXR = document.createElement('img');
iphoneXR.src = '../assets/apple/iphoneXR.jpg';
iphoneXR.id = 'iphoneXRImg';
iphoneArray.push(iphoneXR);
//16
var iphoneXS = document.createElement('img');
iphoneXS.src = '../assets/apple/iphoneXS.jpeg';
iphoneXS.id = 'iphoneXSImg';
iphoneArray.push(iphoneXS)
//17
var iphoneXSMax = document.createElement('img');
iphoneXSMax.src = '../assets/apple/iphoneXS.jpeg';
iphoneXSMax.id = 'iphoneXSMaxImg';
iphoneArray.push(iphoneXSMax);
//18
var iphone11 = document.createElement('img');
iphone11.src = '../assets/apple/iphone11.jpeg';
iphone11.id = 'iphone11Img';
iphoneArray.push(iphone11);
//19
var iphone11Pro = document.createElement('img');
iphone11Pro.src = '../assets/apple/iphone11_pro.jpg';
iphone11Pro.id = 'iphone11ProImg';
iphoneArray.push(iphone11Pro);
//20
var iphone11ProMax = document.createElement('img');
iphone11ProMax.src = '../assets/apple/iphone11_pro_max.jpg';
iphone11ProMax.id = 'iphone11ProMaxImg';
iphoneArray.push(iphone11ProMax);
//21
var iphoneSE2 = document.createElement('img');
iphoneSE2.src = '../assets/apple/iphoneSE_2.jpeg';
iphoneArray.push(iphoneSE2);

// Google Nexus Images

var nexusArray = [];

//0
var nexus5 = document.createElement('img');
nexus5.src = '../assets/google/nexus/nexus5.jpg';
nexus5.id = 'nexus5Img';
nexusArray.push(nexus5);
//1
var nexus6 = document.createElement('img');
nexus6.src = '../assets/google/nexus/nexus6.jpg';
nexus6.id = 'nexus6Img';
nexusArray.push(nexus6);
//2
var nexus5x = document.createElement('img');
nexus5x.src = '../assets/google/nexus/nexus5x.jpg';
nexus5x.id = 'nexus5xImg';
nexusArray.push(nexus5x);
//3
var nexus6p = document.createElement('img');
nexus6p.src = '../assets/google/nexus/nexus6p.jpg';
nexus6p.id = 'nexus6pImg';
nexusArray.push(nexus6p);

//pixel images

var pixelArray = [];

//0
var pixel = document.createElement('img');
pixel.src = '../assets/google/pixel/pixel.jpeg';
pixel.id = 'pixelImg';
pixelArray.push(pixel);
//1
var pixelXL = document.createElement('img');
pixelXL.src = '../assets/google/pixel/pixelXL.jpeg';
pixelXL.id = 'pixelXLImg';
pixelArray.push(pixelXL);
//2
var pixel2 = document.createElement('img');
pixel2.src = '../assets/google/pixel/pixel2.jpg';
pixel2.id = 'pixel2Img';
pixelArray.push(pixel2);
//3
var pixel2XL = document.createElement('img');
pixel2XL.src = '../assets/google/pixel/pixel2XL.jpg';
pixel2XL.id = 'pixel2XLImg';
pixelArray.push(pixel2XL);
//4
var pixel3 = document.createElement('img');
pixel3.src = '../assets/google/pixel/pixel3.jpg';
pixel3.id = 'pixel3Img';
pixelArray.push(pixel3);
//5
var pixel3XL = document.createElement('img');
pixel3XL.src = '../assets/google/pixel/pixel3XL.jpg';
pixel3XL.id = 'pixel3XLImg';
pixelArray.push(pixel3XL);
//6
var pixel3a = document.createElement('img');
pixel3a.src = '../assets/google/pixel/pixel3a.jpg';
pixel3a.id = 'pixel3aImg';
pixelArray.push(pixel3a);
//7
var pixel3aXL = document.createElement('img');
pixel3aXL.src = '../assets/google/pixel/pixel3aXL.png';
pixel3aXL.id = 'pixel3aXLImg';
pixelArray.push(pixel3aXL);
//8
var pixel4 = document.createElement('img');
pixel4.src = '../assets/google/pixel/pixel4.png';
pixel4.id = 'pixel4Img';
pixelArray.push(pixel4);
//9
var pixel4XL = document.createElement('img');
pixel4XL.src = '../assets/google/pixel/pixel4XL.png';
pixel4XL.id = 'pixel4XLImg';
pixelArray.push(pixel4XL);
//10
var pixel4a = document.createElement('img');
pixel4a.src = '../assets/google/pixel/pixel4a.webp';
pixel4a.id = 'pixel4aImg';
pixelArray.push(pixel4a);


//Samsung Galaxy S Images

var galaxySArray = [];

//0
var galaxyS4 = document.createElement('img');
galaxyS4.src = '../assets/samsung/galaxy_s/galaxy_s4.jpg';
galaxyS4.id = 'galaxyS4Img';
galaxySArray.push(galaxyS4);
//1
var galaxyS5 = document.createElement('img');
galaxyS5.src = '../assets/samsung/galaxy_s/galaxy_s5.jpg';
galaxyS5.id = 'galaxyS5Img';
galaxySArray.push(galaxyS5);
//2
var galaxyS6 = document.createElement('img');
galaxyS6.src = '../assets/samsung/galaxy_s/galaxy_s6.jpg';
galaxyS6.id = 'galaxyS6Img';
galaxySArray.push(galaxyS6);
//3
var galaxyS6Edge = document.createElement('img');
galaxyS6Edge.src = '../assets/samsung/galaxy_s/galaxy_s6Edge.jpg';
galaxyS6Edge.id = 'galaxyS6EdgeImg';
galaxySArray.push(galaxyS6Edge);
//4
var galaxyS6EdgePlus = document.createElement('img');
galaxyS6EdgePlus.src = '../assets/samsung/galaxy_s/galaxy_s6EdgePlus.jpg';
galaxyS6EdgePlus.id = 'galaxyS6EdgePlusImg';
galaxySArray.push(galaxyS6EdgePlus);
//5
var galaxyS7 = document.createElement('img');
galaxyS7.src = '../assets/samsung/galaxy_s/galaxy_s7.jpg';
galaxyS7.id = 'galaxyS7Img';
galaxySArray.push(galaxyS7);
//6
var galaxyS7Edge = document.createElement('img');
galaxyS7Edge.src = '../assets/samsung/galaxy_s/galaxy_s7Edge.jpg';
galaxyS7Edge.id = 'galaxyS7EdgeImg';
galaxySArray.push(galaxyS7Edge);
//7
var galaxyS8 = document.createElement('img');
galaxyS8.src = '../assets/samsung/galaxy_s/galaxy_s8.jpg';
galaxyS8.id = 'galaxyS8Img';
galaxySArray.push(galaxyS8);
//8
var galaxyS8Plus = document.createElement('img');
galaxyS8Plus.src = '../assets/samsung/galaxy_s/galaxy_s8Plus.jpeg';
galaxyS8Plus.id = 'galaxyS8PlusImg';
galaxySArray.push(galaxyS8Plus);
//9
var galaxyS9 = document.createElement('img');
galaxyS9.src = '../assets/samsung/galaxy_s/galaxy_s9.jpg';
galaxyS9.id = 'galaxyS9Img';
galaxySArray.push(galaxyS9);
//10
var galaxyS9Plus = document.createElement('img');
galaxyS9Plus.src = '../assets/samsung/galaxy_s/galaxy_s9Plus.jpg';
galaxyS9Plus.id = 'galaxyS9PlusImg';
galaxySArray.push(galaxyS9Plus);
//11
var galaxyS10e = document.createElement('img');
galaxyS10e.src = '../assets/samsung/galaxy_s/galaxy_s10E.png';
galaxyS10e.id = 'galaxyS10eImg';
galaxySArray.push(galaxyS10e);
//12
var galaxyS10 = document.createElement('img');
galaxyS10.src = '../assets/samsung/galaxy_s/galaxy_s10.png';
galaxyS10.id = 'galaxyS10Img';
galaxySArray.push(galaxyS10);
//13
var galaxyS10Plus = document.createElement('img');
galaxyS10Plus.src = '../assets/samsung/galaxy_s/galaxy_s10Plus.jpg';
galaxyS10Plus.id = 'galaxyS10PlusImg';
galaxySArray.push(galaxyS10Plus);
//14
var galaxyS20 = document.createElement('img');
galaxyS20.src = '../assets/samsung/galaxy_s/galaxy_s20.jpg';
galaxyS20.id = 'galaxyS20Img';
galaxySArray.push(galaxyS20);
//15
var galaxyS20Plus = document.createElement('img');
galaxyS20Plus.src = '../assets/samsung/galaxy_s/galaxy_s20Plus.jpg';
galaxyS20Plus.id = 'galaxyS20PlusImg';
galaxySArray.push(galaxyS20Plus);
//16
var galaxyS20Ultra = document.createElement('img');
galaxyS20Ultra.src = '../assets/samsung/galaxy_s/galaxy_s20Ultra.jpg';
galaxyS20Ultra.id = 'galaxyS20UltraImg';
galaxySArray.push(galaxyS20Ultra);

//Galaxy Note Images
var galaxyNoteArray = [];

//0
var galaxyNote4 = document.createElement('img');
galaxyNote4.src = '../assets/samsung/galaxy_note/galaxy_note4.jpg';
galaxyNote4.id = 'galaxyNote4Img';
galaxyNoteArray.push(galaxyNote4);
//1
var galaxyNote5 = document.createElement('img');
galaxyNote5.src = '../assets/samsung/galaxy_note/galaxy_note5.jpg';
galaxyNote5.id = 'galaxyNote5Img';
galaxyNoteArray.push(galaxyNote5);
//2
var galaxyNote7 = document.createElement('img');
galaxyNote7.src = '../assets/samsung/galaxy_note/galaxy_note7.jpg';
galaxyNote7.id = 'galaxyNote7Img';
galaxyNoteArray.push(galaxyNote7);
//3
var galaxyNote8 = document.createElement('img');
galaxyNote8.src = '../assets/samsung/galaxy_note/galaxy_note8.jpg';
galaxyNote8.id = 'galaxyNote8Img';
galaxyNoteArray.push(galaxyNote8);
//4
var galaxyNote9 = document.createElement('img');
galaxyNote9.src = '../assets/samsung/galaxy_note/galaxy_note9.jpg';
galaxyNote9.id = 'galaxyNote9Img';
galaxyNoteArray.push(galaxyNote9);
//5
var galaxyNote10 = document.createElement('img');
galaxyNote10.src = '../assets/samsung/galaxy_note/galaxy_note10.jpg';
galaxyNote10.id = 'galaxyNote10Img';
galaxyNoteArray.push(galaxyNote10);
//6
var galaxyNote10Plus = document.createElement('img');
galaxyNote10Plus.src = '../assets/samsung/galaxy_note/galaxy_note10Plus.jpg';
galaxyNote10Plus.id = 'galaxyNote10PlusImg';
galaxyNoteArray.push(galaxyNote10Plus);
//7
var galaxyNote20 = document.createElement('img');
galaxyNote20.src = '../assets/samsung/galaxy_note/galaxy_note20.png';
galaxyNote20.id = 'galaxyNote20Img';
galaxyNoteArray.push(galaxyNote20);
//8
var galaxyNote20Ultra = document.createElement('img');
galaxyNote20Ultra.src = '../assets/samsung/galaxy_note/galaxy_note20Ultra.png';
galaxyNote20Ultra.id = 'galaxyNote20UltraImg';
galaxyNoteArray.push(galaxyNote20Ultra);

//Galaxy S Active Image Array
var galaxySActiveArray = [];

//0
var galaxyS4Active = document.createElement('img');
galaxyS4Active.src = '../assets/samsung/galaxy_sActive/galaxy_s4Active.jpg';
galaxyS4Active.id = 'galaxyS4ActiveImg';
galaxySActiveArray.push(galaxyS4Active);
//1
var galaxyS5Active = document.createElement('img');
galaxyS5Active.src = '../assets/samsung/galaxy_sActive/galaxy_s5Active.png';
galaxyS5Active.id = 'galaxyS5ActiveImg';
galaxySActiveArray.push(galaxyS5Active);
//2
var galaxyS6Active = document.createElement('img');
galaxyS6Active.src = '../assets/samsung/galaxy_sActive/galaxy_s6Active.jpg';
galaxyS6Active.id = 'galaxyS6ActiveImg';
galaxySActiveArray.push(galaxyS6Active);
//3
var galaxyS7Active = document.createElement('img');
galaxyS7Active.src = '../assets/samsung/galaxy_sActive/galaxy_s7Active.jpg';
galaxyS7Active.id = 'galaxyS7ActiveImg';
galaxySActiveArray.push(galaxyS7Active);
//4
var galaxyS8Active = document.createElement('img');
galaxyS8Active.src = '../assets/samsung/galaxy_sActive/galaxy_s8Active.jpg';
galaxyS8Active.id = 'galaxyS8ActiveImg';
galaxySActiveArray.push(galaxyS8Active);
//display  images
const chooseIphoneModelRef = document.getElementById('chooseIphoneModel');
chooseIphoneModelRef.addEventListener('change', iphoneSelected);
function iphoneSelected(){
    model = iphoneModelRef.value
    console.log(model);
    imageDivRef.innerText='';
    detailsFormRef.style['display']='none';
switch(model){
    case 'four':
        imageDivRef.appendChild(iphoneArray[0]);
        break;
    case 'four_s':
        imageDivRef.appendChild(iphoneArray[1]);
        break;
    case 'five':
        imageDivRef.appendChild(iphoneArray[2]);
        break;
    case 'five_s':
        imageDivRef.appendChild(iphoneArray[3]);
        break;
    case 'se':
        imageDivRef.appendChild(iphoneArray[4]);
        break;
    case 'five_c':
        imageDivRef.appendChild(iphoneArray[5]);
        break;
    case 'six':
        imageDivRef.appendChild(iphoneArray[6]);
        break;
    case 'sixPlus':
        imageDivRef.appendChild(iphoneArray[7]);
        break;
    case 'six_s':
        imageDivRef.appendChild(iphoneArray[8]);
        break;
    case 'six_sPlus':
        imageDivRef.appendChild(iphoneArray[9]);
        break;
    case 'seven':
        imageDivRef.appendChild(iphoneArray[10]);
        break;
    case 'sevenPlus':
        imageDivRef.appendChild(iphoneArray[11]);
        break;
    case 'eight':
        imageDivRef.appendChild(iphoneArray[12]);
        break;
    case 'eightPlus':
        imageDivRef.appendChild(iphoneArray[13]);
        break;
    case 'x':
        imageDivRef.appendChild(iphoneArray[14]);
        break;
    case 'xr':
        imageDivRef.appendChild(iphoneArray[15]);
        break;
    case 'xs':
        imageDivRef.appendChild(iphoneArray[16]);
        break;
    case 'xs_max':
        imageDivRef.appendChild(iphoneArray[17]);
        break;
    case 'eleven':
        imageDivRef.appendChild(iphoneArray[18]);
        break;
    case 'elevenPro':
        imageDivRef.appendChild(iphoneArray[19]);
        break;
    case 'elevenProMax':
        imageDivRef.appendChild(iphoneArray[20]);
        break;
    case 'se_two':
        imageDivRef.appendChild(iphoneArray[21]);
}
detailsFormRef.style['display']='block';
contactFormRef.style['display']='block';
}

//Display Galaxy S Images
galaxySRef.addEventListener('change', chooseGalaxyS);
const galaxy_sModel = document.getElementById('galaxy_sModel');
    function chooseGalaxyS(){
        model = galaxy_sModel.value;
        console.log(model);
        imageDivRef.innerText='';
        switch(model){
            case 's_four':
                imageDivRef.appendChild(galaxySArray[0]);
                break;
            case 's_five':
                imageDivRef.appendChild(galaxySArray[1]);
                break;
            case 's_six':
                imageDivRef.appendChild(galaxySArray[2]);
                break;
            case 's_sixEdge':
                imageDivRef.appendChild(galaxySArray[3]);
                break;
            case 's_sixEdgePlus':
                imageDivRef.appendChild(galaxySArray[4]);
                break;
            case 's_seven':
                imageDivRef.appendChild(galaxySArray[5]);
                break;
            case 's_sevenEdge':
                imageDivRef.appendChild(galaxySArray[6]);
                break;
            case 's_eight':
                imageDivRef.appendChild(galaxySArray[7]);
                break;
            case 's_eightPlus':
                imageDivRef.appendChild(galaxySArray[8]);
                break;
            case 's_nine':
                imageDivRef.appendChild(galaxySArray[9]);
                break;
            case 's_ninePlus':
                imageDivRef.appendChild(galaxySArray[10]);
                break;
            case 's_tenE':
                imageDivRef.appendChild(galaxySArray[11]);
                break;
            case 's_ten':
                imageDivRef.appendChild(galaxySArray[12]);
                break;
            case 's_tenPlus':
                imageDivRef.appendChild(galaxySArray[13]);
                break;
            case 's_twenty':
                imageDivRef.appendChild(galaxySArray[14]);
                break;
            case 's_twentyPlus':
                imageDivRef.appendChild(galaxySArray[15]);
                break;
            case 's_twentyUltra':
                imageDivRef.appendChild(galaxySArray[16]);
        }
        detailsFormRef.style['display']='block';
        contactFormRef.style['display']='block';

    }

    //Display Galaxy Note Images
galaxyNoteRef.addEventListener('change', chooseGalaxyNote);
const galaxy_noteModel = document.getElementById('galaxy_noteModel');
    function chooseGalaxyNote(){
        model = galaxy_noteModel.value;
        console.log(model);
        imageDivRef.innerText='';
        switch(model){
            case 'note_four':
                imageDivRef.appendChild(galaxyNoteArray[0]);
                break;
            case 'note_five':
                imageDivRef.appendChild(galaxyNoteArray[1]);
                break;
            case 'note_seven':
                imageDivRef.appendChild(galaxyNoteArray[2]);
                break;
            case 'note_eight':
                imageDivRef.appendChild(galaxyNoteArray[3]);
                break;
            case 'note_nine':
                imageDivRef.appendChild(galaxyNoteArray[4]);
                break;
            case 'note_ten':
                imageDivRef.appendChild(galaxyNoteArray[5]);
                break;
                case 'note_tenPlus':
                    imageDivRef.appendChild(galaxyNoteArray[6]);
                    break;
            case 'note_twenty':
                imageDivRef.appendChild(galaxyNoteArray[7]);
                break;
            case 'note_twentyUltra':
                imageDivRef.appendChild(galaxyNoteArray[8]);
        }
        detailsFormRef.style['display']='block';
        contactFormRef.style['display']='block';

    }

    //Display Galaxy Active Images
    galaxySActiveRef.addEventListener('change', chooseGalaxySActive);
    const galaxy_activeModel = document.getElementById('galaxy_activeModel');
    function chooseGalaxySActive(){
        model = galaxy_activeModel.value;
        console.log(model);
        imageDivRef.innerText='';
        switch(model){
            case 's_four_active':
                imageDivRef.appendChild(galaxySActiveArray[0]);
                break;
             case 's_five_active':
                imageDivRef.appendChild(galaxySActiveArray[1]);
                break;
             case 's_six_active':
                imageDivRef.appendChild(galaxySActiveArray[2]);
                break;
             case 's_seven_active':
                imageDivRef.appendChild(galaxySActiveArray[3]);
                break;
            case 's_eight_active':
                imageDivRef.appendChild(galaxySActiveArray[4]);
                break;
            }
            detailsFormRef.style['display']='block';
            contactFormRef.style['display']='block';
    }

       //Display Nexus Images
       chooseNexusRef.addEventListener('change', chooseNexusModel);
       const nexusModel = document.getElementById('nexusModel');
       function chooseNexusModel(){
           model = nexusModel.value;
           console.log(model);
           imageDivRef.innerText='';
           switch(model){
               case 'nexus_five':
                   imageDivRef.appendChild(nexusArray[0]);
                   break;
                case 'nexus_six':
                   imageDivRef.appendChild(nexusArray[1]);
                   break;
                case 'nexus_fiveX':
                   imageDivRef.appendChild(nexusArray[2]);
                   break;
                case 'nexus_sixP':
                   imageDivRef.appendChild(nexusArray[3]);
                   break;
               }
               detailsFormRef.style['display']='block';
               contactFormRef.style['display']='block';
   
       }
       //Display Pixel Images
       choosePixelRef.addEventListener('change', choosePixelModel)
       const pixelModel = document.getElementById('pixelModel')

       function choosePixelModel(){
           model = pixelModel.value;
           console.log(model);
           imageDivRef.innerText='';
           switch(model){
               case 'pixel':
                   imageDivRef.appendChild(pixelArray[0]);
                   break;
                case 'pixelXL':
                    imageDivRef.appendChild(pixelArray[1]);
                    break;
                case 'pixel_two':
                   imageDivRef.appendChild(pixelArray[2]);
                   break;
                case 'pixel_twoXL':
                   imageDivRef.appendChild(pixelArray[3]);
                   break;
                case 'pixel_three':
                   imageDivRef.appendChild(pixelArray[4]);
                   break;
                case 'pixel_threeXL':
                   imageDivRef.appendChild(pixelArray[5]);
                   break;
                case 'pixel_threeA':
                   imageDivRef.appendChild(pixelArray[6]);
                   break;
                case 'pixel_threeAXL':
                   imageDivRef.appendChild(pixelArray[7]);
                   break;
                case 'pixel_four':
                   imageDivRef.appendChild(pixelArray[8]);
                   break;
                case 'pixel_fourXL':
                   imageDivRef.appendChild(pixelArray[9]);
                   break;
                case 'pixel_fourA':
                   imageDivRef.appendChild(pixelArray[10]);
                   break;
           }
           detailsFormRef.style['display']='block';
           contactFormRef.style['display']='block';
       }


//submit button function
const submitButtonRef = document.getElementById('submitButton');
const submitTextRef = document.getElementById('details');

const brokenScreenRef = document.getElementById('broken_screen');
const batteryIssueRef = document.getElementById('battery_issue');
const brokenBackGlassRef = document.getElementById('brokenBack_glass');
const cameraIssueRef = document.getElementById('camera_issue');
const hButtonIssueRef = document.getElementById('hButton_issue');
const otherIssueRef = document.getElementById('other');
const firstNameRef = document.getElementById('fname');
const lastNameRef = document.getElementById('lname');
const emailRef = document.getElementById('email');

const descriptionRef = document.getElementById('details');

//firebase database reference
const databaseRef = firebase.database().ref();

submitButtonRef.addEventListener('click', submit);

function submit(event){
    var broken_screenIsChecked = brokenScreenRef.checked;
    var battery_issueIsChecked = batteryIssueRef.checked;
    var brokenBack_glassIsChecked = brokenBackGlassRef.checked;
    var camera_issueIsChecked = cameraIssueRef.checked;
    var hButton_issueIsChecked = hButtonIssueRef.checked;
    var otherIsChecked = otherIssueRef.checked;

    var descriptionDetails = descriptionRef.value;
    event.preventDefault();
    console.log(broken_screenIsChecked);
    console.log(battery_issueIsChecked);
    console.log(brokenBack_glassIsChecked);
    console.log(camera_issueIsChecked);
    console.log(hButton_issueIsChecked);
    console.log(otherIsChecked);
    console.log(descriptionDetails);
    console.log(model);

    if(broken_screenIsChecked == true){
        var broken_screen = 'Yes';
    }
    else if(broken_screenIsChecked == false){
        var broken_screen = 'No'
    }

    if(battery_issueIsChecked == true){
        var battery_issue = 'Yes';
    }
    else if(battery_issueIsChecked == false){
        var battery_issue = 'No'
    }

    if(brokenBack_glassIsChecked == true){
        var broken_back = 'Yes';
    }
    else if(brokenBack_glassIsChecked == false){
        var broken_back = 'No'
    }

    if(camera_issueIsChecked == true){
        var camera_issue = 'Yes';
    }
    else if(camera_issueIsChecked == false){
        var camera_issue = 'No'
    }

    if(broken_screenIsChecked == true){
        var broken_screen = 'Yes';
    }
    else if(broken_screenIsChecked == false){
        var broken_screen = 'No'
    }

    if(hButton_issueIsChecked == true){
        var hButton_issue = 'Yes';
    }
    else if(hButton_issueIsChecked == false){
        var hButton_issue = 'No'
    }
    
    if(otherIsChecked == true){
        var other_issue = 'Yes';
    }
    else if(otherIsChecked == false){
        var other_issue = 'No'
    }

    var firstName = firstNameRef.value;
    var lastName = lastNameRef.value;
    var email = emailRef.value

    var userForm = {
        MODEL: model,
        BROKEN_SCREEN: broken_screen,
        BATTERY_ISSUE: battery_issue,
        BROKEN_BACK: broken_back,
        CAMERA_ISSUE: camera_issue,
        HBUTTON_ISSUE: hButton_issue,
        OTHER_ISSUE: other_issue,
        FIRST_NAME: firstName,
        LAST_NAME: lastName,
        EMAIL: email,
        DESCRIPTION: descriptionDetails,
    }
    console.log(userForm);
    databaseRef.push(userForm);
}

