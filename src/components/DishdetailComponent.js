import { Component } from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle, } from 'reactstrap'; 

class DishDetail extends Component{
    constructor(props){
        super(props);

        this.state = {
            selectedDish: null 
        }

    }

    renderDish(dish){
        if(dish !== null){
            return(
                <Card>
                     <CardImg width="-50%" src={dish.image} alt={dish.name} />
                     <CardBody>
                         <CardTitle>{dish.name}</CardTitle>
                         <CardText>{dish.description}</CardText>
                     </CardBody>
                </Card>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }

    renderComments(comments) {
        if(comments !== []){ 
            return(
                 <div className='col-12 col-md-5 m-1'>
                    <h4><strong>Comments</strong></h4>
                    <ul className='list-unstyled'>
                         {comments.map(eachComment => {
                             return(<p>{eachComment.comment}<br/>
                             -- <em>{eachComment.author}</em>, <span>{new Date(eachComment.date).toLocaleDateString()}</span>
                             </p>)
                         })}
                    </ul>
                </div>
            );
        }
        else{
            return(<div></div>);
        }
    
    }

    render(){
        const dish = this.props.dish;
        let comments = [];
        
        (dish == null) ? comments = [] : comments = dish.comments;

        return(
            <div className='row'>
                  <div  className="col-12 col-md-5 m-1">
                        {this.renderDish(dish)}

                </div>
                 <div className="m-5 col-5">
                    {this.renderComments(comments)}
                </div>
                
                    
            </div>
        )

    }


}

export default DishDetail;   