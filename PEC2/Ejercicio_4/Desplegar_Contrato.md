
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

