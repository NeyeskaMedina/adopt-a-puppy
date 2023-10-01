import Badge from 'react-bootstrap/Badge';

export const Tags = ({text, color}) => {
    return (
        <>
        <Badge bg={color}>{text}</Badge>
        </>
    );
}
export default Tags;