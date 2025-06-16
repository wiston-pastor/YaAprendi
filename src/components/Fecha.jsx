const today = new Date();

function formatDate(date){
    return new Intl.DateTimeFormat(
        'es-ES',
        {weekday:'long'}
    ).format(date);
}


function Fecha(){
    return (
        <h4>Hoy {formatDate(today)}  </h4>
    );
}

export default Fecha;