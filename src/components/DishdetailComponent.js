import React, {Component} from 'react';
import { Card, CardImg, CardText, CardTitle } from 'reactstrap';

class Dishdetail extends Component {

    constructor(props) {
        super(props);
    }


    renderDish(dish){

        return(
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name}/>  
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </Card>
        );
    }

    renderComments(comments){

        if(comments!=null){

            const listItems = comments.map((comment) =>    
            <li>
                <p>{comment.comment}</p>
                <p>-- {comment.author}, {comment.date.substring(0,10)}</p>
            </li>);
            return(
                    <div>
                        <h4>Comments</h4>
                        <ul className="list-unstyled">
                            {listItems}
                        </ul>
                    </div>
            );
        }else{

            return(
                <div></div>
            );
        }

    }

    render() {

        if(this.props.dish!=null){
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.dish.comments)}
                    </div>
                </div>

            );
        }else{
            return(
                <div></div>
            );
        }
    }
}

export default Dishdetail;