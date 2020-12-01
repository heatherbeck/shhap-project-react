import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderShhap({shhap}) {

}

function RenderComments({comments}) {


function ShhapInfo(props) {
    if (props.shhap) {
        return (
            <div className="container">
                <div className="row">
                    <RenderShhapInfo shhap={props.shhap} />
                    <RenderComments comments={props.shhap.comments} />
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        );
    }
    return <div />;
}

export default ShhapInfo};