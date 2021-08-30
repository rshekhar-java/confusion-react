import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

    //one way to define function --- can be done as function <functionname>(props){}
    function RenderMenuItem({dish,onClick}){
        return(
            <Card  key={dish.id} style={{ cursor: "pointer" }} onClick={()=>onClick(dish.id)}>
                <CardImg width="100%" src={dish.image} alt={dish.name} />                  
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Card>

        );
    }

    //anotehr way to define function using arrow function
    const Menu = (props) => {
        const menu = props.dishes.map((dish) => {
            return (
              <div  className="col-12 col-md-5 m-1">
                  <RenderMenuItem dish={dish} onClick={props.onClick} />
              </div>
            );
        });

        return (

            <div className="row">
                {menu}   
            </div>
        );
    }

export default Menu;
