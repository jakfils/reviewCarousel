const teamMembers = [
  {
    userId: 1,
    picUrl: "./img",
    name: "John Woo",
    position: "Web Developper",
    bio: "Aliquam sem et tortor consequat id porta nibh venenatis cras. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Sapien et ligula ullamcorper malesuada proin libero nunc consequat. Adipiscing commodo elit at imperdiet dui accumsan sit amet. Sed viverra tellus in hac habitasse platea.",
  },
  {
    userId: 2,
    picUrl: "./img",
    name: "Emilie Test",
    position: "UX Designer",
    bio: "At elementum eu facilisis sed odio morbi. Semper risus in hendrerit gravida rutrum quisque non tellus. Nec feium fusce id. Sit amet commodo nulla facilisi nullam a arcu. Scelerisque fermentum dui faucibus in. Mattis aliquam faucibus purus in massa tempor nec Vive rra nibh.",
  },
  {
    userId: 3,
    picUrl: "./img",
    name: "Fabien Dujour",
    position: "CEO",
    bio: "Tristique senectus et netus et. Ultricies tristique nulla aliquet enim tortor at auctor urna. Vel pharetra vel turpis nunc. Euismod in pellentesque massa placerat duis ultricies. Lorem donec massa sapien faucibus et. Feugiat scelerisque varius morbi enim. A lacus vestibulum sed arcu non odio euismod.",
  },
  {
    userId: 4,
    picUrl: "./img",
    name: "Amelie ASSOGBA",
    position: "Product Manager",
    bio: "Elit ut aliquam purus sit amet luctus venenatis lectus magna. Nec feugiat nisl pretium fusce id velit ut tortor pretium. A scelerisque purus semper eget duis at tellus. Est velit egestas dui id ornare arcu odio ut. Risus commodo viverra maecenas accumsan. Non curabitur gravida arcu ac totor.",
  },
  {
    userId: 5,
    picUrl: "./img",
    name: "Assiba DOSSOU",
    position: "HR Manager",
    bio: "Volutpat odio facilisis mauris sit. Fringilla phasellus faucibus scelerisque eleifend. Scelerisque viverra mauris in aliquam. Nisl vel pretium lectus quam id. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Vel facilisis volutpat est velit egestas dui id ornare arcu. Tellu.",
  },
  {
    userId: 6,
    picUrl: "./img",
    name: "Wu Chang",
    position: "Data Scientist",
    bio: "VPellentesque sit amet porttitor eget dolor morbi non arcu risus. Molestie a iaculis at erat pellentesque adipiscing. Nec ullamcorper sit amet risus. Dolor morbi non arcu risus quis varius quam quisque id. Bibendum enim facilisis gravida neque convallis. Est lorem ipsum dolor sit amet consectetu.",
  },
];

let id = 0;
const teamMemberPictureUrlElement = document.querySelector("img");
const teamMemberNameElement = document.getElementById("teamMemberName");
const teamMemberPositionElement = document.getElementById("teamMemberPosition");
const buttonLeft = document.getElementById("buttonLeft");
const buttonRight = document.getElementById("buttonRight");
const teamMemberBioElement = document.getElementById("teamMemberBio");
const buttonSurprise = document.querySelector("button");

function showMember(id) {
  teamMemberPictureUrlElement.setAttribute(
    "src",
    "./img/tmember" + id + ".jpg"
  );
  teamMemberNameElement.textContent = teamMembers[id].name;
  teamMemberPositionElement.textContent = teamMembers[id].position;
  teamMemberBioElement.textContent = teamMembers[id].bio;
}

function stateButton(buttonLeft, buttonRight) {
  if (id == 0) {
    buttonLeft.classList.add("deactive");
    buttonLeft.classList.remove("active");
    buttonRight.classList.remove("deactive");
    buttonRight.classList.add("active");
  } else if (id == 5) {
    buttonLeft.classList.add("active");
    buttonLeft.classList.remove("dactive");
    buttonRight.classList.remove("active");
    buttonRight.classList.add("deactive");
  } else {
    buttonLeft.classList.add("active");
    buttonLeft.classList.remove("deactive");
    buttonRight.classList.remove("deactive");
    buttonRight.classList.add("active");
  }
}

buttonRight.addEventListener("click", (e) => {
  if (id < 5) {
    id++;
    showMember(id);
  }
  stateButton(buttonLeft, buttonRight);
});

buttonLeft.addEventListener("click", (e) => {
  if (id > 0) {
    id = --id;
    showMember(id);
  }
  stateButton(buttonLeft, buttonRight);
});

buttonSurprise.addEventListener("click", (e) => {
  id = Math.floor(Math.random() * 6);
  showMember(id);
  stateButton(buttonLeft, buttonRight);
});
