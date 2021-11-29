let root = document.querySelector("main");

got.houses.forEach((house) => {
  house.people.forEach((people) => {
    // console.log(people);

    let artical = document.createElement("artical");
    artical.classList.add("box");

    let div = document.createElement("div");
    div.classList.add("img-circle");

    let img = document.createElement("img");
    img.src = people.image;

    let h2 = document.createElement("h2");
    h2.innerText = people.name;
    div.append(img, h2);

    let p = document.createElement("p");
    p.innerText = people.description;

    let a = document.createElement("a");
    a.innerText = "Learn More!";
    a.href = people.wikiLink;

    artical.append(div, p, a);
    root.append(artical);
  });
});
