const socials = [
  {
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbeQEaLYtW8864NUrNmf8OtltgNKJSvhx5xA&s",
    title: "Instagram",
    description: "Сүрөттөрдү жана видеолорду бөлүшүүчү социалдык тармак.",
    
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
    title: "Facebook",
    description: "Достор менен байланышып, постторду бөлүшүүгө мүмкүнчүлүк берүүчү сайт.",
   
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/X_%28formerly_Twitter%29_logo_late_2025.svg/250px-X_%28formerly_Twitter%29_logo_late_2025.svg.png",
    title: "Twitter",
    description: "Кыска билдирүүлөрдү жана жаңылыктарды бөлүшүүчү платформа.",
    
  },
  {
    icon: "https://store-images.s-microsoft.com/image/apps.8453.13655054093851568.4a371b72-2ce8-4bdb-9d83-be49894d3fa0.7f3687b9-847d-4f86-bb5c-c73259e2b38e",
    title: "WhatsApp",
    description: "Мобилдик мессенджер, текст, сүрөт жана видео жөнөтүү мүмкүнчүлүгү бар.",
    
  },
  {
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS45jF2oX5HYzhemcWzyNdDf9PuYxjj8cf6ww&s",
    title: "TikTok",
    description: "Кыска видеолорду жаратуу жана бөлүшүү платформасы.",
    
  }
];

let box = document.getElementById("box");

function giveMassiv() {
    let container = document.createElement("div");
    container.id = "container";

    socials.forEach(element => {
        container.innerHTML += `
        <div>
            <img src="${element.icon}"/>
            <p>${element.title}</p>
            <span>${element.description}</span>
        </div>`
    });
    box.append(container);
}

giveMassiv();