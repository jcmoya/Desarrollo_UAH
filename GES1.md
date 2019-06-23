# GES 1 DISEÑO Y DESARROLLO I

### BLOQUE 1: FUNDAMENTOS Y HERRAMIENTAS
#### Truffle, Ganache y API de Web3

- Comprobar que existe conexión a un nodo.  
Dentro de la ruta donde esta desplegado truffle y web3 se ejecuta la consola  
![alt text](Imagenes/ConexionGanache.jpg)  
Para saber si esta escuchando la blockchain de Ganache  
![alt text](Imagenes/isListenning.jpg)


- Comprobar si está o no sincronizando nuevos bloques. ¿Por qué?  
AL estar usando funciones mediante el terminal, estoy haciendo llamadas asincronas en un momento dado, no permanentemente. Por esa razón al ejecutar, es false:  
![alt text](Imagenes/isSinc.JPG)  

- Balance de la cuenta que ha desplegado el contrato en la blockchain.  
![alt text](Imagenes/getBalance.jpg)

- Address de la cuenta número 3 de Ganache o ganache-cli.  
Para obtener todas las cuentas de Ganache  
![alt text](Imagenes/getAccounts.jpg)  

Para acceder a la cuenta numero 3 concreta  
web3.eth.getAccounts().then((f) => f[3])  
![alt text](Imagenes/Cuenta3Ganache.jpg)

- Número de bloque en el que se encuentra la blockchain en ese instante. ¿Por qué?  
Ultimo Bloque (Latest), en mi caso el último es el 32  
![alt text](Imagenes/getBlock.jpg)  

Otra función que se puede usar  
web3.eth.getBlockNumber()  
![alt text](Imagenes/getBlockNumber.jpg)

- Dirección del host de la blockchain.  
![alt text](Imagenes/currentProvider.jpg)

- Acceda a ethgasstation y convierta el precio del gas en ese instante a Ether.

#### Solidity con Remix IDE

1. Ir a Remix IDE
2. Crear una nuevo contrato y Escribir el Codigo
3. Conectar con el servidor de Ganache http://localhost:7545
4. Seleccionar una de las cuentas con Ethers
5. Compilar el código del Smart Contract y Desplegarlo

![alt text](Imagenes/deployedContract_REMIX.jpg)