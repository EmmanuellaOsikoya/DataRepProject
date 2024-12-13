import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import axios from 'axios';

//this file is responsible for rendering recipe items

function RecipeItem (props) {

    const handleDelete = (e) => {
        e.preventDefault();
        axios.delete('http://localhost:4000/api/recipes' + props.myRecipe._id)
            .then(() => {
                props.Reload(); // Refresh the recipe list after deletion
            })
            .catch((error) => {
                console.error("Error deleting recipe:", error);
            });
    };

    //repsonsible for the appearance of the cards on the recipes page of WhiskAway
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.myRecipe.Picture} />
            <Card.Body>
                <Card.Title>{props.myRecipe.RecipeName}</Card.Title>
                <Card.Text>
                    {props.myRecipe.CookingTime}
                </Card.Text>
                <Card.Text>
                    {props.myRecipe.Servings}
                </Card.Text>
                <Card.Text>
                    <Link to={"/change" + props.myRecipe._id} className='btn btn-primary'>Change</Link>
                    <Button variant="danger" onClick={handleDelete}>Delete</Button>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default RecipeItem;