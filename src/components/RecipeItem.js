import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { useEffect } from 'react';

//this file is responsible for rendering recipe items

const RecipeItem = (props) => {

    useEffect(
        () => {

        }
    )

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
                <Button variant="primary">I want to make this!</Button>
            </Card.Body>
        </Card>
    );
}

export default RecipeItem;