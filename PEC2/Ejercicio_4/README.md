# Ejercicio 4 - SWARM (4 puntos)
Puede reutilizar parte de lo que ha realizado en el ejercicio 2 (hasta subir el proyecto a
GitHub).
Arranque un nodo de Swarm y aloje la DApp (Proyecto truffle elegido).
Además, vincule el ENS adquirido en el ejercicio 1 con la DApp, de tal forma que una url
como la de a continuación muestre la aplicación. Por ejemplo:
http://localhost:8500/bzz:/swarmtest.test/index.html
Una vez alojada la DApp, debe ser capaz de utilizar la aplicación al igual que en localhost,
es decir, firmando transacciones mediante MetaMask.
Adjunte el hash de Swarm asociado con la aplicación.
Describa todo el procedimiento adjuntando las instrucciones utilizadas y sus outputs.
Adjunte todos los pantallazos que considere relevantes (como puede ser el navegador
mostrando la aplicación o transacciones de MetaMask, entre otros) e indique las
direcciones de los contratos en la red correspondiente (Rinkeby, Ropsten...).

REquerido tener Rinkeby lanzado y geth.
Desplegado el contrato de Adoption.sol en rinkeby
https://rinkeby.etherscan.io/tx/0x95f9df0bf1a01278bb79fb86349ce39fb1a3f90be0cad46015f765c2dfbb2ca8

Usando los comandos del .js de ens, para ello cargarlo:
loadScript('/home/jules/Escritorio/ensutils.js')

El nombre del dominio que cogi apunta a mi cuenta de Rinkeby:

> ens.owner(namehash("moyagonzalez.test"))
"0xa6be4ff596c2cad0f17e34655a9b421e435117f1"

//apunto al contrato adoption.sol que he desplegado en Rinkeby
publicResolver = resolverContract.at("0x721fbf83332a39041502d0e135489e8e527909241acc14bdb158e289d911a747")


//en otro terminal
Conecto swarm a la red de Rinkeby usando la cuenta bzz del ejercicio 3 (52a3bc724f3b8636c143838f06e03ebad8a52dbf) y mi cuenta de Rinkeby:

jules@jules-VirtualBox:~/Escritorio$ swarm --bzzaccount 52a3bc724f3b8636c143838f06e03ebad8a52dbf -ens-api 0xa6be4ff596c2cad0f17e34655a9b421e435117f1@/home/jules/.ethereum/rinkeby/geth.ipc
INFO [07-07|18:36:54.184] Maximum peer count                       ETH=50 LES=0 total=50
Unlocking swarm account 0x52a3Bc724F3B8636C143838F06e03EbaD8a52DBf [1/3]
Passphrase: 
INFO [07-07|18:36:58.090] Starting peer-to-peer node               instance=swarm/v0.4.2-3cdc45ee/linux-amd64/go1.11.5
INFO [07-07|18:36:58.143] connecting to ENS API                    url=/home/jules/.ethereum/rinkeby/geth.ipc
INFO [07-07|18:36:58.519] New local node record                    seq=6 id=e1416cba24a59468 ip=127.0.0.1 udp=30399 tcp=30399


//Subo el proyecto a swarm, el hash que devuelve habra que usarlo despuessubo los fichero a Swarm desde otro terminal:

jules@jules-VirtualBox:~/Escritorio/pet-shop-tutorial$ swarm --defaultpath src/index.html --recursive up src
db2992aaf2301d059b8909291949f94fe5ded21547730230bf5a0820c0d55e98

//usamos el hash de swarm desde geth añadiendo 0x en el cliente de geth

> personal.unlockAccount(eth.coinbase)
Unlock account 0xa6be4ff596c2cad0f17e34655a9b421e435117f1
Passphrase: 
true
> publicResolver.setContent(namehash('moyagonzalez.test'), '0xa09224edc8278b025bdefe35339c40c32b696b7e71e4c230a6bfc01acebcfa05', {from: eth.accounts[0]})
"0x131f8cf99b2c43018b625eff198de1bea6c5569f7aad90535aff664483ddb2c3"

 publicResolver.setContent(namehash('moyagonzalez.test'), '0xdba903ff3ed0f54a4e9b9d84a29c056dc45f52e1', {from: eth.accounts[0]})
no me funciona el enlace
http://localhost:8500/bzz:/131f8cf99b2c43018b625eff198de1bea6c5569f7aad90535aff664483ddb2c3


Referencias:

