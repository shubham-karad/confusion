import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';

export default class Dishdetail  extends Component {

    // constructor(props) {
    //     super(props);

    // }

    renderDish(dish) {
        
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    renderComments = (comments)=> {
        
      if(comments != null)
        return(
           
            <div>
                <div>
                <h4>Comments</h4>
                </div>
                <div>
                <ul className="list-unstyled">
                    {comments.map((comment) => {
                        return(
                            <li key={comment.id}>
                                
                                <div>{comment.comment}</div>
                                <p>-- {comment.author} , {comment.date}</p>
                                
                                
                            </li>
                        )
                    })}
                </ul>
                </div>
            </div>
        );
        else 
            return(
                <div></div>
            )
    }

    render() {

        return (
            
                <div className="row">
                      <div  className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.selectedDish)}
                      </div>
                      <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.selectedDish.comments)}
                      </div>
                    </div>
           
        )
    }
}
