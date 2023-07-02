"use strict";
//charles Account information//
const navigate_before_button = document.querySelector(
  ".navigate_before_button"
);
const navigate_next_button = document.querySelector(".navigate_next_button");
let charles_Account_Pic = document.querySelector(".charles_Account_Pic");
///////////////////////////////////////////////
let charlesGallery = [
  "gallery2/charles1.jpeg",
  "gallery2/charles2.jpeg",
  "gallery2/charles3.jpeg",
  "gallery2/charles4.jpeg",
];
////////////////////////////////////////////////////////////////////
navigate_next_button.addEventListener("click", () => {
  next();
});
///////////////////////////////////////////////////////////////////////////////
let num = 0;
function next() {
  if (num >= charlesGallery.length - 1) {
    return false;
  }
  num++;
  charles_Account_Pic.setAttribute("src", charlesGallery[num]);
  charles_Account_Pic.style.width = "85%";
  charles_Account_Pic.style.height = "79vh";
}
///////////////////////////////////////////////////////////////////////
navigate_before_button.addEventListener("click", () => {
  back();
});
///////////////////////////////////////////////////////////////////////////////////
function back() {
  if (num <= 0) {
    return false;
  }
  num--;
  charles_Account_Pic.setAttribute("src", charlesGallery[num]);
  charles_Account_Pic.style.width = "85%";
  charles_Account_Pic.style.height = "79vh";
}
/////////////////////////////////////////////////////////////////////////////////////////////
const charles_Comment_Input = document.querySelector(".charles_Comment_Input");
const comment_Container = document.querySelector("#comment_container");
const charles_Post_Button = document.querySelector("#charles_Post_Button");
///////////////////////////////////////////////////////////////////////////////////////////
charles_Post_Button.addEventListener("click", () => {
  if (charles_Comment_Input.value === "") {
    comment_Container.removeChild(createElements);
  }
  let createElements = document.createElement("p");
  let createText = document.createTextNode(charles_Comment_Input.value);
  createElements.appendChild(createText);
  comment_Container.appendChild(createElements);
  charles_Post_Button.style.display = "none";
  charles_Comment_Input.value = "";
});
///////////////////////////////////////////////////////////////////////////////////////////

