import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
class Menu extends Component {
    constructor(props) {
        super(props);

        console.log("menu constructor invoked");
       
    }

    componentDidMount(){
        console.log("menu componentDidMount invoked");
    }

    render() {
        console.log("menu render method called");
        const menu = this.props.dishes.map((dish) => {
            return (
              <div  className="col-12 col-md-5 m-1">
                <Card  key={dish.id} style={{ cursor: "pointer" }} onClick={()=>this.props.onClick(dish.id)}>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />                  
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Card>
              </div>
            );
        });

        return (

            <div className="row">
                {menu}   
            </div>
        );
    }
}
export default Menu;
