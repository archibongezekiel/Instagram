"use strict";
//charles Account information//
const charles_Account_Pic = document.querySelector(".charles_Account_Pic");
const navigate_next_button = document.querySelector(".navigate_next_button");
const navigate_before_button = document.querySelector(
  ".navigate_before_button"
);
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
let i = 0;
function next() {
  if (i >= charlesGallery.length - 1) {
    return false;
  }
  i++;
  charles_Account_Pic.setAttribute("src", charlesGallery[i]);
}
///////////////////////////////////////////////////////////////////////
navigate_before_button.addEventListener("click", () => {
  back();
});
///////////////////////////////////////////////////////////////////////////////////
function back() {
  if (i <= 0) {
    return false;
  }
  i--;
  charles_Account_Pic.setAttribute("src", charlesGallery[i]);
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

//
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
const nameOfUser = document.querySelector("#nameOfUser");
//
//const userName = document.querySelector("#userName");
//
const image2 = document.querySelector("#image2");
//
const follower = document.querySelector(".follower");
//
const nameOfUser2 = document.querySelector("#nameOfUser2");
//
const dashBoard = document.querySelector("#Suggestion_dashbaord");
//
const myUserName = document.querySelector(".name1");
//
const ru_ingwe = document.querySelector(".ru_ingwe");
//
const odiokinneh = document.querySelector(".odiokinneh");
//
//
const _godswillokon = document.querySelector("._godswillokon");
//
//
const n = document.querySelector(".n");
//
//
n.addEventListener("mouseover", () => {
  dashBoard.style.display = "inline";
  image2.setAttribute("src", "image/images (2).jpeg");
  nameOfUser.innerText = "i.r.i.s_9";
  nameOfUser2.innerText = "i.r.i.s_9";
  n.addEventListener("mouseout", () => {
    dashBoard.style.display = "none";
  });
});
//
myUserName.addEventListener("mouseover", () => {
  dashBoard.style.display = "inline";
  image2.setAttribute("src", "image/images (3).jpeg");
  nameOfUser.innerText = "KeKe_flawa";
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
      <div id="posts">
        <div>0</div>
        <div>posts</div>
      </div>
      <div id="follower">
        <div class="follower">0</div>
        <div>followers</div>
      </div>
      <div id="following">
        <div>0</div>
        <div>followings</div>
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
          <!--comment like share icon -->
          <div id="like_comment_share_save">
            <div class="f_c_s_s">
              <span
                class="material-symbols-outlined"
                id="charles_like_button"
                title="Like"
              >
                favorite
              </span>
              <svg
                aria-label="Comment"
                class="x1lliihq x1n2onr6"
                color="rgb(245, 245, 245)"
                fill="rgb(245, 245, 245)"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="25"
                id="comment"
              >
                <title>Comment</title>
                <path
                  d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
                  fill="none"
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></path>
              </svg>
              <svg
                aria-label="Share Post"
                class="x1lliihq x1n2onr6"
                color="rgb(245, 245, 245)"
                fill="rgb(245, 245, 245)"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
                id="share"
              >
                <title>Share Post</title>
                <line
                  fill="none"
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="2"
                  x1="22"
                  x2="9.218"
                  y1="3"
                  y2="10.083"
                ></line>
                <polygon
                  fill="none"
                  points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></polygon>
              </svg>
            </div>
            <span class="material-symbols-outlined" id="book" title="save">
              bookmark
            </span>
           
            <!-- end comment like share icon -->
          </div>

          <div id="font">
            <div class="like_number" id="i"></div>
            <div id="caption_container">
              <b id="caption_Name">Zealcodes</b>
              <span class="caption"
                >this new week, we think smarter and work smarter.
                <p>happy new week, guys</p></span
              > <div class="View_comment" id="comment_container"></div>
            </div>
            
            <div id="caption_container">
              <div id="input_comment">
                <input
                  type="text"
                  name="Add a comment... "
                  id="comment_section"
                  placeholder="Add a comment..."
                  class="charles_Comment_Input"
                />
                <button id="charles_Post_Button"><b>Post</b></button>
                <svg
                  aria-label="Emoji"
                  class="x1lliihq x1n2onr6"
                  color="rgb(115, 115, 115)"
                  fill="rgb(115, 115, 115)"
                  height="13"
                  role="img"
                  viewBox="0 0 24 24"
                  width="13"
                >
                  <title>Emoji</title>
                  <path
                    d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <!--end div  c -->
        </div>*/
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
                  d="M12.003 2.001a9.705 9.705 0 1 1 0 19.4 10.876 10.876 0 0 1-2.895-.384.798.798 0 0 0-.533.04l-1.984.876a.801.801 0 0 1-1.123-.708l-.054-1.78a.806.806 0 0 0-.27-.569 9.49 9.49 0 0 1-3.14-7.175 9.65 9.65 0 0 1 10-9.7Z"
                  fill="none"
                  stroke="currentColor"
                  stroke-miterlimit="10"
                  stroke-width="1.739"
                ></path>
                <path
                  d="M17.79 10.132a.659.659 0 0 0-.962-.873l-2.556 2.05a.63.63 0 0 1-.758.002L11.06 9.47a1.576 1.576 0 0 0-2.277.42l-2.567 3.98a.659.659 0 0 0 .961.875l2.556-2.049a.63.63 0 0 1 .759-.002l2.452 1.84a1.576 1.576 0 0 0 2.278-.42Z"
                  fill-rule="evenodd"
                ></path>
              </svg>
              <p>Messages</p>
            </button>
          </div>
          <!--Notifications-->
          <div id="notifications">
            <button type="button " title="Notifications" id="button">
              <span class="material-symbols-outlined"> favorite </span>
              <p>Notifications</p>
            </button>
          </div>
          <!--create-->
          <div id="create">
            <button type="button" id="button" title="Create">
              <span class="material-symbols-outlined"> add_box </span>
              <p>Create</p>
          </div>
          <!--profile-->
          <a href="archibongezekie.html">
            <div class="image_container" id="profile">
              <img src="image/myIcon.jpeg" alt="profile image" id="img" />
              <p>Profile</p>
            </div></a
          >
          <!--more icon-->
          <div id="more_container">
          <button type=" button " id="button" title="Menu">
            <span class="material-symbols-outlined"> menu </span>
            <p>More</p>
          </button>
        </div>
      </div>
      <!---end-->*/
