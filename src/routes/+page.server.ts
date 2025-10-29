import { resolve } from 'path';
import type { PageServerLoad } from './$types';
import fs from 'fs';

export const load: PageServerLoad = ({ params }) => {
    const subDir = "cartas";
    const root = "./static/"
    const directory = resolve(`${root}${subDir}`);
    const files = fs.readdirSync(directory);
    return {
        options:
            files.map(fileName => ({
                name: fileName.split('.')[0],
                path: `${subDir}/${fileName}`,
                carta: fileName.split('_')[0],
                variante: fileName.split('.')[0].split('_')[1]
            }))
    }
};