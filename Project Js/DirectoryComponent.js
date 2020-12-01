import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

import { Link } from 'react-router-dom';

import Breadcrumb from 'reactstrap/lib/Breadcrumb';
import BreadcrumbItem from 'reactstrap/lib/BreadcrumbItem';

function RenderDirectoryItem({shhap}) {
    return (
        <Card>
            <Link to={`/directory/${shhap.id}`}>
                <CardImg width="100%" src={shhap.image} alt={shhap.name} />
                <CardImgOverlay>
                    <CardTitle>{shhap.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>);
}


function Directory(props) {

    const directory = props.shhap.map(campsite => {
        return (
            <div key={shhap.id} className="col-md-5 m-1">
              
            </div>
        );
    });
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Directory</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Directory</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                {directory}
            </div>
        </div>
    );

}

export default Directory