charles_Comment_Input.addEventListener("keypress", (e) => {
  if (e.key) {
    charles_Post_Button.style.display = "inline";
  }
  charles_Comment_Input.addEventListener("keydown", (e) => {
    if (
      e.key === "Delete" ||
      (e.key === "Backspace" && charles_Comment_Input.value.length === 1)
    ) {
    }
  });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let like_number = document.querySelector("#i");
const charles_like_button = document.querySelector("#charles_like_button");

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let c = 0;
function numberOfCount() {
  c = c + 1;
}
charles_like_button.addEventListener("click", () => {
  numberOfCount();
  if (c === 1) {
    like_number.innerText = c + " likes";
  }

  charles_like_button.style.color = "red";
});
/////// Charles Account Information end///////////

function returns(p) {
  return (parseInt(p, 16) % 60) + 1;
}
console.log(returns(""));
//
const likeButton = document.querySelector("#like1");

/////////////////////////////////////////////////////////////////////
document.querySelector("#list").addEventListener("click", () => {
  document.querySelector(".listMenu").style.display = "flex";
  document.querySelector(".header").style.filter = "blur(2px)";
  document.querySelector(".footer").style.filter = "blur(2px)";
  document.querySelector("#a").style.filter = "blur(2px)";
  document.querySelector("#b").style.filter = "blur(2px)";
  document.querySelector("#c").style.filter = "blur(2px)";
});
/*
let commentSection2 = document.querySelector(".g2");

commentSection2.addEventListener("keypress", (e) => {
  if (e.key) {
    document.querySelector("#post2").style.display = "inline";
  }

  commentSection2.addEventListener("keydown", (e) => {
    if (
      e.key === "Delete" ||
      (e.key === "Backspace" && commentSection2.value.length === 1)
    ) {
      document.querySelector("#post2").style.display = "none";
    }
  });
});
//
let commentSection3 = document.querySelector(".g3");
commentSection3.addEventListener("keypress", (e) => {
  if (e.key) {
    document.querySelector("#post3").style.display = "inline";
  }

  commentSection3.addEventListener("keydown", (e) => {
    if (
      e.key === "Delete" ||
      (e.key === "Backspace" && commentSection3.value.length === 1)
    ) {
      document.querySelector("#post3").style.display = "none";
    }
  });
});*/

////////////////////////////////////////////////////////////////////////////////////
const randomName = document.querySelector("#random_Name"); /////////////////////////
const randomPhoto = document.querySelector("#random_Photo"); ////////////////////////
const suggestion_container = document.querySelector(".suggestion_container"); ///////
const photoShareByRandom = document.querySelector("#photoShareByRandom"); ///////////
const random_UserName = document.querySelector("#random_UserName"); //////////////////
const follow_button = document.querySelector(".follow_button"); //////////////////////
let inc = 0; ////////////////////////////////////////////////////////////////////////
const follower = document.querySelector(".follower"); ////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////
const ezekielDashboard = document.querySelector(".ezekielDashboard");
const ezekielRandom_Photo = document.querySelector("#ezekielRandom_Photo");
const ezekielRandom_Name = document.querySelector("#ezekielRandom_Name");
const ezekielRandom_UserName = document.querySelector(
  "#ezekielRandom_UserName"
);
const ezekielAdd_a_photo_icon = document.querySelector("#photoShareByRandom");
const ezekielFollowerNumber = document.querySelector(".ezekielFollowerNumber");
const ezekielFollow_button = document.querySelector(".ezekielFollow_button");
const kiely_Wrld_Profile_Container = document.querySelector(
  ".kiely_Wrld_Profile_Container"
);
let ezekielFollowButtonCount = 0;
const i = document.querySelector("#f");
/////////////////////////////////////////////////////////////////////////////////
class car {
  ezekiel() {
    ezekielDashboard.style.display = "inline";
    ezekielRandom_Photo.setAttribute("src", "image/photo.jpeg");
    ezekielRandom_Name.innerText = "Ezekiel Bassey";
    ezekielRandom_UserName.innerText = "Ezekiel Archibong";
    ezekielAdd_a_photo_icon.innerText = "Ezekiel Bassey";
    ezekielFollowerNumber.innerText = ezekielFollowButtonCount;
  }

  Precious() {
    suggestion_container.style.display = "inline";
    randomPhoto.setAttribute("src", "image/images (2).jpeg");
    randomName.innerText = "Precious Robson";
    random_UserName.innerText = "Precious Robson";
    photoShareByRandom.innerText = "Precious Robson";
  }
  Diana() {
    suggestion_container.style.display = "inline";
    randomPhoto.setAttribute("src", "image/images (3).jpeg");
    randomName.innerText = "Diana Bassey";
    random_UserName.innerText = "Diana Bassey";
    photoShareByRandom.innerText = "Diana Bassey";
  }
  Grace() {
    suggestion_container.style.display = "inline";
    randomPhoto.setAttribute("src", "image/images (5).jpeg");
    randomName.innerText = "Grace Archibong";
    random_UserName.innerText = "Grace Archibong";
    photoShareByRandom.innerText = "Grace Archibong";
  }
  ezekielFollow() {
    ezekielFollowButtonCount++;
    kiely_Wrld_Profile_Container.style.display = "none";
    ezekielDashboard.style.display = "none";
  }
}
////////////////////////////////////////////////////////////////////////
const ezekielHoverLink = document.querySelector(".ezekielHoverLink"); ///
let ezekiel = new car(); //////////////////////////////////////////////

ezekielHoverLink.addEventListener("mouseover", () => {
  ezekiel.ezekiel();
  ezekielHoverLink.addEventListener("mouseout", () => {});
});
let number = new car();
ezekielFollow_button.addEventListener("click", () => {
  number.ezekielFollow();
  if (ezekielFollowButtonCount === 1) {
    ezekielFollowerNumber.innerText = ezekielFollowButtonCount;
  }
});
///////////////////////////////////////////////////

i.addEventListener("click", () => {
  number.ezekielFollow();
  if (ezekielFollowButtonCount === 1) {
    ezekielFollowerNumber.innerText = ezekielFollowButtonCount;
  }
});
///////////////////////////////////////////////////////////////////////////
const preciousHoverLink = document.querySelector(".preciousHoverLink"); ///
let Precious = new car(); ///////////////////////////////////////////////////
preciousHoverLink.addEventListener("mouseover", () => {
  Precious.Precious();
  setTimeout(myGreeting, 8000);
  function myGreeting() {
    suggestion_container.style.display = "none";
  }
});
//////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
const dianaHoverLink = document.querySelector(".dianaHoverLink"); //////////////
let Diana = new car(); //////////////////////////////////////////////////////////
dianaHoverLink.addEventListener("mouseover", () => {
  Diana.Diana();
  setTimeout(myGreeting, 8000);
  function myGreeting() {
    suggestion_container.style.display = "none";
  }
});
////////////////////////////////////////////////////////////////////////////////
const graceHoverLink = document.querySelector(".graceHoverLink"); //////////////
let Grace = new car(); //////////////////////////////////////////////////////////
graceHoverLink.addEventListener("mouseover", () => {
  Grace.Grace();
  setTimeout(myGreeting, 8000);
  function myGreeting() {
    suggestion_container.style.display = "none";
  }
});

/*
myUserName.addEventListener("mouseover", () => {
  dashBoard.style.display = "inline";
  image2.setAttribute("src", "image/images (3).jpeg");
  nameOfUser.innerText = "KeKeflawa";
  nameOfUser2.innerText = "KeKe_flawa";

  myUserName.addEventListener("mouseout", () => {
    dashBoard.style.display = "none";
  });
});

//

ru_ingwe.addEventListener("mouseover", () => {
  dashBoard.style.display = "inline";
  image2.setAttribute("src", "image/images (4).jpeg");
  nameOfUser.innerText = "ru_ingwe";
  nameOfUser2.innerText = "ru_ingwe";
  ru_ingwe.addEventListener("mouseout", () => {
    dashBoard.style.display = "none";
  });
});

//
odiokinneh.addEventListener("mouseover", () => {
  dashBoard.style.display = "inline";
  image2.setAttribute("src", "image/images (5).jpeg");
  nameOfUser.innerText = " odiokinneh";
  nameOfUser2.innerText = " odiokinneh";
  odiokinneh.addEventListener("mouseout", () => {
    dashBoard.style.display = "none";
  });
});
//
_godswillokon.addEventListener("mouseover", () => {
  dashBoard.style.display = "inline";
  image2.setAttribute("src", "image/images.jpeg");
  nameOfUser.innerText = "_godswillokon";
  nameOfUser2.innerText = "_godswillokon";
  _godswillokon.addEventListener("mouseout", () => {
    dashBoard.style.display = "none";
  });
});
//
//

/*
<div id="friends_suggestion_container">
<!--suggestion dashboard-->
<div id="Suggestion_dashbaord">
  <!--dashboard-->
  <div class="dashboard">
    <div id="title_name_img">
      <img src="" alt="" id="image2" />
      <div id="title_name">
        <span id="nameOfUser"></span>
        <!-- <span id="userName">irene</span>-->
      </div>
    </div>
    <div id="follower_post_following">
     
      </div>
    </div>
  </div>
  <!--dashboard-->
  <div id="post_center">
    <div id="add_post">
      <span class="material-symbols-outlined" id="add_a_photo_icon">
        add_a_photo
      </span>
      <h1 id="h1">No post yet</h1>
    </div>
    <div>
      <p id="p">
        When <b id="nameOfUser2"></b> share a photos and reels you'll
        see them here.
      </p>
    </div>
  </div>
  <div class="follow_button_contaner">
    <button type="submit" class="follow_button">
      <span class="material-symbols-outlined" id="icon">
        person_add
      </span>
      Follow
    </button>
  </div>

  <!--suggestion dashboard  -->
</div>
<!--suggestion dashboard  -->

<div class="user-info-1">
  <div class="user-info">
    <img src="image/myIcon.jpeg" alt="" id="image" />
    <div class="user_Names">
      <a href="archibongezekie.html"
        ><span id="myusername">archibongezekie</span></a
      >
      <span id="ussername">Ezekiel Archibong</span>
    </div>
  </div>
  <div class="gap"><a href="">Switch</a></div>
</div>
<div class="user_friends_suggestion">
  <span class="for_you">Suggestion for you</span>
  <a href="" id="all" class="gap">See All</a>
</div>

<div class="user-info-1">
  <div class="user-info">
    <img src="image/images (2).jpeg" alt="" id="image1" />
    <div class="user_Names">
      <span id="myusername" class="n">i.r.i.s_9</span>
      <span id="ussername">Follow by richard_ingwe</span>
    </div>
  </div>
  <div class="gap"><a href="" id="link">Follow</a></div>
</div>

<div class="user-info-1">
  <div class="user-info">
    <img src="image/images (3).jpeg" alt="" id="image1" />
    <div class="user_Names">
      <span id="myusername" class="name1">KeKe_flawa</span>
      <span id="ussername">Follow by richard_ingwe + 1 more</span>
    </div>
  </div>
  <div class="gap">
    <a href="" id="link">Follow</a>
  </div>
</div>

<div class="user-info-1">
  <div class="user-info">
    <img src="image/images (4).jpeg" alt="" id="image1" />
    <div class="user_Names">
      <span id="myusername" class="ru_ingwe">ru_ingwe</span>
      <span id="ussername">Follow by richard_ingwe + 1 more</span>
    </div>
  </div>
  <div class="gap"><a href="" id="link">Follow</a></div>
</div>

<div class="user-info-1">
  <div class="user-info">
    <img src="image/images (5).jpeg" alt="" id="image1" />
    <div class="user_Names">
      <span id="myusername" class="odiokinneh">odiokinneh</span>
      <span id="ussername">Follow by richard_ingwe</span>
    </div>
  </div>
  <div class="gap"><a href="" id="link">Follow</a></div>
</div>

<div class="user-info-1">
  <div class="user-info">
    <img src="image/images.jpeg" alt="" id="image1" />
    <div class="user_Names">
      <span id="myusername" class="_godswillokon">_godswillokon</span>
      <span id="ussername">Follow by walter_gadget + 2 more</span>
    </div>
  </div>
  <div class="gap"><a href="" id="link">Follow</a></div>
</div>

<div id="about_page">
  <p id="about">About</p>
  <span>•</span>
  <p id="help">Help</p>
  <span>•</span>
  <p id="press">Press</p>
  <span>•</span>
  <p id="api">API</p>
  <span>•</span>
  <p id="job">Jobs</p>
  <span>•</span>
  <p id="privacy">Privacy</p>
  <span>•</span>
  <p id="terms">Terms</p>
  <span>•</span>
</div>
<div class="about_page">
  <p id="locate">Locations</p>
  <span>•</span>
  <p id="lang">Language</p>
  <span>•</span>
  <p id="meta">Meta verified</p>
</div>
<div id="copy_right">
  <p><span>©</span> 2023 INSTAGRAM FROM META</p>
</div>
</div>*/
////////////////////////////////////
/*<div class="c">
          <div id="up_profile">
            <div id="line">
              <span id="next-back">
                <img src="gallery2/charlesIG.jpg" id="user_pic" />
              </span>
              <span class="my">Zealcodes</span>
              <span class="material-symbols-outlined" id="verified">
                verified
              </span>
              <span id="preiod"></span>
              <span></span>
            </div>
            <span id="list_Menu">• • •</span>
            <!-- end-->
          </div>
           <!-- end-->
          <div id="image_container">
            <button class="navigate_before_button">
              <span class="material-symbols-outlined" id="navigate_before">
                navigate_before
              </span>
            </button>
            <img
              src="gallery2/charles1.jpeg"
              id="posted"
              alt=""
              class="charles_Account_Pic"
            />
            <button class="navigate_next_button">
              <span class="material-symbols-outlined" id="navigate_next">
                navigate_next
              </span>
            </button>
          </div>
 
 
/////////////////////////////////////////
/////////////////////
/*div class="head">
        <div id="main_heading">
          <div id="pageName_container">
            <h2 title="Instagram" id="page_Name">instagram</h2>
          </div>
          <!--Home icon-->
          <div id="home">
            <button id="button" type="button" title="Home">
              <span class="material-symbols-outlined"> home </span>
              <p>Home</p>
            </button>
          </div>
          <!--Search icon-->
          <div id="search">
            <button id="button" type="button" title="Search">
              <span class="material-symbols-outlined"> search </span>
              <p>Search</p>
            </button>
          </div>
          <!--Explore-->
          <div id="explore">
            <button id="button" type="button" title="Explore">
              <span class="material-symbols-outlined"> explore </span>
              <p>Explore</p>
            </button>
          </div>
          <!--Reels-->
          <div id="reel">
            <button id="button" type=" button" title="Reels">
              <svg height="24" width="24" id="w">
                <line
                  fill="none"
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="2"
                  x1="2.049"
                  x2="21.95"
                  y1="7.002"
                  y2="7.002"
                ></line>
                <line
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  x1="13.504"
                  x2="16.362"
                  y1="2.001"
                  y2="7.002"
                ></line>
                <line
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  x1="7.207"
                  x2="10.002"
                  y1="2.11"
                  y2="7.002"
                ></line>
                <path
                  id="w"
                  d="M2 12.001v3.449c0 2.849.698 4.006 1.606 4.945.94.908 2.098 1.607 4.946 1.607h6.896c2.848 0 4.006-.699 4.946-1.607.908-.939 1.606-2.096 1.606-4.945V8.552c0-2.848-.698-4.006-1.606-4.945C19.454 2.699 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.546 2 5.704 2 8.552Z"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></path>
                <path
                  d="M9.763 17.664a.908.908 0 0 1-.454-.787V11.63a.909.909 0 0 1 1.364-.788l4.545 2.624a.909.909 0 0 1 0 1.575l-4.545 2.624a.91.91 0 0 1-.91 0Z"
                  fill-rule="evenodd"
                ></path>
              </svg>
              <p>Reels</p>
            </button>
          </div>
          <!--Message icon-->
          <div id="Messages">
            <button id="button" type=" button" title="Messager">
              <svg
                aria-label="Messenger"
                class="x1lliihq x1n2onr6"
                fill="rgb(245, 245, 245)"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <title>Messenger</title>
                <path
                  
      <!---end-->*/
