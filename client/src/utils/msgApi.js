//gabriel abbate abbategabriel@gmail.com

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
                // credentials: "include",
            }
        ).then(() => {
            if ( !response.ok ) {
                throw new Error(response.statusText);
            }
        })
    } catch (error) {
        console.error(`POST error: ${error}`);
        return "-1";
    }
}

export async function fetchMessages() {
    try {
        const response = await fetch(
            'http://localhost:5036/messages/',
            {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                },
                // credentials: "include"
            }
        ).then(() => {
            if(!response.ok) {
                throw new Error(response.statusText);
            } else {
                return response.json;
            }
        })
    } catch (error) {
        console.error(`GET error: ${error}`);
        return -1;
    }
}
