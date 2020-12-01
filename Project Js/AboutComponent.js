import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import { render } from '@testing-library/react';


function About(props) {

    const partners = props.partners.map(partner => {
        return (
            <h5>{partner.name}</h5>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>About Us</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>About Us</h2>
                    <hr />
                </div>
            </div>
        
            <div className="row row-content">
                <div className="col-sm-6">
                <h1>Secret's</h1>
                    <h2>Helping Hands & Paws.</h2>
                    <h3> Secret's Path</h3>
                    <p> Here at Secret's Helping Hands & Paws it is our goal to make sure no one has to choose between family and pets or food and medications. Everyone has hard times,
                     everyone falls from time to time and here we believe its not getting back up but those next steps that makes all the biggest impact on your families future.
                    We are here to give you access to that help. We ask that you never request money from any of our helping hands and paws. This is a free site and we want to protect everyone on every end.
                Never give out your personal data. As much as we try to keep our friends safe scammers can try to trick you. We are in no way a religious group. We will never judge you for your walk in life.
            Like our wonderful families and pets we welcome you with open minds and arms.</p>
            <h1>Secret Agent Kitty:</h1>
                <p class="d-none d-sm-block">
                 Our Angel Over The Rainbow Bridge. 
               </p>
            <h3>Who Is Secret?</h3>
                    <p class="d-none d-sm-block">
                        Secret was our 16 year old, tuxedo clad, manx cat who passed over the rainbow bridge in september of 2020.
                        He met his best-buddy in October of 2004. I met him in 2012 when I met and fell in love with his best-buddy.
                        Secret was unlike any other cat I've ever known. As I sat there crying wanting to give up on life he would lay on my stomach and pur.
                        He saw me as important when I felt like life wasn't worth it. That's why this site was made. We all fall on hard times and having to give up on the 
                        important parts of our lives such as our homes, family, pets and even our own health Should not be an option. 
                        <h1> -Heather E. Beck: Founder</h1>
        </p>
                </div>
                
                <div className="col-sm-6">
                    <Card>
                        <CardHeader className="bg-primary text-white"><h3>Facts At a Glance</h3></CardHeader>
                        <CardBody>
                            <dl className="row">
                                <dt className="col-6">Founded</dt>
                                <dd className="col-6">August 2020 In the midst of Covid-19 </dd>
                             
                            
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                </div>
            
    <script src="node_modules/jquery/dist/jquery.slim.min.js"></script>
    <script src="node_modules/popper.js/dist/umd/popper.min.js"></script>
    <script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
    
<script src="/__/firebase/7.23.0/firebase-app.js"></script>


<script src="/__/firebase/7.23.0/firebase-analytics.js"></script>
                <script src="/__/firebase/init.js"></script>

<script>
    $(function() {
        $(".carousel").carousel( { interval: 2000 } ,
        $("#carouselButton").click(function(){
            if ($("#carouselButton").children("i").hasClass("fa-pause")) {
                $(".carousel").carousel("pause");
                $("#carouselButton").children("i").removeClass("fa-pause");
                $("#carouselButton").children("i").addClass("fa-play");
            } else {
                $(".carousel").carousel("cycle");
                $("#carouselButton").children("i").removeClass("fa-play");
                $("#carouselButton").children("i").addClass("fa-pause"); 
            }
        }),
    
</script>
       
            <div className="row row-content">
                <div className="col-12">
                    <h3>Community Partners</h3>
                </div>
                <div className="col mt-4">
                    <Media list>
                        {partners}
                    </Media>
                </div>
            </div>
        </div>
    )
    ;

    }
 export default About;