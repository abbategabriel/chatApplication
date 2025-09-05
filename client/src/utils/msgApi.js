export async function sendMessage(msg) {
    const jsonString = JSON.stringify(msg);
    console.log(msg);
    console.log(jsonString);
    try {

        const response = await fetch( 
            'http://localhost:5036/messages/',
            {
                method: "POST", 
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(msg),
                credentials: "include",
            }
        );
        if ( !response.ok ) {
            throw new Error(response.statusText);
        }
    } catch (error) {
        console.error(`POST error: ${error}`);
        return "-1";
    }
}