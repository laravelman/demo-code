// These are the best lines I could show for my skills in React Language, Calling an API, Error Handling, Responding To Request, Defining Variables, Parsing Response.
// There is a lot more which I could show, but I chose these to show the coding behavior and skill standards. I would also love to show my skills in HTML & CSS if you request.

export default async function handler(req, res) {
    res.statusCode = 200
    if (req.method === 'POST') {
        if(!req.query.token || req.query.token == '' || !req.query.key || req.query.key == ''){
            res.end(JSON.stringify({ success: false }))
        }

        let saveToken = await fetch(`${process.env.API_CLIENT}/register-device?key=${req.query.key}&token=${req.query.token}`)
        let data = await saveToken.json()
        if(data.success == true){
            res.end(JSON.stringify({ success: true }))
        }

        res.end(JSON.stringify({ success: false }))

    } else {
        res.end(JSON.stringify({ success: false }))
    }
}
