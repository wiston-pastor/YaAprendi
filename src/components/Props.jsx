function getImagenUrl(person,size='s') {
        return (
            'https://i.imgur.com/'+
            person.imageId +
            size +
            '.jpg'
        )
    }

function Props({person,size=100}){
    return(
        <img 
        className="avatar"
        src={getImagenUrl(person)}
        alt={person.name}
        width={size}
        height={size}
        />
    )
}

export default Props