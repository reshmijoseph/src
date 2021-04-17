import React, {Component} from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';
import ReactDOM from 'react-dom';

class CampsiteInfo extends Component {
    constructor(props){
        super(props);
        this.state= {
            comment:[
                {
                    id:0,
                    text:"What a magnificent view!",
                    author:"Tinus Lorvaldes"
                },
                {
                    id:1,
                    text:"The campground was beautiful, but the bugs could bite sometimes.",
                    author:"Brennan Ech"
                },
                {
                    id:2,
                    text:"I caught a world-record-breaking trout here on my last visit.",
                    author:"McKenzie Sebastian"
                },
                {
                    id:3,
                    text:"A wonderful place to reconnect with nature.",
                    author:"Jordan Runn"
                },
                {
                    id:4,
                    text:"The stars at night were magnificent!",
                    author:"Ann Dabramov"
                }
            ],
        };
    }
    renderCampsite(campsite){
        return(
            <div className="col-md-5 m-1">
                <Card>
                    <CardImg top src={campsite.image}alt={campsite.name}/>
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description} </CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }
    renderComments(comment){
        if (comment){
            return(
                <div className="col-5-md m-1">
                    <h4>Comments</h4>
                    {
                        comment.map(comment =>{
                            return(
                                <div key={comment.id}>
                                    <p>{comment.text}<br/>~{comment.author},  {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                                </div>

                            )
                        })
                    }
                </div>
            )
        }
        return (
            <div></div>
        )
        }
}
ReactDOM.render(<CampsiteInfo/>, document.getElementById('root'));
export default CampsiteInfo;