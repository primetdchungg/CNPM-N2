document.body.style.overflow = "auto";
window.addEventListener("scroll", function(){

    var header = document.querySelector(".navbar-duoi");

    var bigMenu = document.getElementById("bigMenu");



    if (window.scrollY > 80) {

        header.classList.add("sticky");

        bigMenu.style.zIndex = "30"; // Đảm bảo big-menu luôn trên overlay

    } else {

        header.classList.remove("sticky");

        bigMenu.style.zIndex = "10"; // Đặt lại nếu không sticky

    }

});



document.getElementById("burgerIcon").addEventListener("click", function() {

    console.log("OK")

    // document.getElementById("overlay").classList.toggle("hidden-overlay")

    document.getElementById("bigMenu").classList.toggle("hidden-overlay")

    document.querySelectorAll(".sub-menu").forEach(el => {

        el.classList.toggle("hidden-overlay");

    });

})



// function updateOverlayPosition() {

//     let navbarTren = document.querySelector(".navbar-tren");

//     let navbarDuoi = document.querySelector(".navbar-duoi");

//     let overlay = document.getElementById("overlay");



//     let navbarTrenHeight = navbarTren.offsetHeight;

//     let navbarDuoiHeight = navbarDuoi.offsetHeight;



//     // Kiểm tra nếu navbar-duoi đang sticky (tức là navbar-tren đã bị ẩn)

//     if (navbarDuoi.classList.contains("sticky")) {

//         overlay.style.top = navbarDuoiHeight + "px"; // Overlay bắt đầu ngay dưới navbar-duoi

//         overlay.style.height = `calc(100vh - ${navbarDuoiHeight}px)`; // Chiều cao còn lại

//     } else {

//         let totalNavbarHeight = navbarTrenHeight + navbarDuoiHeight;

//         overlay.style.top = totalNavbarHeight + "px";

//         overlay.style.height = `calc(100vh - ${totalNavbarHeight}px)`;

//     }

// }



// // Gọi hàm ngay khi trang load

// window.addEventListener("load", updateOverlayPosition);



// // Gọi hàm mỗi khi cuộn trang để cập nhật nếu header thay đổi kích thước

// window.addEventListener("scroll", updateOverlayPosition);





const toggleScrollButton = document.getElementById('burgerIcon');



let isScrollDisabled = false;



function CongDangnhap(){

    alert("Đăng nhập")

    let cdn = document.getElementById("CongDangnhap")

    cdn.classList.add("mo")

}

function DongDangnhap(){

    let cdn = document.getElementById("CongDangnhap")

    cdn.classList.remove("mo")

}



function switchToSignup() {

    // Ẩn form đăng nhập

    document.getElementById('Dangnhap').classList.remove('active');

    document.getElementById('txt_dn').classList.add('ut');

    // Hiển thị form đăng ký

    document.getElementById('Dangky').classList.add('active');

    document.getElementById('txt_dk').classList.add('rt');

}



function switchToLogin() {

    // Ẩn form đăng ký

    document.getElementById('Dangky').classList.remove('active');

    document.getElementById('txt_dn').classList.remove('ut');

    // Hiển thị form đăng nhập

    document.getElementById('Dangnhap').classList.add('active');

    document.getElementById('txt_dk').classList.remove('rt');

}

var email = "admin@gmail.com"

var password = "123"

var account_email = [email];

var account_pass = [password];

let drt = document.getElementById("User");

function TaiKhoan(user_name,nrd_name){

    nrd_name.style.marginLeft = "30px";  

    nrd_name.style.marginTop = "20px";   

    nrd_name.style.fontSize = "18px";

    nrd_name.addEventListener("click", function(){

        let ul = nrd_name.querySelector("ul");

    

        if (ul) {

            // Nếu ul đã có, xóa nó đi (tắt)

            nrd_name.removeChild(ul);

        } else {

            // Nếu chưa có, tạo ul và li mới (hiện)

            let li = document.createElement("li");

            li.innerHTML = "Thoát";

            



            ul = document.createElement("ul");

            ul.appendChild(li);

            ul.style.listStyle = "none";

            ul.style.position = "absolute";

            ul.style.zIndex = 55;

            ul.style.width = "128px"

            ul.style.textAlign = "right"

            ul.style.height = "25px"

            ul.style.backgroundColor = "white"

            ul.style.boxShadow = "2px 2px 1px black";

            li.addEventListener("click", function() {

                user_name.removeChild(nrd_name);

                user_name.appendChild(drt);



                document?.getElementById("Quantri").classList.add("dong");



           });



            nrd_name.appendChild(ul);

        }

    })

    user_name.appendChild(nrd_name);

}

function Login(){

    var login = false;

    for(var i=0;i<account_email.length;i++){

        if(account_email[i] === document.getElementById("email1").value && account_pass[i] === document.getElementById("password1").value){

            if(i==0){

                document.getElementById("Quantri").classList.remove("dong");

            }

            DongDangnhap();



            let user_name = document.getElementById("User_name");

            user_name.removeChild(drt);

            let nrd_name = document.createElement("div");

            nrd_name.textContent += account_email[i];



            TaiKhoan(user_name,nrd_name);

            login = true;

            break;

        }

    }

    if(!login) failLogin();

}

function failLogin(){

    var error = document.createElement("div")

    error.textContent = 'Incorrect email or password. Please try again.'

    error.style.color = "red"

    error.style.display = "block";

    error.style.backgroundColor = "black"

    error.style.zIndex = 999;

    error.style.position = "absolute";

    error.style.width = "500px";

    error.style.height = "100px"

    error.style.lineHeight = "95px";

    error.style.marginLeft = "33%"

    error.style.marginTop = "-420px"

    error.style.textAlign = "center"

    document.getElementById("CongDangnhap").appendChild(error);

    setTimeout(() => {

        document.getElementById("CongDangnhap").removeChild(error);

    },2000)

}

function CreateLogin(){

    var email = document.getElementById("email2").value;

    var passwork = document.getElementById("password2").value;



    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(email === "" || passwork === "" || !emailRegex.test(email)){

        console.log(email+" "+password)



        failLogin();

    }

    else{

        var check = confirm("Bạn có muốn vào đăng nhập")

        account_email.push(email);

        account_pass.push(password);

        console.log(email+" "+password)

        if(check){

            switchToLogin()

        }

        else{

            switchToSignup()

        }

    }

}

console.log("handle enter")
document.querySelector(".search-bar-input").addEventListener("keydown", function(event) {
    if (event.key === "Enter" && this.value.trim() !== "") {
        let query = document.getElementsByClassName("search-bar-input")[0].value;
        window.localStorage.setItem("search-value", query);
        window.location.href = "../html/trangTimKiemBaiViet.html";
    }
});

document.querySelector(".search-bar-big-input-menu").addEventListener("keydown", function(event) {
    if (event.key === "Enter" && this.value.trim() !== "") {
        let query = document.getElementsByClassName("search-bar-big-input-menu")[0].value;
        window.localStorage.setItem("search-value", query);
        window.location.href = "../html/trangTimKiemBaiViet.html";
    }
})


       



