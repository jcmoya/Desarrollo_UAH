# PEC DAPP 
# Diseño y Desarrollo II
## Ejercicio 1 (10 puntos)  

**Realizar la implementación de una Aplicación Descentralizada (DApp)..**

Resumen:
El tema para la Dapp es de una sistema que activara en la BLockchain la garantia de un producto basándose en el numero de Serie y en el nombre del producto.

 -Dependecias y Aplicaciones usadas:

Node Package management (npm).
Truffle: Para poder desplegar los Smart Contract.
Ganache: Para hacer uso de una Blockchain Local y poder hacer pruebas.
Metamask: Para poder interactuar con la BLockchain y firmar transacciones

Para tener un entorno de partida, y de ese modo que resulte más sencillo la creacion de la applicacion voy a hacer uso del proyecto de Truffle Pet-Shop. Además decir que el siguiente proyecto ya creado en internet sobre una aplicacion para votar, link. Y sus expliaciones en su web han sido un recurso que he utilizado mucho.

# Pasos para probar la Dapp en Local
## 1. Clone the project
`git clone https://github.com/dappuniversity/election`

(La carpeta Node Modules la he eliminado para evitar subirla)

## 2. Instalar dependencias en caso de no tenerlas
```
$ cd election
$ npm install
```
## 3. Arrancar Ganache
Open the Ganache GUI client that you downloaded and installed. This will start your local blockchain instance. See free video tutorial for full explanation.


## 4. Compilar y Desplegar los contratos
`$ truffle migrate --reset`

## 5. Configurar Metamask para firmar transacciones

- Desbloquear Metamask
- Conectar metamask a la Blockchain Local de Ganache.
- Importar una cuenta de las que te da ganache.

## 6. Arrancar el Front End
`$ npm run dev`

Despues en tu navegador: http://localhost:3000


```
jules@jules-VirtualBox:~$ mkdir DaPP
jules@jules-VirtualBox:~$ cd DaPP/
jules@jules-VirtualBox:~/DaPP$ truffle unbox pet-shop

✔ Preparing to download
✔ Downloading
✔ Cleaning up temporary files
✔ Setting up box

Unbox successful. Sweet!

Commands:

  Compile:        truffle compile
  Migrate:        truffle migrate
  Test contracts: truffle test
  Run dev server: npm run dev

```
TRuffle migrate --reset //Dado que los datos de la blockschia son inmutables es necesario hacer esto en la blockchain de Ganacher
Garantia.deployed().then(function(i) { app=i;})
Garantia.deployed().then(function(i) { app=i;})
GA
## Modelo de Datos

Identificador, Nombre, Lugar, cantidad
## Test
We'll write all these tests in Javascript to simulate client-side interaction with our smart contract, much like we did in the console. Here is all the code for the tests:


## Seguridad

Funcion add... es private para que no se tenga accerso a ella desde fuera del contrato

Referencias:
Dapp University, https://www.youtube.com/watch?v=3681ZYbDSSk&feature=youtu.be&t=1h9m5s
https://github.com/dappuniversity/election/tree/2019_update
https://gist.github.com/cryptogoth/10a98e8078cfd69f7ca892ddbdcf26bc  
https://github.com/ethereum/go-ethereum/issues/15112  
https://medium.com/blockchainbistro/set-up-a-private-ethereum-blockchain-and-deploy-your-first-solidity-smart-contract-on-the-caa8334c343d  
https://blog.openzeppelin.com/the-hitchhikers-guide-to-smart-contracts-in-ethereum-848f08001f05/
https://github.com/ethereum/go-ethereum/wiki/Connecting-to-the-network  
https://web3py.readthedocs.io  
https://web3js.readthedocs.io/en/1.0/web3-eth-abi.html#encodefunctionsignature
https://medium.com/@piyopiyo/how-to-get-ethereum-encoded-function-signatures-1449e171c840  

