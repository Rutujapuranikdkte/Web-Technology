import { Component } from '@angular/core';

@Component({
selector:'app-student-profile',
standalone:true,
templateUrl:'./student-profile.html',
styleUrl:'./student-profile.css'
})

export class StudentProfileComponent{

studentName='Rutuja';

course='AIML';

profileImage=
'https://static.vecteezy.com/system/resources/thumbnails/032/176/191/small_2x/business-avatar-profile-black-icon-man-of-user-symbol-in-trendy-flat-style-isolated-on-male-profile-people-diverse-face-for-social-network-or-web-vector.jpg';

changeImage(){

this.profileImage=
'https://via.placeholder.com/200';

}

}
