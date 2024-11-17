let profile_pic = document.getElementById("profile-pic");
let input_file = document.getElementById("input-file");

input_file.onchange = function(){
	profile_pic.src = URL.createObjectURL(input_file.files[0]);
}