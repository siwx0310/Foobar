import React, {useState} from "react";
import NowServing from "../components/NowServing";
import Queue from "../components/Queue";
import Bartenders from "../components/Bartenders";

export default function Dashboard(props) {
    // console.log(props);
    
    return(
        <div className="container">
            <div className="row">
                <h1>Dashboard</h1>                
            </div>
            <div className="row">
                <div className="col-12 col-md-6">
                    <NowServing serving={props.data.serving}/>
                    <Queue queue={props.data.queue}/>
                    <Bartenders bartenders={props.data.bartenders} bar={props.data.bar}/>
                </div>
                <div className="col-12 col-md-6">
                    /* This should be in a component */
                    <div className="row">
                        <div className="col">
                            <p>This will be the beers on tap section</p>
                        </div>
                    </div>
                    /* end */
                    /* This will be the beers on tap section */
                    <div className="row">
                        <div className="col">
                            <p>This will be the most popular now section</p>
                        </div>
                    </div>
                    /* end */
                </div>
            </div>
        </div>
    )
}