https://dickolsson.com/building-dapps-on-ethereum-part-5-ethereum-name-service-swarm/


//Creo una cuenta nueva para swarm, y arranco el servidor de swarm con los parametrso de esa cuesnta y apuntando el .ipc de rinleby
jules@jules-VirtualBox:~/Escritorio/pet-shop-tutorial$ geth account new
INFO [07-07|21:09:08.680] Maximum peer count                       ETH=25 LES=0 total=25
Your new account is locked with a password. Please give a password. Do not forget this password.
Passphrase: 
Repeat passphrase: 
Address: {2104ffe41032b170b13247b102eaa08f34e74f23}
jules@jules-VirtualBox:~/Escritorio/pet-shop-tutorial$ ^C
jules@jules-VirtualBox:~/Escritorio/pet-shop-tutorial$ swarm --bzzaccount 0x2104ffe41032b170b13247b102eaa08f34e74f23 --ens-api 0x2192a5fC161065ccBbfEBA9D9A46f5b16B455E2c@/home/jules/.ethereum/rinkeby/geth.ipc ~/.rinkeby
INFO [07-07|21:10:24.366] Maximum peer count  

a09224edc8278b025bdefe35339c40c32b696b7e71e4c230a6bfc01acebcfa05




Lanzar la red rinkeby con esa cuenta:
geth --unlock "0xa6be4ff596c2cad0f17e34655a9b421e435117f1" --rinkeby --syncmode fast --cache 1024 --rpc


despeus me posiciono en el proyecto de pet-shop y hago un 
truffle migrate --network rinkeby

jules@jules-VirtualBox:~/pet-shop-tutorial$ truffle migrate --network rinkeby

Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.


Migrations dry-run (simulation)
===============================
> Network name:    'rinkeby-fork'
> Network id:      4
> Block gas limit: 0x6ad660


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > block number:        4693878
   > block timestamp:     1562538521
   > account:             0xA6Be4fF596C2cAd0f17E34655A9b421e435117f1
   > balance:             1.998303263782572544
   > gas used:            246393
   > gas price:           2 gwei
   > value sent:          0 ETH
   > total cost:          0.000492786 ETH

   -------------------------------------
   > Total cost:         0.000492786 ETH


2_deploy_contracts.js
=====================

   Deploying 'Adoption'
   --------------------
   > block number:        4693880
   > block timestamp:     1562538521
   > account:             0xA6Be4fF596C2cAd0f17E34655A9b421e435117f1
   > balance:             1.997774083782572544
   > gas used:            237567
   > gas price:           2 gwei
   > value sent:          0 ETH
   > total cost:          0.000475134 ETH

   -------------------------------------
   > Total cost:         0.000475134 ETH


Summary
=======
> Total deployments:   2
> Final cost:          0.00096792 ETH


Starting migrations...
======================
> Network name:    'rinkeby'
> Network id:      4
> Block gas limit: 0x6ad704


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0x50f250f917f6f7c50972b11429f1957419ee190bbece599cc1e9c43b87781ba3
   > Blocks: 0            Seconds: 8
   > contract address:    0x6b3516e27DF64c64B4594E0bd4FaD6eBF69ed677
   > block number:        4693914
   > block timestamp:     1562538530
   > account:             0xA6Be4fF596C2cAd0f17E34655A9b421e435117f1
   > balance:             1.983112469782572544
   > gas used:            261393
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00522786 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00522786 ETH


2_deploy_contracts.js
=====================

   Deploying 'Adoption'
   --------------------
   > transaction hash:    0x721fbf83332a39041502d0e135489e8e527909241acc14bdb158e289d911a747
   > Blocks: 0            Seconds: 12
   > contract address:    0xD6306F2D11ac1ae83e01EE86e6C4E5154A66857b
   > block number:        4693916
   > block timestamp:     1562538560
   > account:             0xA6Be4fF596C2cAd0f17E34655A9b421e435117f1
   > balance:             1.977520669782572544
   > gas used:            237567
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00475134 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00475134 ETH


Summary
=======
> Total deployments:   2
> Final cost:          0.0099792 ETH



//apunto al contrato adoption.sol que he desplegado en Rinkeby
publicResolver = resolverContract.at("0x721fbf83332a39041502d0e135489e8e527909241acc14bdb158e289d911a747")


Creo una nueva cuenta 
geth create new account
dba903ff3ed0f54a4e9b9d84a29c056dc45f52e1

