import {NowRequest, NowResponse} from '@vercel/node';
import {Db, MongoClient} from 'mongodb';
import url from 'url';

let cachedDb: Db = null;

async function connectToDatabase(uri: string) {
    if (cachedDb) {
        return cachedDb;
    }

    const cliente = await MongoClient.connect(uri, {
       useNewUrlParser: true,
       useUnifiedTopology: true
    });

    const dbName = url.parse(uri).pathname.substr(1);

    return cliente.db(dbName);
}

export default async (request: NowRequest, response: NowResponse) => {
    try {
        const {email} = request.body;

        if (email) {
            const db = await connectToDatabase(process.env.MONGODB_URI);

            const collection = db.collection('subscribers');

            await collection.insertOne({
                email,
                subscribeAt: new Date()
            });

            return response.json({message: 'E-mail cadastrado com sucesso!'});

        } else {
            return response.json({message: 'E-mail enválido!'});
        }

    } catch (error) {
        return response.status(500).json({error});
    }

}
