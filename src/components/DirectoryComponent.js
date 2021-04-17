import React, {Component} from 'react';
import CampsiteInfo from './CampsiteInfoComponent';
import {Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';
import ReactDOM from 'react-dom';

class Directory extends Component {
    constructor(props){
        super(props);
        this.state ={
            selectedCampsite: null
        };
    }
    renderSelectedCampsite(){
        return <CampsiteInfo campsite= {this.state.selectedCampsite}/>
    }

    onCampsiteSelect(campsite){
        this.setState({selectedCampsite: campsite});
    }

    render(){
        const directory = this.props.campsites.map(campsite => {
            return(
                <div key={campsite.id} className="col-md m-1">
                    <Card onClick={() => this.onCampsiteSelect(campsite)}>
                        <CardImg width="100%" src={campsite.image} alt={campsite.name}/>
                        <CardImgOverlay>
                            <CardTitle>{campsite.name}</CardTitle>
                        </CardImgOverlay>                
                    </Card>
                </div>
            )
        });
        return(
            <div className= "container">
                <div className="row">
                    {directory}
                </div>
            </div>
        );
    }
}
ReactDOM.render(<Directory/>, document.getElementById('root'));
export default Directory;