Desde otro terminal se lanza swarm con los datos de la cuenta nueva y la cuenta de geth
swarm --bzzaccount 0xdba903ff3ed0f54a4e9b9d84a29c056dc45f52e1 --ens-api 0xA6Be4fF596C2cAd0f17E34655A9b421e435117f1@/home/jules/.ethereum/rinkeby/geth.ipc 

Añado el contenido de petshop (he añadido lo mismo que con IPFS)

jules@jules-VirtualBox:~/Escritorio/pet-shop-tutorial$ swarm --defaultpath src/index.html --recursive up src
a09224edc8278b025bdefe35339c40c32b696b7e71e4c230a6bfc01acebcfa05

> publicResolver.setContent(namehash('moyagonzalez.test'), '0xa09224edc8278b025bdefe35339c40c32b696b7e71e4c230a6bfc01acebcfa05', {from: eth.accounts[0]})




swarm --bzzaccount 0xA6Be4fF596C2cAd0f17E34655A9b421e435117f1 --ens-api 0xD6306F2D11ac1ae83e01EE86e6C4E5154A66857b@/home/jules/.ethereum/rinkeby/geth.ipc

swarm --ens-api test:0xD6306F2D11ac1ae83e01EE86e6C4E5154A66857b@/home/jules/.ethereum/rinkeby/geth.ipc --bzzaccount 0xA6Be4fF596C2cAd0f17E34655A9b421e435117f1

 swarm --keystore "'/home/jules/.ethereum/rinkeby/keystore/UTC--2019-06-22T21-25-43.283477655Z--a6be4ff596c2cad0f17e34655a9b421e435117f1'" --bzzaccount 0xA6Be4fF596C2cAd0f17E34655A9b421e435117f1 --ens-api "test:0xD6306F2D11ac1ae83e01EE86e6C4E5154A66857b@/home/jules/.ethereum/rinkeby/geth.ipc"


Referencias:
https://michalzalecki.com/deploying-smart-contracts-with-truffle/

$ '/home/jules/.ethereum/keystore/UTC--2019-07-07T10-05-16.366065740Z--52a3bc724f3b8636c143838f06e03ebad8a52dbf' /home/jules/.ethereum/rinkeby/geth.ipc

swarm --bzzaccount 0xA6Be4fF596C2cAd0f17E34655A9b421e435117f1
swarm --bzzaccount 0xA6Be4fF596C2cAd0f17E34655A9b421e435117f1 --ens-api test:0xD6306F2D11ac1ae83e01EE86e6C4E5154A66857b@/home/jules/.ethereum/rinkeby/geth.ipc

Vi en el foro de clase que guillermo tuvo una duda, y probaba con algo parecido a esto:
 swarm --keystore /home/jules/.ethereum/keystore --bzzaccount 0xA6Be4fF596C2cAd0f17E34655A9b421e435117f1 --ens-api "test:0xD6306F2D11ac1ae83e01EE86e6C4E5154A66857b@/home/jules/.ethereum/rinkeby/geth.ipc"

 swarm --datadir='/home/jules/.ethereum/rinkeby/' --bzzaccount 0xA6Be4fF596C2cAd0f17E34655A9b421e435117f1 --ens-api test:0xD6306F2D11ac1ae83e01EE86e6C4E5154A66857b@/home/jules/.ethereum/rinkeby/geth.ipc

Todos me devuelven el mismo error:

jules@jules-VirtualBox:~/Escritorio/pet-shop-tutorial$ swarm --bzzaccount 0xA6Be4fF596C2cAd0f17E34655A9b421e435117f1 --ens-api test:0x92b351cefda625d4acefd0cc8d2d3a6c4c0cae5d231381f5f98e51a5895f0026@/home/jules/.ethereum/rinkeby/geth.ipc
INFO [07-08|19:04:47.704] Maximum peer count                       ETH=50 LES=0 total=50
Fatal: Can't find swarm account key: no key for given address or file - Is the provided bzzaccount(0xA6Be4fF596C2cAd0f17E34655A9b421e435117f1) from the right datadir/Path?



geth --datadir='/home/jules/.ethereum/rinkeby' attach  ipc:'/home/les/.ethereum/rinkeby/geth.ipc' console


$ swarm --datadir='/home/jules/.ethereum/rinkeby/' --ens-api 'test:0x21397c1a1f4acd9132fe36df011610564b87e24b@/home/jules/.ethereum/rinkeby/geth.ipc' --bzzaccount 0xA6Be4fF596C2cAd0f17E34655A9b421e435117f1 


