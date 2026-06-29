import {storage,db} from "./firebase.js";


import {
ref,
uploadBytes,
getDownloadURL
}

from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";


import {
collection,
addDoc,
getDocs
}

from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";





window.uploadVideo=function(){


let file=document.getElementById("videoFile").files[0];

let caption=document.getElementById("caption").value;


let videoRef=ref(storage,"videos/"+file.name);


uploadBytes(videoRef,file)

.then(()=>{


getDownloadURL(videoRef)

.then(url=>{


addDoc(collection(db,"videos"),{

video:url,

caption:caption

});


alert("Video Posted!");

loadVideos();


});


});


}




async function loadVideos(){


let feed=document.getElementById("feed");

feed.innerHTML="";


let videos=await getDocs(collection(db,"videos"));


videos.forEach(video=>{


let data=video.data();


feed.innerHTML += `

<div class="video-card">

<video 
src="${data.video}"
controls
autoplay
loop>
</video>


<div class="caption">

${data.caption}

</div>

</div>

`;

});


}


loadVideos();
