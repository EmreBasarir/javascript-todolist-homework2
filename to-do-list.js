// To Do List

const ulListDOM = document.querySelector("#list")
const inputDOM = document.querySelector("#task")
let liDOM = document.getElementsByTagName("li") // hali hazırda bulunan list itemlara Tag ismi üzerinden ulaşıldı
const xIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
</svg>` // close butonu icin icon eklendi
console.log(inputDOM.value)

for (let i = 0; i < liDOM.length; i++) {    //ul list içinde ki list itemlara close butonu eklenmesi.
    let spanBtnDOM = document.createElement("span") // span oluşturuldu close buton için
    spanBtnDOM.classList.add("close") // span'a close classı eklendi
    spanBtnDOM.innerHTML = `${xIcon}` // span içeriğine x close işareti eklendi
    spanBtnDOM.onclick = deleteListItem; // close butonu ile list item silindi.
    liDOM[i].appendChild(spanBtnDOM) // mevcut listedeki her bir elemana close butonu eklendi
    liDOM[i].onclick = checked // 
}

// Ekle butonu özelliğindeki mevcut onclick özelliği kullanıldı
function newElement() {

    if (inputDOM.value == false) {
        $(".error").toast("show");
    } else {
        $(".success").toast("show");        
       
        let liDOM = document.createElement("li")// yeni eklenen list itemlar için yeniden li oluşturuldu
        liDOM.innerHTML = inputDOM.value // list item içine input degeri ve span eklendi.    
        inputDOM.value = " "  // ekledikten sonra input boş gözüksün
        let newCloseBtnDOM = document.createElement("span") // yeni list itemların close butonları için span oluşturuldu
        newCloseBtnDOM.classList.add("close")   // span içindeki butona işlev kazandırabilmek adına close classı eklendi.
        newCloseBtnDOM.innerHTML = `${xIcon}`   // close buton simgesi olarak içeriğine 'x' eklendi 
        newCloseBtnDOM.onclick = deleteListItem;    // close butonun onclick özelliği ile deleteListItem fonksiyonunu çalıştırdık.
        liDOM.appendChild(newCloseBtnDOM)   // list item içine close butonu eklendi.

        ulListDOM.appendChild(liDOM) // son olarak list item ulList içine eklendi
        liDOM.onclick = checked // list item'a yıklandığında checked fonksiyonunu çağrıldı. 
        loglocalStorage();
        // console.log(arrLocalStorage)
    }
}

// bu bölüm tekrar düzenlenecek.
function loglocalStorage() {   
    let InputDOM = document.querySelector("#task")
    for (let i = 0; i < liDOM.length; i++) {    // mevcut list içindeki itemları bir array'e aktarıldı.
        var arrLocalStorage = liDOM[i].innerText  // list içeriklerini tanımladığımız array'e atıldı.
        
       
        localStorage.setItem("lists", JSON.stringify(arrLocalStorage))  // lists adı ile bu itemları localStorage'a kaydedildi.
        arrLocalStorage = localStorage.getItem("lists")
        arrLocalStorage = JSON.parse(localStorage.getItem("lists"))
        
    }
    if (InputDOM.value == true) {
        arrLocalStorage.push(InputDOM.value)
        localStorage.setItem(JSON.stringify(arrLocalStorage[arrLocalStorage.length - 1]))
        arrLocalStorage = JSON.parse(localStorage.getItem("lists"))
    }console.log(arrLocalStorage)

}


function deleteListItem() {
    this.parentElement.remove()     // close butonu span içerisinde ve list item ın chil'ı oldugu icin list item onun child'ı diyebiliriz. İmlec ile tıkladığımız close butonunu parent ı "li"' yi kaldırdık.
}

let li = document.getElementsByTagName("li")
function checked() { // css dosyasına hali hazırda eklenmiş olan checked classını toggle olarak kullandık, this imlecin tıkladığı yer anlamına gelmektedir.
    this.classList.toggle("checked")
}
