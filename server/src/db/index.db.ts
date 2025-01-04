import { Seeder } from './seed/index.seed';
import { connectMongoDb, initializeMongoDb } from './mongo/index.service';

export async function connectDb(onSuccess?: () => void) {
    initializeMongoDb();
    await connectMongoDb(onSuccess);
    await Seeder.run();
}
