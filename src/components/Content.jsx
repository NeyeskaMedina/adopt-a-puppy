import Card from 'react-bootstrap/Card';
import { Tags } from "./Tags";

export const Content = ({src, name, description, textBreed, colorBgd}) => {
    return(
        <>
            <Card style={{ width: '18rem' }}>
                <a href={src}><Card.Img variant="top" src={src} width={300} height={250}/></a>
                <Card.Body>
                    <h4><Card.Title>{name}</Card.Title></h4>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Tags text={textBreed} color={colorBgd}/>
                </Card.Body>
            </Card>
        </>
    )
}
export default Content;