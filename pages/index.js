import Hero from '@/components/Hero/Hero'
import { useSigner } from '@thirdweb-dev/react';
import abi from '@/library/CLfuncsABI.json'

export default function Home() {

  const signer = useSigner()

  return (
    <>

      <main>
        <Hero/>
        {/* <button onClick={async () => {
          const response = await fetch('/api/secertsHost', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const data = await response.json();
        console.log(data)
        const consumerAddress = "0x712dECaE96f6325F5Be52Bf212C323812e632077";
        const subscriptionId = "1873";
        const encryptedSecretsRef = data.encryptedSecretsReference;
        if (!consumerAddress || !encryptedSecretsRef || !subscriptionId) {
          throw Error("Missing required environment variables.");
        }
        const { Contract } = require("ethers");
        const functionsConsumer = new Contract(consumerAddress, abi, signer);
        const args = ['An arabian horse']
        const callbackGasLimit = 300_000;
        console.log("\n Sending the Request....")
        console.log(encryptedSecretsRef)
        console.log(data.version)
        const requestTx = await functionsConsumer.sendRequest(
          data.source,
          [],
          0,
          data.version,  
          args,
          [], 
          subscriptionId,
          callbackGasLimit
        );
        const txReceipt = await requestTx.wait(1);
        const requestId = txReceipt.events[2].args.id;
        console.log(
          `\nRequest made.  Request Id is ${requestId}. TxHash is ${requestTx.hash}`
        );
        const responseBytes = await functionsConsumer.s_lastResponse()
        console.log("\nResponse Bytes : ", responseBytes)
        // const decodedResponse = decodeResult(responseBytes, ReturnType.string)
        // console.log("\nDecoded response from OpenAI/ChatGPT:", decodedResponse)
      
        }}>
          fetch
        </button> */}
      </main>
    </>
  )
}
