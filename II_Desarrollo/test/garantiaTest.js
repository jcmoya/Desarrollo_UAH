var Garantia = artifacts.require("./Garantia.sol");

//Traer las cuentas para poder usarlas en los tests
// IT ...lo usas por el Mocha testing framework y CHAI
contract("Garantia", function(accounts) {
  var garantiaInstance; //Instancia al Contrato Garantia

  //Probamos si estamos inicializando el contrato con 2 productos
  it("Inicializa con dos articulos", function() {
    return Garantia.deployed().then(function(instance) {
      return instance.productosCount();
    }).then(function(count) {
      assert.equal(count, 2); // 2-- Las dos entradas del contructor del contrato
    });
  });


  //2 Test, Vemos si los objetos que hemos creado tienen los parametros bien configurados. PAra ello hay que recoger cada una de las entradas del constructor y verificamos si estan bien construidos
it("Los dos productos del constructor se inicializan bien Nombre & Num Serie", function() {
  return Garantia.deployed().then(function(instance) {
    garantiaInstance = instance;
    return garantiaInstance.productos(1);
  }).then(function(producto) {
    assert.equal(producto[0], 0, "es su id");
    assert.equal(producto[2], "Silla bebé Chicco", "es su nombre");
    assert.equal(producto[3], "43444fr33256", "es su número de serie");
    return garantiaInstance.productos(2);
  }).then(function(producto) {
    assert.equal(producto[0], 1, "es su id");
    assert.equal(producto[2], "Play Station 4", "es su nombre");
    assert.equal(producto[3], "9855933Rf332", "es su número de serie");
  });
});

});

