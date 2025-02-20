const navId = document.getElementById("nav_menu"),
ToggleBtnId = document.getElementById("toggle_btn"),
CloseBtnId = document.getElementById("close_btn");

// Show menu
ToggleBtnId.addEventListener("click" , () => {
    navId.classList.toggle("show");
});

// Hide menu
CloseBtnId.addEventListener("click" , () => {
    navId.classList.remove("show");
});

AOS.init();
gsap.registerPlugin(TextPlugin);

// Index page animation
gsap.from(".logo",{
    opacity: 0,
    duration: 1,
    delay: 0.6,
    y: -10
})

gsap.from(".nav_menu_list .nav_menu_item",{
    opacity: 0,
    duration: 0.5,
    delay: 1,
    y: -10,
    stagger:0.3,
})

gsap.from(".toggle_btn",{
    opacity: 0,
    duration: 0.5,
    delay: 1,
    y: -10
})

gsap.from(".main-heading",{
    opacity: 0,
    duration: 1.3,
    delay: 1,
    y: 20
})

gsap.from(".btn-wrapper",{
    opacity: 0,
    duration: 0.5,
    delay: 1.5,
    y: 20
})

gsap.from(".team_img_wrapper img",{
    opacity: 0,
    duration: 0.5,
    delay: 1.4,
    y: 20
})

gsap.from(".info-text",{
    opacity: 0,
    duration: 0.5,
    delay: 1.4,
    y: 20
})
// End Of Index page animation

// About page animation
gsap.from(".about",{
    opacity: 0,
    duration: 1.3,
    delay: 1,
    y: 20
})

//End of about page Animation

//kontak page Animation
gsap.from(".kontak",{
    opacity: 0,
    duration: 1.3,
    delay: 1,
    y: 20
})

//Tipe Rumah page Animation
gsap.from(".tipe_rumah",{
    opacity: 0,
    duration: 1.3,
    delay: 1,
    y: 20
})

gsap.from(".title_tipeRumah",{
    opacity: 0,
    duration: 1.3,
    delay: 1,
    y: 20
})

//Detail Rumah
gsap.from(".detail_tipe_rumah",{
    opacity: 0,
    duration: 1.3,
    delay: 1,
    y: 20
})

gsap.from(".title-nama-rumah",{
    opacity: 0,
    duration: 1.3,
    delay: 1,
    y: 20
})

gsap.from(".blog",{
    opacity: 0,
    duration: 1.3,
    delay: 1,
    y: 20
})

gsap.from(".detail_blog",{
    opacity: 0,
    duration: 1.3,
    delay: 1,
    y: 20
})
//End of kontak page Animation

window.addEventListener("scroll", (e)=>{
    const nav = document.querySelector("header");
    if(window.pageYOffset >=30 ){
        nav.classList.add("shadow-header")
    }else{
        nav.classList.remove("shadow-header")
    }
})

