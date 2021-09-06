/* eslint-disable react/jsx-pascal-case */
import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, 
         Breadcrumb, BreadcrumbItem,Button,Modal,ModalHeader,
         ModalBody,  Label,Row,Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { postComment, fetchDishes, fetchComments, fetchPromos } from '../redux/ActionCreators';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);


    function RenderDish({dish}){
        if(dish != null){
            return(
                <FadeTransform in transformProps={{ exitTransform: 'scale(0.5) translateY(-50%)' }}>
                    <Card>
                        <CardImg width='100%' src={baseUrl + dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </FadeTransform>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }

    function RenderComments({comments,postComment, dishId}){
        if(comments != null){ 
            return(
                <React.Fragment>
                    <div className='col-12 col-md-5 m-1'>
                        <h4><strong>Comments</strong></h4>
                        <ul className='list-unstyled'>
                            <Stagger in>
                            {comments.map((comment) => {
                                return(
                                <Fade in>
                                    <li >
                                        <p>{comment.comment}<br/>
                                        {/* -- <em>{comment.author}</em>, <span>{new Date(comment.date).toLocaleDateString()}</span> */}
                                        -- <em>{comment.author}</em>, <span>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</span>
                                        </p>
                                    </li>
                                </Fade>
                                );
                            })}
                            </Stagger>
                        </ul>
                        <CommentForm dishId={dishId} postComment={postComment} />    
                    </div>
                </React.Fragment>
            );
            
        }
        else{
            return(<div></div>);
        }
    
    }
  
    const DishDetail = (props) =>{
        
        if (props.isLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.errMess) {
            return(
                <div className="container">
                    <div className="row">            
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            );
        }
        else if (props.dish != null){

            return(
                <div className ="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>                
                    </div>
                    <div className='row'>
                        <div className="col-12 col-md-5 m-1">
                                <RenderDish dish={props.dish} />
                        </div>
                        <div className="m-5 col-5">
                            <RenderComments comments={props.comments} 
                                postComment={props.postComment}
                                dishId={props.dish.id} />
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
    };
    
export default DishDetail;   

class CommentForm extends Component {
    constructor(props) {
        super(props);
    
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmitComment = this.handleSubmitComment.bind(this);
        
        this.state = {
            isModalOpen: false
          };
    }

    toggleModal = ()=> {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmitComment(values) {
        this.toggleModal();
        // console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        this.props.postComment(this.props.dishId, values.rating, values.author, values.Comment);

    }

    render(){
        return(
            <React.Fragment>    
                <Button outline onClick={this.toggleModal}><span className="fa fa-pencil-square fa-lg"></span> Submit Comment</Button>
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                        <ModalBody>
                            <LocalForm onSubmit={(values) => this.handleSubmitComment(values)}>
                                <Row className="form-group">
                                        <Label htmlFor="rating" md={2}>Rating</Label>
                                        <Col md={10}>
                                            <Control.select model=".rating" name="Rating"
                                                className="form-control">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </Control.select>
                                        </Col>
                                </Row>
                                <Row className="form-group">
                                        <Label htmlFor="author" md={2}>Your Name</Label>
                                        <Col md={10}>
                                            <Control.text model=".author" id="author" name="author"
                                                placeholder="Your Name"
                                                className="form-control"
                                                validators={{
                                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                                }}
                                                    />
                                            <Errors
                                                className="text-danger"
                                                model=".author"
                                                show="touched"
                                                messages={{
                                                    required: 'Required',
                                                    minLength: 'Must be greater than 2 characters',
                                                    maxLength: 'Must be 15 characters or less'
                                                }}
                                                />
                                        </Col>
                                </Row>
                                <Row className="form-group">
                                        <Label htmlFor="Comment" md={2}>Comment</Label>
                                        <Col md={10}>
                                            <Control.textarea model=".Comment" id="Comment" name="Comment"
                                                rows="6"
                                                className="form-control" />
                                        </Col>
                                </Row>
                                <Row className="form-group">
                                        <Col md={{size:1, offset: 2}}>
                                            <Button type="submit" color="primary">
                                                Submit
                                            </Button>
                                        </Col>
                                </Row>
                            </LocalForm>
                        </ModalBody>
                    </Modal>
            </React.Fragment>
            );
        }
}