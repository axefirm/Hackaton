<template>
    <div class="footer">
        <div class="footer-content">
            <div class="footer-section about">
                <h1 class="logo-text"><span>Awa</span>Inspires</h1>
                <p>gfsdfjhsdfkghskdfgksg</p>
                <div class="contact">
                    <span><i class="fas fa-phone"></i>&nbsp; 123-1223-1324</span>
                    <span><i class="fas fa-envelope"></i>&nbsp; info@gmail.com</span>
                </div>
                <div class="socials">
                    <a href="#"><i class="fab fa-facebook"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-youtube"></i></a>
                </div>
            </div>


            <div class="footer-section links">
                <h2>Quick Links</h2>
                <br>
                <ul>
                    <a href="#">
                        <li>Events</li>
                    </a>
                    <a href="#">
                        <li>Team</li>
                    </a>
                    <a href="#">
                        <li>Mentores</li>
                    </a>
                    <a href="#">
                        <li>Gallery</li>
                    </a>
                    <a href="#">
                        <li>Terms and Conditions</li>
                    </a>
                </ul>
            </div>

            <div class="footer-section contact-form">
                <h2>Contact us</h2>
                <br>
                <form action="index.html" method="post">
                    <input type="email" name="email" class="text-input contact-input" placeholder="Your email address...">
                    <textarea name="message" class="text-input contact-input" placeholder="Your message..."></textarea>
                    <button type="submit" class="btn btn-big contact-btn">
                        <i class="fas fa-envolope"></i>
                        Send
                    </button>
                </form>
            </div>

        </div>
        <div class="footer-bottom">
            &copy; sdfasdf
        </div>
    </div>


</template>
<style scoped>
    h1, h2 {
        font-family: 'Candal', serif; 
        color: #5c5b5b; 
        margin: 5px; 
    }

    a {
        text-decoration: none; 
        color: inherit; 
    }

    .btn {
        padding: .5rem 1rem ;
        background: #bff1f3; 
        color: white;
        border: 1px solid transparent; 
        border-radius: .25rem; 
    }

    .btn-big {

        padding: .7rem 1.3rem; 
        line-height: 1.3rem; 
    }

    .btn:hover {
        color: white !important; 
        background: #005255; 
    }

    .text-input {
        padding: .7rem 1rem; 
        display: block; 
        width: 80%; 
        border-radius: 5px; 
        border: 1px solid #e0e0e0; 
        outline: none; 
        color:#444; 
        line-height: 1.5rem; 
        font-size: 1.2rem; 
    }

    .footer {
        background: #303036;
        color: #d3d3d3;
        height: 400px; 
        position: relative;
       width: 100% !important;

    }
    .footer .footer-content {
        height: 350px;
        display: flex; 
    }
    .footer .footer-content .footer-section {
        flex: 1; 
        padding: 25px; 
    }
    .footer .footer-content h1,
    .footer .footer-content h2{
        color: white;
    } 

    .footer .footer-content .about h1 span {
        color: #05f7ff;
    }

    .footer .footer-content .about .contact span {
        display: block;
        font-size: 1.1em;
        margin-bottom: 8px; 
    }

    .footer .footer-content .about .socials a {
        border: 1px solid gray; 
        width: 45px;
        height: 41px; 
        padding-top: 5px; 
        margin-right: 5px; 
        text-align: center; 
        display: inline-block;
        font-size: 1.3em; 
        border-radius: 5px; 
        transition: all .3s; 
    }

    .footer .footer-content .about .socials a:hover {
        border: 1px solid white; 
        color: white; 
        transition: all .3s; 
    }

    .footer .footer-content .links ul a {
        display: block;
        margin-bottom: 10px; 
        font-size: 1.2em; 
        transition: all .3s;
    }

    .footer .footer-content .links ul a:hover {
        color: white; 
        margin-left: 15px; 
        transition: all .3s; 
    }

    .footer .footer-content .contact-form .contact-input {

        background: #272727;
        color: #beddbd; 
        margin-bottom: 10px; 
        line-height: 1.5 rem; 
        padding: .7rem 1.4rem; 
        border: none; 

    }

    .footer .footer-content .contact-form .contact-input:focus {
        background: #1a1a1a; 
    }

    .footer .footer-content .contact-form .contact-btn {
        float: right; 
    }

    .footer .footer-bottom {
        background: #343a40;
        color: #686868;
        height: 50px; 
        width: 100%; 
        text-align: center;
        position: absolute;
        bottom: 0px; 
        left: 0px; 
        padding-top: 20px; 
    }
</style>