// LOAD ALL TYPE RUMAH
const jsonData = {
    "rumah": [{
        "tipe": "A",
        "gambar_rumah": "./img/Salinan house-1.png",
        "nama_rumah": "Kyonime",
        "luas_bangunan": "120",
        "luas_tanah": "200",
        "kamar_mandi": "2",
        "kamar_tidur": "3",
        "deskripsi": "Kyonime, rumah dengan 3 kamar tidur dan 2 kamar mandi. Luas bangunan 120m² dan tanah 200m², cocok untuk keluarga yang menginginkan kenyamanan dan ruang yang luas.",
        "harga" : "860Jt-an",
        "carport" : "1",
        "denah_rumah" :"./img/Salinan denah_rumah.jpg"

    },

    {
        "tipe": "B",
        "gambar_rumah": "./img/Salinan house-2.png",
        "nama_rumah": "MADHOUSE",
        "luas_bangunan": "200",
        "luas_tanah": "250",
        "kamar_mandi": "3",
        "kamar_tidur": "5",
        "deskripsi": "Madhouse, rumah dengan 5 kamar tidur dan 3 kamar mandi. Luas bangunan 200m² dan tanah 250m², ideal untuk keluarga besar yang menginginkan kenyamanan ekstra.", 
        "harga" : "900Jt-an",
        "carport" : "1",
        "denah_rumah" :"./img/Salinan denah_rumah.jpg"

    },

    {
        "tipe": "C",
        "gambar_rumah": "./img/Salinan house-3.png",
        "nama_rumah": "Ichi Picture",
        "luas_bangunan": "200",
        "luas_tanah": "250",
        "kamar_mandi": "2",
        "kamar_tidur": "4",
        "deskripsi": "Ichi Picture, dengan 4 kamar tidur dan 2 kamar mandi. Luas bangunan 200m² dan tanah 250m², sempurna untuk keluarga yang menginginkan ruang yang nyaman dan luas.",
        "harga" : "800Jt-an",
        "carport" : "1",
        "denah_rumah" :"./img/Salinan denah_rumah.jpg"

    }, 

    {
        "tipe": "D",
        "gambar_rumah": "./img/Salinan house-4.png",
        "nama_rumah": "DotesCure",
        "luas_bangunan": "150",
        "luas_tanah": "250",
        "kamar_mandi": "2",
        "kamar_tidur": "3",
        "deskripsi": "DotesCures, rumah dengan 4 kamar tidur dan 2 kamar mandi. Luas bangunan 200m² dan tanah 250m², sempurna untuk keluarga yang menginginkan ruang yang nyaman dan luas.",
        "harga" : "720Jt-an",
        "carport" : "1",
        "denah_rumah" :"./img/Salinan denah_rumah.jpg"

    }
]
}

// function dynamic create html foreach house
function createHouseCard(house, index, isMobileView){
    const isOdd = index % 2 === 1;
    const deskripsi =`<div class="col-md-6 mt-4 mb-4"> 
        <h2>${house.nama_rumah}</h2>
        <p>${house.deskripsi}</p>
        <div class="row">
            <div class="col-md-5 mb-3">
                <div class="card justify-content-center align-self-center align-item-center p-3 tipe_rumah_item">
                    <i class="fa-solid fa-briefcase"></i>
                    <h3>${house.luas_bangunan}</h3>
                    <p>Luas Bangunan</p>
                </div>
            </div>

            <div class="col-md-5 mb-3">
                <div class="card justify-content-center align-self-center align-item-center p-3 tipe_rumah_item">
                    <i class="fa-solid fa-briefcase"></i>
                    <h3>${house.luas_tanah}</h3>
                    <p>Luas Tanah</p>
                </div>
            </div>

            <div class="col-md-5 mb-3">
                <div class="card justify-content-center align-self-center align-item-center p-3 tipe_rumah_item">
                    <i class="fa-solid fa-shower"></i>
                    <h3>${house.kamar_mandi}</h3>
                    <p>Kamar Mandi</p>
                </div>
            </div>

            <div class="col-md-5 mb-3">
                <div class="card justify-content-center align-self-center align-item-center p-3 tipe_rumah_item">
                    <i class="fa-solid fa-bed"></i>
                    <h3>${house.kamar_tidur}</h3>
                    <p>Kamar Tidur</p>
                </div>
            </div>
        </div>

        <a href="./detail_rumah.html?tipe_rumah=${house.tipe}" class="btn_home view_more_btn mt-1" style="text-decoration: none;">Selengkapnya</a>
    </div>`;
    
    const gambar_rumah = `
    <div class="col-md-6 mt-4 mb-4">
        <img src="${house.gambar_rumah}" alt="${house.nama_rumah}" class="img-fluid-TR" />
    </div>
    `;

    var html =``
    if(isOdd){
        html = gambar_rumah + deskripsi;
    }else{
        html = deskripsi + gambar_rumah;
    }
    //html = deskripsi + gambar_rumah;

    //Mobile View
    if(isMobileView){
        html = gambar_rumah + deskripsi;
    }
    return html;
}

