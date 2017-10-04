# voter

### Usage

 - start the in memory blockchain `testrpc`

```bash
voter> node_modules/.bin/testrpc
```

  - download and start the blockchain if you haven't already
    - this will remain open and allow you to instantiate web3 objects

```bash
chmod +x start_blockchain.sh
./start_blockchain.sh
```

  - create an account and add gas to it

```bash
$ ~/voting$ node_modules/.bin/truffle console

truffle(default)> web3.personal.newAccount('<somepassword>')
=> '<GUID>'

truffle(default)> web3.eth.getBalance('<GUID>')
=> { [String: '0'] s: 1, e: 0, c: [ 0 ] }

truffle(default)> web3.personal.unlockAccount('<GUID>', '<somepassword>', 15000)
```
