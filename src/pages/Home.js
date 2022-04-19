import React from "react";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";

function RenderItem({item}) {
    return (
        <Card>
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                <CardText>{item.description}</CardText>
                <button>Learn More!</button>
            </CardBody>
        </Card>
    )
}

function Home(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <RenderItem item={props.services} />
                </div>
                {/* <div className="col-sm-6">
                    <RenderItem item={}/>
                </div> */}
            </div>
        </div>
    );
}

export default Home;