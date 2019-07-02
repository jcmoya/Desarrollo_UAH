# Ejercicio 1 - ENS (1 punto)
Adquiera un dominio bajo el TLD ‘.test’ en la testnet Rinkeby.
Describa el procedimiento seguido paso a paso.
Demuestre que es usted poseedor del dominio adquirido y obtenga la dirección del Resolver utilizado. (Adjunte un pantallazo con todas las instrucciones utilizadas y sus outputs).
*Tenga en cuenta que la duración de la propiedad de los dominios en testnet es de 28 días.


Tras sincronizar la red Rinkeby
Descargar primero ensutils.js, un programa en javascript para poder interactuar con ENS
https://raw.githubusercontent.com/ethereum/ens/master/ensutils.js

Varias el fichero el ENS contract address para poder usar Rinkey

Imagen

Si usas mainet:


    ENS on Mainnet: 0x314159265dd8dbb310642f98f50c066173c1259b



Arrancas Geth (Por supuesto la red de Rinkeby esta levantada):
jules@jules-VirtualBox:~$ geth --datadir='/home/jules/.ethereum/rinkeby' attach  ipc:'/home/jules/.ethereum/rinkeby/geth.ipc' console
Welcome to the Geth JavaScript console!


Cargas el fichero .js en gethinkeby te dara este error:

> loadScript('/home/jules/Escritorio/ensutils.js')
err: Error: invalid address
false

ENS on Rinkeby: 0xe7410170f87102df0055eb195163a03b7f2bff4a
> loadScript('/home/jules/Escritorio/ensutils.js')
true

Ahora haciendo uso de ciertas funciones del script miras a ver si el dominio esta libre:
> testRegistrar.expiryTimes(web3.sha3("moya_gonzalez"))
0

Si devuelve un 0 es que sí esta disponible.
Ahora neceitas comprar el dominio, para ello es ncesario de disponer de una cuenta en Rinkeby con algunos ethers.

> eth.getBalance(eth.coinbase)
3000000000000000000
> personal.unlockAccount(eth.coinbase)
Unlock account 0xa6be4ff596c2cad0f17e34655a9b421e435117f1
Passphrase: 
true

> testRegistrar.register(web3.sha3("moya_gonzalez"), eth.coinbase, {from: eth.coinbase})
"0x92b351cefda625d4acefd0cc8d2d3a6c4c0cae5d231381f5f98e51a5895f0026"

El ultimo numero es el numero de la transacción donde he adquiido el dominio, en el siguiente bloque debiera de estar.
PAra saber el tiempo en que va a expirar mi domninio:
> testRegistrar.expiryTimes(web3.sha3("moya_gonzalez"))
1564443487
> 
Para saber quien es el propietario del dominio:
> ens.owner(namehash("moya_gonzalez.test"))
"0xa6be4ff596c2cad0f17e34655a9b421e435117f1"

Que es mi cuenta.

Ahora hacemos el Resolver del dominio que hemos adquirido //Esta parte no me queda muy clara, es sólo para adquirir dominio de verdad?:

> personal.unlockAccount(eth.accounts[0])
Unlock account 0xa6be4ff596c2cad0f17e34655a9b421e435117f1
Passphrase: 
true
> ens.setResolver(namehash('moya_gonzalez.test'),publicResolver.address,{from:eth.accounts[0], gas: 100000})
"0x54ab68fc6637c0c4871e6625c9e59ad1558345de62912e7f490a49996e80f76e"
> 
Esta ultima transaccion no he podido verificarla en Etherscan, quizas un poco mas tarde aparezca

