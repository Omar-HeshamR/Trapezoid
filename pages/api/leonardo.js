export async function gen(genID){
    const response = await fetch(
        `https://cloud.leonardo.ai/api/rest/v1/generations/${genID}`,{
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.LEONARDO_AP_KEY}`
        },
      })
      const JSON = await response.json()
      console.log(JSON)
}