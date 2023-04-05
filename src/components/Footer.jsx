import { Component } from "react";

class Footer extends Component{
    render(){
        return(
            <footer>
            <div className="socialIcons d-flex justify-content-between">
                <a href="https://www.facebook.com/netflixitalia/?locale=it_IT" rel="noreferrer" target="_blank"><i className="bi bi-facebook fs-5"></i></a>
                <a href="https://www.instagram.com/netflixit/"><i className="bi bi-instagram fs-5"></i></a>
                <a href="https://twitter.com/netflix"><i className="bi bi-twitter fs-5"></i></a>
                <a href="https://www.youtube.com/c/netflixitalia?app=desktop"><i className="bi bi-youtube fs-5"></i></a>
            </div>
            <div className="d-flex justify-content-start">
                <ul className="list-unstyled">
                <li>Audio and Subtitles</li>
                <li>Audio Description</li>
                <li>Helo Center</li>
                <li>Gift cards</li>
                <li>Media Center</li>
                <li>invector Relations</li>
                <li>Jobs</li>
                <li>Terms of Use</li>
                <li>Privacy</li>
                <li>Legal Notices</li>
                <li>Cookie Preferences</li>
                <li>Corporate information</li>
                <li>Contact Us</li>
                </ul>
            </div>
    
            <button><span></span>Service Code</button>
            <p>&#169; 1997-{(new Date().getFullYear())} Netflix, Inc.</p>
        </footer>
        )
    }
}

export default Footer