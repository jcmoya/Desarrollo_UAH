App = {
  web3Provider: null,
  contracts: {},
  account: '0x0',
  hasVoted: false,

  init: function() {
    return App.initWeb3();
  },

  initWeb3: function() {
    // TODO: refactor conditional
    if (typeof web3 !== 'undefined') {
      // If a web3 instance is already provided by Meta Mask.
      App.web3Provider = web3.currentProvider;
      web3 = new Web3(web3.currentProvider);
    } else {
      // Specify default instance if no web3 instance provided
      App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
      web3 = new Web3(App.web3Provider);
    }
    return App.initContract();
  },

  initContract: function() {
    $.getJSON("Garantia.json", function(garantia) {
      // Instantiate a new truffle contract from the artifact
      App.contracts.Garantia = TruffleContract(garantia);
      // Connect provider to interact with contract
      App.contracts.Garantia.setProvider(App.web3Provider);

      App.listenForEvents();

      return App.render();
    });
  },

  // Para poder estar escuchando eventos que se puedan dar desde el FrontEnd
  listenForEvents: function() {
    App.contracts.Garantia.deployed().then(function(instance) {
      // Restart Chrome if you are unable to receive this event
      // This is a known issue with Metamask
      // https://github.com/MetaMask/metamask-extension/issues/2393
      instance.garantiaEvent({}, {
        fromBlock: 0,
        toBlock: 'latest'
      }).watch(function(error, event) {
        console.log("event triggered", event)
        // Recarga el front end cuando se añade un nuevo Producto
        App.render();
      });
    });
  },

  //Volver a cargar el front end. La parte del .html content no sera visible
  render: function() {
    var garantiaInstance;
    var loader = $("#loader");
    var content = $("#content");

    loader.show();
    content.hide();

    // Czrga la cuenta que esta conectada , btener la cuenta que usamos
    
      web3.eth.getAccounts(function(err, account){
 

      if (err != null) {
        console.log(err)
      }else {
        App.account = account;
        $("#accountAddress").html("Cuenta Metamask a usar: " + account);

      }
    });

    // Cargamos el contrato, y mostramos los 2 Productos iniciales
    App.contracts.Garantia.deployed().then(function(instance) {
      garantiaInstance = instance;
      return garantiaInstance.productosCount();
    }).then(function(productosCount) {
      var productosResults = $("#productosResults");
      productosResults.empty();


      for (var i = 1; i <= productosCount; i++) {
        garantiaInstance.productos(i).then(function(producto) {
          var id = producto[0];
          var address = producto[1];
          var name = producto[2];
          var numSerie = producto[3];
          var fecha = producto[4];


          // Mstrarlo en el Frontend
          var garantiaTemplate = "<tr><th>" + id + "</th><td>" + name + "</td><td>" + numSerie + "</td><td>" + fecha + "</td><td>" + address + "</td></tr>"
          productosResults.append(garantiaTemplate);

        });
      }
     
      loader.hide();
      content.show();
    }).catch(function(error) {
      console.warn(error);
    });
  
  },

  //El usuario mete los dos parametros iniciales
  anadirProducto: function() {
    var nombreProducto = $('#nombreProducto').val();
    var numSerie       = $('#numSerie').val();
    App.contracts.Garantia.deployed().then(function(instance) {

      //Usar la cuenta para crear el objeto Producto nuevo, y llamada al contrato
      web3.eth.getAccounts(function(error, accounts) {
        if (error != null) { //if (error) {
          console.log(error);
        }
    
        var account = accounts[0];
    
      return instance.addProducto(nombreProducto, numSerie, { from: account, gas:1000000 });
    })
    }).then(function(result) {
      // Actualiza el front end
      $("#content").hide();
      $("#loader").show();
    }).catch(function(err) {
      console.error(err);
    });
  }
};

$(function() {
  $(window).load(function() {
    App.init();
  });
});