function createTipeLain(house){
    const item = `
    <div class="col-md-6 mt-4 mb-4">
        <img src="${house.gambar_rumah}" class="w-100" style="max-height:200px; object-fit:cover; object-position:bottom">
        <br><br>
        <a href="./detail_rumah.html?tipe_rumah=${house.tipe}">
            <h3 class="text-center">Rumah ${house.nama_rumah}</h3>
        </a>
    </div>
    `
    return item;
}

//load data into html
const rumahContainer = document.getElementById("rumahContainer");
if(rumahContainer != null){
    jsonData.rumah.forEach((house, index)  => {
        //TODO : mapping all view house
        const houseCard = createHouseCard(house, index. false);
        rumahContainer.innerHTML += houseCard;
    })
}


// Load data into mobile view
const rumahContainerMobile = document.getElementById("rumahContainerMobile");
if(rumahContainerMobile != null){
    jsonData.rumah.forEach((house, index)  => {
        //TODO : mapping all view house
        const houseCard = createTipeLain(house, index, true);
        rumahContainerMobile.innerHTML += houseCard;
    })
}


// load data tipe_lain
const lihatTipeLain = document.getElementById('lihatTipeLain')
if(lihatTipeLain != null){
    jsonData.rumah.forEach((house) => {
        const tipeCard =createTipeLain(house);
        lihatTipeLain.innerHTML += tipeCard;
    });
}

// load detail rumah
function filterRumahByTipe(tipe){
    const filteredRumah = jsonData.rumah.find(rumah => rumah.tipe == tipe);
    return filteredRumah || null;

}

var queryString = window.location.search;
var searchParams =new URLSearchParams(queryString);
var tipeRumahValue = searchParams.get('tipe_rumah');

// load data view html
if(tipeRumahValue != null && tipeRumahValue != ""){
    const filteredRumah = filterRumahByTipe(tipeRumahValue.toUpperCase())

    if(filteredRumah == null){
        console.log("rumah not found");
        
    }else{
        console.log(filteredRumah);
        document.getElementById("title-nama-rumah").innerText = 'Rumah ' + filteredRumah.nama_rumah;
        document.getElementById("gambar-rumah").src = filteredRumah.gambar_rumah;
        document.getElementById("nama-rumah").innerText = filteredRumah.nama_rumah;
        document.getElementById("deskripsi_rumah").innerText = filteredRumah.deskripsi;
        document.getElementById("harga_rumah").innerText = filteredRumah.harga;
        document.getElementById("luas_bangunan_rumah").innerText = filteredRumah.luas_bangunan + '㎡';
        document.getElementById("luas_tanah_rumah").innerText = filteredRumah.luas_tanah + '㎡';
        document.getElementById("kamar_mandi_rumah").innerText = filteredRumah.kamar_mandi;
        document.getElementById("kamar_tidur_rumah").innerText = filteredRumah.kamar_tidur;
        document.getElementById("carport").innerText = filteredRumah.carport;
        document.getElementById("denah_rumah").src = filteredRumah.denah_rumah; 
    }
}

// BLOG LOAD DATA
const blogData = [
    {
        id: 1,
        title: "Perumahan Nyaman Hanya di Kyonime",
        date: "28 Februari 2023, 9:00 AM",
        description: "Kyonime menawarkan perumahan ideal dengan lingkungan yang nyaman dan aman. Dilengkapi dengan fasilitas modern, akses mudah ke pusat kota, dan desain rumah yang elegan, Kyonime adalah pilihan tepat untuk keluarga yang menginginkan hunian berkualitas.",
        detail_blog: "./content/blog-1.html",
        image_blog : "./img/Salinan house-1.png",
    },
    {
        id: 2,
        title: "Perumahan Nyaman Hanya di Madhouse",
        date: "14 Maret 2023, 10:00 AM",
        description: "Madhouse menawarkan perumahan ideal dengan lingkungan yang nyaman dan aman. Dilengkapi dengan fasilitas modern, akses mudah ke pusat kota, dan desain rumah yang elegan, Kyonime adalah pilihan tepat untuk keluarga yang menginginkan hunian berkualitas.",
        detail_blog: "./content/blog-2.html",
        image_blog : "./img/Salinan house-2.png",
    },

]

