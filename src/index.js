import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });


// Kodlar buraya gelecek!

//Create Input
{
    const input = document.createElement("input");
    input.placeholder = "İşlemi giriniz:";
    document.querySelector("section.content-section>div").append(input);
}

//Image Scale
{
    document.querySelector("body").addEventListener("keydown", (event) => {
        document.querySelectorAll("img").forEach((element) => {
            if (event.key == "-")
                element.style.transform = "scale(0.5)";
            if (event.key == "d")
                element.style.transform = null;
            if (event.key == "+")
                element.style.transform = "scale(1.5)";
        });
    });
}

//Header-Nav
{
    const headerNavA = document.querySelectorAll("header>div>nav>a");
    headerNavA.forEach((element) => {
        element.style = "color:white; padding:0.5rem; border-radius:0.5rem; background-color: #17A2B8"
        element.addEventListener("mouseover", (event) => {
            event.target.style.color = "white";
            event.target.style.backgroundColor = "black";
        });
        element.addEventListener("mouseout", (event) => {
            event.target.style.color = "white";
            event.target.style.backgroundColor = "#17A2B8";
        });
    });
}

//Content Pick
{
    const btn = document.querySelectorAll("section.content-pick>.destination>.btn");
    let myInterval;
    btn.forEach((element) => {
        element.addEventListener("mouseover", (event) => {
            event.target.style.color = "black";
            myInterval = setInterval(() => {
                event.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)},
                                                          ${Math.floor(Math.random() * 256)},
                                                          ${Math.floor(Math.random() * 256)})`
            }, 500);
        });

        element.addEventListener("mouseout", (event) => {
            clearInterval(myInterval);
            event.target.style.backgroundColor = "#17A2B8";
            event.target.style.color = "white";
        });
        element.style.transition = "0.5s"
    });
}

//Input Focus Blur
{
    const input = document.querySelector("input");
    input.addEventListener("focus", (event) => {
        event.target.style.border = "3px dashed red";
    });
    input.addEventListener("blur", (event) => {
        event.target.style.border = null;
    });
}

{
    document.querySelectorAll("img").forEach((element) => {
        element.addEventListener("click", (event) => {
            event.target.style.filter = "hue-rotate(180deg)";
        });
        element.addEventListener("dblclick", (event) => {
            event.target.style.filter = "hue-rotate(0)";
        });
    });

}

