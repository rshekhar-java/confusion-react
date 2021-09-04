/* eslint-disable react/jsx-pascal-case */
import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, 
         Breadcrumb, BreadcrumbItem,Button,Modal,ModalHeader,
         ModalBody,  Label,Row,Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);


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

    function RenderComments({comments}){
        if(comments != null){ 
            return(
                <React.Fragment>
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
                    <CommentForm />
                </React.Fragment>
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
                            <RenderComments comments={props.comments} />
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

    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmitComment(values) {
        this.toggleModal();
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
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
                                        <Label htmlFor="name" md={2}>Your Name</Label>
                                        <Col md={10}>
                                            <Control.text model=".name" id="name" name="name"
                                                placeholder="Your Name"
                                                className="form-control"
                                                validators={{
                                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                                }}
                                                    />
                                            <Errors
                                                className="text-danger"
                                                model=".name"
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