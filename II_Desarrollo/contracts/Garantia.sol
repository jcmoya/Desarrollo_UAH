pragma solidity ^0.4.25;

contract Garantia {
    // Modelo de Datos
    struct  Producto {
        uint id;
        address comprador;
        string nombreProducto;
        string numSerie;
        uint fecha;
      
    }

    // Alamcenar a la gente que usa la Dapp
    mapping (uint => Producto) public productos;

    // Evento que se dará al añadir un Producto
    event garantiaEvent (
        uint indexed _productoId
    );

   
    //Para tener constancia del numero de productos que se van integrando
    uint public  productosCount;

    //Pasa como parametros los datos que debe de añadir el usuario
    function addProducto ( string memory _nombre, string memory _numSerie) public {
        
        uint _id = productosCount;
        productosCount ++;
      
	    address _comprador = msg.sender;
        uint _fecha  = now;
       productos[productosCount] = Producto(_id, _comprador, _nombre, _numSerie, _fecha);
      
    }

    // Constructor. Inicialmente estará constituido por dos Productos
constructor () public {

    addProducto("Silla bebé Chicco", "43444fr33256");
    addProducto("Play Station 4", "9855933Rf332");
	
}


//Circuit Breaker
/*
bool private stopped = false;
address private owner;

modifier isAdmin() {
    if(msg.sender != owner) {
        throw;
    }
    _
}

function toggleContractActive() isAdmin public
{
    // You can add an additional modifier that restricts 
    //stopping a contract to be based on another action, such as a vote of users
    stopped = !stopped;
}

modifier stopInEmergency { if (!stopped) _ }
modifier onlyInEmergency { if (stopped) _ }

function deposit() stopInEmergency public
{
    // some code
}

function withdraw() onlyInEmergency public
{
    // some code
} 
*/

}