function generateBlogHTML(blogPost){
    return `
                <div class="card mb-4">
            <div class="row">
                <div class="col-md-4">
                    <img src="${blogPost.image_blog}" width="100%" height="100%" />
                </div>
                <div class="col-md-8 p-4">
                    <div>
                        <h5>${blogPost.title}</h5>
                        <div class="blog-date d-flex mt-1">
                            <i class="fa fa-calendar me-2 mt-1"></i>
                            <p>${blogPost.date}</p>
                        </div>
                        <p class="description-blog mt-1">${blogPost.description}</p>
                        <a href="./detail_blog.html?id=${blogPost.id}" class="btn btn-sm btn-primary btn-readmore">
                           <i class="fa fa-book me-1"></i>
                           read more
                        </a
                    </div>
                </div>
            </div>
        </div>
    `;
}

function generateLatesetBlogHTML(blogPost){
    return `
        <a href="./detail_blog.html?id=${blogPost.id}" class="latest-blog-items">
            <p>${blogPost.title}</p>
            <div class="blog-date d-flex mt-1">
                <i class="fa fa-calender me-2 mt-1"></i>
                <p>${blogPost.date }</p>
            </div>
            <hr>
        </a>
    `;
}

function renderBlogPost(filteredBlogData, isFiltered){
    const blogContainer = document.getElementById(`blogContainer`);
    const latestBlogContent = document.getElementById(`latestBlogContent`);
    
    // render post terbaru
    if(latestBlogContent != null){
        //clear previous content
        latestBlogContent.innerHTML = ``;

        const lastTwoBlogPost = blogData.slice(-2);
        lastTwoBlogPost.forEach(blogPost => {
            latestBlogContent.innerHTML += generateLatesetBlogHTML(blogPost)
        });
    }

    if(blogContainer == null){
        return //Skip
    }

    // clear previous content
    blogContainer.innerHTML = '';
    //Check filter date
    if(isFiltered){
        if(filteredBlogData.length == 0){
            const emptyStateDiv = document.createElement('div');
            emptyStateDiv.textContent = "No Post Available";
            blogContainer.appendChild(emptyStateDiv);
        }
        filteredBlogData.forEach(blogPost => {
            blogContainer.innerHTML += generateBlogHTML(blogPost)
        });
    }else{
        blogData.forEach(blogPost => {
            blogContainer.innerHTML += generateBlogHTML(blogPost)
        });
    }
    
}

function searchBlog(input){
    const searchTerm = input.value.toLowerCase();
    const filteredBlogData = []
    blogData.forEach(blogPost => {
        if(blogPost.title.toLowerCase().includes(searchTerm)){
            filteredBlogData.push(blogPost);
        }
    })
    // console.log("searchTerm : ", searchTerm);
    console.log("filteredBlogData : ", filteredBlogData);

    if(searchTerm != null && searchTerm != ""){
        renderBlogPost(filteredBlogData, true)
    }else{
        renderBlogPost([], false)
    }
}

// Render when load
window.onload = renderBlogPost([],false)

//Get value params query id
var idBlogValue = searchParams.get('id');

if(idBlogValue != null && idBlogValue != ""){
    const filteredBlogData = getBlogById(parseInt(idBlogValue,10));
    if(filteredBlogData != null && filteredBlogData != undefined){
        document.getElementById("cardDetailImg").src =filteredBlogData.image_blog;
        document.getElementById("tgl-blog").innerText = filteredBlogData.date;
        document.getElementById("title-blog").innerText = filteredBlogData.title;
        loadDetailBlog(filteredBlogData.detail_blog)
    }else{
        console.log("Error On Data ID Parameter : " + idBlogValue)
    }
}

function getBlogById(blogId){
    return blogData.filter(blog => blog.id === blogId)[0]; //asume that id is unique
}

//Function for load detail blog
function loadDetailBlog(detailBlogURL){
    const cardDetailBlog = document.getElementById("cardDetailImg");
    if(cardDetailBlog == null || cardDetailBlog == undefined){
        console.log("no element has id cardBlogDetail");
        return
    }

    document.getElementById("cardDetailBlog").src = detailBlogURL;
}