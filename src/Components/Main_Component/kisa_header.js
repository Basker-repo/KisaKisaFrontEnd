import React from 'react';
import './kisa_header.css';
import logo from '../../assets/kisaLogo.png';
import $ from 'jquery';
import jQuery from 'jquery'


  class Kisa_header extends React.Component {
  
    constructor(props) {
      super(props);
      this.state={

      }


    }

    Reset_YourPassowrd(){
      // const url = 'Kisa-kisa.com?Reset-Your-Password.';
      // window.open(url, <Contact/>);
  }



componentDidMount=()=>{

  $( document ).ready(function() {
  $('#basicModal').on('shown.bs.modal');
});

jQuery(document).ready(function($) {

  let  tab = $('.tabs h3 a');
 
     tab.on('click', function(event) {

         event.preventDefault();
         tab.removeClass('active');
         $(this).addClass('active');
 
       let  tabs_content = $(this).attr('href');
         $('div[id$="tab-content"]').removeClass('active');
         $(tabs_content).addClass('active');

     });
 });



}

    render(){

  return (<div>
     < div  className="row">
         <img src={logo} className="kisa-logo" alt="kisa-logo" />
    </ div> 
 
    <div className="modal fade" id="basicModal" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div className="modal-body">
      <div className="form-wrap">
          <div className="tabs">
            <h3 className="signup-tab"><a className="active" href="#signup-tab-content">Sign Up</a></h3>
             <h3 className="login-tab"><a href="#login-tab-content">Login</a></h3>
          </div>

      <div className="tabs-content">
         <div id="signup-tab-content" className="active">
           <form className="signup-form" action="" method="post">
           <input type="email" className="input" id="user_email" autocomplete="off" placeholder="Email"></input>
           <input type="text" className="input" id="user_name" autocomplete="off" placeholder="Username"></input>
           <input type="password" className="input" id="user_pass" autocomplete="off" placeholder="Password"></input>
           <input type="submit" className="button" value="Sign Up"></input>
          </form>
          <div class="social-login">
        <a href="#"><i class="fa fa-facebook fa-lg"></i> </a>    
        <a href="#"> <i class="fa fa-google-plus fa-lg"></i></a>
       </div>
         {/* <div class="help-text">
           <p>By signing up, you agree to our</p>
           <p><a href="#">Terms of service</a></p>
          </div> */}
      </div>

   <div id="login-tab-content">
       <form className="login-form" action="" method="post">
           <input type="text" className="input" id="user_login" autocomplete="off" placeholder="Email or Username"></input>
           <input type="password" className="input" id="user_pass" autocomplete="off" placeholder="Password"></input>
           <input type="checkbox" className="checkbox" id="remember_me"></input>
           <label for="remember_me">Remember me</label>
           <input type="submit" className="button" value="Login"></input>
       </form>
        <div class="help-text">
           <p><a onClick={this.Reset_YourPassowrd}>Forget your password?</a></p>
        </div>
   </div>
   
  </div>
 </div>      
</div>
    </div>
  </div>
</div>




   
  
  </div>
    
  );
}
  }

export default Kisa_header;
