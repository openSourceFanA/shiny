const items = [
    { label: "Image 2", type: "img", file: "media/img2.PNG" },
    { label: "Image 1", type: "img", file: "media/img1.PNG" },
    { label: "Video 1", type: "video", file: "media/vid1.mp4" },
   
  ];

  const grid = document.getElementById("grid");
  const viewer = document.getElementById("viewer");

  // create tiles
  items.forEach((item) => {
    const div = document.createElement("div");
    div.className = "tile";
    div.innerText = item.label;
    div.onclick = () => showMedia(item);
    grid.appendChild(div);
  });

  // show selected media
  function showMedia(item) {
    viewer.innerHTML = "";
    if (item.type === "img") {
      const img = document.createElement("img");
      img.src = item.file;
      viewer.appendChild(img);
    } else {
      const vid = document.createElement("video");
      vid.src = item.file;
      vid.controls = true;
      vid.autoplay = true;
      viewer.appendChild(vid);
    }
  }