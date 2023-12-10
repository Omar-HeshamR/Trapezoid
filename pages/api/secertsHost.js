const { SecretsManager } = require("@chainlink/functions-toolkit");
const fs = require("fs");
const path = require("path");

export default async function handler(req, res) {

    const RPC_URL = process.env.RPC_URL; 
    // const RPC_URL = 'https://api.avax-test.network/ext/bc/C/rpc';
    const functionRouter = '0xA9d587a00A31A52Ed70D6026794a8FC5E2F5dCb0'
    const donID = 'fun-avalanche-fuji-1'
    const gatewayUrls = ['https://01.functions-gateway.testnet.chain.link/',
                         'https://02.functions-gateway.testnet.chain.link/']
    const slotId = 0;
    const minutesUntilExpiration = 10;

    const { providers, Wallet, utils } = require("ethers");
    const provider = new providers.JsonRpcProvider(RPC_URL);
    const wallet = new Wallet(process.env.PRIVATE_KEY || "UNSET");
    const signer = wallet.connect(provider);

    const secretsManager = new SecretsManager({
        signer: signer,
        functionsRouterAddress:'0xA9d587a00A31A52Ed70D6026794a8FC5E2F5dCb0',
        donId: donID
      });

      await secretsManager.initialize();

      if (!process.env.OPENAI_API_KEY) {
        throw Error("GPT_API_KEY not found in .env.enc file");
      }
    
      const secrets = {
        apiKey: process.env.OPENAI_API_KEY,
      };
      const encryptedSecretsObj = await secretsManager.encryptSecrets(secrets);
 
      const {
        version, // Secrets version number (corresponds to timestamp when encrypted secrets were uploaded to DON)
        success, // Boolean value indicating if encrypted secrets were successfully uploaded to all nodes connected to the gateway
        } = await secretsManager.uploadEncryptedSecretsToDON({
            encryptedSecretsHexstring: encryptedSecretsObj.encryptedSecrets,
            gatewayUrls: gatewayUrls,
            slotId: slotId,
            minutesUntilExpiration: minutesUntilExpiration,
        });

        if (success){
            console.log("\nUploaded secrets to DON...")
            const encryptedSecretsReference =  secretsManager.buildDONHostedEncryptedSecretsReference({
                slotId,
                version
            })
        
            console.log(`\nMake a note of the encryptedSecretsReference: ${encryptedSecretsReference} `)
            const source = `const requestBody = {
                modelId: '6bef9f1b-29cb-40c7-b9df-32b51c1f67d3',
                prompt: args[0],
                height: 1024,
                width: 1024
              };
              const response = await Functions.makeHttpRequest({
                    url: 'https://cloud.leonardo.ai/api/rest/v1/generations',
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer '+secrets.apiKey
                    },
                    data: JSON.stringify(requestBody)
              });
              return Functions.encodeString(JSON.stringify(response));
            `
            // const source2 = `const test = args[0]; return Functions.encodeString(test);`
            res.status(200).json({ source: source, encryptedSecretsReference: encryptedSecretsReference,
                version: parseInt(version), slotId: slotId });
        }else{
            res.status.json({error: 'ERROR'})
        }
        
}