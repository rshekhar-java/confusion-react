import React from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle, } from 'reactstrap'; 


    function RenderDish({dish}){
        if(dish != null){
            return(

                <Card>
                     <CardImg width='100%' src={dish.image} alt={dish.name} />
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

    function RenderComments({comments}) {
        if(comments != null){ 
            return(
                 <div className='col-12 col-md-5 m-1'>
                    <h4><strong>Comments</strong></h4>
                    <ul className='list-unstyled' key={comments.id}>
                         {comments.map(eachComment => {
                             return(<p>{eachComment.comment}<br/>
                             {/* -- <em>{eachComment.author}</em>, <span>{new Date(eachComment.date).toLocaleDateString()}</span> */}
                             -- <em>{eachComment.author}</em>, <span>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(eachComment.date)))}</span>
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

    const DishDetail = (props) =>{
        
        if (props.dish != null){

            return(
                <div className ="container">
                    <div className='row'>
                        <div className="col-12 col-md-5 m-1">
                                <RenderDish dish={props.dish} />
                        </div>
                        <div className="m-5 col-5">
                            <RenderComments comments={props.dish.comments} />
                        </div>                    
                    </div>
                </div>
            );
        }
        else{
         return(
             <div></div>
         ); 
        }

    }

export default DishDetail;   