publicResolver.setContent(namehash('moyagonzalez.test'), '0xa09224edc8278b025bdefe35339c40c32b696b7e71e4c230a6bfc01acebcfa05', {from: eth.accounts[0]})
"0x786a4eb1a96091d877f507353267be4c789da31c4ebb95acddf96e525b592970"




swarm --datadir='/home/jules/.ethereum/rinkeby/' --ens-api 'test:0xe7410170f87102DF0055eB195163A03B7F2Bff4A@/home/jules/.ethereum/rinkeby/geth.ipc' --bzzaccount 0xA6Be4fF596C2cAd0f17E34655A9b421e435117f1


Tener la blockchain de Rinkeby abierta:

jules@jules-VirtualBox:~$ geth --rinkeby --syncmode "fast" 
INFO [07-08|19:24:26.758] Maximum peer count                       ETH=25 LES=0 total=25
INFO [07-08|19:24:26.765] Starting peer-to-peer node               instance=Geth/v1.8.27-stable-4bcc0a37/linux-amd64/go1.10.4

En otro terminal, ejecutas geth:
> jules@jules-VirtualBox:~$ geth --datadir='/home/jules/.ethereum/rinkeby' attach  ipc:'/home/les/.ethereum/rinkeby/geth.ipc' console
Welcome to the Geth JavaScript console!

Desbloqueas la cuenta con la que compraste el domninio, en mi caso "moyagonzalez.test" y cargas el scritp de ensutils.js

> personal.unlockAccount(eth.accounts[0])
Unlock account 0xa6be4ff596c2cad0f17e34655a9b421e435117f1
Passphrase: 
true
> loadScript('/home/jules/Escritorio/ensutils.js')
true


> ens.owner(namehash("moyagonzalez.test"))
"0xa6be4ff596c2cad0f17e34655a9b421e435117f1" //Estsa es la cuenta de geth importante a usar despues


Ahora, es ncesario desplegar los contratos que usa Pet-shop : Migration y Adoption.sol
Lo hago con Truffle. Primero se edita truffleconfig.js para que se conecte a rinkeby con la siguientes caracteristicas, y desdusee mi cuenta eth.coinbase

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      host: "localhost", // Connect to geth on the specified
      port: 8545,
      from: "0xa6be4ff596c2cad0f17e34655a9b421e435117f1", // default address to use for any transaction Truffle makes during migrations
      network_id: 4,
      gas: 4612388 // Gas limit used for deploys
    }
  }
};

Hay que conectar Swarm y relacionar la con la cuenta de geth  y el ENS registry address. Esta última dirección viene de cuando registre el dominio

> testRegistrar.register(web3.sha3("moyagonzalez"), eth.coinbase, {from: eth.coinbase})
"0x92b351cefda625d4acefd0cc8d2d3a6c4c0cae5d231381f5f98e51a5895f0026"

Esa transaccion en etherscan viene en el siguiente lugar:
0xe7410170f87102df0055eb195163a03b7f2bff4a

Imagen ENS_Registry_address.png

ahora sí desde otro terminal se ejecuta swarm pasandole como parametro la ruta donde tengas instalado Rinkeby, --ens-api con el address anterior
@ ruta el geth.ipc de rinkeby  y-- bzzaccount que es la cuenta con la que compre el dominio

swarm --datadir='/home/jules/.ethereum/rinkeby/' --ens-api 'test:0xe7410170f87102DF0055eB195163A03B7F2Bff4A@/home/jules/.ethereum/rinkeby/geth.ipc' --bzzaccount 0xA6Be4fF596C2cAd0f17E34655A9b421e435117f1

imagen Swarm_conectado.png


Desde otro terminal, añades el contenido de petshop a swarm:

jules@jules-VirtualBox:~/Escritorio/pet-shop-tutorial$ swarm --defaultpath src/index.html --recursive up src
a09224edc8278b025bdefe35339c40c32b696b7e71e4c230a6bfc01acebcfa05


Desde el cliente de geth asignas el domino a la direccion de swarm, usando la *misma* cuenta.

> publicResolver.setContent(namehash('moyagonzalez.test'), '0xa09224edc8278b025bdefe35339c40c32b696b7e71e4c230a6bfc01acebcfa05', {from: eth.accounts[0]})
"0x0987ba67cc87ffbcb01fc234bf4187b188af73e583a2fedefe3a97cdcf8e4e56"

Ya desde el navegador se podria acceder a la dapp y poder usar metamask para poder hacer pagos:




//Final
imagen Pantallazo_app.png
